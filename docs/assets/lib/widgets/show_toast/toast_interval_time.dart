import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class ToastIntervalTime extends StatelessWidget {
  const ToastIntervalTime({Key? key}) : super(key: key);

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
    SmartDialog.config.toast = SmartConfigToast(
      intervalTime: const Duration(milliseconds: 800),
    );
    for (var i = 0; i < 3; i++) {
      SmartDialog.showToast("toast $i").then((value) {
        if (!SmartDialog.config.checkExist(dialogTypes: {
          SmartAllDialogType.toast,
        })) {
          SmartDialog.config.toast = SmartConfigToast();
        }
      });
    }
  }
}
