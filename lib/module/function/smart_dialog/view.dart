import 'package:code_preview/code_preview.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

part 'widget/code_show.dart';
part 'widget/side_bar_fold.dart';

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
            _SideBarFold(
              data: state,
              // 点击具体item
              onItem: (item, subItem) => logic.onItem(item, subItem),
            ),

            // 内容
            _CodeShow(data: state),
          ]);
        },
      ),
    );
  }
}
