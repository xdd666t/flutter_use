import 'package:flutter_use/module/example/getx/jump_page/jump_two/view.dart';
import 'package:get/get.dart';

class JumpOneLogic extends GetxController {
  var count = 0.obs;

  ///跳转到跨页面
  void toJumpTwo() {
    Get.to(JumpTwoPage());
  }

  ///跳转到跨页面
  void increase() => count++;
}
