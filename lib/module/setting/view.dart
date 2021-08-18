import 'package:flutter/material.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:get/get.dart';
import 'package:visibility_detector/visibility_detector.dart';

import 'logic.dart';
import 'state.dart';

class SettingPage extends StatelessWidget {
  final SettingLogic logic = Get.put(SettingLogic());
  final SettingState state = Get.find<SettingLogic>().state;

  @override
  Widget build(BuildContext context) {
    return VisibilityDetector(
      key: Key('Setting'),
      onVisibilityChanged: (info) {
        Log.d(info.visibleFraction);
      },
      child: Container(
        alignment: Alignment.center,
        child: Text("设置页面"),
      ),
    );
  }
}