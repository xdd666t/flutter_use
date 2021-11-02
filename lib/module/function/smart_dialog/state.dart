import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/bean/common/tree_info.dart';

class SmartDialogState {
  late List<TreeTwiceInfo> trees;

  SmartDialogState() {
    trees = [
      //Toast
      TreeTwiceInfo(
        title: 'Toast',
        btnInfo: [
          BtnInfo(title: 'default', tag: SmartDialogStatus.toastDefault),
          BtnInfo(title: 'location', tag: SmartDialogStatus.toastLocation),
          BtnInfo(title: 'custom', tag: SmartDialogStatus.toastCustom),
          BtnInfo(title: 'smart', tag: SmartDialogStatus.toastSmart),
        ],
      ),

      //Loading
      TreeTwiceInfo(
        title: 'Loading',
        btnInfo: [
          BtnInfo(title: 'default', tag: SmartDialogStatus.loadingDefault),
          BtnInfo(title: 'param', tag: SmartDialogStatus.loadingParam),
          BtnInfo(title: 'custom', tag: SmartDialogStatus.loadingCustom),
        ],
      ),

      //Dialog
      TreeTwiceInfo(
        title: 'Dialog',
        btnInfo: [
          BtnInfo(title: 'easy', tag: SmartDialogStatus.dialogEasy),
          BtnInfo(title: 'location', tag: SmartDialogStatus.dialogLocation),
          BtnInfo(title: 'penetrate', tag: SmartDialogStatus.dialogPenetrate),
          BtnInfo(title: 'dialogStack', tag: SmartDialogStatus.dialogStack),
        ],
      ),

      //Other
      TreeTwiceInfo(
        title: 'Other',
        btnInfo: [
          BtnInfo(title: 'trick', tag: SmartDialogStatus.otherTrick),
          BtnInfo(title: 'hardClose', tag: SmartDialogStatus.otherHardClose),
        ],
      ),
    ];
  }
}

class SmartDialogStatus {
  /// toast
  static const String toastDefault = 'toastDefault';
  static const String toastLocation = 'toastLocation';
  static const String toastCustom = 'toastCustom';
  static const String toastSmart = 'toastSmart';

  /// loading
  static const String loadingDefault = 'loadingDefault';
  static const String loadingParam = 'loadingParam';
  static const String loadingCustom = 'loadingCustom';

  /// dialog
  static const String dialogEasy = 'dialogEasy';
  static const String dialogLocation = 'dialogLocation';
  static const String dialogPenetrate = 'dialogPenetrate';
  static const String dialogStack = 'dialogStack';

  /// other
  static const String otherTrick = 'otherTrick';
  static const String otherHardClose = 'otherHardClose';
}
