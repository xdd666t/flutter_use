import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

TextEditingController? _ctlOne;
TextEditingController? _ctlTwo;

class AttachDialogScalePoint extends StatelessWidget {
  const AttachDialogScalePoint({Key? key}) : super(key: key);

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
      onDismiss: () {
        _ctlOne?.dispose();
        _ctlTwo?.dispose();
      },
      builder: (_) {
        Widget inputText(TextEditingController? controller) {
          return SizedBox(
            width: 50,
            child: TextField(
              textAlign: TextAlign.center,
              controller: controller,
            ),
          );
        }

        return Container(
          width: 450,
          height: 350,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          child: Column(children: [
            //获取dx和dy数据
            Container(
              margin: const EdgeInsets.only(top: 20, bottom: 50),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const Text('dx:  '),
                  inputText(_ctlOne = TextEditingController(text: '25')),
                  const SizedBox(width: 30),
                  const Text('dy:  '),
                  inputText(_ctlTwo = TextEditingController(text: '0')),
                ],
              ),
            ),

            const Text('click add icon'),
            const SizedBox(height: 20),
            Builder(builder: (context) {
              return Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: () => scalePoint(context),
                  child: const Icon(Icons.add),
                ),
              );
            })
          ]),
        );
      },
    );
  }

  void scalePoint(BuildContext context) {
    SmartDialog.showAttach(
      targetContext: context,
      targetBuilder: (targetOffset, targetSize) {
        return Offset(targetOffset.dx, targetOffset.dy);
      },
      alignment: Alignment.bottomCenter,
      animationType: SmartAnimationType.scale,
      scalePointBuilder: (selfSize) {
        var halfWidth = (selfSize.width / 2);
        return Offset(
          double.tryParse(_ctlOne?.text ?? halfWidth.toString()) ?? halfWidth,
          double.tryParse(_ctlTwo?.text ?? '0') ?? 0,
        );
      },
      builder: (_) {
        return SizedBox(
          width: 50,
          child: Stack(children: <Widget>[
            Container(
              margin: const EdgeInsets.only(left: 25),
              child: Container(
                width: 14,
                height: 14,
                color: Colors.white,
                transform: Matrix4.rotationZ(pi / 4),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top: 7),
              width: 80,
              height: 130,
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.all(Radius.circular(4)),
              ),
              alignment: Alignment.center,
              child: const Text('指\n定\n缩\n放\n点'),
            ),
          ]),
        );
      },
    );
  }
}
