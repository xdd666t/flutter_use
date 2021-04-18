part of 'counter_cubit.dart';

class CounterState {
  late int count;

  CounterState init() {
    return CounterState()..count = 0;
  }

  CounterState clone() {
    return CounterState()..count = count;
  }
}

