import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'auto_dispose_logic.dart';

class AutoDisposePage extends StatefulWidget {
  @override
  _AutoDisposePageState createState() => _AutoDisposePageState();
}

class _AutoDisposePageState extends State<AutoDisposePage> {
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

  @override
  void dispose() {
    Get.delete<AutoDisposeLogic>();
    super.dispose();
  }
}
