class CounterEasyCState {
  late int count;

  CounterEasyCState init() {
    return CounterEasyCState()..count = 0;
  }

  CounterEasyCState clone() {
    return CounterEasyCState()..count = count;
  }
}
