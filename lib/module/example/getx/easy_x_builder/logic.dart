import 'package:flutter_use/module/example/getx/easy_x/easy_builder/easy_x_controller.dart';

class EasyXCounterLogic extends EasyXController {
  var count = 0;

  void increase() {
    ++count;
    update();
  }
}
