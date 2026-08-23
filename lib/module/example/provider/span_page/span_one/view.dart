import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProSpanOnePage extends StatelessWidget {
  const ProSpanOnePage({super.key});

  @override
  Widget build(BuildContext context) {
    final provider = context.read<ProSpanOneProvider>();

    return Scaffold(
      appBar: AppBar(title: const Text('SpanOne范例')),
      body: Center(
        child: Consumer<ProSpanOneProvider>(
          builder: (_, _, _) {
            return Text(
              '点击了 ${provider.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.toSpanTwo(),
        child: Icon(Icons.arrow_forward_outlined),
      ),
    );
  }
}
