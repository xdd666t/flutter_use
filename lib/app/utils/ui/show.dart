import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

void showSnackBar(BuildContext context, String msg) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(msg),
      duration: Duration(seconds: 1),
    ),
  );
}

Future<void> showToast(
  String msg, {
  Duration time = const Duration(milliseconds: 1500),
  alignment: Alignment.bottomCenter,
}) async {
  SmartDialog.showToast(msg, time: time, alignment: alignment);
}
