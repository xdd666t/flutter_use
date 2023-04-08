import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class LoadingLeastTime extends StatelessWidget {
  const LoadingLeastTime({Key? key}) : super(key: key);

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
    SmartDialog.config.loading = SmartConfigLoading(
      leastLoadingTime: const Duration(seconds: 2),
    );
    SmartDialog.showLoading();
    SmartDialog.dismiss();
    SmartDialog.config.loading = SmartConfigLoading();
  }
}
