import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:flutter_use/views/widget/input/input_text.dart';
import 'package:get/get.dart';

import 'state.dart';

class SmartDialogLogic extends GetxController {
  final state = SmartDialogState();

  void init() async {
    //必须等待界面加载完毕
    await ViewUtil.initFinish();
    SmartDialog.showToast('test init');
  }

  ///测试功能模块
  void showFun(tag) async {
    switch (tag) {
      case SmartDialogStatus.toastDefault:
        SmartDialog.showToast('test toast');
        break;
      case SmartDialogStatus.toastLocation:
        _toastLocation();
        break;
      case SmartDialogStatus.toastCustom:
        SmartDialog.showToast('');
        break;
      case SmartDialogStatus.toastSmart:
        _toastSmart();
        break;
    }
  }

  void _toastSmart() {
    SmartDialog.showToast(
      "I'm a smart toast",
      time: Duration(seconds: 6),
    );
    SmartDialog.show(
      isPenetrateTemp: true,
      clickBgDismissTemp: false,
      widget: Container(
        height: 60,
        width: 100,
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.6),
          borderRadius: BorderRadius.circular(15),
        ),
        child: InputText(),
      ),
    );
  }

  void _toastLocation() {
    SmartDialog.showToast(
      'the toast at the bottom',
    );
    SmartDialog.showToast(
      'the toast at the center',
      alignment: Alignment.center,
    );
    SmartDialog.showToast(
      'the toast at the top',
      alignment: Alignment.topCenter,
    );
  }
}
