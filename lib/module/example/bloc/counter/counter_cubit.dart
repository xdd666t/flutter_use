import 'package:bloc/bloc.dart';

part 'counter_state.dart';

class CounterCubit extends Cubit<CounterState> {
  CounterCubit() : super(CounterState().init());

  ///自增
  void increase() => emit(state.clone()..count = ++state.count);
}
