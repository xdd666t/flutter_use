import 'dart:math';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

class UiUtil {
  factory UiUtil() => instance;

  static UiUtil? _instance;

  static UiUtil get instance => _instance ??= UiUtil._internal();

  static const Size _defaultSize = Size(360, 690);

  /// UI设计中手机尺寸
  late Size _uiSize;

  /// 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为false。
  late bool _allowFontScaling;

  ///屏幕方向
  late Orientation _orientation;

  late double _pixelRatio;
  late double _textScaleFactor;
  late double _statusBarHeight;
  late double _bottomBarHeight;

  double? _screenWidth;
  double? _screenHeight;

  UiUtil._internal() {
    var window = WidgetsBinding.instance?.window ?? ui.window;
    _pixelRatio = window.devicePixelRatio;
    _statusBarHeight = window.padding.top;
    _bottomBarHeight = window.padding.bottom;
    _textScaleFactor = window.textScaleFactor;
    _allowFontScaling = false;
    _uiSize = _defaultSize;
  }

  static void init({
    required BuildContext context,
    Size designSize = _defaultSize,
    Orientation orientation = Orientation.portrait,
    bool allowFontScaling = false,
  }) {
    instance._init(
      context: context,
      designSize: designSize,
      orientation: orientation,
      allowFontScaling: allowFontScaling,
    );
  }

  void _init({
    required BuildContext context,
    required Size designSize,
    Orientation orientation = Orientation.portrait,
    bool allowFontScaling = false,
  }) {
    this._uiSize = designSize;
    this._allowFontScaling = allowFontScaling;
    this._orientation = orientation;

    if (orientation == Orientation.portrait) {
      this._screenWidth = MediaQuery.of(context).size.width;
      this._screenHeight = MediaQuery.of(context).size.height;
    } else {
      this._screenWidth = MediaQuery.of(context).size.height;
      this._screenHeight = MediaQuery.of(context).size.width;
    }
  }

  ///获取屏幕方向
  Orientation get orientation => _orientation;

  /// 每个逻辑像素的字体像素数，字体的缩放比例
  double get textScaleFactor => _textScaleFactor;

  /// 设备的像素密度
  double get pixelRatio => _pixelRatio;

  /// 当前设备宽度 dp
  double get screenWidth => _screenWidth ?? _defaultSize.width;

  ///当前设备高度 dp
  double get screenHeight => _screenHeight ?? _defaultSize.height;

  /// 状态栏高度 dp 刘海屏会更高
  double get statusBarHeight => _statusBarHeight / _pixelRatio;

  /// 底部安全区距离 dp
  double get bottomBarHeight => _bottomBarHeight / _pixelRatio;

  /// 实际尺寸与UI设计的比例
  double get scaleWidth => (_screenWidth ?? _uiSize.width) / _uiSize.width;

  double get scaleHeight => (_screenWidth ?? _uiSize.height) / _uiSize.height;

  double get scaleText => min(scaleWidth, scaleHeight);

  /// 根据UI设计的设备宽度适配
  double setWidth(num width) => width * scaleWidth;

  /// 根据UI设计的设备高度适配
  /// 高度适配主要针对想根据UI设计的一屏展示一样的效果
  double setHeight(num height) => height * scaleHeight;

  ///根据宽度或高度中的较小值进行适配
  double radius(num r) => r * scaleText;

  ///字体大小适配方法
  double setSp(num fontSize, {bool? allowFontScalingSelf}) =>
      allowFontScalingSelf == null
          ? (_allowFontScaling
              ? (fontSize * scaleText) * _textScaleFactor
              : (fontSize * scaleText))
          : (allowFontScalingSelf
              ? (fontSize * scaleText) * _textScaleFactor
              : (fontSize * scaleText));
}
