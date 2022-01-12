import 'dart:async';

import 'package:flutter/material.dart';

class ViewUtil {
  ///界面初始化完成
  static Future<void> initFinish() async {
    Completer<void> completer = Completer();

    WidgetsBinding.instance?.addPostFrameCallback((timeStamp) {
      completer.complete();
    });

    return completer.future;
  }
}
