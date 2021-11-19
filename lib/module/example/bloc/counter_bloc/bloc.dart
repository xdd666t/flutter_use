import 'package:bloc/bloc.dart';

import 'event.dart';
import 'state.dart';

class BlBlocCounterBloc extends Bloc<BlBlocCounterEvent, BlBlocCounterState> {
  BlBlocCounterBloc() : super(BlBlocCounterState().init()) {
    on<InitEvent>(_init);
    on<CounterIncrementEvent>(_increment);
  }

  void _init(InitEvent event, Emitter<BlBlocCounterState> emit) async {
    emit(state.clone());
  }

  ///自增
  void _increment(
    CounterIncrementEvent event,
    Emitter<BlBlocCounterState> emit,
  ) {
    state.count = ++state.count;
    emit(state.clone());
  }
}
