import 'package:code_preview/code_preview.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:tolyui_navigation/tolyui_navigation.dart';

import 'logic.dart';
import 'state.dart';

part 'widget/code_show.dart';

class SmartDialogPage extends StatelessWidget {
  SmartDialogPage({Key? key}) : super(key: key);

  final SmartDialogLogic logic = Get.put(SmartDialogLogic());
  final SmartDialogState state = Get.find<SmartDialogLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SmartDialog')),
      backgroundColor: Colors.white,
      body: GetBuilder<SmartDialogLogic>(
        builder: (logic) {
          return Row(children: [
            // 侧边栏
            TolyRailMenuTree(
              enableWidthChange: true,
              meta: state.menuTreeMeta,
              onSelect: (MenuNode node) => logic.onItem(node),
            ),

            // 内容
            _CodeShow(data: state),
          ]);
        },
      ),
    );
  }
}
