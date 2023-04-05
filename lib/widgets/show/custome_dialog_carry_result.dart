import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

class CustomDialogCarryResult extends StatelessWidget {
  const CustomDialogCarryResult({Key? key}) : super(key: key);

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
    var result = await SmartDialog.show(builder: (_) {
      var message = '';
      return Container(
        width: 300,
        height: 170,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Container(
            width: 100,
            margin: const EdgeInsets.only(bottom: 30),
            child: TextField(onChanged: (msg) => message = msg),
          ),
          ElevatedButton(
            onPressed: () => SmartDialog.dismiss(result: message),
            child: const Text('show result'),
          )
        ]),
      );
    });

    SmartDialog.showToast("$result");
  }
}
