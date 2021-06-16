import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetCounterPage extends StatelessWidget {
  final GetCounterLogic logic = Get.put(GetCounterLogic());

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      appBar: AppBar(title: const Text('计数器-响应式')),
      body: Center(
        child: Obx(() {
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
    );
  }
}

// class Counter extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Text('Counter'),
//     );
//   }
// }

// class Counter extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Obx(() {
//         return Text('Counter');
//       }),
//     );
//   }
// }
