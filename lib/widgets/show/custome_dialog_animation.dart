import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

class CustomDialogAnimation extends StatelessWidget {
  const CustomDialogAnimation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() async {
    SmartDialog.show(
      animationTime: const Duration(milliseconds: 3000),
      animationBuilder: (
        AnimationController controller,
        Widget child,
        AnimationParam animationParam,
      ) {
        return RotationTransition(
          turns: CurvedAnimation(parent: controller, curve: Curves.elasticIn),
          child: child,
        );
      },
      builder: (_) {
        return Container(
          color: Colors.white,
          padding: const EdgeInsets.all(30),
          child: const Text('custom animation dialog'),
        );
      },
    );
  }
}
