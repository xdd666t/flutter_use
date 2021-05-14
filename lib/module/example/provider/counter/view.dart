import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'logic.dart';

class ProviderCounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => ProviderCounterLogic(),
      child: Selector<ProviderCounterLogic, ProviderCounterLogic>(
        builder: (context, provider, child) {
          return child!;
        },
        selector: (BuildContext context, ProviderCounterLogic logic) {
          return logic;
        },
      ),
    );
  }

// Widget _counter(BuildContext context, CounterState state) {
//   return BaseScaffold(
//     appBar: AppBar(title: const Text('Cubit范例')),
//     body: Center(
//       child: Text('点击了 ${state.count} 次', style: TextStyle(fontSize: 30.0)),
//     ),
//     floatingActionButton: FloatingActionButton(
//       // onPressed: () => BlocProvider.of<CounterCubit>(context).increase(),
//       child: const Icon(Icons.add),
//     ),
//   );
// }
}
