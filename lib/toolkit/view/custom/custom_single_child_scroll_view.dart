import 'dart:ui';

import 'package:flutter/material.dart';

class CustomSingleChildScrollView extends StatelessWidget {
  const CustomSingleChildScrollView({super.key, this.child});

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    return ScrollConfiguration(
      behavior: MyCustomScrollBehavior(),
      child: SingleChildScrollView(
        controller: ScrollController(),
        child: child,
      ),
    );
  }
}

///自定义手势滑动
class MyCustomScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
    PointerDeviceKind.touch,
    PointerDeviceKind.mouse,
  };
}
