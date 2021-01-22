import 'package:get/get.dart';

import 'state.dart';

class MainLogic extends GetxController {
  var state = MainState().obs;

  ///切换tab
  void switchTap(int index) {
    state.update((data) {
      data.selectedIndex = index;
    });
  }

  ///切换tab
  void onUnfold(bool unfold) {
    state.update((data) {
      data.isUnfold = !data.isUnfold;
    });
  }
}
