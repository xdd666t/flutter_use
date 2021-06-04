import 'package:flutter/material.dart';

class CounterEasyP extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }
}
