import 'package:get/get.dart';

class GetCounterBindingState {
  late RxInt count;

  GetCounterBindingState() {
    count = 0.obs;
  }
}
