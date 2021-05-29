import 'package:flutter/material.dart';

class CounterEasyP extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }
}


///需要去全局的很简单，将ChangeNotifierEasyP套在主入口就OK了
class CounterEasyPGlobal extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }
}