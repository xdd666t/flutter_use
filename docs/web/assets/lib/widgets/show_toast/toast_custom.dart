import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

import '../../module/function/smart_dialog/widget/custom_toast.dart';

class ToastCustom extends StatelessWidget {
  const ToastCustom({Key? key}) : super(key: key);

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
      '',
      builder: (_) => const CustomToast('custom toast'),
    );
  }
}
