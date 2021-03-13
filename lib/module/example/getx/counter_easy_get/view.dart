import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:get/get.dart';

import 'logic.dart';

class CounterEasyGetPage extends StatelessWidget {
  final CounterEasyGetLogic logic = Get.put(CounterEasyGetLogic());

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      appBar: AppBar(title: const Text('计数器-简单式')),
      body: Center(
        child: GetBuilder<CounterEasyGetLogic>(
          builder: (logicGet) => Text(
            '点击了 ${logicGet.count} 次',
            style: TextStyle(fontSize: 30.0),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: const Icon(Icons.add),
      ),
    );
  }
}
