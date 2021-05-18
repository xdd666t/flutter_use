import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_cubit.dart';

class CubitSpanTwoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => BlocSpanTwoCubit()..init(context),
      child: BlocBuilder<BlocSpanTwoCubit, BlocSpanTwoState>(builder: _body),
    );
  }

  Widget _body(BuildContext context, BlocSpanTwoState state) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('跨页面-Two')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          //改变SpanOneCubit模块数据
          BlocProvider.of<BlocSpanOneCubit>(context).increase();

          //改变当前页面数据
          BlocProvider.of<BlocSpanTwoCubit>(context).increase();
        },
        child: const Icon(Icons.add),
      ),
      body: Center(
        child: Text(
          '当前点击了 ${state.count} 次',
          style: TextStyle(fontSize: 30.0),
        ),
      ),
    );
  }
}
