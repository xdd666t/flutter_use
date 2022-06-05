import 'dart:async';

import 'package:flutter/material.dart';

import 'widget/full_confirm_dialog_view.dart';

Future<bool> fullConfirmDialog({
  required  BuildContext context,
  TextStyle? titleStyle,
  String? title,
  String? cancel,
  TextStyle? cancelStyle,
  String? confirm,
  TextStyle? confirmStyle,
  required  String content,
  TextStyle? contentStyle,
  FullConfirmParamVoidCallback? onCancel,
  required  FullConfirmParamVoidCallback? onConfirm,
  bool? barrierDismissible,
}) {
  //处理同步操作
  Completer<bool> completer = Completer();

  var funConfirm = () async {
    //确定事件全部返回true
    if (onConfirm != null) {
      onConfirm();
    }

    completer.complete(true);
  };

  var funCancel = () async {
    //取消事件全部返回false
    if (onCancel != null) {
      onCancel();
    }

    completer.complete(false);
  };

  showDialog(
    context: context,
    barrierDismissible: barrierDismissible ?? false,
    builder: (BuildContext context) {
      return FullConfirmDialogView(
        onConfirm: funConfirm,
        onCancel: funCancel,
        title: title,
        titleStyle: titleStyle,
        content: content,
        contentStyle: contentStyle,
        cancel: cancel ?? '取消',
        cancelStyle: cancelStyle,
        confirm: confirm ?? '确认',
        confirmStyle: contentStyle,
      );
    },
  );

  return completer.future;
}
