import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/module/function/widget/function_items.dart';

class ParamLoading extends StatelessWidget {
  const ParamLoading({
    Key? key,
    required this.list,
    required this.onItem,
  }) : super(key: key);

  final List<String> list;

  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    var items = [];
    list.forEach((msg) => items.add(BtnInfo(title: msg, tag: msg)));

    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        height: double.infinity,
        width: 265,
        color: Colors.white,
        child: FunctionItems(
          items: items,
          onItem: onItem,
          padding: EdgeInsets.symmetric(horizontal: 5, vertical: 0),
          constraints: BoxConstraints(minWidth: 80, minHeight: 36.0),
        ),
      ),
    );
  }
}
