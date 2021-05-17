import 'package:flutter/material.dart';

class ProEasyCounterProvider extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }
}
