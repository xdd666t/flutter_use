import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';

import 'app/config/route_config.dart';
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
      builder: _builder,
    );
  }
}

///独立处理全局
Widget _builder(BuildContext context, Widget? child) {
  return MultiBlocProvider(
    providers: [
      //此处通过BlocProvider创建的Bloc或者Cubit是全局的
      BlocProvider.value(value: BlocSpanOneCubit()),
    ],
    child: MultiProvider(
      providers: [
        //此处通过MultiProvider创建的Provider是全局的
        ChangeNotifierProvider.value(value: ProSpanOneProvider())
      ],
      child: FlutterSmartDialog(child: child),
    ),
  );
}
