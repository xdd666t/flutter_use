import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class TestLayoutPage extends StatelessWidget {
  final TestLayoutLogic logic = Get.put(TestLayoutLogic());
  final TestLayoutState state = Get.find<TestLayoutLogic>().state;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //底下
      Listener(
        onPointerDown: (event) {
          showSnackBar(context, '底部蓝色区域++++++++');
        },
        child: Container(
          height: 300,
          width: 300,
          color: Colors.blue,
        ),
      ),

      //上面 事件穿透
      Listener(
        behavior: HitTestBehavior.translucent,
        onPointerDown: (event) {
          showSnackBar(context, '上面红色区域---------');
        },
        child: Container(
          height: 200,
          width: 200,
        ),
      ),
    ]);
  }

  Widget _buildBg({required List<Widget> children}) {
    return Scaffold(
      appBar: AppBar(title: Text('测试布局')),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: children,
        ),
      ),
    );
  }
}
