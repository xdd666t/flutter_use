import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/module/function/state.dart';
import 'package:get/get.dart';

class FunctionLogic extends GetxController {
  final state = FunctionState().obs;

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case 'smartDialog':
        Get.toNamed(RouteConfig.smartDialog);
        break;
      case 'dialog':
        Get.toNamed(RouteConfig.dialog);
        break;
      default:
        showSnackBar(context, '暂无');
        break;
    }
  }
}
