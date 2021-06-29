import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProEasyCounterPage extends StatelessWidget {
  final provider = ProEasyCounterProvider();

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => provider,
      child: _buildPage(),
    );
  }

  Widget _buildPage() {
    return Scaffold(
      appBar: AppBar(title: Text('Provider-Easy范例')),
      body: Center(
        child: Consumer<ProEasyCounterProvider>(
          builder: (context, provider, child) {
            return Text(
              '点击了 ${provider.count} 次',
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
