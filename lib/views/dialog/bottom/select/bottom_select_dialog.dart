import 'dart:async';
import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter_use/views/dialog/assist/typedef/function.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

import 'widget/select_dialog_view.dart';

///底部选择弹窗
Future<E> showBottomSelectDialog<E>({
  @required List<E> list,
  @required DialogParamSingleCallback<E> callback,
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

  EasyDialog.show(
    alignmentTemp: Alignment.bottomCenter,
    animationDurationTemp: Duration(milliseconds: 200),
    widget: SelectDialogView(
      data: stringList,
      onSelect: (int index) {
        //关闭弹窗
        EasyDialog.dismiss();

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
