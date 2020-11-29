import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart' hide Router;

import 'route_handler.dart';

class Routes {
  ///主页面
  static String main = "/";

  ///dialog页面
  static String dialog = "/dialog";

  ///bloc计数器模块
  static String counter = "/counter";

  ///测试布局页面
  static String testLayout = "/testLayout";

  static void configureRoutes(FluroRouter router) {
    router.notFoundHandler = new Handler(
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
        return Text("找不到路由，404!!!");
      },
    );

    /// 第一个参数是路由地址，第二个参数是页面跳转和传参，第三个参数是默认的转场动画，可以看上图
    /// 我这边先不设置默认的转场动画，转场动画在下面会讲，可以在另外一个地方设置（可以看NavigatorUtil类）
    router.define(main, handler: mainPageHandler);
    router.define(dialog, handler: dialogPageHandler);
    router.define(counter, handler: counterPageHandler);
    router.define(testLayout, handler: testLayoutPageHandler);
  }
}
