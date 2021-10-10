import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/module/function/state.dart';
import 'package:get/get.dart';

class FunctionLogic extends GetxController {
  final FunctionState state = FunctionState();

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case FunctionConfig.smartDialog:
        Get.toNamed(RouteConfig.smartDialog);
        break;
      case FunctionConfig.himalaya:
        Get.toNamed(RouteConfig.himalaya);
        break;
      case FunctionConfig.dialog:
        Get.toNamed(RouteConfig.dialog);
        break;
      default:
        showSnackBar(context, '暂无');
        break;
    }
  }
}
