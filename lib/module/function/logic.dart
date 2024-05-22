import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/module/function/state.dart';
import 'package:get/get.dart';

class FunctionLogic extends GetxController {
  final FunctionState state = FunctionState();

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case FunctionStatus.smartDialog:
        Get.toNamed(RouteConfig.smartDialog);
        break;
      case FunctionStatus.himalaya:
        Get.toNamed(RouteConfig.himalaya);
        break;
      case FunctionStatus.animation:
        Get.toNamed(RouteConfig.animation);
        break;
      default:
        SmartDialog.showToast('${FunctionLogic().runtimeType}');
        break;
    }
  }
}
