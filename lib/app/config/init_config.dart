import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:window_manager/window_manager.dart';

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

  WidgetsFlutterBinding.ensureInitialized();
  // 必须加上这一行。
  await windowManager.ensureInitialized();

  WindowOptions windowOptions = WindowOptions(
    size: Size(1060.0 * scale, 700.0 * scale),
    minimumSize: Size(1060.0 * scale, 700.0 * scale),
    maximumSize: Size(1060.0 * scale, 700.0 * scale),
    center: true,
    backgroundColor: Colors.transparent,
    skipTaskbar: false,
    titleBarStyle: TitleBarStyle.hidden,
  );
  windowManager.waitUntilReadyToShow(windowOptions, () async {
    await windowManager.show();
    await windowManager.focus();
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
