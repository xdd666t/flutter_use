import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/example/screen_adapt/screen_adapt_cubit.dart';

class ScreenAdaptView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => ScreenAdaptCubit(),
      child:
          BlocBuilder<ScreenAdaptCubit, ScreenAdaptState>(builder: _buildBody),
    );
  }

  Widget _buildBody(BuildContext context, ScreenAdaptState state) {
    return Container();
  }
}
