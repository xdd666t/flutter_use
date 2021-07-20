import 'dart:async';

import 'package:get/get.dart';

class GetCounterEasyLogic extends GetxController {
  var count = 0;

  void increase() {
    ++count;
    update();
  }
}
