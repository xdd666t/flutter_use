import 'package:flutter_use/module/example/bloc/counter/counter_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';
import 'package:flutter_use/module/example/getx/counter_easy_get/view.dart';
import 'package:flutter_use/module/example/getx/counter_get/view.dart';
import 'package:flutter_use/module/example/getx/counter_high_get/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:flutter_use/module/example/provider/counter_easy/view.dart';
import 'package:flutter_use/module/example/provider/counter_extended/view.dart';
import 'package:flutter_use/module/example/provider/counter_high/view.dart';
import 'package:flutter_use/module/example/provider/span_page/span_one/view.dart';
import 'package:flutter_use/module/example/provider/span_page/span_two/view.dart';
import 'package:flutter_use/module/example/test/test_layout/view.dart';
import 'package:flutter_use/module/function/dialog/view.dart';
import 'package:flutter_use/module/function/himalaya/view.dart';
import 'package:flutter_use/module/function/smart_dialog/view.dart';
import 'package:flutter_use/module/main/view.dart';
import 'package:get/get.dart';

class RouteConfig {
  ///主页面
  static final String main = "/";

  ///演示SmartDialog控件 喜马拉雅  dialog页面
  static final String smartDialog = "/smartDialog";
  static final String himalaya = "/himalaya";
  static final String dialog = "/dialog";

  ///bloc计数器模块 Bloc跨页面传递事件
  static final String blocCounter = "/blocCounter";
  static final String cubitSpanOne = "/cubitSpanOne";
  static final String cubitSpanTwo = "/cubitSpanOne/cubitSpanTwo";

  ///测试布局页面
  static final String testLayout = "/testLayout";

  ///GetX 计数器  跨页面交互
  static final String getCounter = "/getCounter";
  static final String getCounterEasy = "/counterEasyGet";
  static final String getCounterHigh = "/counterHighGet";
  static final String getJumpOne = "/jumpOne";
  static final String getJumpTwo = "/jumpOne/jumpTwo";

  ///Provider
  static final String proEasyCounterPage = "/proEasyCounterPage";
  static final String proHighCounterPage = "/proHighCounterPage";
  static final String proExtendedCounterPage = "/proExtendedCounterPage";
  static final String proSpanOnePage = "/proSpanOnePage";
  static final String proSpanTwoPage = "/proSpanOnePage/proSpanTwoPage";

  ///别名映射页面
  static final List<GetPage> getPages = [
    GetPage(name: main, page: () => MainPage()),
    GetPage(name: dialog, page: () => DialogPage()),
    GetPage(name: blocCounter, page: () => BlocCounterPage()),
    GetPage(name: testLayout, page: () => TestLayoutPage()),
    GetPage(name: smartDialog, page: () => SmartDialogPage()),
    GetPage(name: cubitSpanOne, page: () => CubitSpanOnePage()),
    GetPage(name: cubitSpanTwo, page: () => CubitSpanTwoPage()),
    GetPage(name: getCounter, page: () => GetCounterPage()),
    GetPage(name: getCounterEasy, page: () => GetCounterEasyPage()),
    GetPage(name: getCounterHigh, page: () => GetCounterHighPage()),
    GetPage(name: getJumpOne, page: () => GetJumpOnePage()),
    GetPage(name: getJumpTwo, page: () => GetJumpTwoPage()),
    GetPage(name: himalaya, page: () => HimalayaPage()),
    GetPage(name: proEasyCounterPage, page: () => ProEasyCounterPage()),
    GetPage(name: proHighCounterPage, page: () => ProHighCounterPage()),
    GetPage(name: proExtendedCounterPage, page: () => ProExtendedCounterPage()),
    GetPage(name: proSpanOnePage, page: () => ProSpanOnePage()),
    GetPage(name: proSpanTwoPage, page: () => ProSpanTwoPage()),
  ];
}
