import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';

class SpanOnePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<SpanOneCubit, SpanOneState>(builder: _body);
  }

  Widget _body(BuildContext context, SpanOneState state) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('跨页面-One')),
      floatingActionButton: FloatingActionButton(
        onPressed: () =>
            BlocProvider.of<SpanOneCubit>(context).toSpanTwo(context),
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
