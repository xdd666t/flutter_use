import 'package:flutter/material.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class ProHighCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProHighCounterProvider(),
      child: _counterConsumer(),
    );
  }

  Widget _counterConsumer() {
    return Consumer<ProHighCounterProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(title: const Text('Provider-Easy范例')),
          body: Center(
            child: Text('点击了 ${provider.state.count} 次',
                style: TextStyle(fontSize: 30.0)),
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () => provider.increment(),
            child: const Icon(Icons.add),
          ),
        );
      },
    );
  }

  Widget _counterSelector() {
    return Selector<ProHighCounterProvider, ProHighCounterProvider>(
      shouldRebuild: (previous, next) {
        // deal some logic
        return true;
      },
      selector: (context, provider) => provider,
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(title: const Text('Provider-Easy范例')),
          body: Center(
            child: Text('点击了 ${provider.state.count} 次',
                style: TextStyle(fontSize: 30.0)),
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () => provider.increment(),
            child: const Icon(Icons.add),
          ),
        );
      },
    );
  }
}
