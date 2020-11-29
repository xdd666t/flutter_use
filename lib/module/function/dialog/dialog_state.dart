part of 'dialog_cubit.dart';

class DialogState {
  List items;

  DialogState init() {
    var items = [
      BtnInfo(title: '底部弹窗', tag: 'bottom'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
      BtnInfo(title: '测试', tag: 'test'),
    ];

    return DialogState()..items = items;
  }

  DialogState clone() {
    return DialogState()..items = items;
  }
}
