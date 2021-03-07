import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:get/get.dart';

import 'app/config/init_config.dart';
import 'app/config/route_config.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    ///初始化应用信息
    InitConfig.initApp();

    return GetMaterialApp(
      initialRoute: RouteConfig.main,
      getPages: RouteConfig.getPages,
      builder: builder,
    );
  }
}

///独立处理全局bloc
Widget builder(BuildContext context, Widget child) {
  return MultiBlocProvider(
    providers: [
      ///此处通过BlocProvider创建的Bloc或者Cubit是全局的
      BlocProvider<SpanOneCubit>(
        create: (BuildContext context) => SpanOneCubit(),
      ),
    ],
    child: FlutterSmartDialog(child: child),
  );
  // return FlutterSmartDialog(child: child);
}
