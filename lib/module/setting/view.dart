import 'package:flutter/material.dart';
import 'package:flutter_use/toolkit/utils/log_util.dart';
import 'package:get/get.dart';
import 'package:visibility_detector/visibility_detector.dart';

import 'logic.dart';

class SettingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(SettingLogic());
    final state = Get.find<SettingLogic>().state;

    return VisibilityDetector(
      key: Key('Setting'),
      onVisibilityChanged: (info) => Log.d(info.visibleFraction),
      child: Container(
        alignment: Alignment.center,
        child: Text("设置页面"),
      ),
    );
  }
}
