import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

class HimalayaAudioConsole extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 60.dp,
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(color: Colors.black12, blurRadius: 10, spreadRadius: 2)
        ],
      ),
    );
  }
}
