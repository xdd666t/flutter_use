import 'package:flutter_use/app/helper/deferred_router.dart';
import 'package:flutter_use/module/example/bloc/counter_bloc/view.dart'
    deferred as deferred_bl_counter_bloc;
import 'package:flutter_use/module/example/bloc/counter_cubit/view.dart'
    deferred as deferred_bl_counter_cubit;
import 'package:flutter_use/module/example/bloc/custom_builder/view.dart'
    deferred as deferred_c_custom_builder;
import 'package:flutter_use/module/example/bloc/easy_c_counter/view.dart'
    deferred as deferred_c_counter;
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_view.dart'
    deferred as deferred_bl_span_one;
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart'
    deferred as deferred_bl_span_two;
import 'package:flutter_use/module/example/bloc/stream/view.dart'
    deferred as deferred_bl_stream;
import 'package:flutter_use/module/example/getx/counter_binding/binding.dart';
import 'package:flutter_use/module/example/getx/counter_binding/view.dart'
    deferred as deferred_get_binding;
import 'package:flutter_use/module/example/getx/counter_easy/view.dart'
    deferred as deferred_get_counter_easy;
import 'package:flutter_use/module/example/getx/counter_high_get/view.dart'
    deferred as deferred_get_counter_high;
import 'package:flutter_use/module/example/getx/counter_rx/view.dart'
    deferred as deferred_x_rx;
import 'package:flutter_use/module/example/getx/easy_x_builder/view.dart'
    deferred as deferred_x_builder;
import 'package:flutter_use/module/example/getx/easy_x_ebx/view.dart'
    deferred as deferred_x_ebx;
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart'
    deferred as deferred_get_jump_one;
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart'
    deferred as deferred_get_jump_two;
import 'package:flutter_use/module/example/provider/counter_easy/view.dart'
    deferred as deferred_pro_counter_easy;
import 'package:flutter_use/module/example/provider/counter_high/view.dart'
    deferred as deferred_pro_counter_high;
import 'package:flutter_use/module/example/provider/custom_builder/view.dart'
    deferred as deferred_custom_builder;
import 'package:flutter_use/module/example/provider/easy_p_counter/view.dart'
    deferred as deferred_p_counter;
import 'package:flutter_use/module/example/provider/easy_p_counter_global/view.dart'
    deferred as deferred_p_counter_global;
import 'package:flutter_use/module/example/provider/span_page/span_one/view.dart'
    deferred as deferred_pro_span_one;
import 'package:flutter_use/module/example/provider/span_page/span_two/view.dart'
    deferred as deferred_pro_span_two;
import 'package:flutter_use/module/example/provider/test_notifier/view.dart'
    deferred as deferred_pro_notifier;
import 'package:flutter_use/module/example/test/test_layout/view.dart'
    deferred as deferred_layout;
import 'package:flutter_use/module/function/animation/view.dart'
    deferred as deferred_animation;
import 'package:flutter_use/module/function/himalaya/view.dart'
    deferred as deferred_himalaya;
import 'package:flutter_use/module/function/smart_dialog/view.dart'
    deferred as deferred_smart_dialog;
import 'package:flutter_use/module/main/view.dart' deferred as deferred_main;
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
    GetPage(
      name: main,
      page: () => DeferredRouter(
        future: deferred_main.loadLibrary(),
        builder: (_) => deferred_main.MainPage(),
      ),
    ),
    GetPage(
      name: blCubitCounterPage,
      page: () => DeferredRouter(
        future: deferred_bl_counter_cubit.loadLibrary(),
        builder: (_) => deferred_bl_counter_cubit.BlCubitCounterPage(),
      ),
    ),
    GetPage(
      name: blBlocCounterPage,
      page: () => DeferredRouter(
        future: deferred_bl_counter_bloc.loadLibrary(),
        builder: (_) => deferred_bl_counter_bloc.BlBlocCounterPage(),
      ),
    ),
    GetPage(
      name: streamPage,
      page: () => DeferredRouter(
        future: deferred_bl_stream.loadLibrary(),
        builder: (_) => deferred_bl_stream.StreamPage(),
      ),
    ),
    GetPage(
      name: blCustomBuilderPage,
      page: () => DeferredRouter(
        future: deferred_c_custom_builder.loadLibrary(),
        builder: (_) => deferred_c_custom_builder.BlCustomBuilderPage(),
      ),
    ),
    GetPage(
      name: counterEasyCPage,
      page: () => DeferredRouter(
        future: deferred_c_counter.loadLibrary(),
        builder: (_) => deferred_c_counter.CounterEasyCPage(),
      ),
    ),
    GetPage(
      name: testLayout,
      page: () => DeferredRouter(
        future: deferred_layout.loadLibrary(),
        builder: (_) => deferred_layout.TestLayoutPage(),
      ),
    ),
    GetPage(
      name: smartDialog,
      page: () => DeferredRouter(
        future: deferred_smart_dialog.loadLibrary(),
        builder: (_) => deferred_smart_dialog.SmartDialogPage(),
      ),
    ),
    GetPage(
      name: cubitSpanOne,
      page: () => DeferredRouter(
        future: deferred_bl_span_one.loadLibrary(),
        builder: (_) => deferred_bl_span_one.CubitSpanOnePage(),
      ),
    ),
    GetPage(
      name: cubitSpanTwo,
      page: () => DeferredRouter(
        future: deferred_bl_span_two.loadLibrary(),
        builder: (_) => deferred_bl_span_two.CubitSpanTwoPage(),
      ),
    ),
    GetPage(
      name: getCounterRx,
      page: () => DeferredRouter(
        future: deferred_x_rx.loadLibrary(),
        builder: (_) => deferred_x_rx.GetCounterRxPage(),
      ),
    ),
    GetPage(
      name: getCounterEasy,
      page: () => DeferredRouter(
        future: deferred_get_counter_easy.loadLibrary(),
        builder: (_) => deferred_get_counter_easy.GetCounterEasyPage(),
      ),
    ),
    GetPage(
      name: getCounterHigh,
      page: () => DeferredRouter(
        future: deferred_get_counter_high.loadLibrary(),
        builder: (_) => deferred_get_counter_high.GetCounterHighPage(),
      ),
    ),
    GetPage(
      name: getJumpOne,
      page: () => DeferredRouter(
        future: deferred_get_jump_one.loadLibrary(),
        builder: (_) => deferred_get_jump_one.GetJumpOnePage(),
      ),
    ),
    GetPage(
      name: getJumpTwo,
      page: () => DeferredRouter(
        future: deferred_get_jump_two.loadLibrary(),
        builder: (_) => deferred_get_jump_two.GetJumpTwoPage(),
      ),
    ),
    GetPage(
      name: getCounterBinding,
      binding: GetCounterBinding(),
      page: () => DeferredRouter(
        future: deferred_get_binding.loadLibrary(),
        builder: (_) => deferred_get_binding.GetCounterBindingPage(),
      ),
    ),
    GetPage(
      name: counterEasyXBuilderPage,
      page: () => DeferredRouter(
        future: deferred_x_builder.loadLibrary(),
        builder: (_) => deferred_x_builder.EasyXCounterPage(),
      ),
    ),
    GetPage(
      name: counterEasyXEbxPage,
      page: () => DeferredRouter(
        future: deferred_x_ebx.loadLibrary(),
        builder: (_) => deferred_x_ebx.EasyXEbxCounterPage(),
      ),
    ),
    GetPage(
      name: himalaya,
      page: () => DeferredRouter(
        future: deferred_himalaya.loadLibrary(),
        builder: (_) => deferred_himalaya.HimalayaPage(),
      ),
    ),
    GetPage(
      name: proEasyCounterPage,
      page: () => DeferredRouter(
        future: deferred_pro_counter_easy.loadLibrary(),
        builder: (_) => deferred_pro_counter_easy.ProEasyCounterPage(),
      ),
    ),
    GetPage(
      name: proHighCounterPage,
      page: () => DeferredRouter(
        future: deferred_pro_counter_high.loadLibrary(),
        builder: (_) => deferred_pro_counter_high.ProHighCounterPage(),
      ),
    ),
    GetPage(
      name: proSpanOnePage,
      page: () => DeferredRouter(
        future: deferred_pro_span_one.loadLibrary(),
        builder: (_) => deferred_pro_span_one.ProSpanOnePage(),
      ),
    ),
    GetPage(
      name: proSpanTwoPage,
      page: () => DeferredRouter(
        future: deferred_pro_span_two.loadLibrary(),
        builder: (_) => deferred_pro_span_two.ProSpanTwoPage(),
      ),
    ),
    GetPage(
      name: testNotifierPage,
      page: () => DeferredRouter(
        future: deferred_pro_notifier.loadLibrary(),
        builder: (_) => deferred_pro_notifier.TestNotifierPage(),
      ),
    ),
    GetPage(
      name: customBuilderPage,
      page: () => DeferredRouter(
        future: deferred_custom_builder.loadLibrary(),
        builder: (_) => deferred_custom_builder.CustomBuilderPage(),
      ),
    ),
    GetPage(
      name: counterEasyPPage,
      page: () => DeferredRouter(
        future: deferred_p_counter.loadLibrary(),
        builder: (_) => deferred_p_counter.CounterEasyPPage(),
      ),
    ),
    GetPage(
      name: counterGlobalEasyPPage,
      page: () => DeferredRouter(
        future: deferred_p_counter_global.loadLibrary(),
        builder: (_) => deferred_p_counter_global.CounterGlobalEasyPPage(),
      ),
    ),
    GetPage(
      name: animation,
      page: () => DeferredRouter(
        future: deferred_animation.loadLibrary(),
        builder: (_) => deferred_animation.AnimationPage(),
      ),
    ),
  ];
}
