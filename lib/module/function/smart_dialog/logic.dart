import 'package:get/get.dart';

import '../../../entity/common/btn_info.dart';
import '../../../entity/common/tree_info.dart';
import 'state.dart';

class SmartDialogLogic extends GetxController {
  final state = SmartDialogState();

  void onItem(TreeTwiceInfo item, BtnInfo subItem) {
    for (var element in state.trees) {
      element.selected = false;
      for (var subElement in element.btnInfo) {
        subElement.selected = false;
      }
    }

    state.codeOpacity = 0;
    item.selected = true;
    subItem.selected = true;
    update();

    Future.delayed(const Duration(milliseconds: 200), () {
      state.codeOpacity = 1;
      update();
    });
  }
}
