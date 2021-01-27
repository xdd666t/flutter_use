import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:visibility_detector/visibility_detector.dart';

class FunctionState {
  List<BtnInfo> items;

  FunctionState() {
    //回调在每一帧的末尾触发,避免widget未加载完产生的报错
    VisibilityDetectorController.instance.updateInterval = Duration.zero;
    //初始化item
    items = [
      BtnInfo(
        title: 'SmartDialog',
        tag: 'smartDialog',
        bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134908.png',
      ),
      BtnInfo(
        title: '弹窗控件',
        tag: 'dialog',
        bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134922.png',
      ),
      BtnInfo(
        title: '测试',
        tag: 'test',
        bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134929.png',
      ),
      BtnInfo(
        title: '测试',
        tag: 'test',
        bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134913.png',
      ),
      BtnInfo(
        title: '测试',
        tag: 'test',
        bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134857.png',
      ),
    ];
  }
}
