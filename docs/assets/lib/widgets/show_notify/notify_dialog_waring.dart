import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class NotifyDialogWaring extends StatelessWidget {
  const NotifyDialogWaring({Key? key}) : super(key: key);

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
    SmartDialog.showNotify(msg: '警告操作...', notifyType: NotifyType.warning);
  }
}
