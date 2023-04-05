import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

import '../../app/ui/keep_alive_page.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

class CustomDialogBindWidget extends StatelessWidget {
  const CustomDialogBindWidget({Key? key}) : super(key: key);

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
      var currentIndex = 0;
      var controller = PageController();
      return StatefulBuilder(builder: (context, setState) {
        return SizedBox(
          width: 700,
          height: 500,
          child: Scaffold(
            appBar: AppBar(title: const Text("bindWidget")),
            body: PageView(
              controller: controller,
              children: [_childPage(), _childPage(), _childPage()],
            ),
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: currentIndex,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.home), label: "home"),
                BottomNavigationBarItem(icon: Icon(Icons.adb), label: "adb"),
                BottomNavigationBarItem(icon: Icon(Icons.face), label: "face"),
              ],
              onTap: (index) {
                currentIndex = index;
                controller.jumpToPage(currentIndex);
                setState(() {});
              },
            ),
          ),
        );
      });
    });
  }

  Widget _childPage() {
    return Builder(builder: (context) {
      var tag = context.hashCode.toString();
      return KeepAlivePage(
        child: Center(
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            ElevatedButton(
              onPressed: () => _openDialog(context),
              child: Text('open dialog tag: $tag'),
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              onPressed: () {
                SmartDialog.dismiss(status: SmartStatus.allDialog, tag: tag);
              },
              child: Text('close all dialog tag: $tag'),
            ),
          ]),
        ),
      );
    });
  }

  void _openDialog(BuildContext context) {
    SmartDialog.show(
      usePenetrate: true,
      clickMaskDismiss: false,
      bindWidget: context,
      tag: context.hashCode.toString(),
      builder: (_) {
        var horizontal = Random().nextInt(10);
        var vertical = Random().nextInt(10);
        distance() => Random().nextInt(300).toDouble() + 100;
        return Container(
          width: 50,
          height: 50,
          margin: EdgeInsets.only(
            left: horizontal <= 5 ? distance() : 0,
            top: vertical <= 5 ? distance() : 0,
            right: horizontal > 5 ? distance() : 0,
            bottom: vertical > 5 ? distance() : 0,
          ),
          decoration: BoxDecoration(
            color: _randomColor,
            boxShadow: [
              BoxShadow(
                color: _randomColor,
                blurRadius: 8,
                spreadRadius: 0.2,
              )
            ],
          ),
        );
      },
    );
  }
}
