part of 'smart_dialog_cubit.dart';

class SmartDialogState {
  List<BtnInfo> items;

  SmartDialogState init() {
    return SmartDialogState()
      ..items = [
        BtnInfo(title: '测试', tag: 'test'),
      ];
  }

  SmartDialogState clone() {
    return SmartDialogState()..items = items;
  }
}
