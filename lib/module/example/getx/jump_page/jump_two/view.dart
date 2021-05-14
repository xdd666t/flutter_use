import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/logic.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetJumpTwoPage extends StatelessWidget {
  final GetJumpOneLogic oneLogic = Get.find();
  final GetJumpTwoLogic twoLogic = Get.put(GetJumpTwoLogic());

  @override
  Widget build(BuildContext context) {
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
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          //计数显示
          Obx(
            () => Text('跨页面-Two点击了 ${twoLogic.count.value} 次',
                style: TextStyle(fontSize: 30.0)),
          ),

          //传递数据
          Obx(
            () => Text('传递的数据：${twoLogic.msg.value}',
                style: TextStyle(fontSize: 30.0)),
          ),
        ]),
      ),
    );
  }
}
