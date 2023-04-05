import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/entity/common/tree_info.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_business.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_guide.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_point.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_scale_point.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_target.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_alter.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_error.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_failure.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_success.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_waring.dart';

import '../../../widgets/show/custome_dialog_animation.dart';
import '../../../widgets/show/custome_dialog_bind_page.dart';
import '../../../widgets/show/custome_dialog_bind_widget.dart';
import '../../../widgets/show/custome_dialog_carry_result.dart';
import '../../../widgets/show/custome_dialog_easy.dart';
import '../../../widgets/show/custome_dialog_location.dart';
import '../../../widgets/show/custome_dialog_penetrate.dart';
import '../../../widgets/show/custome_dialog_permanent.dart';
import '../../../widgets/show/custome_dialog_single.dart';
import '../../../widgets/show/custome_dialog_stack.dart';
import '../../../widgets/show/custome_dialog_system.dart';
import '../../../widgets/show_attach/attach_dialog_imitate.dart';
import '../../../widgets/show_attach/attach_dialog_location.dart';

class SmartDialogState {
  late List<TreeTwiceInfo> trees;

  SmartDialogState() {
    trees = [
      //Dialog
      ...[
        TreeTwiceInfo(
          title: 'Dialog',
          btnInfo: [
            BtnInfo(
              title: 'easy',
              tag: SmartTag.dialogEasy,
              demo: const CustomDialogEasy(),
            ),
            BtnInfo(
              title: 'location',
              tag: SmartTag.dialogLocation,
              demo: const CustomDialogLocation(),
            ),
            BtnInfo(
              title: 'penetrate',
              tag: SmartTag.dialogPenetrate,
              demo: const CustomDialogPenetrate(),
            ),
            BtnInfo(
              title: 'keepSingle',
              tag: SmartTag.dialogKeepSingle,
              demo: const CustomDialogSingle(),
            ),
            BtnInfo(
              title: 'dialogStack',
              tag: SmartTag.dialogStack,
              demo: const CustomDialogStack(),
            ),
            BtnInfo(
              title: 'useSystem',
              tag: SmartTag.dialogUseSystem,
              demo: const CustomDialogSystem(),
            ),
            BtnInfo(
              title: 'bindPage',
              tag: SmartTag.dialogBindPage,
              demo: const CustomDialogBindPage(),
            ),
            BtnInfo(
              title: 'carryResult',
              tag: SmartTag.dialogCarryResult,
              demo: const CustomDialogCarryResult(),
            ),
            BtnInfo(
              title: 'permanent',
              tag: SmartTag.dialogPermanent,
              demo: const CustomDialogPermanent(),
            ),
            BtnInfo(
              title: 'animationBuilder',
              tag: SmartTag.dialogAnimationBuilder,
              demo: const CustomDialogAnimation(),
            ),
            BtnInfo(
              title: 'bindWidget',
              tag: SmartTag.dialogBindWidget,
              demo: const CustomDialogBindWidget(),
            ),
          ],
        )
      ],

      //Attach
      ...[
        TreeTwiceInfo(
          title: 'Attach',
          btnInfo: [
            BtnInfo(
              title: 'location',
              tag: SmartTag.attachLocation,
              demo: const AttachDialogLocation(),
            ),
            BtnInfo(
              title: 'point',
              tag: SmartTag.attachPoint,
              demo: const AttachDialogPoint(),
            ),
            BtnInfo(
              title: 'target',
              tag: SmartTag.attachTarget,
              demo: const AttachDialogTarget(),
            ),
            BtnInfo(
              title: 'imitate',
              tag: SmartTag.attachImitate,
              demo: const AttachDialogImitate(),
            ),
            BtnInfo(
              title: 'business',
              tag: SmartTag.attachBusiness,
              demo: const AttachDialogBusiness(),
            ),
            BtnInfo(
              title: 'guide',
              tag: SmartTag.attachGuide,
              demo: const AttachDialogGuide(),
            ),
            BtnInfo(
              title: 'scalePointBuilder',
              tag: SmartTag.attachScalePoint,
              demo: const AttachDialogScalePoint(),
            ),
          ],
        )
      ],

      //Notify
      ...[
        TreeTwiceInfo(
          title: 'Notify',
          btnInfo: [
            BtnInfo(
              title: 'success',
              tag: SmartTag.notifySuccess,
              demo: const NotifyDialogSuccess(),
            ),
            BtnInfo(
              title: 'failure',
              tag: SmartTag.notifyFailure,
              demo: const NotifyDialogFailure(),
            ),
            BtnInfo(
              title: 'warning',
              tag: SmartTag.notifyWarning,
              demo: const NotifyDialogWaring(),
            ),
            BtnInfo(
              title: 'error',
              tag: SmartTag.notifyError,
              demo: const NotifyDialogError(),
            ),
            BtnInfo(
              title: 'alter',
              tag: SmartTag.notifyAlter,
              demo: const NotifyDialogAlter(),
            ),
          ],
        ),
      ],

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
