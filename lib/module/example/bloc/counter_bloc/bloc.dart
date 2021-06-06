import 'package:bloc/bloc.dart';

import 'event.dart';
import 'state.dart';

class BlBlocCounterBloc extends Bloc<BlBlocCounterEvent, BlBlocCounterState> {
  BlBlocCounterBloc() : super(BlBlocCounterState().init());

  @override
  Stream<BlBlocCounterState> mapEventToState(BlBlocCounterEvent event) async* {
    if (event is InitEvent) {
      yield await init();
    } else if (event is CounterIncrementEvent) {
      yield increment();
    }
  }

  Future<BlBlocCounterState> init() async {
    return state.clone();
  }

  ///自增
  BlBlocCounterState increment() {
    return state.clone()..count = ++state.count;
  }
}
