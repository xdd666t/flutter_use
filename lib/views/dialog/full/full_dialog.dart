import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'confirm/full_confirm_dialog.dart';
import 'confirm/widget/full_confirm_dialog_view.dart';

///提示类的弹窗
///
/// 一般来说位于屏幕中央
class FullDialog {
  ///二次确认弹窗
  ///
  /// 拥有俩个选择：确定和取消
  ///
  /// 确定回调必须；取消回调非必须
  ///
  /// 支持同步返回,类型Future<bool>  true:确定  false:取消
  static Future<bool> showConfirm({
    @required BuildContext context,
    TextStyle titleStyle,
    String title,
    String cancel,
    TextStyle cancelStyle,
    String confirm,
    TextStyle confirmStyle,
    @required String content,
    TextStyle contentStyle,
    FullConfirmParamVoidCallback onCancel,
    FullConfirmParamVoidCallback onConfirm,
    bool barrierDismissible,
  }) {
    return fullConfirmDialog(
      context: context,
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      titleStyle: titleStyle,
      content: content,
      contentStyle: contentStyle,
      cancel: cancel ?? '取消',
      cancelStyle: cancelStyle,
      confirm: confirm ?? '确认',
      confirmStyle: contentStyle,
      barrierDismissible: barrierDismissible,
    );
  }
}
