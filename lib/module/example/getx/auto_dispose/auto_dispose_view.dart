import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'auto_dispose_logic.dart';

///GetXRouteObserver
class AutoDisposePage extends StatelessWidget {
  final logic = Get.put(AutoDisposeLogic());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('计数器-自动释放')),
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
