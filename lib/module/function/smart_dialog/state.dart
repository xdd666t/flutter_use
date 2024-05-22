import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
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
import 'package:tolyui_navigation/tolyui_navigation.dart';

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

  late MenuTreeMeta menuTreeMeta;
  late List<MenuNode> trees;
  MenuNode? activeMenu;

  late AnimationController codeAnimationCtl;

  String urlParam = "?$dialogParam=";

  SmartDialogState() {
    trees = [
      //Dialog
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/dialog",
          label: "Dialog",
          icon: CupertinoIcons.app_badge,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/easy",
              label: "easy",
              ext: DialogItemInfo(
                className: 'CustomDialogEasy',
                demo: const CustomDialogEasy(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/location",
              label: "location",
              ext: DialogItemInfo(
                className: 'CustomDialogLocation',
                demo: const CustomDialogLocation(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/penetrate",
              label: "penetrate",
              ext: DialogItemInfo(
                className: 'CustomDialogPenetrate',
                demo: const CustomDialogPenetrate(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/keepSingle",
              label: "keepSingle",
              ext: DialogItemInfo(
                className: 'CustomDialogSingle',
                demo: const CustomDialogSingle(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/dialogStack",
              label: "dialogStack",
              ext: DialogItemInfo(
                className: 'CustomDialogStack',
                demo: const CustomDialogStack(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/useSystem",
              label: "useSystem",
              ext: DialogItemInfo(
                className: 'CustomDialogSystem',
                demo: const CustomDialogSystem(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/bindPage",
              label: "bindPage",
              ext: DialogItemInfo(
                className: 'CustomDialogBindPage',
                demo: const CustomDialogBindPage(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/carryResult",
              label: "carryResult",
              ext: DialogItemInfo(
                className: 'CustomDialogCarryResult',
                demo: const CustomDialogCarryResult(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/permanent",
              label: "permanent",
              ext: DialogItemInfo(
                className: 'CustomDialogPermanent',
                demo: const CustomDialogPermanent(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/animationBuilder",
              label: "animationBuilder",
              ext: DialogItemInfo(
                className: 'CustomDialogAnimation',
                demo: const CustomDialogAnimation(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "dialog/bindWidget",
              label: "bindWidget",
              ext: DialogItemInfo(
                className: 'CustomDialogBindWidget',
                demo: const CustomDialogBindWidget(),
              ),
            ),
            children: [],
          ),
        ],
      ),

      //Attach
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/attach",
          label: "Attach",
          icon: CupertinoIcons.collections,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/location",
              label: "location",
              ext: DialogItemInfo(
                className: 'AttachDialogLocation',
                demo: const AttachDialogLocation(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/point",
              label: "point",
              ext: DialogItemInfo(
                className: 'AttachDialogPoint',
                demo: const AttachDialogPoint(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/target",
              label: "target",
              ext: DialogItemInfo(
                className: 'AttachDialogTarget',
                demo: const AttachDialogTarget(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/imitate",
              label: "imitate",
              ext: DialogItemInfo(
                className: 'AttachDialogImitate',
                demo: const AttachDialogImitate(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/business",
              label: "business",
              ext: DialogItemInfo(
                className: 'AttachDialogBusiness',
                demo: const AttachDialogBusiness(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/guide",
              label: "guide",
              ext: DialogItemInfo(
                className: 'AttachDialogGuide',
                demo: const AttachDialogGuide(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "attach/scalePointBuilder",
              label: "scalePointBuilder",
              ext: DialogItemInfo(
                className: 'AttachDialogScalePoint',
                demo: const AttachDialogScalePoint(),
              ),
            ),
            children: [],
          ),
        ],
      ),

      //Notify
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/notify",
          label: "Notify",
          icon: CupertinoIcons.captions_bubble,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "notify/success",
              label: "success",
              ext: DialogItemInfo(
                className: 'NotifyDialogSuccess',
                demo: const NotifyDialogSuccess(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "notify/failure",
              label: "failure",
              ext: DialogItemInfo(
                className: 'NotifyDialogFailure',
                demo: const NotifyDialogFailure(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "notify/warning",
              label: "warning",
              ext: DialogItemInfo(
                className: 'NotifyDialogWaring',
                demo: const NotifyDialogWaring(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "notify/error",
              label: "error",
              ext: DialogItemInfo(
                className: 'NotifyDialogError',
                demo: const NotifyDialogError(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "notify/alter",
              label: "alter",
              ext: DialogItemInfo(
                className: 'NotifyDialogAlter',
                demo: const NotifyDialogAlter(),
              ),
            ),
            children: [],
          ),
        ],
      ),

      //Loading
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/loading",
          label: "Loading",
          icon: CupertinoIcons.arrow_2_circlepath,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "loading/default",
              label: "default",
              ext: DialogItemInfo(
                className: 'LoadingDefault',
                demo: const LoadingDefault(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "loading/param",
              label: "param",
              ext: DialogItemInfo(
                className: 'LoadingParam',
                demo: const LoadingParam(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "loading/custom",
              label: "custom",
              ext: DialogItemInfo(
                className: 'LoadingCustom',
                demo: const LoadingCustom(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "loading/leastTime",
              label: "leastTime",
              ext: DialogItemInfo(
                className: 'LoadingLeastTime',
                demo: const LoadingLeastTime(),
              ),
            ),
            children: [],
          ),
        ],
      ),

      //Toast
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/toast",
          label: "Toast",
          icon: CupertinoIcons.tickets,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "toast/default",
              label: "default",
              ext: DialogItemInfo(
                className: 'ToastDefault',
                demo: const ToastDefault(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "toast/custom",
              label: "custom",
              ext: DialogItemInfo(
                className: 'ToastCustom',
                demo: const ToastCustom(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "toast/type",
              label: "type",
              ext: DialogItemInfo(
                className: 'ToastType',
                demo: const ToastType(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "toast/smart",
              label: "smart",
              ext: DialogItemInfo(
                className: 'ToastSmart',
                demo: const ToastSmart(),
              ),
            ),
            children: [],
          ),
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "toast/intervalTime",
              label: "intervalTime",
              ext: DialogItemInfo(
                className: 'ToastIntervalTime',
                demo: const ToastIntervalTime(),
              ),
            ),
            children: [],
          ),
        ],
      ),

      //Other
      MenuNode(
        depth: 0,
        data: const MenuMeta(
          router: "/other",
          label: "Other",
          icon: CupertinoIcons.plus_app,
        ),
        children: [
          MenuNode(
            depth: 1,
            data: MenuMeta(
              router: "other/trick",
              label: "trick",
              ext: DialogItemInfo(
                className: 'OtherTrick',
                demo: const OtherTrick(),
              ),
            ),
            children: [],
          ),
        ],
      ),
    ];

    menuTreeMeta = MenuTreeMeta(
      expandMenus: [],
      activeMenu: null,
      root: MenuNode(
        children: trees,
        data: const MenuMeta(router: '', label: ''),
      ),
    );
  }
}

class DialogItemInfo extends MenuMateExt {
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
