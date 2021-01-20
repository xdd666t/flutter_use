import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/counter/counter_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:flutter_use/module/example/layout/test_layout/test_layout_view.dart';
import 'package:flutter_use/module/function/smart_dialog/smart_dialog_view.dart';
import 'package:flutter_use/module/main/main_view.dart';
import 'package:get/get.dart';

class RouteConfig{
  ///主页面
  static String main = "/";

  ///dialog页面
  static String dialog = "/dialog";

  ///bloc计数器模块
  static String counter = "/counter";

  ///测试布局页面
  static String testLayout = "/testLayout";

  ///演示SmartDialog控件
  static String smartDialog = "/smartDialog";

  ///Bloc跨页面传递事件
  static String spanOne = "/spanOne";
  static String spanTwo = "/spanOne/spanTwo";

  ///GetX跨页面传递时间
  static String jumpOne = "/jumpOne";
  static String jumpTwo = "/jumpOne/jumpTwo";

  ///别名映射页面
  static List<GetPage> getPages = [
    GetPage(name: main, page: () => MainPage()),
    GetPage(name: dialog, page: () => Dialog()),
    GetPage(name: counter, page: () => CounterPage()),
    GetPage(name: testLayout, page: () => TestLayoutPage()),
    GetPage(name: smartDialog, page: () => SmartDialogPage()),
    GetPage(name: spanOne, page: () => SpanOnePage()),
    GetPage(name: spanTwo, page: () => SpanTwoPage()),
    GetPage(name: jumpOne, page: () => JumpOnePage()),
    GetPage(name: jumpTwo, page: () => JumpTwoPage()),
  ];
}