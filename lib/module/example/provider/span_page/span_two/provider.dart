import 'package:flutter/material.dart';

class ProSpanTwoProvider extends ChangeNotifier {
  int count = 0;

  ///自增
  void increase() {
    count++;
    notifyListeners();
  }
}
