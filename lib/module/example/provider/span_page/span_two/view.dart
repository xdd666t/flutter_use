import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/span_page/span_one/provider.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProSpanTwoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProSpanTwoProvider(),
      builder: (context, child) {
        return _buildPage(context);
      },
    );
  }

  Widget _buildPage(BuildContext context) {
    final provider = context.read<ProSpanTwoProvider>();

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('SpanTwo范例')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          //自增
          provider.increase();

          //改变ProSpanOnePage页面数据
          Provider.of<ProSpanOneProvider>(context, listen: false).increase();
        },
        child: Icon(Icons.add),
      ),
      body: Center(
        child: Consumer<ProSpanTwoProvider>(builder: (_, __, ___) {
          return Text(
            '当前点击了 ${provider.count} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
    );
  }
}
