import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

import 'widget/bottom_single_dialog_view.dart';

///author:余涛
///List泛型可以随意指定都行
///展示内容item默认为 "name" 可以使用 showKey字段指定展示key值
///硬编码不单独提出，方便后期控件移植
Future<E> showBottomSingleDialog<E>(
  BuildContext context, {
  required List<E> list,
  required ParamSingleCallback<E> callback,
  String title = '请选择',
  String showKey = '',
  //这是一种显示选择内容的展示方式
  List<String>? showFormatter,
}) {
  List<String> stringList = [];
  Completer<E> completer = Completer();

  for (E item in list) {
    String showContent;
    Map map = {};

    if (showKey == '') {
      //兼容泛型为String的情况
      showContent = item as String;
    } else {
      //将实体转成map，通过设置的key指定展示的字段
      map = json.decode(jsonEncode(item));
      showContent = map[showKey];
    }

    //如果使用显示规则,择showKey不起作用
    if (showFormatter != null) {
      showContent = '';
      for (var item in showFormatter) {
        if (item.contains('key')) {
          var array = item.split(':');
          showContent = showContent + map[array[1]].toString();
        } else {
          showContent = showContent + item.toString();
        }
      }
    }

    stringList.add(showContent);
  }

  showModalBottomSheet(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (context) {
      return BottomSingleDialogView(
        data: stringList,
        title: title,
        onCancel: () => Navigator.pop(context),
        onConfirm: (int index) {
          Navigator.pop(context);

          //支持同步和异步
          completer.complete(list[index]);
          callback(list[index]);
        },
      );
    },
  );

  return completer.future;
}
