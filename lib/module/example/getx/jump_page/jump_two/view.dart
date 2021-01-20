import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/logic.dart';
import 'package:get/get.dart';

import 'logic.dart';

class JumpTwoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final JumpOneLogic oneLogic = Get.find();
    final JumpTwoLogic twoLogic = Get.put(JumpTwoLogic());

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('跨页面-Two')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          oneLogic.increase();
          twoLogic.increase();
        },
        child: const Icon(Icons.add),
      ),
      body: Center(
        child: Obx(
          () => Text('JumpTwoPage点击了 ${twoLogic.count.value} 次',
              style: TextStyle(fontSize: 30.0)),
        ),
      ),
    );
  }
}
