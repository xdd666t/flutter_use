import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_loading.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_toast.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/other_trick.dart';
import 'package:flutter_use/views/widget/input/input_text.dart';
import 'package:get/get.dart';

import 'state.dart';
import 'widget/multi_handle_widget.dart';

class SmartDialogLogic extends GetxController {
  final state = SmartDialogState();

  void init() async {
    //必须等待界面加载完毕
    // await ViewUtil.initFinish();
    // SmartDialog.showToast('test init');
  }

  ///测试功能模块
  void showFun(tag) async {
    switch (tag) {

      ///toast
      case SmartDialogStatus.toastDefault:
        SmartDialog.showToast('test toast');
        break;
      case SmartDialogStatus.toastLocation:
        _toastLocation();
        break;
      case SmartDialogStatus.toastCustom:
        SmartDialog.showToast('', widget: CustomToast('custom toast'));
        break;
      case SmartDialogStatus.toastSmart:
        _toastSmart();
        break;

      ///loading
      case SmartDialogStatus.loadingDefault:
        _loadingDefault();
        break;
      case SmartDialogStatus.loadingParam:
        _loadingParam();
        break;
      case SmartDialogStatus.loadingCustom:
        _loadingCustom();
        break;

      ///dialog
      case SmartDialogStatus.dialogEasy:
        _dialogEasy();
        break;
      case SmartDialogStatus.dialogLocation:
        _dialogLocation();
        break;
      case SmartDialogStatus.dialogPenetrate:
        _dialogPenetrate();
        break;
      case SmartDialogStatus.dialogStack:
        _dialogStack();
        break;

      ///other
      case SmartDialogStatus.otherTrick:
        _otherTrick();
        break;
    }
  }

  void _dialogStack() async {
    var stack = ({
      double width = double.infinity,
      double height = double.infinity,
      String? msg,
    }) {
      return Container(
        width: width,
        height: height,
        color: randomColor(),
        alignment: Alignment.center,
        child: Text('弹窗$msg', style: TextStyle(color: Colors.white)),
      );
    };

    //left
    SmartDialog.show(
      tag: 'A',
      widget: stack(msg: 'A', width: 60),
      alignmentTemp: Alignment.centerLeft,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //top
    SmartDialog.show(
      tag: 'B',
      widget: stack(msg: 'B', height: 60),
      alignmentTemp: Alignment.topCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //right
    SmartDialog.show(
      tag: 'C',
      widget: stack(msg: 'C', width: 60),
      alignmentTemp: Alignment.centerRight,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //bottom
    SmartDialog.show(
      tag: 'D',
      widget: stack(msg: 'D', height: 60),
      alignmentTemp: Alignment.bottomCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));

    //center：the stack handler
    SmartDialog.show(
      alignmentTemp: Alignment.center,
      isLoadingTemp: false,
      widget: Container(
        decoration: BoxDecoration(
            color: Colors.white, borderRadius: BorderRadius.circular(15)),
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
        child: Wrap(spacing: 20, children: [
          ElevatedButton(
            child: Text('关闭弹窗A'),
            onPressed: () => SmartDialog.dismiss(tag: 'A'),
          ),
          ElevatedButton(
            child: Text('关闭弹窗B'),
            onPressed: () => SmartDialog.dismiss(tag: 'B'),
          ),
          ElevatedButton(
            child: Text('关闭弹窗C'),
            onPressed: () => SmartDialog.dismiss(tag: 'C'),
          ),
          ElevatedButton(
            child: Text('关闭弹窗D'),
            onPressed: () => SmartDialog.dismiss(tag: 'D'),
          ),
        ]),
      ),
    );
  }

  void _otherTrick() async {
    VoidCallback? callback;

    // display
    SmartDialog.show(
      alignmentTemp: Alignment.center,
      widget: OtherTrick(
        onUpdate: (VoidCallback onInvoke) => callback = onInvoke,
      ),
    );

    await Future.delayed(Duration(milliseconds: 500));

    // handler
    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      maskColorTemp: Colors.transparent,
      widget: Container(
        height: double.infinity,
        width: 150,
        color: Colors.white,
        alignment: Alignment.center,
        child: ElevatedButton(
          child: Text('add'),
          onPressed: () => callback?.call(),
        ),
      ),
    );
  }

  void _dialogPenetrate() {
    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      isPenetrateTemp: true,
      clickBgDismissTemp: false,
      widget: Container(
        width: 80,
        height: double.infinity,
        color: randomColor(),
      ),
    );
  }

  void _dialogLocation() async {
    var location = ({
      double width = double.infinity,
      double height = double.infinity,
    }) {
      return Container(width: width, height: height, color: randomColor());
    };

    //left
    SmartDialog.show(
      widget: location(width: 50),
      alignmentTemp: Alignment.centerLeft,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //top
    SmartDialog.show(
      widget: location(height: 50),
      alignmentTemp: Alignment.topCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //right
    SmartDialog.show(
      widget: location(width: 50),
      alignmentTemp: Alignment.centerRight,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //bottom
    SmartDialog.show(
      widget: location(height: 50),
      alignmentTemp: Alignment.bottomCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //center
    SmartDialog.show(
      widget: location(height: 100, width: 100),
      alignmentTemp: Alignment.center,
      isLoadingTemp: false,
    );
  }

  void _loadingCustom() async {
    var list = ['smile', 'icon', 'normal'];
    var onItem = (String msg) async {
      if (list[0] == msg) {
        SmartDialog.showLoading(isLoadingTemp: false, widget: CustomLoading());
      } else if (list[1] == msg) {
        SmartDialog.showLoading(
          isLoadingTemp: false,
          widget: CustomLoading(type: 1),
        );
      } else if (list[2] == msg) {
        SmartDialog.showLoading(widget: CustomLoading(type: 2));
      }

      await Future.delayed(Duration(seconds: 2));
      SmartDialog.dismiss();
    };

    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      widget: MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _loadingParam() {
    var list = [
      'maskWidget',
      'maskColor',
      'background',
      'isLoading',
      'isPenetrate',
    ];
    var onItem = (String msg) async {
      if (list[0] == msg) {
        var maskWidget = Container(
          width: double.infinity,
          height: double.infinity,
          child: Opacity(
            opacity: 0.6,
            child: Image.network(
              'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20211101103911.jpeg',
              fit: BoxFit.fill,
            ),
          ),
        );
        SmartDialog.showLoading(maskWidgetTemp: maskWidget);
      } else if (list[1] == msg) {
        SmartDialog.showLoading(maskColorTemp: randomColor().withOpacity(0.3));
      } else if (list[2] == msg) {
        SmartDialog.showLoading(background: randomColor());
      } else if (list[3] == msg) {
        SmartDialog.showLoading(isLoadingTemp: false);
      } else if (list[4] == msg) {
        SmartDialog.showLoading(isPenetrateTemp: true);
      }

      await Future.delayed(Duration(seconds: 2));
      SmartDialog.dismiss();
    };

    SmartDialog.show(
      alignmentTemp: Alignment.centerLeft,
      widget: MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _dialogEasy() {
    var custom = Container(
      height: 80,
      width: 180,
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(20),
      ),
      alignment: Alignment.center,
      child: Text('easy custom dialog', style: TextStyle(color: Colors.white)),
    );
    SmartDialog.show(widget: custom, isLoadingTemp: false);
  }

  void _loadingDefault() async {
    SmartDialog.showLoading();
    await Future.delayed(Duration(seconds: 2));
    SmartDialog.dismiss();
  }

  void _toastSmart() {
    SmartDialog.showToast(
      "I'm a smart toast",
      time: Duration(seconds: 6),
    );
    if (SmartDialog.config.isExistMain) return;

    SmartDialog.show(
      isPenetrateTemp: true,
      clickBgDismissTemp: false,
      widget: Container(
        height: 40,
        width: 100,
        padding: EdgeInsets.only(left: 20),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.6),
          borderRadius: BorderRadius.circular(100),
        ),
        child: InputText(textSize: 15, hintSize: 15),
      ),
    );
  }

  void _toastLocation() {
    SmartDialog.showToast('the toast at the bottom');
    SmartDialog.showToast(
      'the toast at the center',
      alignment: Alignment.center,
    );
    SmartDialog.showToast(
      'the toast at the top',
      alignment: Alignment.topCenter,
    );
  }
}
