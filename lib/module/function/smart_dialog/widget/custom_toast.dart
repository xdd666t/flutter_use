import 'dart:math';

import 'package:flutter/material.dart';

class CustomToast extends StatelessWidget {
  const CustomToast({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }

  Color randomColor() {
    return Color.fromRGBO(
      Random().nextInt(256),
      Random().nextInt(256),
      Random().nextInt(256),
      1,
    );
  }
}
