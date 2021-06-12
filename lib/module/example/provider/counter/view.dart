import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'provider.dart';

// class CounterPage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return ChangeNotifierProvider(
//       create: (BuildContext context) => CounterProvider(),
//       child: Scaffold(
//         appBar: AppBar(title: Text('Provider')),
//         body: Center(
//           child: Consumer<CounterProvider>(
//             builder: (context, provider, child) {
//               return Text('count ${provider.count} ');
//             },
//           ),
//         ),
//         floatingActionButton: FloatingActionButton(
//           onPressed: () {
//             Provider.of<CounterProvider>(context, listen: false).increment();
//           },
//           child: Icon(Icons.add),
//         ),
//       ),
//     );
//   }
// }

class CounterPage extends StatelessWidget {
  final provider = CounterProvider();

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => provider,
      child: Scaffold(
        appBar: AppBar(title: Text('Provider')),
        body: Center(
          child: Consumer<CounterProvider>(
            builder: (context, provider, child) {
              return Text('count ${provider.count} ');
            },
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => provider.increment(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
