import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/logic.dart';
import 'package:get/get.dart';

class JumpOnePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 使用Get.put()实例化你的类，使其对当下的所有子路由可用。
    final JumpOneLogic logic = Get.put(JumpOneLogic());

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('跨页面-One')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.toJumpTwo(),
        child: const Icon(Icons.arrow_forward_outlined),
      ),
      body: Center(
        child: Obx(
          () => Text('SpanTwoPage点击了 ${logic.count.value} 次',
              style: TextStyle(fontSize: 30.0)),
        ),
      ),
    );
  }
}
