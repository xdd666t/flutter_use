import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';

class TestWidgetPage extends StatelessWidget {
  final TestWidgetLogic logic = Get.put(TestWidgetLogic());

  TestWidgetPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox.shrink();
  }
}

class Counter extends StatelessWidget {
  const Counter({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: SizedBox.shrink());
  }
}
