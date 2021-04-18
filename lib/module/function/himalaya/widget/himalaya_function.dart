import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///喜马拉雅整体外层布局设置
Widget himalayaBuildBg({required List<Widget> children}) {
  return BaseScaffold(
    backgroundColor: Colors.white,
    body: Column(children: children),
  );
}

///播放控制栏上面的外层布局设置
Widget himalayaBuildTopBg({required List<Widget> children}) {
  return Expanded(
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    ),
  );
}

///顶部右侧信息流外层布局设置
Widget himalayaBuildInfoListBg({required List<Widget> children}) {
  return Expanded(
    child: Column(children: children),
  );
}

///顶部右侧信息流外层布局设置 - 可滑动部分
Widget himalayaBuildScrollInfoListBg({required List<Widget> children}) {
  return Expanded(
    child: Scrollbar(
      child: SingleChildScrollView(
        child: Container(
          width: 860.dp,
          child: Column(children: children),
        ),
      ),
    ),
  );
}
