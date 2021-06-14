class BlCustomBuilderState {
  late int count;

  BlCustomBuilderState init() {
    return BlCustomBuilderState()..count = 0;
  }

  BlCustomBuilderState clone() {
    return BlCustomBuilderState()..count = count;
  }
}
