import 'package:flutter/material.dart';
import 'package:flutter_use/module/function/logic.dart';
import 'package:flutter_use/module/function/state.dart';
import 'package:get/get.dart';

import 'widget/function_card.dart';

class FunctionPage extends StatelessWidget {
  final FunctionLogic logic = Get.put(FunctionLogic());
  final FunctionState state = Get.find<FunctionLogic>().state();

  @override
  Widget build(BuildContext context) {
    return FunctionCard(
      data: state.items,
      onItem: (String tag) {
        logic.toFun(context, tag);
      },
    );
  }
}
