import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class CounterHighGetPage extends StatelessWidget {
  final CounterHighGetLogic logic = Get.put(CounterHighGetLogic());
  final CounterHighGetState state = Get.find<CounterHighGetLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('计数器-进阶版')),
      body: Center(
        child: Obx(
              () => Text('点击了 ${state.count.value} 次',
              style: TextStyle(fontSize: 30.0)),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: const Icon(Icons.add),
      ),
    );
  }
}