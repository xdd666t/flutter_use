import 'package:flutter/material.dart';

import 'test_notifier_widget.dart';

class TestNotifierPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final controller = TestNotifierController();
    var count = 0;

    TextField();
    TextEditingController();

    return Scaffold(
      appBar: AppBar(title: Text('ChangeNotifier使用演示')),
      body: Center(
        child: TestNotifierWidget(controller: controller),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          controller.value = '数值变化：${(++count).toString()}';
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
