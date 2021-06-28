import 'package:get/get.dart';

import 'state.dart';

class GetCounterBindingLogic extends GetxController {
  final state = GetCounterBindingState();

  ///自增
  void increase() {
    state.count = ++state.count;
    update();
  }
}
