import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/bloc/stream/state.dart';
import 'package:flutter_use/module/example/bloc/stream/stream.dart';

class StreamPage extends StatefulWidget {
  const StreamPage({Key? key}) : super(key: key);

  @override
  _StreamPageState createState() => _StreamPageState();
}

class _StreamPageState extends State<StreamPage> {
  final logic = StreamLogic();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Bloc-Bloc范例')),
      body: Center(
        child: StreamBuilder<StreamState>(
          initialData: logic.state,
          stream: logic.stream,
          builder: (context, snapshot) {
            return Text(
              '点击了 ${snapshot.data!.count} 次',
              style: TextStyle(fontSize: 30.0),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.increment(),
        child: Icon(Icons.add),
      ),
    );
  }

  @override
  void dispose() {
    logic.dispose();
    super.dispose();
  }
}
