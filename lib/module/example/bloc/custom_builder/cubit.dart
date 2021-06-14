import 'package:bloc/bloc.dart';

import 'state.dart';

class BlCustomBuilderCubit extends Cubit<BlCustomBuilderState> {
  BlCustomBuilderCubit() : super(BlCustomBuilderState().init());

  ///自增
  void increment() => emit(state.clone()..count = ++state.count);
}
