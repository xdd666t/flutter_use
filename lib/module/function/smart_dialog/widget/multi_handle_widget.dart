import 'package:flutter/material.dart';
import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/module/function/widget/function_items.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';
import 'package:flutter_use/toolkit/utils/ui_util.dart';

class MultiHandleWidget extends StatelessWidget {
  const MultiHandleWidget({
    Key? key,
    required this.list,
    required this.onItem,
  }) : super(key: key);

  final List<String> list;

  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    final items = <BtnInfo>[];
    for (final msg in list) {
      items.add(BtnInfo(title: msg, tag: msg));
    }

    return Container(
      height: double.infinity,
      width: 350,
      padding: EdgeInsets.only(top: ScreenParam.statusBar),
      color: Colors.white,
      alignment: Alignment.topCenter,
      child: FunctionItems(
        items: items,
        onItem: onItem,
        padding: EdgeInsets.zero,
        constraints: const BoxConstraints(minWidth: 80, minHeight: 36),
      ),
    );
  }
}
