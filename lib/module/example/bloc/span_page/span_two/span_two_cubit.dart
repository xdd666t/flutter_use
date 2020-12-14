import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';

part 'span_two_state.dart';

class SpanTwoCubit extends Cubit<SpanTwoState> {
  SpanTwoCubit() : super(SpanTwoState().init());

  void init(BuildContext context){
    BlocProvider.of<SpanOneCubit>(context).init();
  }

  ///自增
  void increase() => emit(state.clone()..count = ++state.count);
}
