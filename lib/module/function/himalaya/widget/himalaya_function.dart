import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';

///喜马拉雅整体外层布局设置
Widget himalayaBuildBg({List<Widget> children}) {
  return BaseScaffold(
    backgroundColor: Colors.white,
    body: Column(children: children),
  );
}

///播放控制栏上面的外层布局设置
Widget himalayaBuildTopBg({List<Widget> children}) {
  return Expanded(
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    ),
  );
}

///顶部右侧信息流外层布局设置
Widget himalayaBuildInfoListBg({List<Widget> children}) {
  return Expanded(
    child: SingleChildScrollView(
      child: Column(children: children),
    ),
  );
}
