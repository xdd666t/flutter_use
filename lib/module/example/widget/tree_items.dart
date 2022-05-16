import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/app/utils/ui/ui_util.dart';
import 'package:flutter_use/bean/common/tree_info.dart';
import 'package:flutter_use/module/common/widget/function_items.dart';
import 'package:flutter_use/views/widget/custom/custom_single_child_scroll_view.dart';

///树形item控件
class TreeItems extends StatelessWidget {
  TreeItems({
    required this.data,
    required this.onItem,
  });

  ///树形数据源
  final List<TreeTwiceInfo> data;

  ///点击按钮
  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (item) {
      return [
        //标题
        Container(
          margin: EdgeInsets.only(top: 50.dp, bottom: 10.dp),
          width: double.infinity,
          child: Text(
            item.title,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ),

        //按钮入口
        FunctionItems(
          items: item.btnInfo,
          onItem: onItem,
          padding: EdgeInsets.zero,
        )
      ];
    });
  }

  Widget _buildBg({
    required List<Widget> Function(TreeTwiceInfo item) builder,
  }) {
    return CustomSingleChildScrollView(
      child: Container(
        margin: EdgeInsets.only(top: ScreenParam.statusBar),
        padding: EdgeInsets.symmetric(horizontal: 30.dp),
        child: Column(
          children: data.map((e) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: builder(e),
            );
          }).toList(),
        ),
      ),
    );
  }
}
