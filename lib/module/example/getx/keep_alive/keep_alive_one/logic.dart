import 'package:flutter_use/app/config/route_config.dart';
import 'package:get/get.dart';

class KeepAliveOneLogic extends GetxController {

  ///跳转到跨页面
  void toJumpTwo() {
    Get.toNamed(RouteConfig.keepAliveTwo, arguments: {'msg': '我是上个页面传递过来的数据'});
  }

}
