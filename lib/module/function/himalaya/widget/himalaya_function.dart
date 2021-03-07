import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///喜马拉雅整体外层布局设置
Widget himalayaBuildBg({List<Widget> children, VoidCallback onClose}) {
  return BaseScaffold(
    backgroundColor: Colors.white,
    floatingActionButton: Container(
      margin: EdgeInsets.only(bottom: 60.dp),
      child: FloatingActionButton(
        onPressed: onClose,
        child: Icon(Icons.close),
      ),
    ),
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
