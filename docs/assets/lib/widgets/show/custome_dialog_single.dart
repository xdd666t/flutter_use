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

class CustomDialogSingle extends StatelessWidget {
  const CustomDialogSingle({Key? key}) : super(key: key);

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
    await _singleDialog(false, Alignment.bottomCenter);
    await _singleDialog(true, Alignment.centerRight);
    await _singleDialog(true, Alignment.centerRight);
    await _singleDialog(false, Alignment.topCenter);
    await _singleDialog(false, Alignment.centerLeft);
    await _singleDialog(true, Alignment.centerRight);
    await _singleDialog(true, Alignment.centerRight);
  }

  Future _singleDialog(bool keepSingle, AlignmentGeometry alignment) async {
    SmartDialog.show(
      alignment: alignment,
      keepSingle: keepSingle,
      builder: (_) {
        return Container(
          width: alignment == Alignment.bottomCenter ||
                  alignment == Alignment.topCenter
              ? double.infinity
              : 100,
          height: alignment == Alignment.bottomCenter ||
                  alignment == Alignment.topCenter
              ? 100
              : double.infinity,
          color: _randomColor,
          child: Center(
            child: Text(
              keepSingle ? 'single' : 'multiple',
              style: const TextStyle(color: Colors.white, fontSize: 25),
            ),
          ),
        );
      },
    );
    await Future.delayed(const Duration(seconds: 1));
  }
}
