import 'package:flutter/material.dart';

import 'state.dart';

class ProExtendedCounterProvider extends ChangeNotifier {
  final state = ProExtendedCounterState();

  void increment() {
    state.count++;
    notifyListeners();
  }
}
