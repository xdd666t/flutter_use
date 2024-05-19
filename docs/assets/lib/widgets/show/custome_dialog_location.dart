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

class CustomDialogLocation extends StatelessWidget {
  const CustomDialogLocation({Key? key}) : super(key: key);

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
    await _locationDialog(width: 70, alignment: Alignment.centerLeft);
    //top
    await _locationDialog(height: 70, alignment: Alignment.topCenter);
    //right
    await _locationDialog(width: 70, alignment: Alignment.centerRight);
    //bottom
    await _locationDialog(height: 70, alignment: Alignment.bottomCenter);
    //center
    await _locationDialog(height: 100, width: 100, alignment: Alignment.center);
  }

  Future _locationDialog({
    required Alignment alignment,
    double width = double.infinity,
    double height = double.infinity,
  }) async {
    SmartDialog.show(
      alignment: alignment,
      builder: (_) => Container(
        width: width,
        height: height,
        color: _randomColor,
      ),
    );
    await Future.delayed(const Duration(milliseconds: 500));
  }
}
