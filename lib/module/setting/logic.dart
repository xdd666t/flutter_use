import 'package:get/get.dart';
import 'package:visibility_detector/visibility_detector.dart';

import 'state.dart';

class SettingLogic extends GetxController {
  final SettingState state = SettingState();

  @override
  void onInit() {
    //回调在每一帧的末尾触发,避免widget未加载完产生的报错
    VisibilityDetectorController.instance.updateInterval = Duration.zero;
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }
}
