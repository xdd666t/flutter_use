part of 'counter_cubit.dart';

class BlocCounterState {
  late int count;

  BlocCounterState init() {
    return BlocCounterState()..count = 0;
  }

  BlocCounterState clone() {
    return BlocCounterState()..count = count;
  }
}

