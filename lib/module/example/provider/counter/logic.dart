import 'package:flutter/material.dart';
import 'package:flutter_use/module/example/provider/counter/state.dart';

// ignore: must_be_immutable
class ProviderCounterLogic extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
  }
}
