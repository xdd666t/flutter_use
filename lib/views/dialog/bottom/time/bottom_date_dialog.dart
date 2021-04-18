import 'package:flutter/material.dart';
import 'package:flutter_picker/flutter_picker.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/views/dialog/assist/typedef/function.dart';

showBottomDateDialog(
    BuildContext context, {
      int type = PickerDateTimeType.kYMD,
      bool isNumberMonth = true,
      int yearBegin = 1900,
      int yearEnd = 2100,
      required DateTime minValue,
      required DateTime maxValue,
      required DialogParamTwiceCallback<String, List<int>> callback,
      String title = '选择日期',
      String cancelText = '取消',
      String confirmText = '确定',
    }) {
  var picker = Picker(
    cancelText: cancelText,
    cancelTextStyle: TextStyle(color: Color(0xFF999999), fontSize: 33.sp),
    confirmText: confirmText,
    confirmTextStyle: TextStyle(color: Color(0xFF0299FF), fontSize: 35.sp),
    title: Text(title,
        style: TextStyle(color: Color(0xFF333333), fontSize: 33.sp)),
    textStyle: TextStyle(color: Color(0xFF333333), fontSize: 30.sp),
    backgroundColor: Colors.transparent,
    height: 400.dp,
    itemExtent: 75.dp,
    headerDecoration: BoxDecoration(
      border: Border(
        bottom: BorderSide(color: Colors.black12, width: 0.5),
      ),
    ),
    adapter: new DateTimePickerAdapter(
      type: type,
      isNumberMonth: isNumberMonth,
      yearSuffix: "年",
      monthSuffix: "月",
      daySuffix: "日",
      maxValue: maxValue,
      minValue: minValue,
      yearBegin: yearBegin,
      yearEnd: yearEnd,
    ),
    delimiter: [
      //处理分割线和时间分隔符
      PickerDelimiter(
        column: 3,
        child: Visibility(
          visible: type == PickerDateTimeType.kYMDHM,
          child: Container(width: 8.0, alignment: Alignment.center),
        ),
      ),
      PickerDelimiter(
        column: 5,
        child: Visibility(
          visible: type == PickerDateTimeType.kYMDHM,
          child: Container(
            width: 12.0,
            alignment: Alignment.center,
            child: Text(':', style: TextStyle(fontWeight: FontWeight.bold)),
            color: Colors.white,
          ),
        ),
      ),
      //处理时分分隔符
      PickerDelimiter(
        column: 1,
        child: Visibility(
          visible: type == PickerDateTimeType.kHM,
          child: Container(
            width: 12.0,
            alignment: Alignment.center,
            child: Text(':', style: TextStyle(fontWeight: FontWeight.bold)),
            color: Colors.white,
          ),
        ),
      ),
    ],
    onConfirm: (Picker picker, List<int> value) {
      ///截取字符串
      String date = '';
      String deal = picker.adapter.text;
      if (type == PickerDateTimeType.kY) {
        date = deal.split("-")[0];
      } else if (type == PickerDateTimeType.kYM) {
        date = deal.split("-")[0] + "-" + deal.split("-")[1];
      } else if (type == PickerDateTimeType.kYMD) {
        date = deal.split(" ")[0];
      } else if (type == PickerDateTimeType.kYMDHM) {
        date = deal.substring(0, deal.lastIndexOf(':'));
      } else {
        date = deal;
      }

      callback(date, value);
    },
    onSelect: (Picker picker, int index, List<int> values) {},
  );

  showModalBottomSheet(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (context) {
      return ClipRRect(
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(7),
          topRight: Radius.circular(7),
        ),
        child: Container(
          color: Colors.white,
          child: picker.makePicker(null, true),
        ),
      );
    },
  );
}
