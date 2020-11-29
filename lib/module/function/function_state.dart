import 'package:flutter_use/bean/common/btn_info.dart';

class FunctionState {
  List<BtnInfo> items;

  FunctionState init() {
    return FunctionState()
      ..items = [
        BtnInfo(
          title: 'SmartDialog',
          tag: 'smartDialog',
          bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134908.jpg',
        ),
        BtnInfo(
          title: '弹窗控件',
          tag: 'dialog',
          bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134922.jpg',
        ),
        BtnInfo(
          title: '测试',
          tag: 'test',
          bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134929.jpg',
        ),
        BtnInfo(
          title: '测试',
          tag: 'test',
          bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134913.jpg',
        ),
        BtnInfo(
          title: '测试',
          tag: 'test',
          bg: 'https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/flutter_use/20201129134857.jpg',
        ),
      ];
  }

  FunctionState clone() {
    return FunctionState()..items = items;
  }
}
