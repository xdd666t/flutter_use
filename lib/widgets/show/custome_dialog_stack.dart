import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

class CustomDialogStack extends StatelessWidget {
  const CustomDialogStack({Key? key}) : super(key: key);

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
    //left
    await _stackDialog(tag: 'A', width: 70, alignment: Alignment.centerLeft);
    //top
    await _stackDialog(tag: 'B', height: 70, alignment: Alignment.topCenter);
    //right
    await _stackDialog(tag: 'C', width: 70, alignment: Alignment.centerRight);
    //bottom
    await _stackDialog(tag: 'D', height: 70, alignment: Alignment.bottomCenter);

    //center：the stack handler
    SmartDialog.show(
      alignment: Alignment.center,
      builder: (_) {
        return Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(15),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 20),
          child: Wrap(spacing: 20, children: [
            ElevatedButton(
              child: const Text('close dialog A'),
              onPressed: () => SmartDialog.dismiss(tag: 'A'),
            ),
            ElevatedButton(
              child: const Text('close dialog B'),
              onPressed: () => SmartDialog.dismiss(tag: 'B'),
            ),
            ElevatedButton(
              child: const Text('close dialog C'),
              onPressed: () => SmartDialog.dismiss(tag: 'C'),
            ),
            ElevatedButton(
              child: const Text('close dialog D'),
              onPressed: () => SmartDialog.dismiss(tag: 'D'),
            ),
          ]),
        );
      },
    );
  }

  Future _stackDialog({
    required AlignmentGeometry alignment,
    required String tag,
    double width = double.infinity,
    double height = double.infinity,
  }) async {
    SmartDialog.show(
      tag: tag,
      alignment: alignment,
      builder: (_) {
        return Container(
          width: width,
          height: height,
          color: _randomColor,
          alignment: Alignment.center,
          child: Text(
            'dialog $tag',
            style: const TextStyle(color: Colors.white),
          ),
        );
      },
    );
    await Future.delayed(const Duration(milliseconds: 500));
  }
}
