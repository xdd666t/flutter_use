import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/module/example/bloc/counter/counter_cubit.dart';

class BlocCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => BlocCounterCubit(),
      child: BlocBuilder<BlocCounterCubit, BlocCounterState>(builder: _counter),
    );
  }

  Widget _counter(BuildContext context, BlocCounterState state) {
    return BaseScaffold(
      appBar: AppBar(title: const Text('Cubit范例')),
      body: Center(
        child: Text('点击了 ${state.count} 次', style: TextStyle(fontSize: 30.0)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => BlocProvider.of<BlocCounterCubit>(context).increase(),
        child: const Icon(Icons.add),
      ),
    );
  }
}
