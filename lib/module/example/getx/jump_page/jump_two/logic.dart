import 'package:get/get.dart';

class GetJumpTwoLogic extends GetxController {
  var count = 0;
  var msg = '';

  @override
  void onReady() {
    var map = Get.arguments;
    msg = map['msg'];
    update();

    super.onReady();
  }

  ///跳转到跨页面
  void increase() {
    count = ++count;
    update();
  }
}
