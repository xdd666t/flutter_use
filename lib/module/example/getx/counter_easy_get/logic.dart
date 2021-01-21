import 'package:get/get.dart';

class CounterEasyGetLogic extends GetxController {
  var count = 0;

  void increase() {
    ++count;
    update();
  }
}
