import 'package:get/get.dart';

class GetJumpTwoLogic extends GetxController {
  var count = 0.obs;
  var msg = ''.obs;

  @override
  void onReady() {
    var map = Get.arguments;
    msg.value = map['msg'];

    super.onReady();
  }

  ///跳转到跨页面
  void increase() => count++;
}
