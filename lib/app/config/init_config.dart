import 'dart:io';

import 'package:bitsdojo_window/bitsdojo_window.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';

class InitConfig {
  static initApp(BuildContext? context) async {
    //界面适配
    AutoUi().init();
  }
}

Future initWindow({double scale = 1.0}) async {
  if (!_jumpPlatform()) {
    return;
  }

  doWhenWindowReady(() {
    final width = 1060.0.dp * scale;
    final height = 700.0.dp * scale;
    var initialSize = Size(width, height);
    var app = appWindow;
    app.minSize = initialSize;
    app.maxSize = initialSize;
    app.size = initialSize;
    app.alignment = Alignment.center;
    app.show();
  });
}

bool _jumpPlatform() {
  if (kIsWeb) return false;

  if (Platform.isMacOS ||
      Platform.isWindows ||
      Platform.isFuchsia ||
      Platform.isWindows) {
    return true;
  }
  return false;
}
