part of 'dialog_cubit.dart';

class DialogState {
  List<BtnInfo> items;

  DialogState init() {
    return DialogState()
      ..items = [
        BtnInfo(title: '底部弹窗', tag: 'bottom'),
        BtnInfo(title: '测试', tag: 'test'),
        BtnInfo(title: '测试', tag: 'test'),
        BtnInfo(title: '测试', tag: 'test'),
        BtnInfo(title: '测试', tag: 'test'),
      ];
  }

  DialogState clone() {
    return DialogState()..items = items;
  }
}
