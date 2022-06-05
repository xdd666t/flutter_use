import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:window_size/window_size.dart' as window_size;

class WindowSize {
  static void setWindowTitle(String title) {
    if (!jumpPlatform()) {
      return;
    }
    window_size.setWindowTitle(title);
  }

  static bool jumpPlatform() {
    if (kIsWeb) return false;

    if (Platform.isMacOS ||
        Platform.isWindows ||
        Platform.isFuchsia ||
        Platform.isWindows) {
      return true;
    }
    return false;
  }
}
