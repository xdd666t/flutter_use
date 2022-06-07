import 'package:flutter/material.dart';
import 'package:flutter_use/module/function/logic.dart';
import 'package:get/get.dart';

import 'widget/function_card.dart';

class FunctionPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(FunctionLogic());
    final state = Get.find<FunctionLogic>().state;

    return FunctionCard(
      data: state.items,
      onItem: (String tag) => logic.toFun(context, tag),
    );
  }
}
