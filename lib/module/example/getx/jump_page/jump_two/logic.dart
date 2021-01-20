import 'package:get/get.dart';

class JumpTwoLogic extends GetxController {
  var count = 0.obs;

  ///跳转到跨页面
  void increase() => count++;
}
