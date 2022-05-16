import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetCounterBindingPage extends StatelessWidget {
  final logic = Get.find<GetCounterBindingLogic>();
  final state = Get.find<GetCounterBindingLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('计数器-binding使用')),
      body: Center(
        child: GetBuilder<GetCounterBindingLogic>(
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
