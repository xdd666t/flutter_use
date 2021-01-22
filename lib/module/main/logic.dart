import 'package:get/get.dart';

import 'state.dart';

class MainLogic extends GetxController {
  final state = MainState();

  ///切换tab
  void switchTap(int index) {
    state.selectedIndex.value = index;
  }

  ///是否展开侧边栏
  void onUnfold(bool unfold) {
    state.isUnfold.value = !state.isUnfold.value;
  }
}
