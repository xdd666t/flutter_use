import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class NotifyDialogFailure extends StatelessWidget {
  const NotifyDialogFailure({Key? key}) : super(key: key);

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
    SmartDialog.showNotify(msg: '操作失败..', notifyType: NotifyType.failure);
  }
}
