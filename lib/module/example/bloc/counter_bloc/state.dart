class BlBlocCounterState {
  late int count;

  BlBlocCounterState init() {
    return BlBlocCounterState()..count = 0;
  }

  BlBlocCounterState clone() {
    return BlBlocCounterState()..count = count;
  }
}
