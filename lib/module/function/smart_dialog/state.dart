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
  late List<TreeTwiceInfo> trees;

  late AnimationController codeAnimationCtl;

  String urlParam = "?dialogType=";

  SmartDialogState() {
    trees = [
      //Dialog
      TreeTwiceInfo(
        title: 'Dialog',
        btnInfo: [
          BtnInfo(
            title: 'easy',
            tag: 'CustomDialogEasy',
            demo: const CustomDialogEasy(),
          ),
          BtnInfo(
            title: 'location',
            tag: 'CustomDialogLocation',
            demo: const CustomDialogLocation(),
          ),
          BtnInfo(
            title: 'penetrate',
            tag: 'CustomDialogPenetrate',
            demo: const CustomDialogPenetrate(),
          ),
          BtnInfo(
            title: 'keepSingle',
            tag: 'CustomDialogSingle',
            demo: const CustomDialogSingle(),
          ),
          BtnInfo(
            title: 'dialogStack',
            tag: 'CustomDialogStack',
            demo: const CustomDialogStack(),
          ),
          BtnInfo(
            title: 'useSystem',
            tag: 'CustomDialogSystem',
            demo: const CustomDialogSystem(),
          ),
          BtnInfo(
            title: 'bindPage',
            tag: 'CustomDialogBindPage',
            demo: const CustomDialogBindPage(),
          ),
          BtnInfo(
            title: 'carryResult',
            tag: 'CustomDialogCarryResult',
            demo: const CustomDialogCarryResult(),
          ),
          BtnInfo(
            title: 'permanent',
            tag: 'CustomDialogPermanent',
            demo: const CustomDialogPermanent(),
          ),
          BtnInfo(
            title: 'animationBuilder',
            tag: 'CustomDialogAnimation',
            demo: const CustomDialogAnimation(),
          ),
          BtnInfo(
            title: 'bindWidget',
            tag: 'CustomDialogBindWidget',
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
            tag: 'AttachDialogLocation',
            demo: const AttachDialogLocation(),
          ),
          BtnInfo(
            title: 'point',
            tag: 'AttachDialogPoint',
            demo: const AttachDialogPoint(),
          ),
          BtnInfo(
            title: 'target',
            tag: 'AttachDialogTarget',
            demo: const AttachDialogTarget(),
          ),
          BtnInfo(
            title: 'imitate',
            tag: 'AttachDialogImitate',
            demo: const AttachDialogImitate(),
          ),
          BtnInfo(
            title: 'business',
            tag: 'AttachDialogBusiness',
            demo: const AttachDialogBusiness(),
          ),
          BtnInfo(
            title: 'guide',
            tag: 'AttachDialogGuide',
            demo: const AttachDialogGuide(),
          ),
          BtnInfo(
            title: 'scalePointBuilder',
            tag: 'AttachDialogScalePoint',
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
            tag: 'NotifyDialogSuccess',
            demo: const NotifyDialogSuccess(),
          ),
          BtnInfo(
            title: 'failure',
            tag: 'NotifyDialogFailure',
            demo: const NotifyDialogFailure(),
          ),
          BtnInfo(
            title: 'warning',
            tag: 'NotifyDialogWaring',
            demo: const NotifyDialogWaring(),
          ),
          BtnInfo(
            title: 'error',
            tag: 'NotifyDialogError',
            demo: const NotifyDialogError(),
          ),
          BtnInfo(
            title: 'alter',
            tag: 'NotifyDialogAlter',
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
            tag: 'LoadingDefault',
            demo: const LoadingDefault(),
          ),
          BtnInfo(
            title: 'param',
            tag: 'LoadingParam',
            demo: const LoadingParam(),
          ),
          BtnInfo(
            title: 'custom',
            tag: 'LoadingCustom',
            demo: const LoadingCustom(),
          ),
          BtnInfo(
            title: 'leastTime',
            tag: 'LoadingLeastTime',
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
            tag: 'ToastDefault',
            demo: const ToastDefault(),
          ),
          BtnInfo(
            title: 'custom',
            tag: 'ToastCustom',
            demo: const ToastCustom(),
          ),
          BtnInfo(
            title: 'type',
            tag: 'ToastType',
            demo: const ToastType(),
          ),
          BtnInfo(
            title: 'smart',
            tag: 'ToastSmart',
            demo: const ToastSmart(),
          ),
          BtnInfo(
            title: 'intervalTime',
            tag: 'ToastIntervalTime',
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
            tag: 'OtherTrick',
            demo: const OtherTrick(),
          ),
          BtnInfo(
            title: 'hardClose',
            tag: 'OtherHardClose',
            demo: const OtherHardClose(),
          ),
        ],
      ),
    ];
  }
}
