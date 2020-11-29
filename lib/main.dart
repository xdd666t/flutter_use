import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';

import 'app/routes/application.dart';
import 'app/routes/routes.dart';
import 'module/main/main_view.dart';
import 'views/dialog/smart/flutter_smart_dialog.dart';

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
        return Material(
          type: MaterialType.transparency,
          child: FlutterSmartDialog(
            child: FlutterEasyLoading(child: child),
          ),
        );
      },
    );
  }
}
