import 'package:flutter_use/bean/common/btn_info.dart';

class SmartDialogState {
  List<BtnInfo> items;

  SmartDialogState() {
    items = [
      BtnInfo(title: 'showToast', tag: 'showToast'),
      BtnInfo(title: 'showLoading', tag: 'showLoading'),
      BtnInfo(title: '中间Dialog', tag: 'centerDialog'),
      BtnInfo(title: '底部Dialog', tag: 'bottomDialog'),
      BtnInfo(title: '顶部Dialog', tag: 'topDialog'),
      BtnInfo(title: '靠左Dialog', tag: 'leftDialog'),
      BtnInfo(title: '靠右Dialog', tag: 'rightDialog'),
      BtnInfo(title: '穿透Dialog', tag: 'penetrateDialog'),
    ];
  }
}
