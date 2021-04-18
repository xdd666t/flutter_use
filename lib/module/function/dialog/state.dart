import 'package:flutter_use/bean/common/btn_info.dart';

class DialogState {
  late List<BtnInfo> items;

  DialogState() {
    items = [
      BtnInfo(title: '底部弹窗', tag: 'bottom'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
    ];
  }
}
