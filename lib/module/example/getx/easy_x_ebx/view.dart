import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/module/example/getx/easy_x/easy.dart';
import 'package:flutter_use/module/example/getx/easy_x/ebx/easy_bind_widget.dart';
import 'package:flutter_use/module/example/getx/easy_x/ebx/ebx.dart';

import 'logic.dart';

class EasyXEbxCounterPage extends StatelessWidget {
  final EasyXEbxCounterLogic logic = Easy.put(EasyXEbxCounterLogic());

  @override
  Widget build(BuildContext context) {
    return EasyBindWidget(
      bind: logic,
      child: BaseScaffold(
        appBar: AppBar(title: const Text('EasyX-自定义Ebx刷新机制')),
        body: Center(
          child: Ebx(() {
            return Text(
              '点击了 ${logic.count.value} 次',
              style: TextStyle(fontSize: 30.0),
            );
          }),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => logic.increase(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
