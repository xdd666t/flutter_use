import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../example/widget/tree_items.dart';
import 'logic.dart';

class AnimationPage extends StatelessWidget {
  final logic = Get.put(AnimationLogic());
  final state = Get.find<AnimationLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('AnimationDemo')),
      backgroundColor: Colors.white,
      body: TreeItems(
        data: state.trees,
        onItem: (String tag) => logic.showFun(tag),
      ),
    );
  }
}
