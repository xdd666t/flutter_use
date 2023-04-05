import 'dart:math';

import 'package:code_preview/code_preview.dart';
import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_loading.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_toast.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/other_trick.dart';
import 'package:flutter_use/toolkit/view/input/input_text.dart';
import 'package:get/get.dart';

import '../../../app/ui/keep_alive_page.dart';
import '../../../entity/common/btn_info.dart';
import '../../../entity/common/tree_info.dart';
import 'state.dart';
import 'widget/multi_handle_widget.dart';

class SmartDialogLogic extends GetxController {
  final state = SmartDialogState();

  ///测试功能模块
  void showFun(BuildContext context, String tag) async {
    switch (tag) {
      ///loading
      case SmartTag.loadingDefault:
        _loadingDefault();
        break;
      case SmartTag.loadingParam:
        _loadingParam();
        break;
      case SmartTag.loadingCustom:
        _loadingCustom();
        break;
      case SmartTag.loadingLeastTime:
        _loadingLeastTime();
        break;

      ///toast
      case SmartTag.toastDefault:
        _toastDefault();
        break;
      case SmartTag.toastCustom:
        _toastCustom();
        break;
      case SmartTag.toastType:
        _toastType();
        break;
      case SmartTag.toastSmart:
        _toastSmart();
        break;
      case SmartTag.toastIntervalTime:
        _toastIntervalTime();
        break;

      ///other
      case SmartTag.otherTrick:
        _otherTrick();
        break;
      case SmartTag.otherHardClose:
        _otherHardClose();
        break;
    }
  }

  void onItem(TreeTwiceInfo item, BtnInfo subItem) {
    for (var element in state.trees) {
      element.selected = false;
      for (var subElement in element.btnInfo) {
        subElement.selected = false;
      }
    }

    item.selected = true;
    subItem.selected = true;
    update();
  }

  void _otherHardClose() async {
    SmartDialog.show(
      backDismiss: false,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          height: 480,
          width: 500,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          alignment: Alignment.topCenter,
          child: SingleChildScrollView(
            child: Wrap(
              direction: Axis.vertical,
              crossAxisAlignment: WrapCrossAlignment.center,
              spacing: 10,
              children: [
                // title
                const Text(
                  '特大公告',
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
                // content
                const Text('鄙人日夜钻研下面秘籍，终于成功钓到富婆'),
                Image.network(
                  'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211102213746.jpeg',
                  height: 200,
                  width: 400,
                ),
                const Text('鄙人思考了三秒钟，怀着\'沉重\'的心情，决定弃坑本开源软件'),
                const Text('本人今后的生活是富婆和远方，已无\'精力\' 再维护本开源软件了'),
                const Text('各位叼毛，有缘江湖再见！'),
                // button (only method of close the dialog)
                ElevatedButton(
                  onPressed: () => SmartDialog.dismiss(),
                  child: const Text('再会！'),
                )
              ],
            ),
          ),
        );
      },
    );
  }

  void _otherTrick() async {
    VoidCallback? callback;

    // display
    SmartDialog.show(
      alignment: Alignment.center,
      builder: (_) =>
          OtherTrick(onUpdate: (VoidCallback onInvoke) => callback = onInvoke),
    );

    await Future.delayed(const Duration(milliseconds: 500));

    // handler
    SmartDialog.show(
      alignment: Alignment.centerRight,
      maskColor: Colors.transparent,
      builder: (_) {
        return Container(
          height: double.infinity,
          width: 150,
          color: Colors.white,
          alignment: Alignment.center,
          child: ElevatedButton(
            child: const Text('add'),
            onPressed: () => callback?.call(),
          ),
        );
      },
    );
  }

  void _loadingLeastTime() async {
    SmartDialog.config.loading = SmartConfigLoading(
      leastLoadingTime: const Duration(seconds: 2),
    );
    SmartDialog.showLoading();
    SmartDialog.dismiss();
    SmartDialog.config.loading = SmartConfigLoading();
  }

  void _loadingCustom() async {
    var list = ['smile', 'icon', 'normal'];
    onItem(String msg) async {
      if (list[0] == msg) {
        SmartDialog.showLoading(
          animationType: SmartAnimationType.scale,
          builder: (_) => const CustomLoading(),
        );
      } else if (list[1] == msg) {
        SmartDialog.showLoading(
          animationType: SmartAnimationType.scale,
          builder: (_) => const CustomLoading(type: 1),
        );
      } else if (list[2] == msg) {
        SmartDialog.showLoading(builder: (_) => const CustomLoading(type: 2));
      }

      await Future.delayed(const Duration(seconds: 2));
      SmartDialog.dismiss(status: SmartStatus.loading);
    }

    SmartDialog.show(
      alignment: Alignment.centerRight,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _loadingParam() {
    var list = [
      'maskWidget',
      'maskColor',
      'SmartAnimationType.scale',
      'usePenetrate',
    ];
    onItem(String msg) async {
      if (list[0] == msg) {
        var maskWidget = SizedBox(
          width: double.infinity,
          height: double.infinity,
          child: Opacity(
            opacity: 0.6,
            child: Image.network(
              'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101103911.jpeg',
              fit: BoxFit.fill,
            ),
          ),
        );
        SmartDialog.showLoading(maskWidget: maskWidget);
      } else if (list[1] == msg) {
        SmartDialog.showLoading(maskColor: randomColor().withOpacity(0.3));
      } else if (list[2] == msg) {
        SmartDialog.showLoading(animationType: SmartAnimationType.scale);
      } else if (list[3] == msg) {
        SmartDialog.showLoading(usePenetrate: true);
      }

      await Future.delayed(const Duration(seconds: 2));
      SmartDialog.dismiss(status: SmartStatus.loading);
    }

    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _loadingDefault() async {
    SmartDialog.showLoading();
    await Future.delayed(const Duration(seconds: 2));
    SmartDialog.dismiss();
  }

  void _toastType() {
    var list = ['normal', 'last', 'onlyRefresh', 'multi'];
    onItem(String msg) {
      var type = SmartToastType.normal;
      if (list[0] == msg) {
        type = SmartToastType.normal;
      } else if (list[1] == msg) {
        type = SmartToastType.last;
      } else if (list[2] == msg) {
        type = SmartToastType.onlyRefresh;
      } else if (list[3] == msg) {
        type = SmartToastType.multi;
      }

      SmartDialog.showToast('1', displayType: type);
      SmartDialog.showToast('2', displayType: type);
      SmartDialog.showToast('3', displayType: type);
    }

    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _toastIntervalTime() async {
    SmartDialog.config.toast = SmartConfigToast(
      intervalTime: const Duration(milliseconds: 800),
    );
    for (var i = 0; i < 3; i++) {
      SmartDialog.showToast("toast $i").then((value) {
        if (!SmartDialog.config.isExistToast) {
          SmartDialog.config.toast = SmartConfigToast();
        }
      });
    }
  }

  void _toastSmart() {
    SmartDialog.showToast(
      "I'm a smart toast",
      displayTime: const Duration(seconds: 6),
    );
    if (SmartDialog.config.isExistDialog) return;

    SmartDialog.show(
      usePenetrate: true,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          height: 40,
          width: 100,
          padding: const EdgeInsets.only(left: 20),
          decoration: BoxDecoration(
            color: Colors.black.withOpacity(0.6),
            borderRadius: BorderRadius.circular(100),
          ),
          child: InputText(textSize: 15, hintSize: 15),
        );
      },
    );
  }

  void _toastCustom() async {
    SmartDialog.showToast(
      '',
      builder: (_) => const CustomToast('custom toast'),
    );
  }

  void _toastDefault() async {
    SmartDialog.showToast('test toast');
  }
}
