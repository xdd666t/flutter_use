import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/module/common/widget/function_items.dart';
import 'package:flutter_use/module/function/dialog/dialog_cubit.dart';

class DialogPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      ///在MainBloc上使用add方法,添加初始化事件
      create: (BuildContext context) => DialogCubit(),
      child: BlocBuilder<DialogCubit, DialogState>(builder: _buildBody),
    );
  }

  Widget _buildBody(BuildContext context, DialogState state) {
    return BaseScaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('Dialog')),
      body: FunctionItems(
        items: state.items,
        constraints: BoxConstraints(minWidth: 100, minHeight: 36),
        onItem: (String tag) {
          BlocProvider.of<DialogCubit>(context).showFun(context, tag);
        },
      ),
    );
  }
}
