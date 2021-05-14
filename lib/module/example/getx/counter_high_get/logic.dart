import 'package:flutter_use/module/example/getx/counter_high_get/state.dart';
import 'package:get/get.dart';

class GetCounterHighLogic extends GetxController {
  final state = GetCounterHighState();

  ///自增
  void increase() => ++state.count;
}
