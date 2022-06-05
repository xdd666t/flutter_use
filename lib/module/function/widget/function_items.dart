import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

class FunctionItems extends StatelessWidget {
  FunctionItems({
    required this.items,
    required this.onItem,
    this.constraints = const BoxConstraints(minWidth: 150, minHeight: 36.0),
    this.padding = const EdgeInsets.all(30),
  });

  ///数据源
  final List items;

  ///监听点击的按钮
  final ParamSingleCallback<String> onItem;

  ///约束布局
  final BoxConstraints constraints;

  ///边距
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (item) {
      return Container(
        padding: EdgeInsets.all(15.dp),
        child: RawMaterialButton(
          fillColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10.dp),
          ),
          constraints: constraints,
          elevation: 5,
          onPressed: () => onItem(item.tag),
          child: Container(
            padding: EdgeInsets.symmetric(vertical: 10.dp, horizontal: 15.dp),
            child: Text('${item.title}'),
          ),
        ),
      );
    });
  }

  ///整体背景
  Widget _buildBg({required Widget Function(dynamic item) builder}) {
    return Container(
      padding: padding,
      child: SingleChildScrollView(
        child: Wrap(
          spacing: 20.dp,
          runSpacing: 20.dp,
          children: items.map((e) {
            return builder(e);
          }).toList(),
        ),
      ),
    );
  }
}
