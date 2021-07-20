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

    return Scaffold(
      appBar: AppBar(title: Text('Provider-High范例')),
      body: Center(
        child: Consumer<ProHighCounterProvider>(
          builder: (context, provider, child) {
            return Text(
              '点击了 ${provider.state.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
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
