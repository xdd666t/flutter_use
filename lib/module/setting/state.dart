import 'package:visibility_detector/visibility_detector.dart';

class SettingState {
  SettingState() {
    //回调在每一帧的末尾触发,避免widget未加载完产生的报错
    VisibilityDetectorController.instance.updateInterval = Duration.zero;
    ///Initialize variables
  }
}
