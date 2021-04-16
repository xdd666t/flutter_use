import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/http/http.dart';
import 'package:get/get.dart';

import 'state.dart';

class ExampleLogic extends GetxController {
  final state = ExampleState();

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case 'counterGetX':
        Get.toNamed(RouteConfig.counterGet);
        break;
      case 'counterEasyGetX':
        Get.toNamed(RouteConfig.counterEasyGet);
        break;
      case 'counterHighGetX':
        Get.toNamed(RouteConfig.counterHighGet);
        break;
      case 'jumpGetX':
        Get.toNamed(RouteConfig.jumpOne);
        break;
      case 'keepAlive':
        Get.toNamed(RouteConfig.keepAliveOne);
        break;
      case 'cubit':
        Get.toNamed(RouteConfig.counter);
        break;
      case 'globalBloc':
        Get.toNamed(RouteConfig.spanOne);
        break;
      case 'testLayout':
        Get.toNamed(RouteConfig.testLayout);
        break;
      case 'testNet':
        testHttp();
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
