import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:get/get.dart';

class JumpOneLogic extends GetxController {
  var count = 0.obs;

  ///跳转到跨页面
  void toJumpTwo() {
    Get.toNamed(RouteConfig.jumpTwo);
  }

  ///跳转到跨页面
  void increase() => count++;
}
