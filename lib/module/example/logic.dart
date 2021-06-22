import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
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

      ///GetX页面跳转
      case ExampleConfig.counterGetX:
        Get.toNamed(RouteConfig.getCounter);
        break;
      case ExampleConfig.counterEasyGetX:
        Get.toNamed(RouteConfig.getCounterEasy);
        break;
      case ExampleConfig.counterHighGetX:
        Get.toNamed(RouteConfig.getCounterHigh);
        break;
      case ExampleConfig.jumpGetX:
        Get.toNamed(RouteConfig.getJumpOne);
        break;
      case ExampleConfig.autoDispose:
        //不使用GetX路由跳转，会使得GetX无法监控页面
        //AutoDisposePage模块提供一种自动释放的解决方案
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => AutoDisposePage()),
        );
        break;
      case ExampleConfig.counterBinding:
        Get.toNamed(RouteConfig.getCounterBinding);
        break;

      ///Bloc页面跳转
      case ExampleConfig.blCubitCounter:
        Get.toNamed(RouteConfig.blCubitCounterPage);
        break;
      case ExampleConfig.blBlocCounter:
        Get.toNamed(RouteConfig.blBlocCounterPage);
        break;
      case ExampleConfig.globalBloc:
        Get.toNamed(RouteConfig.cubitSpanOne);
        break;
      case ExampleConfig.stream:
        Get.toNamed(RouteConfig.streamPage);
        break;
      case ExampleConfig.blCustomBuilder:
        Get.toNamed(RouteConfig.blCustomBuilderPage);
        break;
      case ExampleConfig.counterEasyC:
        Get.toNamed(RouteConfig.counterEasyCPage);
        break;

      ///Provider页面跳转
      case ExampleConfig.providerEasy:
        Get.toNamed(RouteConfig.proEasyCounterPage);
        break;
      case ExampleConfig.providerHigh:
        Get.toNamed(RouteConfig.proHighCounterPage);
        break;
      case ExampleConfig.providerSpanOne:
        Get.toNamed(RouteConfig.proSpanOnePage);
        break;
      case ExampleConfig.testNotifier:
        Get.toNamed(RouteConfig.testNotifierPage);
        break;
      case ExampleConfig.customBuilder:
        Get.toNamed(RouteConfig.customBuilderPage);
        break;
      case ExampleConfig.counterEasyP:
        Get.toNamed(RouteConfig.counterEasyPPage);
        break;
      case ExampleConfig.counterGlobalEasyP:
        Get.toNamed(RouteConfig.counterGlobalEasyPPage);
        break;

      ///测试模块
      case ExampleConfig.testNet:
        testHttp();
        break;
      case ExampleConfig.testLayout:
        Get.toNamed(RouteConfig.testLayout);
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
