import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProEasyCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProEasyCounterProvider(),
      child: Consumer<ProEasyCounterProvider>(
        builder: (context, provider, child) {
          return _buildConsumer(context, provider);
        },
      ),
    );
  }

  Widget _buildConsumer(BuildContext context, ProEasyCounterProvider provider) {
    return Scaffold(
      appBar: AppBar(title: const Text('Provider-Easy范例')),
      body: Center(
        child: Text('点击了 ${provider.count} 次', style: TextStyle(fontSize: 30.0)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}
