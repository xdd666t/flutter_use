import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';
import 'state.dart';

class ProExtendedCounterPage extends StatelessWidget {
  late final ProExtendedCounterProvider mProvider;
  late final ProExtendedCounterState mState;

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProExtendedCounterProvider(),
      child: Selector<ProExtendedCounterProvider, ProExtendedCounterProvider>(
        shouldRebuild: (previous, next) => false,
        selector: (context, provider) => provider,
        builder: (context, provider, child) {
          mProvider = provider;
          mState = provider.state;
          return _buildPage(context);
        },
      ),
    );
  }

  Widget _buildPage(BuildContext context) {
    return _buildSelector();
  }

  Widget _buildConsumer() {
    return Consumer<ProExtendedCounterProvider>(
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(title: const Text('Provider-Extended范例')),
          body: Center(
            child: Text(
              '点击了 ${mState.count} 次',
              style: TextStyle(fontSize: 30.0),
            ),
          ),
          floatingActionButton: child,
        );
      },
      child: FloatingActionButton(
        onPressed: () => mProvider.increment(),
        child: const Icon(Icons.add),
      ),
    );
  }

  Widget _buildSelector() {
    return Selector<ProExtendedCounterProvider, ProExtendedCounterProvider>(
      shouldRebuild: (previous, next) {
        // deal some logic
        return true;
      },
      selector: (context, provider) => provider,
      builder: (context, provider, child) {
        return Scaffold(
          appBar: AppBar(title: const Text('Provider-Extended范例')),
          body: Center(
            child:
                Text('点击了 ${mState.count} 次', style: TextStyle(fontSize: 30.0)),
          ),
          floatingActionButton: child,
        );
      },
      child: FloatingActionButton(
        onPressed: () => mProvider.increment(),
        child: const Icon(Icons.add),
      ),
    );
  }
}
