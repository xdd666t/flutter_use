import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/easy_p/build.dart';
import 'package:flutter_use/module/example/provider/easy_p/change_notifier_easy_p.dart';
import 'package:flutter_use/module/example/provider/easy_p/easy_p.dart';

import 'logic.dart';

class CounterEasyPPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierEasyP(
      create: (BuildContext context) => CounterEasyP(),
      builder: (context) {
        return _buildPage(context);
      },
    );
  }

  Widget _buildPage(BuildContext context) {
    final easyP = EasyP.of<CounterEasyP>(context);

    return Scaffold(
      appBar: AppBar(title: Text('自定义状态管理框架-EasyP范例')),
      body: Center(
        child: EasyPBuilder<CounterEasyP>(() {
          return Text(
            '点击了 ${easyP.count} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => easyP.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}
