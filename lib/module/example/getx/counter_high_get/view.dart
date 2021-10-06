import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetCounterHighPage extends StatelessWidget {
  final logic = Get.put(GetCounterHighLogic());
  final state = Get.find<GetCounterHighLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('计数器-进阶版')),
      body: Center(
        child: GetBuilder<GetCounterHighLogic>(
          builder: (logic) {
            return Text(
              '点击了 ${state.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: Icon(Icons.add),
      ),
    );
  }
}
