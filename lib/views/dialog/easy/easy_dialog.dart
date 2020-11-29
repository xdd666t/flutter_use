import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';

enum ShowStatus {
  show,
  showProgress,
  showSuccess,
  showError,
  showInfo,
  showToast,
}

class EasyDialog {
  //弹窗是否被打开 true:打开状态   false:弹窗已经被关闭
  static bool isOpen;

  EasyDialog.init() {
    _darkMask();
    isOpen = false;
  }

  static void _darkMask() {
    EasyDialog.instance
      ..displayDuration = const Duration(milliseconds: 2000)
      ..indicatorType = EasyLoadingIndicatorType.fadingCircle
      ..indicatorSize = 45.0
      ..radius = 10.0
      //加载动画背景, custom:需要自己设置大约四个属性
      ..loadingStyle = EasyLoadingStyle.dark
      //遮罩样式
      ..maskType = EasyLoadingMaskType.custom
      ..maskColor = Colors.black.withOpacity(0.3)
      //背景是否可点击
      ..userInteractions = false;
  }

  static void _noneMask() {
    EasyDialog.instance
      ..displayDuration = const Duration(milliseconds: 2000)
      ..indicatorType = EasyLoadingIndicatorType.fadingCircle
      ..indicatorSize = 45.0
      ..radius = 10.0
      //加载动画背景, custom:需要自己设置大约四个属性
      ..loadingStyle = EasyLoadingStyle.dark
      //遮罩样式
      ..maskType = EasyLoadingMaskType.none
      //背景是否可点击
      ..userInteractions = true;
  }

  static EasyLoading get instance => EasyLoading.instance;

  static void show({String status, Widget indicator}) {
    _dealShow(ShowStatus.show);
    EasyLoading.show(status: status, indicator: indicator);
  }

  /// show progress with [value] [status], value should be 0.0 ~ 1.0.
  static void showProgress(double value, {String status}) {
    _dealShow(ShowStatus.showProgress);
    EasyLoading.showProgress(value, status: status);
  }

  /// showSuccess [status] [duration]
  static void showSuccess(String status, {Duration duration}) {
    _dealShow(ShowStatus.showSuccess);
    EasyLoading.showSuccess(status, duration: duration);
  }

  /// showError [status] [duration]
  static void showError(String status, {Duration duration}) {
    _dealShow(ShowStatus.showError);
    EasyLoading.showError(status, duration: duration);
  }

  /// showInfo [status] [duration]
  static void showInfo(String status, {Duration duration}) {
    _dealShow(ShowStatus.showInfo);
    EasyLoading.showInfo(status, duration: duration);
  }

  /// showToast [status] [duration]
  static void showToast(String msg, {Duration duration}) {
    _dealShow(ShowStatus.showToast);

    EasyLoading.showToast(msg, duration: duration);
  }

  /// dismiss loading
  static void dismiss({bool animation = true}) async {
    EasyLoading.dismiss(animation: animation);
    isOpen = false;
  }

  ///统一处理展示弹窗操作
  static void _dealShow(ShowStatus status) {
    if (status == ShowStatus.showToast) {
      _noneMask();
    } else {
      _darkMask();

      //吐司提示较为特殊,不视为弹窗打开状态
      isOpen = true;
    }
  }
}
