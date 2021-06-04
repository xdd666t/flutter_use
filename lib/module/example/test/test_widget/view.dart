import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';

class TestWidgetPage extends StatelessWidget {
  final TestWidgetLogic logic = Get.put(TestWidgetLogic());

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text('测试'),
      ),
    );
  }
}
