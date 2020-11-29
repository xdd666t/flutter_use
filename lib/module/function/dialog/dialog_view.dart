import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/function/dialog/dialog_cubit.dart';
import 'package:flutter_use/module/function/widget/function_items.dart';

class DialogPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      ///在MainBloc上使用add方法,添加初始化事件
      create: (BuildContext context) => DialogCubit(),
      child: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(),
        body: BlocBuilder<DialogCubit, DialogState>(builder: _body),
      ),
    );
  }

  Widget _body(BuildContext context, DialogState state) {
    return FunctionItems(
      items: state.items,
      constraints: BoxConstraints(minWidth: 100, minHeight: 36),
      onItem: (String tag) {
        BlocProvider.of<DialogCubit>(context).showFun(context, tag);
      },
    );
  }
}
