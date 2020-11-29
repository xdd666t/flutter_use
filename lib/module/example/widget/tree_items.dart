import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/bean/common/tree_info.dart';
import 'package:flutter_use/module/function/widget/function_items.dart';

///树形item控件
class TreeItems extends StatelessWidget {
  TreeItems({
    this.data,
    this.onItem,
  });

  ///树形数据源
  final List<TreeTwiceInfo> data;

  ///点击按钮
  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(child: _treeItem());
  }

  Widget _treeItem() {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: auto(30)),
      child: Column(
        children: data.map((e) {
          return _buildItem(e);
        }).toList(),
      ),
    );
  }

  ///俩层item样式
  Widget _buildItem(TreeTwiceInfo e) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        //标题
        Container(
          margin: EdgeInsets.only(top: auto(50), bottom: auto(10)),
          width: double.infinity,
          child: Text(
            e.title,
            style: TextStyle(fontSize: setSp(20), fontWeight: FontWeight.bold),
          ),
        ),

        //按钮入口
        FunctionItems(
          items: e.btnInfo,
          onItem: onItem,
          padding: EdgeInsets.zero,
        )
      ],
    );
  }
}
