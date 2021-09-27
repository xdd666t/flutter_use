import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/logic.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetJumpTwoPage extends StatelessWidget {
  final oneLogic = Get.find<GetJumpOneLogic>();
  final twoLogic = Get.put(GetJumpTwoLogic());

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
          GetBuilder<GetJumpTwoLogic>(
            builder: (logic) {
              return Text('跨页面-Two点击了 ${twoLogic.count} 次',
                  style: TextStyle(fontSize: 30.0));
            },
          ),

          //传递数据
          GetBuilder<GetJumpTwoLogic>(
            builder: (logic) {
              return Text('传递的数据：${twoLogic.msg}',
                  style: TextStyle(fontSize: 30.0));
            },
          ),
        ]),
      ),
    );
  }
}
