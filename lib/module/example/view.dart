import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/logic.dart';
import 'package:get/get.dart';

import 'widget/tree_items.dart';

class ExamplePage extends StatelessWidget {
  const ExamplePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final logic = Get.put(ExampleLogic());
    final state = Get.find<ExampleLogic>().state;

    return TreeItems(
      data: state.trees,
      onItem: (String tag) => logic.toFun(context, tag),
    );
  }
}
