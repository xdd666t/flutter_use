import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class GetCounterHighPage extends StatelessWidget {
  final GetCounterHighLogic logic = Get.put(GetCounterHighLogic());
  final GetCounterHighState state = Get
      .find<GetCounterHighLogic>()
      .state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('计数器-进阶版')),
      body: Center(
        child: Obx(() {
          return Text(
            '点击了 ${state.count.value} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: const Icon(Icons.add),
      ),
    );
  }
}
