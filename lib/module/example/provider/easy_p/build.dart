import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/easy_p/easy_p.dart';

class EasyPBuilder<T extends ChangeNotifier> extends StatelessWidget {
  const EasyPBuilder(
    this.builder, {
    Key? key,
  }) : super(key: key);

  final Widget Function() builder;

  @override
  Widget build(BuildContext context) {
    EasyP.register<T>(context);
    return builder();
  }
}

class EasyPBuilderAll<T extends ChangeNotifier> extends StatelessWidget {
  const EasyPBuilderAll(
    this.builder, {
    Key? key,
  }) : super(key: key);

  final Widget Function(BuildContext context, T easyP) builder;

  @override
  Widget build(BuildContext context) {
    return builder(context, EasyP.register<T>(context));
  }
}
