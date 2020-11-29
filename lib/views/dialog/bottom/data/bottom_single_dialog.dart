import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_picker/Picker.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///List泛型可以随意指定都行
///展示内容item默认为 "name" 可以使用 showKey字段指定展示key值
void showBottomSingleDialog<E>(
  BuildContext context, {
  @required List<E> list,
  @required ParamSingleCallback<E> callback,
  String title = '请选择',
  String showKey = '',
}) {
  List<PickerItem<E>> pickList = [];
  for (E item in list) {
    String showContent;
    if (showKey == '') {
      //兼容泛型为String的情况
      showContent = item as String;
    } else {
      //将实体转成map，通过设置的key指定展示的字段
      var map = json.decode(jsonEncode(item));
      showContent = map[showKey];
    }

    pickList.add(
      PickerItem(
        text: Center(child: Text(showContent)),
        value: item,
      ),
    );
  }

  Picker picker = Picker(
    adapter: PickerDataAdapter<E>(data: pickList),
    itemExtent: auto(45),
    height: auto(280),
    hideHeader: false,
    title: Text(title),
    cancelText: "取消",
    confirmText: "确定",
    onConfirm: (Picker picker, List value) async {
      //必须做一个延时操作,先执行回调内部的pop,不然pop页面无法回传值
      await Future.delayed(Duration(milliseconds: 10));
      callback(picker.getSelectedValues()[0]);
    },
  );

  showModalBottomSheet(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (BuildContext context) {
      return ClipRRect(
        borderRadius: BorderRadius.circular(auto(5)),
        child: picker.makePicker(),
      );
    },
  );
}
