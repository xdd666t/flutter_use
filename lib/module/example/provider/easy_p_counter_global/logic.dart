import 'package:flutter/material.dart';

class CounterGlobalEasyP extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }
}