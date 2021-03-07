import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';

///喜马拉雅整体外层布局设置
Widget himalayaBuildBg({List<Widget> children}) {
  return BaseScaffold(
    backgroundColor: Colors.white,
    body: Column(
      children: children,
    ),
  );
}

Widget himalayaBuildTopBg({List<Widget> children}) {
  return Expanded(
    child: Row(
      children: children,
    ),
  );
}

Widget himalayaBuildInfoListBg({List<Widget> children}) {
  return Expanded(
    child: Column(
      children: children,
    ),
  );
}
