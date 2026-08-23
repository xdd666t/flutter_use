import 'package:get/get.dart';

import 'logic.dart';

class GetCounterBinding implements BindingsInterface<void> {
  @override
  void dependencies() {
    Get.lazyPut(() => GetCounterBindingLogic());
  }
}
