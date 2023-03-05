import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/entity/common/tree_info.dart';

class SmartDialogState {
  late List<TreeTwiceInfo> trees;

  SmartDialogState() {
    trees = [
      //Dialog
      TreeTwiceInfo(
        title: 'Dialog',
        btnInfo: [
          BtnInfo(title: 'easy', tag: SmartTag.dialogEasy),
          BtnInfo(title: 'location', tag: SmartTag.dialogLocation),
          BtnInfo(title: 'penetrate', tag: SmartTag.dialogPenetrate),
          BtnInfo(title: 'keepSingle', tag: SmartTag.dialogKeepSingle),
          BtnInfo(title: 'dialogStack', tag: SmartTag.dialogStack),
          BtnInfo(title: 'useSystem', tag: SmartTag.dialogUseSystem),
          BtnInfo(title: 'bindPage', tag: SmartTag.dialogBindPage),
          BtnInfo(title: 'carryResult', tag: SmartTag.dialogCarryResult),
          BtnInfo(title: 'permanent', tag: SmartTag.dialogPermanent),
          BtnInfo(
            title: 'animationBuilder',
            tag: SmartTag.dialogAnimationBuilder,
          ),
          BtnInfo(title: 'bindWidget', tag: SmartTag.dialogBindWidget),
        ],
      ),

      //Attach
      TreeTwiceInfo(
        title: 'Attach',
        btnInfo: [
          BtnInfo(title: 'location', tag: SmartTag.attachLocation),
          BtnInfo(title: 'point', tag: SmartTag.attachPoint),
          BtnInfo(title: 'target', tag: SmartTag.attachTarget),
          BtnInfo(title: 'imitate', tag: SmartTag.attachImitate),
          BtnInfo(title: 'business', tag: SmartTag.attachBusiness),
          BtnInfo(title: 'guide', tag: SmartTag.attachGuide),
          BtnInfo(title: 'scalePointBuilder', tag: SmartTag.attachScalePoint),
        ],
      ),

      //Notify
      TreeTwiceInfo(
        title: 'Notify',
        btnInfo: [
          BtnInfo(title: 'success', tag: SmartTag.notifySuccess),
          BtnInfo(title: 'failure', tag: SmartTag.notifyFailure),
          BtnInfo(title: 'warning', tag: SmartTag.notifyWarning),
          BtnInfo(title: 'error', tag: SmartTag.notifyError),
          BtnInfo(title: 'alter', tag: SmartTag.notifyAlter),
        ],
      ),

      //Loading
      TreeTwiceInfo(
        title: 'Loading',
        btnInfo: [
          BtnInfo(title: 'default', tag: SmartTag.loadingDefault),
          BtnInfo(title: 'param', tag: SmartTag.loadingParam),
          BtnInfo(title: 'custom', tag: SmartTag.loadingCustom),
          BtnInfo(title: 'leastTime', tag: SmartTag.loadingLeastTime),
        ],
      ),

      //Toast
      TreeTwiceInfo(
        title: 'Toast',
        btnInfo: [
          BtnInfo(title: 'default', tag: SmartTag.toastDefault),
          BtnInfo(title: 'custom', tag: SmartTag.toastCustom),
          BtnInfo(title: 'type', tag: SmartTag.toastType),
          BtnInfo(title: 'smart', tag: SmartTag.toastSmart),
          BtnInfo(title: 'intervalTime', tag: SmartTag.toastIntervalTime),
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
  /// dialog
  static const String dialogEasy = 'dialogEasy';
  static const String dialogLocation = 'dialogLocation';
  static const String dialogPenetrate = 'dialogPenetrate';
  static const String dialogKeepSingle = 'dialogKeepSingle';
  static const String dialogStack = 'dialogStack';
  static const String dialogUseSystem = 'dialogUseSystem';
  static const String dialogBindPage = 'dialogBindPage';
  static const String dialogCarryResult = 'dialogCarryResult';
  static const String dialogPermanent = 'dialogPermanent';
  static const String dialogAnimationBuilder = 'dialogAnimationBuilder';
  static const String dialogBindWidget = 'dialogBindWidget';

  /// attach
  static const String attachLocation = 'attachLocation';
  static const String attachPoint = 'attachPoint';
  static const String attachTarget = 'attachTarget';
  static const String attachImitate = 'attachImitate';
  static const String attachBusiness = 'attachBusiness';
  static const String attachGuide = 'attachGuide';
  static const String attachScalePoint = 'attachScalePoint';

  /// notify
  static const String notifySuccess = 'notifySuccess';
  static const String notifyFailure = 'notifyFailure';
  static const String notifyWarning = 'notifyWarning';
  static const String notifyError = 'notifyError';
  static const String notifyAlter = 'notifyAlter';

  /// loading
  static const String loadingDefault = 'loadingDefault';
  static const String loadingParam = 'loadingParam';
  static const String loadingCustom = 'loadingCustom';
  static const String loadingLeastTime = 'loadingLeastTime';

  /// toast
  static const String toastDefault = 'toastDefault';
  static const String toastLocation = 'toastLocation';
  static const String toastCustom = 'toastCustom';
  static const String toastType = 'toastType';
  static const String toastSmart = 'toastSmart';
  static const String toastIntervalTime = 'toastIntervalTime';

  /// other
  static const String otherTrick = 'otherTrick';
  static const String otherHardClose = 'otherHardClose';
}
