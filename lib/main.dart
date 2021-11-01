import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider/provider.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:flutter_use/module/example/provider/easy_p_counter_global/logic.dart';
import 'package:get/get.dart';
import 'app/config/route_config.dart';
import 'module/example/provider/easy_p/change_notifier_easy_p.dart';
import 'module/example/provider/span_page/span_one/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: RouteConfig.main,
      getPages: RouteConfig.getPages,
      builder: FlutterSmartDialog.init(builder: _builder),
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

//自定义的一些全局控件
Widget _customGlobalWidget(Widget? child) {
  return ChangeNotifierEasyP(
    create: (BuildContext context) => CounterGlobalEasyP(),
    child: child,
  );
}

// Widget _builder(BuildContext context, Widget? child) {
//   Get.context;
//   return MultiProvider(
//     providers: [
//       //此处通过MultiProvider创建的Provider是全局的
//       ChangeNotifierProvider.value(value: ProSpanOneProvider()),
//
//       // ChangeNotifierProvider(create: (context) => ProSpanOneProvider()),
//     ],
//     child: _customGlobalWidget(child),
//   );
// }

void _initOrientation() {
  //必须
  WidgetsFlutterBinding.ensureInitialized();
  //强制横屏
  SystemChrome.setPreferredOrientations([DeviceOrientation.landscapeLeft]);
}
