import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/logic.dart';
import 'package:flutter_use/module/example/state.dart';
import 'package:get/get.dart';

import 'widget/tree_items.dart';

class ExamplePage extends StatelessWidget {
  final ExampleLogic logic = Get.put(ExampleLogic());
  final ExampleState state = Get.find<ExampleLogic>().state();

  @override
  Widget build(BuildContext context) {
    return TreeItems(
      data: state.trees,
      onItem: (String tag) {
        logic.toFun(context, tag);
      },
    );
  }
}
