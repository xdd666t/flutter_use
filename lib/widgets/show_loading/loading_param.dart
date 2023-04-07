import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/multi_handle_widget.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

var _list = [
  'maskWidget',
  'maskColor',
  'SmartAnimationType.scale',
  'usePenetrate',
];

class LoadingParam extends StatelessWidget {
  const LoadingParam({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() async {
    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: _list, onItem: _onItem),
    );
  }

  void _onItem(String msg) async {
    if (_list[0] == msg) {
      var maskWidget = SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Opacity(
          opacity: 0.6,
          child: Image.network(
            'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101103911.jpeg',
            fit: BoxFit.fill,
          ),
        ),
      );
      SmartDialog.showLoading(maskWidget: maskWidget);
    } else if (_list[1] == msg) {
      SmartDialog.showLoading(maskColor: _randomColor.withOpacity(0.3));
    } else if (_list[2] == msg) {
      SmartDialog.showLoading(animationType: SmartAnimationType.scale);
    } else if (_list[3] == msg) {
      SmartDialog.showLoading(usePenetrate: true);
    }

    await Future.delayed(const Duration(seconds: 2));
    SmartDialog.dismiss(status: SmartStatus.loading);
  }
}
