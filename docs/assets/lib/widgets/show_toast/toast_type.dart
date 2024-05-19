import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/multi_handle_widget.dart';

var _list = ['normal', 'last', 'onlyRefresh', 'multi'];

class ToastType extends StatelessWidget {
  const ToastType({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() {
    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: _list, onItem: _onItem),
    );
  }

  void _onItem(String msg) {
    var type = SmartToastType.normal;
    if (_list[0] == msg) {
      type = SmartToastType.normal;
    } else if (_list[1] == msg) {
      type = SmartToastType.last;
    } else if (_list[2] == msg) {
      type = SmartToastType.onlyRefresh;
    } else if (_list[3] == msg) {
      type = SmartToastType.multi;
    }

    SmartDialog.showToast('1', displayType: type);
    SmartDialog.showToast('2', displayType: type);
    SmartDialog.showToast('3', displayType: type);
  }
}
