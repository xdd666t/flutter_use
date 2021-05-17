import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/counter_high/state.dart';

class ProHighCounterProvider extends ChangeNotifier {
  final state = ProHighCounterState();

  void increment() {
    state.count++;
    notifyListeners();
  }
}
