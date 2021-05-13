import 'package:flutter_use/module/example/bloc/counter/counter_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';
import 'package:flutter_use/module/example/getx/counter_easy_get/view.dart';
import 'package:flutter_use/module/example/getx/counter_get/view.dart';
import 'package:flutter_use/module/example/getx/counter_high_get/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:flutter_use/module/example/provider/counter/view.dart';
import 'package:flutter_use/module/example/test/test_layout/view.dart';
import 'package:flutter_use/module/function/dialog/view.dart';
import 'package:flutter_use/module/function/himalaya/view.dart';
import 'package:flutter_use/module/function/smart_dialog/view.dart';
import 'package:flutter_use/module/main/view.dart';
import 'package:get/get.dart';

class RouteConfig {
  ///主页面
  static final String main = "/";

  ///dialog页面
  static final String dialog = "/dialog";

  ///bloc计数器模块
  static final String counter = "/counter";

  ///测试布局页面
  static final String testLayout = "/testLayout";

  ///演示SmartDialog控件
  static final String smartDialog = "/smartDialog";

  ///Bloc跨页面传递事件
  static final String spanOne = "/spanOne";
  static final String spanTwo = "/spanOne/spanTwo";

  ///GetX 计数器  跨页面交互
  static final String counterGet = "/counterGet";
  static final String counterEasyGet = "/counterEasyGet";
  static final String counterHighGet = "/counterHighGet";
  static final String jumpOne = "/jumpOne";
  static final String jumpTwo = "/jumpOne/jumpTwo";

  ///喜马拉雅
  static final String himalaya = "/himalaya";

  ///Provider
  static final String provider = "/provider";

  ///别名映射页面
  static final List<GetPage> getPages = [
    GetPage(name: main, page: () => MainPage()),
    GetPage(name: dialog, page: () => DialogPage()),
    GetPage(name: counter, page: () => CounterPage()),
    GetPage(name: testLayout, page: () => TestLayoutPage()),
    GetPage(name: smartDialog, page: () => SmartDialogPage()),
    GetPage(name: spanOne, page: () => SpanOnePage()),
    GetPage(name: spanTwo, page: () => SpanTwoPage()),
    GetPage(name: counterGet, page: () => CounterGetPage()),
    GetPage(name: counterEasyGet, page: () => CounterEasyGetPage()),
    GetPage(name: counterHighGet, page: () => CounterHighGetPage()),
    GetPage(name: jumpOne, page: () => JumpOnePage()),
    GetPage(name: jumpTwo, page: () => JumpTwoPage()),
    GetPage(name: himalaya, page: () => HimalayaPage()),
    GetPage(name: provider, page: () => CounterProvider()),
  ];
}
