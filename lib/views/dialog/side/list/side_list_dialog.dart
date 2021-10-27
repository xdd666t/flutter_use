import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

import 'widget/side_list_dialog_view.dart';

Future<E> showSideListDialog<E>({
  required List<E> list,
  String? imageUrl,
  ParamSingleCallback<E>? callback,
  String title = '请选择',
  String showKey = '',
}) {
  List<String> stringList = [];
  Completer<E> completer = Completer();

  for (E item in list) {
    String showContent;
    if (showKey == '') {
      //兼容泛型为String的情况
      showContent = item as String;
    } else {
      //将实体转成map，通过设置的key指定展示的字段
      dynamic map = json.decode(jsonEncode(item));
      showContent = map[showKey];
    }

    stringList.add(showContent);
  }

  SmartDialog.show(
    alignmentTemp: Alignment.centerRight,
    animationDurationTemp: Duration(milliseconds: 200),
    widget: SideListDialogView(
      data: stringList,
      title: title,
      imageUrl: imageUrl,
      onItem: (int index) {
        //关闭弹窗
        SmartDialog.dismiss();

        //同步数据
        completer.complete(list[index]);

        //异步数据
        if (callback == null) {
          return;
        }
        callback(list[index]);
      },
    ),
  );

  return completer.future;
}
