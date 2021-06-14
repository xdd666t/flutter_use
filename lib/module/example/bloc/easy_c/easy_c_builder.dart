import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class EasyCBuilder<T extends BlocBase<V>, V> extends StatefulWidget {
  const EasyCBuilder({
    Key? key,
    required this.builder,
  }) : super(key: key);

  final Function(T bloc, V state) builder;

  @override
  _EasyCBuilderState createState() => _EasyCBuilderState();
}

class _EasyCBuilderState extends State<EasyCBuilder> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
