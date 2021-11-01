import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/widget/tree_items.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class SmartDialogPage extends StatelessWidget {
  final SmartDialogLogic logic = Get.put(SmartDialogLogic())..init();
  final SmartDialogState state = Get.find<SmartDialogLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Platform.isAndroid ? null : AppBar(title: Text('SmartDialog')),
      backgroundColor: Colors.white,
      body: TreeItems(
        data: state.trees,
        onItem: (String tag) => logic.showFun(tag),
      ),
    );
  }
}
