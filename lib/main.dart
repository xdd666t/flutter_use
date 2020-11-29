import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart' hide Page, Router;
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:flutter_use/views/dialog/smart/flutter_smart_dialog.dart';

import 'app/routes/application.dart';
import 'app/routes/routes.dart';
import 'module/main/main_view.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
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
        return Material(
          type: MaterialType.transparency,
          child: FlutterSmartDialog(child: FlutterEasyLoading(child: child),),
        );
      },
    );
  }
}
