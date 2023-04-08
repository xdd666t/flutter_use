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

class AttachDialogPoint extends StatelessWidget {
  const AttachDialogPoint({Key? key}) : super(key: key);

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
        width: 600,
        height: 400,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: GestureDetector(
          onTapDown: (detail) => _targetDialog(detail.globalPosition),
          child: Container(
            width: 500,
            height: 300,
            color: Colors.grey,
            alignment: Alignment.center,
            child: const Text(
              'click me',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      );
    });
  }

  void _targetDialog(Offset offset) {
    var random = Random().nextInt(100) % 5;
    var alignment = Alignment.topCenter;
    if (random == 0) alignment = Alignment.topCenter;
    if (random == 1) alignment = Alignment.centerLeft;
    if (random == 2) alignment = Alignment.center;
    if (random == 3) alignment = Alignment.centerRight;
    if (random == 4) alignment = Alignment.bottomCenter;
    SmartDialog.showAttach(
      targetContext: null,
      targetBuilder: (Offset targetOffset, Size targetSize) => offset,
      usePenetrate: true,
      clickMaskDismiss: false,
      alignment: alignment,
      keepSingle: true,
      builder: (_) {
        return ClipRRect(
          borderRadius: BorderRadius.circular(10),
          child: Container(width: 100, height: 100, color: _randomColor),
        );
      },
    );
  }
}
