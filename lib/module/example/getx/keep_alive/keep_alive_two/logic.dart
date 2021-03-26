import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:get/get.dart';

class KeepAliveTwoLogic extends GetxController {
  @override
  void onInit() {
    Log.d('保活页面初始化');
    super.onInit();
  }

  void closePage() {
    //关闭页面
    Get.offAllNamed(RouteConfig.keepAliveOne);
  }
}
