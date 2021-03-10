import 'package:flutter_use/app/config/init_config.dart';
import 'package:flutter_use/app/utils/info/log_util.dart';
import 'package:get/get.dart';

import 'state.dart';

class MainLogic extends GetxController {
  final state = MainState();

  @override
  void onInit() {
    ///初始化应用信息
    InitConfig.initApp(Get.context);
    super.onInit();
  }

  ///切换tab
  void switchTap(int index) {
    state.selectedIndex.value = index;
    state.pageController.jumpToPage(index);
  }

  ///是否展开侧边栏
  void onUnfold(bool isUnfold) {
    state.isUnfold.value = !state.isUnfold.value;
  }

  ///是否缩放
  void onScale(bool isScale) {
    state.isScale.value = !state.isScale.value;

    initWindow(scale: isScale ? 1.25 : 1.0);
  }
}
