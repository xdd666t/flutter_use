import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

import '../../toolkit/view/input/input_text.dart';

class ToastSmart extends StatelessWidget {
  const ToastSmart({Key? key}) : super(key: key);

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
    SmartDialog.showToast(
      "I'm a smart toast",
      displayTime: const Duration(seconds: 6),
    );
    if (SmartDialog.config.isExistDialog) return;

    SmartDialog.show(
      usePenetrate: true,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          height: 40,
          width: 100,
          padding: const EdgeInsets.only(left: 20),
          decoration: BoxDecoration(
            color: Colors.black.withOpacity(0.6),
            borderRadius: BorderRadius.circular(100),
          ),
          child: InputText(textSize: 15, hintSize: 15),
        );
      },
    );
  }
}
