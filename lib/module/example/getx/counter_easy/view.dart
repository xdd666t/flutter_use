import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetCounterEasyPage extends StatelessWidget {
  final GetCounterEasyLogic logic = Get.put(GetCounterEasyLogic());

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      appBar: AppBar(title: const Text('计数器-简单式')),
      body: Center(
        child: GetBuilder<GetCounterEasyLogic>(builder: (logic) {
          return Text(
            '点击了 ${logic.count} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: Icon(Icons.add),
      ),
    );
  }
}
