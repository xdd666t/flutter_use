import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/http/http.dart';
import 'package:flutter_use/module/example/getx/auto_dispose/auto_dispose_view.dart';
import 'package:get/get.dart';

import 'state.dart';

class ExampleLogic extends GetxController {
  final ExampleState state = ExampleState();

  ///跳转到功能模块
  void toFun(context, tag) async {
    switch (tag) {

      ///GetX页面跳转
      case ExampleStatus.getCounterRx:
        Get.toNamed(RouteConfig.getCounterRx);
        break;
      case ExampleStatus.getCounterEasy:
        Get.toNamed(RouteConfig.getCounterEasy);
        break;
      case ExampleStatus.getCounterHigh:
        Get.toNamed(RouteConfig.getCounterHigh);
        break;
      case ExampleStatus.getJump:
        Get.toNamed(RouteConfig.getJumpOne);
        break;
      case ExampleStatus.getAutoDispose:
        //不使用GetX路由跳转，会使得GetX无法监控页面
        //AutoDisposePage模块提供一种自动释放的解决方案
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => AutoDisposePage()),
        );
        break;
      case ExampleStatus.getCounterBinding:
        Get.toNamed(RouteConfig.getCounterBinding);
        break;
      case ExampleStatus.counterEasyXBuilder:
        Get.toNamed(RouteConfig.counterEasyXBuilderPage);
        break;
      case ExampleStatus.counterEasyXEbx:
        Get.toNamed(RouteConfig.counterEasyXEbxPage);
        break;

      ///Bloc页面跳转
      case ExampleStatus.blCubitCounter:
        Get.toNamed(RouteConfig.blCubitCounterPage);
        break;
      case ExampleStatus.blBlocCounter:
        Get.toNamed(RouteConfig.blBlocCounterPage);
        break;
      case ExampleStatus.globalBloc:
        Get.toNamed(RouteConfig.cubitSpanOne);
        break;
      case ExampleStatus.stream:
        Get.toNamed(RouteConfig.streamPage);
        break;
      case ExampleStatus.blCustomBuilder:
        Get.toNamed(RouteConfig.blCustomBuilderPage);
        break;
      case ExampleStatus.counterEasyC:
        Get.toNamed(RouteConfig.counterEasyCPage);
        break;

      ///Provider页面跳转
      case ExampleStatus.providerEasy:
        Get.toNamed(RouteConfig.proEasyCounterPage);
        break;
      case ExampleStatus.providerHigh:
        Get.toNamed(RouteConfig.proHighCounterPage);
        break;
      case ExampleStatus.providerSpanOne:
        Get.toNamed(RouteConfig.proSpanOnePage);
        break;
      case ExampleStatus.testNotifier:
        Get.toNamed(RouteConfig.testNotifierPage);
        break;
      case ExampleStatus.customBuilder:
        Get.toNamed(RouteConfig.customBuilderPage);
        break;
      case ExampleStatus.counterEasyP:
        Get.toNamed(RouteConfig.counterEasyPPage);
        break;
      case ExampleStatus.counterGlobalEasyP:
        Get.toNamed(RouteConfig.counterGlobalEasyPPage);
        break;

      ///测试模块
      case ExampleStatus.testNet:
        testHttp();
        break;
      case ExampleStatus.testLayout:
        Get.toNamed(RouteConfig.testLayout);
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
