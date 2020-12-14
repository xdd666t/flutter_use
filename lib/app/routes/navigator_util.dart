import 'package:flutter/material.dart';

import 'application.dart';
import 'routes.dart';

class NavigatorUtil {
  /// 返回上级页面
  static void goBack(BuildContext context) {
    Application.router.pop(context);
  }

  /// 跳转到dialog页面
  static void goDialogPage(BuildContext context) {
    /// Routes.home 路由地址
    /// replace：true 将上级页面给替换掉了，这点后退键的时候就不会再出现上级页面  false：就是不替换
    Application.router.navigateTo(context, Routes.dialog, replace: false);
  }

  /// 跳转到Cubit范例页面
  static void goCounterPage(BuildContext context) {
    /// Routes.home 路由地址
    /// replace：true 将上级页面给替换掉了，这点后退键的时候就不会再出现上级页面  false：就是不替换
    Application.router.navigateTo(context, Routes.counter, replace: false);
  }


  /// 跳转到测试布局界面
  static void goTestLayoutPage(BuildContext context) {
    Application.router.navigateTo(context, Routes.testLayout, replace: false);
  }

  /// 跳转到演示SmartDialog页面
  static void goSmartDialogPage(BuildContext context) {
    Application.router.navigateTo(context, Routes.smartDialog, replace: false);
  }

  ///跨页面传递数据
  static void goSpanOnePage(BuildContext context) {
    Application.router.navigateTo(context, Routes.spanOne, replace: false);
  }
  static void goSpanTwoPage(BuildContext context) {
    Application.router.navigateTo(context, Routes.spanTwo, replace: false);
  }
}
