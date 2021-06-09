import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/bean/common/btn_info.dart';

class FunctionItems extends StatelessWidget {
  FunctionItems({
    Key? key,
    required this.items,
    required this.onItem,
    this.constraints = const BoxConstraints(minWidth: 150, minHeight: 36.0),
    this.padding = const EdgeInsets.all(30),
  }) : super(key: key);

  ///数据源
  final List<BtnInfo> items;

  ///监听点击的按钮
  final ParamSingleCallback<String> onItem;

  ///约束布局
  final BoxConstraints constraints;

  ///边距
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      children: items.map((e) {
        return btnFunction(
          data: e,
          onItem: onItem,
          constraints: constraints,
        );
      }).toList(),
    );
  }

  ///整体背景
  Widget _buildBg({required List<Widget> children}) {
    return Container(
      padding: padding,
      child: SingleChildScrollView(
        child: Material(
          color: Colors.white,
          child: Wrap(spacing: 20.dp, runSpacing: 20, children: children),
        ),
      ),
    );
  }
}

///功能性按钮
Widget btnFunction({
  required ParamSingleCallback<String> onItem,
  data,
  required BoxConstraints constraints,
}) {
  return Container(
    padding: EdgeInsets.all(15.dp),
    child: RawMaterialButton(
      fillColor: Colors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10.dp),
      ),
      constraints: constraints,
      elevation: 5,
      onPressed: () => onItem(data.tag),
      child: Container(
        padding: EdgeInsets.symmetric(vertical: 15.dp, horizontal: 20.dp),
        child: Text(data.title),
      ),
    ),
  );
}
