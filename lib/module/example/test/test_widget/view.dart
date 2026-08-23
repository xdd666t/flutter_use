import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';

class TestWidgetPage extends StatelessWidget {
  final TestWidgetLogic logic = Get.put(TestWidgetLogic());

  TestWidgetPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(child: Text(''));
  }
}

class Counter extends StatelessWidget {
  const Counter({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Text(''));
  }
}
