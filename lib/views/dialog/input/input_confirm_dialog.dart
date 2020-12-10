import 'dart:async';

import 'package:flutter/material.dart';

import 'widget/input_confirm_dialog_view.dart';


Future<String> inputConfirmDialog({
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
  @required InputConfirmParamVoidCallback onConfirm,
  bool barrierDismissible,
  int maxLines,
  int minLines,
  int contentLength,
  TextEditingController editingController
}) {
  //处理同步操作
  Completer<String> completer = Completer();

  var funConfirm = (String msg) async {
    //确定事件全部返回true
    if (onConfirm != null) {
      onConfirm(msg);
    }

    completer.complete(msg);
  };

  var funCancel = () async {
    //取消事件全部返回 ''
    if (onCancel != null) {
      onCancel();
    }

    completer.complete(null);
  };

  showDialog(
    context: context,
    barrierDismissible: barrierDismissible ?? false,
    builder: (BuildContext context) {
      return InputConfirmDialogView(
        onConfirm: (msg){
          return funConfirm(msg);
        },
        onCancel: funCancel,
        title: title,
        titleStyle: titleStyle,
        hint: hint??'请输入',
        contentStyle: contentStyle,
        cancel: cancel ?? '取消',
        cancelStyle: cancelStyle,
        confirm: confirm ?? '确认',
        confirmStyle: contentStyle,
        maxLines: maxLines??5,
        minLines: minLines??1,
        contentLength: contentLength??50,
        editingController: editingController,
      );
    },
  );

  return completer.future;
}
