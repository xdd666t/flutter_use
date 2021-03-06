import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';
import 'widget/himalaya_left_navigation.dart';

class HimalayaPage extends StatelessWidget {
  final HimalayaLogic logic = Get.put(HimalayaLogic());
  final HimalayaState state = Get.find<HimalayaLogic>().state;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      onClose: () => Get.back(),
      children: [
        //左边侧边导航栏 + 右边信息流
        Expanded(
          child: Row(children: [
            //左边导航栏
            HimalayaLeftNavigation(),

            //右边信息流
          ]),
        ),

        //底部音频播放控制栏
        Container(
          height: 100.dp,
          color: Colors.grey,
        )
      ],
    );
  }

  Widget _buildBg({List<Widget> children, VoidCallback onClose}) {
    return BaseScaffold(
      backgroundColor: Colors.white,
      floatingActionButton: FloatingActionButton(
        onPressed: onClose,
        child: Icon(Icons.close),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.max,
        children: children,
      ),
    );
  }
}
