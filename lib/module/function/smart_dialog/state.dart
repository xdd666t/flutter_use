import 'package:flutter/material.dart';
import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/entity/common/tree_info.dart';
import 'package:flutter_use/widgets/other/other_hard_close.dart';
import 'package:flutter_use/widgets/other/other_trick.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_business.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_guide.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_point.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_scale_point.dart';
import 'package:flutter_use/widgets/show_attach/attach_dialog_target.dart';
import 'package:flutter_use/widgets/show_loading/loading_custom.dart';
import 'package:flutter_use/widgets/show_loading/loading_default.dart';
import 'package:flutter_use/widgets/show_loading/loading_param.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_alter.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_error.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_failure.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_success.dart';
import 'package:flutter_use/widgets/show_notify/notify_dialog_waring.dart';
import 'package:flutter_use/widgets/show_toast/toast_custom.dart';
import 'package:flutter_use/widgets/show_toast/toast_interval_time.dart';
import 'package:flutter_use/widgets/show_toast/toast_smart.dart';
import 'package:flutter_use/widgets/show_toast/toast_type.dart';

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
import '../../../widgets/show_loading/loading_least_time.dart';
import '../../../widgets/show_toast/toast_default.dart';

class SmartDialogState {
  static String dialogParam = "dialogType";

  late List<TreeTwiceInfo> trees;

  late AnimationController codeAnimationCtl;

  String urlParam = "?$dialogParam=";

  SmartDialogState() {
    trees = [
      //Dialog
      TreeTwiceInfo(
        title: 'Dialog',
        btnInfo: [
          BtnInfo(
            title: 'easy',
            className: 'CustomDialogEasy',
            demo: const CustomDialogEasy(),
          ),
          BtnInfo(
            title: 'location',
            className: 'CustomDialogLocation',
            demo: const CustomDialogLocation(),
          ),
          BtnInfo(
            title: 'penetrate',
            className: 'CustomDialogPenetrate',
            demo: const CustomDialogPenetrate(),
          ),
          BtnInfo(
            title: 'keepSingle',
            className: 'CustomDialogSingle',
            demo: const CustomDialogSingle(),
          ),
          BtnInfo(
            title: 'dialogStack',
            className: 'CustomDialogStack',
            demo: const CustomDialogStack(),
          ),
          BtnInfo(
            title: 'useSystem',
            className: 'CustomDialogSystem',
            demo: const CustomDialogSystem(),
          ),
          BtnInfo(
            title: 'bindPage',
            className: 'CustomDialogBindPage',
            demo: const CustomDialogBindPage(),
          ),
          BtnInfo(
            title: 'carryResult',
            className: 'CustomDialogCarryResult',
            demo: const CustomDialogCarryResult(),
          ),
          BtnInfo(
            title: 'permanent',
            className: 'CustomDialogPermanent',
            demo: const CustomDialogPermanent(),
          ),
          BtnInfo(
            title: 'animationBuilder',
            className: 'CustomDialogAnimation',
            demo: const CustomDialogAnimation(),
          ),
          BtnInfo(
            title: 'bindWidget',
            className: 'CustomDialogBindWidget',
            demo: const CustomDialogBindWidget(),
          ),
        ],
      ),

      //Attach
      TreeTwiceInfo(
        title: 'Attach',
        btnInfo: [
          BtnInfo(
            title: 'location',
            className: 'AttachDialogLocation',
            demo: const AttachDialogLocation(),
          ),
          BtnInfo(
            title: 'point',
            className: 'AttachDialogPoint',
            demo: const AttachDialogPoint(),
          ),
          BtnInfo(
            title: 'target',
            className: 'AttachDialogTarget',
            demo: const AttachDialogTarget(),
          ),
          BtnInfo(
            title: 'imitate',
            className: 'AttachDialogImitate',
            demo: const AttachDialogImitate(),
          ),
          BtnInfo(
            title: 'business',
            className: 'AttachDialogBusiness',
            demo: const AttachDialogBusiness(),
          ),
          BtnInfo(
            title: 'guide',
            className: 'AttachDialogGuide',
            demo: const AttachDialogGuide(),
          ),
          BtnInfo(
            title: 'scalePointBuilder',
            className: 'AttachDialogScalePoint',
            demo: const AttachDialogScalePoint(),
          ),
        ],
      ),

      //Notify
      TreeTwiceInfo(
        title: 'Notify',
        btnInfo: [
          BtnInfo(
            title: 'success',
            className: 'NotifyDialogSuccess',
            demo: const NotifyDialogSuccess(),
          ),
          BtnInfo(
            title: 'failure',
            className: 'NotifyDialogFailure',
            demo: const NotifyDialogFailure(),
          ),
          BtnInfo(
            title: 'warning',
            className: 'NotifyDialogWaring',
            demo: const NotifyDialogWaring(),
          ),
          BtnInfo(
            title: 'error',
            className: 'NotifyDialogError',
            demo: const NotifyDialogError(),
          ),
          BtnInfo(
            title: 'alter',
            className: 'NotifyDialogAlter',
            demo: const NotifyDialogAlter(),
          ),
        ],
      ),

      //Loading
      TreeTwiceInfo(
        title: 'Loading',
        btnInfo: [
          BtnInfo(
            title: 'default',
            className: 'LoadingDefault',
            demo: const LoadingDefault(),
          ),
          BtnInfo(
            title: 'param',
            className: 'LoadingParam',
            demo: const LoadingParam(),
          ),
          BtnInfo(
            title: 'custom',
            className: 'LoadingCustom',
            demo: const LoadingCustom(),
          ),
          BtnInfo(
            title: 'leastTime',
            className: 'LoadingLeastTime',
            demo: const LoadingLeastTime(),
          ),
        ],
      ),

      //Toast
      TreeTwiceInfo(
        title: 'Toast',
        btnInfo: [
          BtnInfo(
            title: 'default',
            className: 'ToastDefault',
            demo: const ToastDefault(),
          ),
          BtnInfo(
            title: 'custom',
            className: 'ToastCustom',
            demo: const ToastCustom(),
          ),
          BtnInfo(
            title: 'type',
            className: 'ToastType',
            demo: const ToastType(),
          ),
          BtnInfo(
            title: 'smart',
            className: 'ToastSmart',
            demo: const ToastSmart(),
          ),
          BtnInfo(
            title: 'intervalTime',
            className: 'ToastIntervalTime',
            demo: const ToastIntervalTime(),
          ),
        ],
      ),

      //Other
      TreeTwiceInfo(
        title: 'Other',
        btnInfo: [
          BtnInfo(
            title: 'trick',
            className: 'OtherTrick',
            demo: const OtherTrick(),
          ),
          BtnInfo(
            title: 'hardClose',
            className: 'OtherHardClose',
            demo: const OtherHardClose(),
          ),
        ],
      ),
    ];
  }
}
