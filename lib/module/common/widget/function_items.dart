import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/bean/common/btn_info.dart';

class FunctionItems extends StatelessWidget {
  FunctionItems({
    this.items,
    this.onItem,
    this.constraints = const BoxConstraints(minWidth: 150, minHeight: 36.0),
    this.padding = const EdgeInsets.all(30),
  });

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
    return _function();
  }

  ///功能主体
  Widget _function() {
    return _buildBg(
      child: Wrap(
        spacing: 20.dp,
        runSpacing: 20.dp,
        children: items.map((e) {
          return btnFunction(
            onItem: onItem,
            data: e,
            constraints: constraints,
          );
        }).toList(),
      ),
    );
  }

  ///整体背景
  Widget _buildBg({child}) {
    return Container(
      padding: padding,
      child: SingleChildScrollView(
        child: Material(
          color: Colors.white,
          child: child,
        ),
      ),
    );
  }
}

///功能性按钮
Widget btnFunction({
  ParamSingleCallback<String> onItem,
  data,
  BoxConstraints constraints,
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
      onPressed: () {
        onItem(data.tag);
      },
      child: Container(
        padding: EdgeInsets.symmetric(
          vertical: 15.dp,
          horizontal: 20.dp,
        ),
        child: Text(
          data.title,
        ),
      ),
    ),
  );
}
