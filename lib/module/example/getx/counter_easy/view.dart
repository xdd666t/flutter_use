import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:get/get.dart';

import 'logic.dart';

class GetCounterEasyPage extends StatelessWidget {
  final GetCounterEasyLogic logic = Get.put(GetCounterEasyLogic());

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
      appBar: AppBar(title: const Text('计数器-简单式')),
      body: Center(
        child: GetBuilder<GetCounterEasyLogic>(
          builder: (logic) {
            return Text(
              '点击了 ${logic.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increase(),
        child: Icon(Icons.add),
      ),
    );
  }
}

class TransferDataWidget extends InheritedWidget {
  TransferDataWidget({required Widget child}) : super(child: child);

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => false;

  @override
  InheritedElement createElement() => TransferDataElement(this);
}

class TransferDataElement extends InheritedElement {
  TransferDataElement(InheritedWidget widget) : super(widget);

  ///随便初始化什么, 设置只读都行
  String value = '传输数据';
}

class Test {
  test() {
    var transferDataElement = BuildContext().getElementForInheritedWidgetOfExactType<TransferDataWidget>()
            as TransferDataElement?;
    var msg = transferDataElement.value;
  }
}
