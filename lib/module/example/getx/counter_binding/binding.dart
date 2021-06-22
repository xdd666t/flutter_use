import 'package:get/get.dart';

import 'logic.dart';

class GetCounterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => GetCounterBindingLogic());
  }
}
