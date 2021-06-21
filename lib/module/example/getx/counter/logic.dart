import 'package:get/get.dart';

class GetCounterLogic extends GetxController {
  var count = 0.obs;

  ///自增
  void increase() => ++count;
}
