import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProHighCounterPage extends StatelessWidget {
  final provider = ProHighCounterProvider();

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => provider,
      child: _buildPage(),
    );
  }

  Widget _buildPage() {
    return Scaffold(
      appBar: AppBar(title: Text('Provider-High范例')),
      body: Center(
        child: Consumer<ProHighCounterProvider>(builder: (_, __, ___) {
          return Text(
            '点击了 ${provider.state.count} 次',
            style: TextStyle(fontSize: 30.0),
          );
        }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.increment(),
        child: Icon(Icons.add),
      ),
    );
  }

  Widget _buildSelector() {
    return Scaffold(
      appBar: AppBar(title: Text('Provider-Extended范例')),
      body: Center(
        child: Selector(
          shouldRebuild: (previous, next) {
            return true;
          },
          selector: (context, provider) => provider,
          builder: (_, __, ___) {
            return Text('点击了 ${provider.state.count} 次',
                style: TextStyle(fontSize: 30.0));
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
