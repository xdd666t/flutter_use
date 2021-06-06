import 'package:bloc/bloc.dart';

import 'state.dart';

class BlCubitCounterCubit extends Cubit<BlCubitCounterState> {
  BlCubitCounterCubit() : super(BlCubitCounterState().init());

  ///自增
  void increment() => emit(state.clone()..count = ++state.count);
}
