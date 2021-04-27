import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/http/http.dart';
import 'package:flutter_use/module/example/getx/auto_dispose/auto_dispose_view.dart';
import 'package:get/get.dart';

import 'state.dart';

class ExampleLogic extends GetxController {
  final state = ExampleState();

  ///跳转到功能模块
  void toFun(context, tag) async {
    switch (tag) {
      case ExampleConfig.counterGetX:
        Get.toNamed(RouteConfig.counterGet);
        break;
      case ExampleConfig.counterEasyGetX:
        Get.toNamed(RouteConfig.counterEasyGet);
        break;
      case ExampleConfig.counterHighGetX:
        Get.toNamed(RouteConfig.counterHighGet);
        break;
      case ExampleConfig.jumpGetX:
        Get.toNamed(RouteConfig.jumpOne);
        break;
      case ExampleConfig.keepAlive:
        Get.toNamed(RouteConfig.keepAliveOne);
        break;
      case ExampleConfig.cubit:
        Get.toNamed(RouteConfig.counter);
        break;
      case ExampleConfig.globalBloc:
        Get.toNamed(RouteConfig.spanOne);
        break;
      case ExampleConfig.testLayout:
        Get.toNamed(RouteConfig.testLayout);
        break;
      case ExampleConfig.testNet:
        testHttp();
        break;
      case ExampleConfig.autoDispose:
        Get.to(AutoDisposePage());
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
