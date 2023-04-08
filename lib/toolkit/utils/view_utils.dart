import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class ViewUtils {
  ViewUtils._();

  ///界面初始化完成
  static Future<void> initFinish() async {
    Completer<void> completer = Completer();

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      completer.complete();
    });

    return completer.future;
  }

  static void addSafeUse(VoidCallback callback) {
    var schedulerPhase = SchedulerBinding.instance.schedulerPhase;
    if (schedulerPhase == SchedulerPhase.persistentCallbacks) {
      WidgetsBinding.instance.addPostFrameCallback((timeStamp) => callback());
    } else {
      callback();
    }
  }
}
