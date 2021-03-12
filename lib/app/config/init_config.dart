import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:window_size/window_size.dart' as window_size;

class InitConfig {
  InitConfig.initApp(BuildContext context) {
    //初始化窗口
    initWindow();

    //界面适配
    initAutoUi(context);
  }

  //界面适配
  void initAutoUi(BuildContext context) {
    ScreenUtil.init(
      // 设备像素大小(必须在首页中获取)
      BoxConstraints(
        maxWidth: MediaQuery.of(context).size.width,
        maxHeight: MediaQuery.of(context).size.height,
      ),
      Orientation.landscape,
      // 设计尺寸
      designSize: Size(1920, 1080),
      allowFontScaling: false,
    );
  }
}

//窗口设置只能放大，不能缩小，很奇怪
void initWindow({double scale: 1.0}) async {
  // 获取窗口信息，然后设置窗口信息

  var window = await window_size.getWindowInfo();
  if (Platform.isAndroid || Platform.isIOS || window.screen == null) {
    return;
  }
  final screenFrame = window.screen.visibleFrame;
  final width = 1060.0.dp * scale;
  final height = 700.0.dp * scale;
  final left = ((screenFrame.width - width) / 2).roundToDouble();
  final top = ((screenFrame.height - height) / 3).roundToDouble();
  final frame = Rect.fromLTWH(left, top, width, height);
  // //设置窗口信息
  window_size.setWindowFrame(frame);
  //设置窗口顶部标题
  window_size.setWindowTitle('Flutter Use');
  //限制最大最小窗口大小
  window_size.setWindowMinSize(Size(1060.dp * scale, 700.dp * scale));
}
