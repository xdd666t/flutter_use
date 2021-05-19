import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

// ignore: must_be_immutable
class ProSpanOnePage extends StatelessWidget {
  //不用final 防止全局刷新报错
  late ProSpanOneProvider provider;

  @override
  Widget build(BuildContext context) {
    provider = Provider.of<ProSpanOneProvider>(context, listen: false);

    return Scaffold(
      appBar: AppBar(title: const Text('SpanOne范例')),
      body: Center(
        child: Consumer<ProSpanOneProvider>(builder: (_, __, ___) {
          return Text(
            '点击了 ${provider.count} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.toSpanTwo(),
        child: Icon(Icons.arrow_forward_outlined),
      ),
    );
  }
}
