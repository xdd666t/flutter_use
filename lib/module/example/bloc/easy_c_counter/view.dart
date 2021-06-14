import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/bloc/easy_c/builder.dart';
import 'package:flutter_use/module/example/bloc/easy_c/easy_c_provider.dart';

import 'logic.dart';
import 'state.dart';

class CounterEasyCPage extends StatelessWidget {
  final easyC = CounterEasyC();

  @override
  Widget build(BuildContext context) {
    return EasyCProvider(
      create: (BuildContext context) => easyC,
      child: Scaffold(
        appBar: AppBar(title: Text('自定义状态管理框架-EasyC范例')),
        body: Center(
          child: EasyCBuilder<CounterEasyC, CounterEasyCState>(
            builder: (context, state) {
              return Text(
                '点击了 ${easyC.state.count} 次',
                style: TextStyle(fontSize: 30.0),
              );
            },
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => easyC.increment(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
