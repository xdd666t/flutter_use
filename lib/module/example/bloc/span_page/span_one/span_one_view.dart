import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';

class CubitSpanOnePage extends StatefulWidget {
  @override
  _SpanOnePageState createState() => _SpanOnePageState();
}

class _SpanOnePageState extends State<CubitSpanOnePage> {

  @override
  void initState() {
    BlocProvider.of<BlocSpanOneCubit>(context).init();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<BlocSpanOneCubit, BlocSpanOneState>(builder: _body);
  }

  Widget _body(BuildContext context, BlocSpanOneState state) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('跨页面-One')),
      floatingActionButton: FloatingActionButton(
        onPressed: () =>
            BlocProvider.of<BlocSpanOneCubit>(context).toSpanTwo(context),
        child: const Icon(Icons.arrow_forward_outlined),
      ),
      body: Center(
        child: Text(
          'SpanTwoPage点击了 ${state.count} 次',
          style: TextStyle(fontSize: 30.0),
        ),
      ),
    );
  }
}
