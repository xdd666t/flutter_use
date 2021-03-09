import 'dart:io';

import 'package:flutter/material.dart';
import 'package:window_size/window_size.dart' as window_size;

class InitConfig {
  InitConfig.initApp() {
    // 获取窗口信息，然后设置窗口信息
    window_size.getWindowInfo().then((window) {
      if (Platform.isAndroid || Platform.isIOS) {
        return;
      }

      if (window.screen != null) {
        final screenFrame = window.screen.visibleFrame;
        final width = 1030.0;
        final height = 700.0;
        final left = ((screenFrame.width - width) / 2).roundToDouble();
        final top = ((screenFrame.height - height) / 3).roundToDouble();
        final frame = Rect.fromLTWH(left, top, width, height);
        //设置窗口信息
        window_size.setWindowFrame(frame);
        //设置窗口顶部标题
        window_size.setWindowTitle('Flutter Use');
        //限制最大最小窗口大小
        window_size.setWindowMinSize(Size(1030, 700));
        // window_size.setWindowMaxSize(Size(1230, 900));
      }
    });
  }
}
