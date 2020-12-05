import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

enum ShowStatus {
  show,
  showProgress,
  showSuccess,
  showError,
  showInfo,
  showToast,
}

class EasyDialog {
  EasyDialog.init() {
    SmartDialog.instance.config
      ..clickBgDismiss = true
      ..isLoading = true
      ..isUseAnimation = true
      ..animationDuration = Duration(milliseconds: 270)
      ..isPenetrate = true
      ..maskColor = Colors.black.withOpacity(0.1)
      ..isExist = false
      ..isExistExtra = false
      ..alignment = Alignment.center;
  }

  static EasyLoading get instance => EasyLoading.instance;

  static Future<void> show({
    @required Widget widget,
    AlignmentGeometry alignmentTemp,
    bool isPenetrateTemp,
    bool isUseAnimationTemp,
    Duration animationDurationTemp,
    bool isLoadingTemp,
    Color maskColorTemp,
    bool clickBgDismissTemp,
    bool isUseExtraWidget = false,
  }) {
    return SmartDialog.show(
      widget: widget,
      alignmentTemp: alignmentTemp,
      isPenetrateTemp: isPenetrateTemp,
      isUseAnimationTemp: isUseAnimationTemp,
      animationDurationTemp: animationDurationTemp,
      isLoadingTemp: isLoadingTemp,
      maskColorTemp: maskColorTemp,
      clickBgDismissTemp: clickBgDismissTemp,
      isUseExtraWidget: isUseExtraWidget,
    );
  }

  static Future<void> showLoading({String msg = '加载中...'}) {
    return SmartDialog.showLoading(msg: msg);
  }

  static Future<void> showToast(
    String msg, {
    Duration time = const Duration(milliseconds: 1500),
    alignment: Alignment.bottomCenter,
  }) async {
    return SmartDialog.showToast(msg, time: time, alignment: alignment);
  }

  static Future<void> dismiss({int closeType = 0}) async {
    return SmartDialog.dismiss(closeType: closeType);
  }

  static bool isExist() {
    return SmartDialog.instance.config.isExist;
  }

  static bool isExistExtra() {
    return SmartDialog.instance.config.isExistExtra;
  }
}
