import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class CustomDialogPenetrate extends StatelessWidget {
  const CustomDialogPenetrate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() {
    SmartDialog.show(builder: (_) {
      return Container(
        width: 300,
        height: 170,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Wrap(spacing: 20, children: [
          ElevatedButton(
            onPressed: () => _openPermanentDialog(),
            child: const Text('open'),
          ),
          ElevatedButton(
            onPressed: () => SmartDialog.dismiss(force: true),
            child: const Text('close'),
          )
        ]),
      );
    });
  }

  void _openPermanentDialog() {
    SmartDialog.show(
      permanent: true,
      alignment: Alignment.centerRight,
      usePenetrate: true,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          width: 150,
          height: double.infinity,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(15),
              bottomLeft: Radius.circular(15),
            ),
            boxShadow: [
              BoxShadow(color: Colors.grey, blurRadius: 8, spreadRadius: 0.2)
            ],
          ),
          child: const Text('permanent dialog'),
        );
      },
    );
  }
}
