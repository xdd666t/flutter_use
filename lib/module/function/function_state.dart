import 'package:flutter_use/bean/common/btn_info.dart';

class FunctionState {
  List items;

  FunctionState init() {
    var items = [
      BtnInfo(title: '弹窗控件', tag: 'dialog'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
    ];
    return FunctionState()..items = items;
  }

  FunctionState clone() {
    return FunctionState()..items = items;
  }
}
