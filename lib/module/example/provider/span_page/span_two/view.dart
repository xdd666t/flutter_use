import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/span_page/span_one/provider.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProSpanTwoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProSpanTwoProvider(),
      child: Consumer<ProSpanTwoProvider>(
        builder: (ctx, provider, child) {
          return _buildConsumer(ctx, provider);
        },
      ),
    );
  }

  Widget _buildConsumer(BuildContext context, ProSpanTwoProvider provider) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('Provider-SpanTwo范例')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          //自增
          provider.increase();

          //改变ProSpanOnePage页面数据
          Provider.of<ProSpanOneProvider>(context, listen: true).increase();
        },
        child: const Icon(Icons.add),
      ),
      body: Center(
        child: Text(
          '当前点击了 ${provider.count} 次',
          style: TextStyle(fontSize: 30.0),
        ),
      ),
    );
  }

}