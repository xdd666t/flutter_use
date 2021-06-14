import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'cubit.dart';
import 'state.dart';

class BlCustomBuilderPage extends StatelessWidget {
  final cubit = BlCustomBuilderCubit();

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => cubit,
      child: Scaffold(
        appBar: AppBar(title: Text('Bloc-自定义Builder范例')),
        body: Center(
          child: BlocEasyBuilder<BlCustomBuilderCubit, BlCustomBuilderState>(
            builder: (context, state) {
              return Text(
                '点击了 ${cubit.state.count} 次',
                style: TextStyle(fontSize: 30.0),
              );
            },
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => cubit.increment(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

///自定义Builder
class BlocEasyBuilder<T extends BlocBase<V>, V> extends StatefulWidget {
  const BlocEasyBuilder({
    Key? key,
    required this.builder,
  }) : super(key: key);

  final Function(BuildContext context, V state) builder;

  @override
  _BlocEasyBuilderState createState() => _BlocEasyBuilderState<T, V>();
}

class _BlocEasyBuilderState<T extends BlocBase<V>, V>
    extends State<BlocEasyBuilder<T, V>> {
  late T _bloc;
  late V _state;
  late StreamSubscription<V> _listen;

  @override
  void initState() {
    _bloc = BlocProvider.of<T>(context);
    _state = _bloc.state;

    //数据改变刷新Widget
    _listen = _bloc.stream.listen((event) {
      setState(() {});
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return widget.builder(context, _state);
  }

  @override
  void dispose() {
    _listen.cancel();
    super.dispose();
  }
}
