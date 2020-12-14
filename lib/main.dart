import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';

import 'app/routes/application.dart';
import 'app/routes/routes.dart';
import 'module/main/main_view.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //路由初始化代码
    final router = FluroRouter();
    Routes.configureRoutes(router);
    Application.router = router;

    return MaterialApp(
      home: MainPage(),
      onGenerateRoute: Application.router.generator,
      builder: (BuildContext context, Widget child) {
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
      },
    );
  }
}
