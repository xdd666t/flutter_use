import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

class CustomDialogPermanent extends StatelessWidget {
  const CustomDialogPermanent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() async {
    SmartDialog.show(
      useSystem: true,
      builder: (_) {
        return Container(
          width: 500,
          height: 300,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(children: [
            Container(
              margin: const EdgeInsets.only(top: 50),
              padding: const EdgeInsets.symmetric(horizontal: 30),
              child: const Text(
                '使用useSystem参数，可解决在弹窗上跳转新页面问题 \n\n'
                'Use the useSystem param to solve the problem of jumping to a new page on the dialog',
                textAlign: TextAlign.center,
              ),
            ),
            Expanded(
              child: Center(
                child: Wrap(spacing: 50, children: [
                  ElevatedButton(
                    onPressed: () => _toNewPage(false),
                    child: const Text('not useSystem'),
                  ),
                  ElevatedButton(
                    onPressed: () => _toNewPage(true),
                    child: const Text('useSystem'),
                  ),
                ]),
              ),
            )
          ]),
        );
      },
    );
  }

  Future _toNewPage(bool useSystem) async {
    SmartDialog.show(
      useSystem: useSystem,
      bindPage: false,
      builder: (_) {
        return Container(
          color: Colors.white,
          padding: const EdgeInsets.all(30),
          child: Text(
            '跳转页面前测试弹窗(Test dialog before jumping to the page)\n\nuseSystem：$useSystem\nbindPage：false',
            textAlign: TextAlign.center,
          ),
        );
      },
    );
    await Future.delayed(const Duration(milliseconds: 800));
    Get.to(
      () => Scaffold(
        appBar: AppBar(title: const Text('New Page')),
        body: Container(
          color: _randomColor,
          alignment: Alignment.center,
          child: const Text(
            'New Page',
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
      preventDuplicates: false,
    );
  }
}
