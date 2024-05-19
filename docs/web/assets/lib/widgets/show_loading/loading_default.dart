import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class LoadingDefault extends StatelessWidget {
  const LoadingDefault({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() async{
    SmartDialog.showLoading();
    await Future.delayed(const Duration(seconds: 2));
    SmartDialog.dismiss();
  }
}
