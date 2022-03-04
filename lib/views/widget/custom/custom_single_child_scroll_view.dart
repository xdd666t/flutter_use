import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:keyboard_actions/external/platform_check/platform_check.dart';

class CustomSingleChildScrollView extends StatelessWidget {
  const CustomSingleChildScrollView({Key? key, this.child}) : super(key: key);

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    if (PlatformCheck.isAndroid || PlatformCheck.isIOS) {
      return SingleChildScrollView(child: child);
    }

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
