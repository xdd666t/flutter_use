import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/widget/tree_items.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';

class SmartDialogPage extends StatelessWidget {
  SmartDialogPage({Key? key}) : super(key: key);

  final SmartDialogLogic logic = Get.put(SmartDialogLogic());
  final SmartDialogState state = Get.find<SmartDialogLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: kIsWeb || !Platform.isAndroid
          ? AppBar(title: const Text('SmartDialog'))
          : null,
      backgroundColor: Colors.white,
      body: TreeItems(
        data: state.trees,
        onItem: (String tag) => logic.showFun(tag),
      ),
    );
  }
}
