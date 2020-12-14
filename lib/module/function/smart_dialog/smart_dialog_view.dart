import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/app/base/base_scaffold.dart';
import 'package:flutter_use/module/common/widget/function_items.dart';
import 'package:flutter_use/module/example/example_cubit.dart';
import 'package:flutter_use/module/function/smart_dialog/smart_dialog_cubit.dart';

class SmartDialogPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => SmartDialogCubit(),
      child:
          BlocBuilder<SmartDialogCubit, SmartDialogState>(builder: _buildBody),
    );
  }

  Widget _buildBody(BuildContext context, SmartDialogState state) {
    return BaseScaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('SmartDialog')),
      body: FunctionItems(
        items: state.items,
        constraints: BoxConstraints(minWidth: 100, minHeight: 36),
        onItem: (String tag) {
          BlocProvider.of<SmartDialogCubit>(context).showFun(context, tag);
        },
      ),
    );
  }
}
