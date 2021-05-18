import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProHighCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProHighCounterProvider(),
      child: Consumer<ProHighCounterProvider>(
        builder: (context, provider, child) {
          return _buildConsumer(context, provider);
        },
      ),
    );
  }

  Widget _buildConsumer(BuildContext context, ProHighCounterProvider provider) {
    return Scaffold(
      appBar: AppBar(title: const Text('Provider-High范例')),
      body: Center(
        child: Text(
          '点击了 ${provider.state.count} 次',
          style: TextStyle(fontSize: 30.0),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}
