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
          BtnInfo(title: 'default', tag: SmartTag.toastDefault),
          BtnInfo(title: 'location', tag: SmartTag.toastLocation),
          BtnInfo(title: 'custom', tag: SmartTag.toastCustom),
          BtnInfo(title: 'type', tag: SmartTag.toastType),
          BtnInfo(title: 'smart', tag: SmartTag.toastSmart),
        ],
      ),

      //Loading
      TreeTwiceInfo(
        title: 'Loading',
        btnInfo: [
          BtnInfo(title: 'default', tag: SmartTag.loadingDefault),
          BtnInfo(title: 'param', tag: SmartTag.loadingParam),
          BtnInfo(title: 'custom', tag: SmartTag.loadingCustom),
        ],
      ),

      //Dialog
      TreeTwiceInfo(
        title: 'Dialog',
        btnInfo: [
          BtnInfo(title: 'easy', tag: SmartTag.dialogEasy),
          BtnInfo(title: 'location', tag: SmartTag.dialogLocation),
          BtnInfo(title: 'penetrate', tag: SmartTag.dialogPenetrate),
          BtnInfo(title: 'dialogStack', tag: SmartTag.dialogStack),
        ],
      ),

      //Other
      TreeTwiceInfo(
        title: 'Other',
        btnInfo: [
          BtnInfo(title: 'trick', tag: SmartTag.otherTrick),
          BtnInfo(title: 'hardClose', tag: SmartTag.otherHardClose),
        ],
      ),
    ];
  }
}

class SmartTag {
  /// toast
  static const String toastDefault = 'toastDefault';
  static const String toastLocation = 'toastLocation';
  static const String toastCustom = 'toastCustom';
  static const String toastType = 'toastType';
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
