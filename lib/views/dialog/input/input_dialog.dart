import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'input_confirm_dialog.dart';
import 'widget/input_confirm_dialog_view.dart';

///提示类的弹窗
///
/// 一般来说位于屏幕中央
class InputDialog {
  ///二次确认弹窗
  ///
  /// 拥有俩个选择：确定和取消
  ///
  /// 确定回调必须；取消回调非必须
  ///
  /// 支持同步返回,类型Future<String>  不为null:确定  为null:取消
  static Future<String> showConfirm({
    @required BuildContext context,
    TextStyle titleStyle,
    String title,
    String cancel,
    TextStyle cancelStyle,
    String confirm,
    TextStyle confirmStyle,
    String hint,
    TextStyle contentStyle,
    InputCancelParamVoidCallback onCancel,
    InputConfirmParamVoidCallback onConfirm,
    bool barrierDismissible,
    int maxLines,
    int minLines,
    int contentLength,
    @required TextEditingController editingController,
  }) {
    return inputConfirmDialog(
      context: context,
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      titleStyle: titleStyle,
      hint: hint??'请输入',
      contentStyle: contentStyle,
      cancel: cancel ?? '取消',
      cancelStyle: cancelStyle,
      confirm: confirm ?? '确认',
      confirmStyle: contentStyle,
      barrierDismissible: barrierDismissible,
      maxLines: maxLines,
      minLines: minLines,
      contentLength: contentLength??50,
      editingController: editingController
    );
  }
}
