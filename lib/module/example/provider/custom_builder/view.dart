import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

class CustomBuilderPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => CustomBuilderProvider(),
      builder: (context, child) {
        return _buildPage(context);
      },
    );
  }

  Widget _buildPage(BuildContext context) {
    final provider = context.read<CustomBuilderProvider>();

    return Scaffold(
      appBar: AppBar(title: Text('Provider-自定义Builder范例')),
      body: Center(
        child: EasyBuilder<CustomBuilderProvider>(
          () => Text(
            '点击了 ${provider.count} 次',
            style: TextStyle(fontSize: 30.0),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => provider.increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}

///自定义Builder
class EasyBuilder<T> extends StatelessWidget {
  const EasyBuilder(
    this.builder, {
    Key? key,
  }) : super(key: key);

  final Widget Function() builder;

  @override
  Widget build(BuildContext context) {
    Provider.of<T>(context);
    return builder();
  }
}
