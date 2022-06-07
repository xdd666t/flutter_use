import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

import 'state.dart';

part 'widget/custom_scale_transition.dart';

class AnimationLogic extends GetxController {
  final AnimationState state = AnimationState();

  ///测试功能模块
  void showFun(tag) async {
    switch (tag) {

      ///AnimationWidget
      case AnimationTag.animationWidget:
        _animationWidget();
        break;
    }
  }

  void _animationWidget() {
    SmartDialog.show(builder: (_) {
      return _CustomScaleTransition();
    });
  }
}
