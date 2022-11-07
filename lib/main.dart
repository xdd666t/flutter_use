import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:flutter_use/module/example/provider/easy_p_counter_global/logic.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';

import 'app/config/route_config.dart';
import 'app/helper/getx_route_observer.dart';
import 'module/example/provider/easy_p/change_notifier_easy_p.dart';
import 'module/example/provider/span_page/span_one/provider.dart';
import 'toolkit/view/custom/custom_loading_widget.dart';
import 'toolkit/view/custom/custom_toast_widget.dart';

void main() {
  // 解决启动白屏问题 或 Flutter2.5+首屏页面复杂，导致的加载异常问题
  // main()方法并不是在Flutter给physicalSize赋值后才运行的，
  // 这就导致部分机型性能比较好，还没赋值屏幕大小就可能启动渲染界面了。
  // 如果size为有数值，监听测量回调，在回调中runApp
  if (window.physicalSize.isEmpty) {
    metricsFinish() {
      if (!window.physicalSize.isEmpty) {
        window.onMetricsChanged = null;
        runApp(MyApp());
      }
    }

    window.onMetricsChanged = metricsFinish;
  } else {
    runApp(MyApp());
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: RouteConfig.main,
      // home: TestPage(),
      getPages: RouteConfig.getPages,
      navigatorObservers: [FlutterSmartDialog.observer, GetXRouteObserver()],
      builder: FlutterSmartDialog.init(
        toastBuilder: (String msg) => CustomToastWidget(msg: msg),
        loadingBuilder: (String msg) => CustomLoadingWidget(msg: msg),
        builder: _builder,
      ),
    );
  }
}

///独立处理全局 Bloc 和 Provider
Widget _builder(BuildContext context, Widget? child) {
  return MultiBlocProvider(
    providers: [
      //此处通过MultiBlocProvider创建的Bloc或者Cubit是全局的
      BlocProvider.value(value: BlocSpanOneCubit()),
    ],
    child: MultiProvider(
      providers: [
        //此处通过MultiProvider创建的Provider是全局的
        ChangeNotifierProvider.value(value: ProSpanOneProvider()),

        // ChangeNotifierProvider(create: (context) => ProSpanOneProvider()),
      ],
      child: _customGlobalWidget(child),
    ),
  );
}

///自定义的一些全局控件
Widget _customGlobalWidget(Widget? child) {
  return ChangeNotifierEasyP(
    create: (BuildContext context) => CounterGlobalEasyP(),
    child: child,
  );
}
