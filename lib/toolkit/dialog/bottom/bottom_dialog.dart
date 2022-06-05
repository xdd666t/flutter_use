import 'package:flutter/material.dart';
import 'package:flutter_picker/Picker.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

import 'data/bottom_single_dialog.dart';
import 'image/full_image_dialog.dart';
import 'select/bottom_select_dialog.dart';
import 'time/bottom_date_dialog.dart';

///author:余涛
///统一管理底部弹窗使用,可统一使用BottomDialog访问
class BottomDialog {
  ///展示单行数据
  ///List泛型可以随意指定都行
  ///
  ///展示内容item默认为 '' 可以使用 showKey字段指定展示key值
  ///
  ///showKey：''含义默认泛型为String,则showKey设置为空字符串,兼容泛型String操作
  ///
  ///showFormatter：这是一种显示选择内容的展示方式, 使用规则如下
  ///
  ///例如：showFormatter: ['key:staffNumber', ' - ', 'key:staffName'],
  ///
  ///显示：Xxxx - Xxxx
  static Future<E> showSingle<E>(
    BuildContext context, {
    //数据源使用任意泛型
    required List<E> list,
    //回调你选择的item数据
    required DialogParamSingleCallback<E> callback,
    String title = '请选择',
    String showKey = '',
    List<String>? showFormatter,
  }) {
    return showBottomSingleDialog<E>(
      context,
      list: list,
      callback: callback,
      title: title,
      showKey: showKey,
      showFormatter: showFormatter,
    );
  }

  ///展示底部日期控件
  static void showDate(
    BuildContext context, {
    int type = PickerDateTimeType.kYMD,
    bool isNumberMonth = true,
    int yearBegin = 1900,
    int yearEnd = 2100,
    required DialogParamTwiceCallback<String, List<int>> callback,
    String title = '选择日期',
    String cancelText = '取消',
    String confirmText = '确定',
    required DateTime minValue,
    required DateTime maxValue,
  }) {
    showBottomDateDialog(context,
        type: type,
        isNumberMonth: isNumberMonth,
        yearBegin: yearBegin,
        yearEnd: yearEnd,
        minValue: minValue,
        maxValue: maxValue,
        callback: callback,
        title: title,
        cancelText: cancelText,
        confirmText: confirmText);
  }

  ///预览图片的弹窗
  ///
  /// 数据源：imageList，只支持添加FileInfoBean(网络)和Asset(本地)俩种实体
  ///
  /// isSort：是否开启排序，默认false，开启后，按照数据源的塞入顺序预览图片，
  /// 默认false情况一律按照网络图片在前，本地图片在后的方式预览图片
  static Future<void> showImage({
    required BuildContext context,
    required List<FileInfoBean> imageList,
    required int currentIndex,
    bool? isSort,
  }) async {
    await bottomImageDialog(
      context: context,
      imageList: imageList,
      currentIndex: currentIndex,
      isSort: isSort ?? false,
    );
  }

  ///底部选择弹窗
  ///
  /// 自带标题和取消控件
  static Future<E> showSelect<E>({
    required List<E> list,
    required DialogParamSingleCallback<E> callback,
    String title = '请选择',
    String showKey = '',
  }) {
    return showBottomSelectDialog<E>(
      list: list,
      callback: callback,
      title: title,
      showKey: showKey,
    );
  }
}
