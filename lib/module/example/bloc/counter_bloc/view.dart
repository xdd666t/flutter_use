import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'bloc.dart';
import 'event.dart';
import 'state.dart';

class BlCubitCounterPage extends StatelessWidget {
  final BlBlocCounterBloc bloc = BlBlocCounterBloc();

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => bloc..add(InitEvent()),
      child: _buildPage(),
    );
  }

  Widget _buildPage() {
    return Scaffold(
      appBar: AppBar(title: Text('Bloc-Bloc范例')),
      body: Center(
        child: BlocBuilder<BlBlocCounterBloc, BlBlocCounterState>(
          builder: (context, state) {
            return Text(
              '点击了 ${bloc.state.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => bloc.add(CounterIncrementEvent()),
        child: Icon(Icons.add),
      ),
    );
  }
}
