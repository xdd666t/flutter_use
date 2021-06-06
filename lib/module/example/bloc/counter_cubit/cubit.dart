import 'package:bloc/bloc.dart';

import 'state.dart';

///因为集中框架都要用计数器,所以必须加个对应框架前缀了
class BlCubitCounterCubit extends Cubit<BlCubitCounterState> {
  BlCubitCounterCubit() : super(BlCubitCounterState().init());

  ///自增
  void increment() => emit(state.clone()..count = ++state.count);
}
