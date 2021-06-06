import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'cubit.dart';
import 'state.dart';

class BlCubitCounterPage extends StatelessWidget {
  final BlCubitCounterCubit cubit = BlCubitCounterCubit();

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => cubit,
      child: _buildPage(),
    );
  }

  Widget _buildPage() {
    return Scaffold(
      appBar: AppBar(title: Text('Bloc-Cubit范例')),
      body: Center(
        child: BlocBuilder<BlCubitCounterCubit, BlCubitCounterState>(
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
    );
  }
}
