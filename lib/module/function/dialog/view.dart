import 'package:flutter/material.dart';
import 'package:flutter_use/module/common/widget/function_items.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class DialogPage extends StatelessWidget {
  final DialogLogic logic = Get.put(DialogLogic());
  final DialogState state = Get.find<DialogLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('Dialog')),
      body: FunctionItems(
        items: state.items,
        constraints: BoxConstraints(minWidth: 100, minHeight: 36),
        onItem: (String tag) {
          logic.showFun(context, tag);
        },
      ),
    );
  }
}
