import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProHighCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProHighCounterProvider(),
      builder: (context, child) => _buildPage(context),
    );
  }

  Widget _buildPage(BuildContext context) {
    final provider = context.read<ProHighCounterProvider>();
    final state = provider.state;

    return Scaffold(
      appBar: AppBar(title: Text('Provider-High范例')),
      body: Center(
        child: Selector<ProHighCounterProvider, int>(
          selector: (context, provider) => state.count,
          builder: (context, value, child) {
            return Text('点击了 ${value} 次', style: TextStyle(fontSize: 30.0));
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}
