import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:get/get.dart';

import 'logic.dart';

class KeepAliveOnePage extends StatelessWidget {
  final KeepAliveOneLogic logic = Get.put(KeepAliveOneLogic());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('保活页面-One')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.toJumpTwo(),
        child: const Icon(Icons.arrow_forward_outlined),
      ),
      body: Center(
        child: Text(
          '测试结果：保活页面并不会导致GetXController无法销毁',
          style: TextStyle(fontSize: 30.sp),
        ),
      ),
    );
  }
}
