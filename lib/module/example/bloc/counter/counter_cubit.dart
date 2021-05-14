import 'package:bloc/bloc.dart';

part 'counter_state.dart';

///因为集中框架都要用计数器,所以必须加个对应框架前缀了
class BlocCounterCubit extends Cubit<BlocCounterState> {
  BlocCounterCubit() : super(BlocCounterState().init());

  ///自增
  void increase() => emit(state.clone()..count = ++state.count);
}
