import 'package:flutter/material.dart';
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

  late List<DialogFoldInfo> trees;

  late AnimationController codeAnimationCtl;

  String urlParam = "?$dialogParam=";

  SmartDialogState() {
    trees = [
      //Dialog
      DialogFoldInfo(
        title: 'Dialog',
        itemInfo: [
          DialogItemInfo(
            title: 'easy',
            className: 'CustomDialogEasy',
            demo: const CustomDialogEasy(),
          ),
          DialogItemInfo(
            title: 'location',
            className: 'CustomDialogLocation',
            demo: const CustomDialogLocation(),
          ),
          DialogItemInfo(
            title: 'penetrate',
            className: 'CustomDialogPenetrate',
            demo: const CustomDialogPenetrate(),
          ),
          DialogItemInfo(
            title: 'keepSingle',
            className: 'CustomDialogSingle',
            demo: const CustomDialogSingle(),
          ),
          DialogItemInfo(
            title: 'dialogStack',
            className: 'CustomDialogStack',
            demo: const CustomDialogStack(),
          ),
          DialogItemInfo(
            title: 'useSystem',
            className: 'CustomDialogSystem',
            demo: const CustomDialogSystem(),
          ),
          DialogItemInfo(
            title: 'bindPage',
            className: 'CustomDialogBindPage',
            demo: const CustomDialogBindPage(),
          ),
          DialogItemInfo(
            title: 'carryResult',
            className: 'CustomDialogCarryResult',
            demo: const CustomDialogCarryResult(),
          ),
          DialogItemInfo(
            title: 'permanent',
            className: 'CustomDialogPermanent',
            demo: const CustomDialogPermanent(),
          ),
          DialogItemInfo(
            title: 'animationBuilder',
            className: 'CustomDialogAnimation',
            demo: const CustomDialogAnimation(),
          ),
          DialogItemInfo(
            title: 'bindWidget',
            className: 'CustomDialogBindWidget',
            demo: const CustomDialogBindWidget(),
          ),
        ],
      ),

      //Attach
      DialogFoldInfo(
        title: 'Attach',
        itemInfo: [
          DialogItemInfo(
            title: 'location',
            className: 'AttachDialogLocation',
            demo: const AttachDialogLocation(),
          ),
          DialogItemInfo(
            title: 'point',
            className: 'AttachDialogPoint',
            demo: const AttachDialogPoint(),
          ),
          DialogItemInfo(
            title: 'target',
            className: 'AttachDialogTarget',
            demo: const AttachDialogTarget(),
          ),
          DialogItemInfo(
            title: 'imitate',
            className: 'AttachDialogImitate',
            demo: const AttachDialogImitate(),
          ),
          DialogItemInfo(
            title: 'business',
            className: 'AttachDialogBusiness',
            demo: const AttachDialogBusiness(),
          ),
          DialogItemInfo(
            title: 'guide',
            className: 'AttachDialogGuide',
            demo: const AttachDialogGuide(),
          ),
          DialogItemInfo(
            title: 'scalePointBuilder',
            className: 'AttachDialogScalePoint',
            demo: const AttachDialogScalePoint(),
          ),
        ],
      ),

      //Notify
      DialogFoldInfo(
        title: 'Notify',
        itemInfo: [
          DialogItemInfo(
            title: 'success',
            className: 'NotifyDialogSuccess',
            demo: const NotifyDialogSuccess(),
          ),
          DialogItemInfo(
            title: 'failure',
            className: 'NotifyDialogFailure',
            demo: const NotifyDialogFailure(),
          ),
          DialogItemInfo(
            title: 'warning',
            className: 'NotifyDialogWaring',
            demo: const NotifyDialogWaring(),
          ),
          DialogItemInfo(
            title: 'error',
            className: 'NotifyDialogError',
            demo: const NotifyDialogError(),
          ),
          DialogItemInfo(
            title: 'alter',
            className: 'NotifyDialogAlter',
            demo: const NotifyDialogAlter(),
          ),
        ],
      ),

      //Loading
      DialogFoldInfo(
        title: 'Loading',
        itemInfo: [
          DialogItemInfo(
            title: 'default',
            className: 'LoadingDefault',
            demo: const LoadingDefault(),
          ),
          DialogItemInfo(
            title: 'param',
            className: 'LoadingParam',
            demo: const LoadingParam(),
          ),
          DialogItemInfo(
            title: 'custom',
            className: 'LoadingCustom',
            demo: const LoadingCustom(),
          ),
          DialogItemInfo(
            title: 'leastTime',
            className: 'LoadingLeastTime',
            demo: const LoadingLeastTime(),
          ),
        ],
      ),

      //Toast
      DialogFoldInfo(
        title: 'Toast',
        itemInfo: [
          DialogItemInfo(
            title: 'default',
            className: 'ToastDefault',
            demo: const ToastDefault(),
          ),
          DialogItemInfo(
            title: 'custom',
            className: 'ToastCustom',
            demo: const ToastCustom(),
          ),
          DialogItemInfo(
            title: 'type',
            className: 'ToastType',
            demo: const ToastType(),
          ),
          DialogItemInfo(
            title: 'smart',
            className: 'ToastSmart',
            demo: const ToastSmart(),
          ),
          DialogItemInfo(
            title: 'intervalTime',
            className: 'ToastIntervalTime',
            demo: const ToastIntervalTime(),
          ),
        ],
      ),

      //Other
      DialogFoldInfo(
        title: 'Other',
        itemInfo: [
          DialogItemInfo(
            title: 'trick',
            className: 'OtherTrick',
            demo: const OtherTrick(),
          ),
          DialogItemInfo(
            title: 'hardClose',
            className: 'OtherHardClose',
            demo: const OtherHardClose(),
          ),
        ],
      ),
    ];
  }
}

class DialogItemInfo {
  DialogItemInfo({
    this.title,
    this.className,
    this.demo,
    this.selected = false,
  });

  ///按钮名称
  String? title;

  ///类名
  String? className;

  /// 该按钮功能demo
  Widget? demo;

  ///做个控制
  bool selected;
}

///树形信息
class DialogFoldInfo {
  DialogFoldInfo({
    required this.title,
    required this.itemInfo,
    this.selected = false,
  });

  ///一级大标题
  String title;

  ///二级内容
  List<DialogItemInfo> itemInfo;

  ///做个控制
  bool selected;
}
