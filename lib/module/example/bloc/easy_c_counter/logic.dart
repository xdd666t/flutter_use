import 'package:flutter_use/module/example/bloc/easy_c/easy_c.dart';

import 'state.dart';

class CounterEasyC extends EasyC<CounterEasyCState> {
  CounterEasyC() : super(CounterEasyCState().init());

  ///自增
  void increment() => emit(state.clone()..count = ++state.count);
}
