import 'package:flutter/material.dart';

class ScreenParam {
  /// 每个逻辑像素的字体像素数，字体的缩放比例
  static double get textScaleFactor => UiUtil.instance.textScaleFactor;

  /// 设备的像素密度
  static double get pixelRatio => UiUtil.instance.pixelRatio;

  /// 状态栏高度 dp 刘海屏会更高
  static double get statusBar => UiUtil.instance.statusBar;

  /// 底部安全区距离 dp
  static double get bottomBar => UiUtil.instance.bottomBar;
}

class UiUtil {
  factory UiUtil() => instance;

  static UiUtil? _instance;

  static UiUtil get instance => _instance ??= UiUtil._internal();

  ///屏幕方向
  late double _pixelRatio;
  late double _textScaleFactor;
  late double _statusBar;
  late double _bottomBar;

  UiUtil._internal() {
    var window = WidgetsBinding.instance.window;
    _pixelRatio = window.devicePixelRatio;
    _statusBar = window.padding.top;
    _bottomBar = window.padding.bottom;
    _textScaleFactor = window.textScaleFactor;
  }

  /// 每个逻辑像素的字体像素数，字体的缩放比例
  double get textScaleFactor => _textScaleFactor;

  /// 设备的像素密度
  double get pixelRatio => _pixelRatio;

  /// 状态栏高度 dp 刘海屏会更高
  double get statusBar => _statusBar / _pixelRatio;

  /// 底部安全区距离 dp
  double get bottomBar => _bottomBar / _pixelRatio;
}
