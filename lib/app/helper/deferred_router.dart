import 'package:flutter/material.dart';

class DeferredRouter extends StatelessWidget {
  const DeferredRouter({
    super.key,
    required this.future,
    required this.builder,
  });

  final Future future;

  final WidgetBuilder builder;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (context, snapshot) {
        // web scene
        if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        }
        if (snapshot.connectionState != ConnectionState.done) {
          return const Center(child: CircularProgressIndicator());
        }
        return builder(context);
      },
    );
  }
}
