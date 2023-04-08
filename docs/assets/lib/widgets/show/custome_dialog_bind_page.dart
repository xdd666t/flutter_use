import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

var _index = 0;
Function()? _showDialog;

class CustomDialogBindPage extends StatelessWidget {
  const CustomDialogBindPage({Key? key}) : super(key: key);

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
    _showDialog = () {
      SmartDialog.show(builder: (_) {
        return Container(
          width: 300,
          height: 170,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
          ),
          child: ElevatedButton(
            onPressed: () => _toNewPage(false),
            child: Text('test bindPage $_index'),
          ),
        );
      });
    };

    _showDialog?.call();
  }

  Future _toNewPage(bool useSystem) async {
    Get.to(
      () {
        return Scaffold(
          appBar: AppBar(title: Text('New Page ${++_index}')),
          body: Container(
            color: _randomColor,
            alignment: Alignment.center,
            child: ElevatedButton(
              onPressed: () => _showDialog?.call(),
              child: Text('test bindPage $_index'),
            ),
          ),
        );
      },
      preventDuplicates: false,
    );
  }
}
