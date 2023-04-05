import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class AttachDialogBusiness extends StatelessWidget {
  const AttachDialogBusiness({Key? key}) : super(key: key);

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
    SmartDialog.show(builder: (_) {
      return Container(
        width: double.infinity,
        height: double.infinity,
        alignment: Alignment.center,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [_businessA(), _businessB()],
        ),
      );
    });
  }

  //business widget
  Widget _businessA() {
    return Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: const Text('Business A')),
        body: Builder(builder: (context) {
          return Column(mainAxisSize: MainAxisSize.min, children: [
            Container(
              width: double.infinity,
              height: 40,
              alignment: Alignment.center,
              child: GestureDetector(
                onTap: () => _attachA(context),
                child: Row(mainAxisSize: MainAxisSize.min, children: const [
                  Text('下拉弹窗'),
                  Icon(Icons.arrow_drop_down),
                ]),
              ),
            ),
            Container(height: 1, width: double.infinity, color: Colors.grey),
          ]);
        }),
      ),
    );
  }

  Widget _businessB() {
    return Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: const Text('Business B')),
        body: Align(
          alignment: Alignment.bottomCenter,
          child: Builder(builder: (context) {
            return Column(mainAxisSize: MainAxisSize.min, children: [
              Container(height: 1, width: double.infinity, color: Colors.grey),
              Container(
                width: double.infinity,
                height: 40,
                alignment: Alignment.center,
                child: GestureDetector(
                  onTap: () => _attachB(context),
                  child: Row(mainAxisSize: MainAxisSize.min, children: const [
                    Text('上弹弹窗'),
                    Icon(Icons.arrow_drop_up),
                  ]),
                ),
              ),
            ]);
          }),
        ),
      ),
    );
  }

  void _attachA(BuildContext context) {
    SmartDialog.showAttach(
      targetContext: context,
      alignment: Alignment.bottomCenter,
      highlightBuilder: (Offset targetOffset, Size targetSize) {
        return Positioned(
          child: Container(
            height: targetOffset.dy + targetSize.height,
            width: targetSize.width,
            color: Colors.white,
          ),
        );
      },
      builder: (_) => _listDialog(),
    );
  }

  void _attachB(BuildContext context) {
    SmartDialog.showAttach(
      targetContext: context,
      alignment: Alignment.topCenter,
      highlightBuilder: (_, __) {
        return Positioned(
          right: 0,
          bottom: 0,
          child: Container(height: 40, width: 350, color: Colors.white),
        );
      },
      builder: (_) => _listDialog(),
    );
  }

  //attach
  Widget _listDialog() {
    var list = ['小呆呆', '小菲菲', '小猪猪', '懒羊羊', '慢羊羊'];
    return Container(
      height: 200,
      width: 350,
      color: Colors.white,
      child: ListView(
        children: List.generate(list.length, (index) {
          return ListTile(title: Center(child: Text(list[index])));
        }),
      ),
    );
  }
}
