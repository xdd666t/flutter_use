import 'package:flutter_use/module/example/bloc/counter_bloc/view.dart';
import 'package:flutter_use/module/example/bloc/counter_cubit/view.dart';
import 'package:flutter_use/module/example/bloc/custom_builder/view.dart';
import 'package:flutter_use/module/example/bloc/easy_c_counter/view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_view.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';
import 'package:flutter_use/module/example/bloc/stream/view.dart';
import 'package:flutter_use/module/example/getx/counter_binding/binding.dart';
import 'package:flutter_use/module/example/getx/counter_binding/view.dart';
import 'package:flutter_use/module/example/getx/counter_easy/view.dart';
import 'package:flutter_use/module/example/getx/counter_high_get/view.dart';
import 'package:flutter_use/module/example/getx/counter_rx/view.dart';
import 'package:flutter_use/module/example/getx/easy_x_builder/view.dart';
import 'package:flutter_use/module/example/getx/easy_x_ebx/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:flutter_use/module/example/provider/counter_easy/view.dart';
import 'package:flutter_use/module/example/provider/counter_high/view.dart';
import 'package:flutter_use/module/example/provider/custom_builder/view.dart';
import 'package:flutter_use/module/example/provider/easy_p_counter/view.dart';
import 'package:flutter_use/module/example/provider/easy_p_counter_global/view.dart';
import 'package:flutter_use/module/example/provider/span_page/span_one/view.dart';
import 'package:flutter_use/module/example/provider/span_page/span_two/view.dart';
import 'package:flutter_use/module/example/provider/test_notifier/view.dart';
import 'package:flutter_use/module/example/test/test_layout/view.dart';
import 'package:flutter_use/module/function/animation/view.dart';
import 'package:flutter_use/module/function/himalaya/view.dart';
import 'package:flutter_use/module/function/smart_dialog/view.dart';
import 'package:flutter_use/module/main/view.dart';
import 'package:get/get.dart';

class RouteConfig {
  ///主页面
  static const String main = "/";

  ///演示SmartDialog控件 喜马拉雅  Animation
  static const String himalaya = "/himalaya";
  static const String smartDialog = "/smartDialog";
  static const String animation = "/animation";

  ///bloc计数器模块 Bloc跨页面传递事件
  static const String blCubitCounterPage = "/blCubitCounterPage";
  static const String blBlocCounterPage = "/blBlocCounterPage";
  static const String cubitSpanOne = "/cubitSpanOne";
  static const String cubitSpanTwo = "/cubitSpanOne/cubitSpanTwo";
  static const String streamPage = "/streamPage";
  static const String blCustomBuilderPage = "/blCustomBuilderPage";
  static const String counterEasyCPage = "/counterEasyCPage";

  ///测试布局页面
  static const String testLayout = "/testLayout";

  ///GetX 计数器  跨页面交互
  static const String getCounterRx = "/getCounterRx";
  static const String getCounterEasy = "/counterEasyGet";
  static const String getCounterHigh = "/counterHighGet";
  static const String getJumpOne = "/jumpOne";
  static const String getJumpTwo = "/jumpOne/jumpTwo";
  static const String getCounterBinding = "/getCounterBinding";
  static const String counterEasyXBuilderPage = "/counterEasyXBuilder";
  static const String counterEasyXEbxPage = "/counterEasyXEbx";

  ///Provider
  static const String proEasyCounterPage = "/proEasyCounterPage";
  static const String proHighCounterPage = "/proHighCounterPage";
  static const String proSpanOnePage = "/proSpanOnePage";
  static const String proSpanTwoPage = "/proSpanOnePage/proSpanTwoPage";
  static const String testNotifierPage = "/testNotifierPage";
  static const String customBuilderPage = "/customBuilderPage";
  static const String counterEasyPPage = "/counterEasyPPage";
  static const String counterGlobalEasyPPage = "/counterGlobalEasyPPage";

  ///别名映射页面
  static final List<GetPage> getPages = [
    GetPage(name: main, page: () => MainPage()),
    GetPage(name: blCubitCounterPage, page: () => BlCubitCounterPage()),
    GetPage(name: blBlocCounterPage, page: () => BlBlocCounterPage()),
    GetPage(name: streamPage, page: () => const StreamPage()),
    GetPage(name: blCustomBuilderPage, page: () => BlCustomBuilderPage()),
    GetPage(name: counterEasyCPage, page: () => CounterEasyCPage()),
    GetPage(name: testLayout, page: () => TestLayoutPage()),
    GetPage(name: smartDialog, page: () => SmartDialogPage()),
    GetPage(name: cubitSpanOne, page: () => CubitSpanOnePage()),
    GetPage(name: cubitSpanTwo, page: () => CubitSpanTwoPage()),
    GetPage(name: getCounterRx, page: () => GetCounterRxPage()),
    GetPage(name: getCounterEasy, page: () => GetCounterEasyPage()),
    GetPage(name: getCounterHigh, page: () => GetCounterHighPage()),
    GetPage(name: getJumpOne, page: () => GetJumpOnePage()),
    GetPage(name: getJumpTwo, page: () => GetJumpTwoPage()),
    GetPage(
      name: getCounterBinding,
      page: () => GetCounterBindingPage(),
      binding: GetCounterBinding(),
    ),
    GetPage(name: counterEasyXBuilderPage, page: () => EasyXCounterPage()),
    GetPage(name: counterEasyXEbxPage, page: () => EasyXEbxCounterPage()),
    GetPage(name: himalaya, page: () => HimalayaPage()),
    GetPage(name: proEasyCounterPage, page: () => ProEasyCounterPage()),
    GetPage(name: proHighCounterPage, page: () => ProHighCounterPage()),
    GetPage(name: proSpanOnePage, page: () => ProSpanOnePage()),
    GetPage(name: proSpanTwoPage, page: () => ProSpanTwoPage()),
    GetPage(name: testNotifierPage, page: () => TestNotifierPage()),
    GetPage(name: customBuilderPage, page: () => CustomBuilderPage()),
    GetPage(name: counterEasyPPage, page: () => CounterEasyPPage()),
    GetPage(name: counterGlobalEasyPPage, page: () => CounterGlobalEasyPPage()),
    GetPage(name: animation, page: () => AnimationPage()),
  ];
}
