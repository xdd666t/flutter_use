import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

part 'span_two_state.dart';

class BlocSpanTwoCubit extends Cubit<BlocSpanTwoState> {
  BlocSpanTwoCubit() : super(BlocSpanTwoState().init());

  void init(BuildContext context) {
    emit(state.init());
  }

  ///自增
  void increase() => emit(state.clone()..count = ++state.count);
}
