import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/bloc/counter/counter_view.dart';
import 'package:flutter_use/module/example/layout/test_layout/test_layout_view.dart';
import 'package:flutter_use/module/function/dialog/dialog_view.dart';
import 'package:flutter_use/module/function/smart_dialog/smart_dialog_view.dart';
import 'package:flutter_use/module/main/main_view.dart';

/// 主页
Handler mainPageHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return MainPage();
  },
);

/// dialog页面
Handler dialogPageHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return DialogPage();
  },
);

/// 计数页面
Handler counterPageHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return CounterPage();
  },
);


/// 计数页面
Handler testLayoutPageHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return TestLayoutPage();
  },
);

/// SmartDialog页面
Handler smartDialogPageHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return SmartDialogPage();
  },
);