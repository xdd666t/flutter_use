import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:get/get.dart';

class ProSpanOneProvider extends ChangeNotifier {
  int count = 0;

  ///跳转到跨页面
  void toSpanTwo() {
    Get.toNamed(RouteConfig.proSpanTwoPage);
  }

  ///自增
  void increase() {
    count++;
    notifyListeners();
  }
}
