import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

Color get _randomColor {
  return Color.fromRGBO(
    Random().nextInt(256),
    Random().nextInt(256),
    Random().nextInt(256),
    1,
  );
}

List<BuildContext> _contextList = [];

class AttachDialogLocation extends StatelessWidget {
  const AttachDialogLocation({Key? key}) : super(key: key);

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
    //target widget
    _contextList = [];
    List<Future Function()> funList = [
      () async => await _attachDialog(_contextList[0], Alignment.topLeft),
      () async => await _attachDialog(_contextList[1], Alignment.topCenter),
      () async => await _attachDialog(_contextList[2], Alignment.topRight),
      () async => await _attachDialog(_contextList[3], Alignment.centerLeft),
      () async => await _attachDialog(_contextList[4], Alignment.center),
      () async => await _attachDialog(_contextList[5], Alignment.centerRight),
      () async => await _attachDialog(_contextList[6], Alignment.bottomLeft),
      () async => await _attachDialog(_contextList[7], Alignment.bottomCenter),
      () async => await _attachDialog(_contextList[8], Alignment.bottomRight),
    ];

    await SmartDialog.show(
      //还原设置
      onDismiss: () => SmartDialog.config.attach = SmartConfigAttach(),
      builder: (_) {
        return Container(
          width: 700,
          padding: const EdgeInsets.all(50),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          child: SingleChildScrollView(
            child: Wrap(alignment: WrapAlignment.spaceEvenly, children: [
              _btn(title: 'topLeft', onTap: (context) => funList[0]()),
              _btn(title: 'topCenter', onTap: (context) => funList[1]()),
              _btn(title: 'topRight', onTap: (context) => funList[2]()),
              _btn(title: 'centerLeft', onTap: (context) => funList[3]()),
              _btn(title: 'center', onTap: (context) => funList[4]()),
              _btn(title: 'centerRight', onTap: (context) => funList[5]()),
              _btn(title: 'bottomLeft', onTap: (context) => funList[6]()),
              _btn(title: 'bottomCenter', onTap: (context) => funList[7]()),
              _btn(title: 'bottomRight', onTap: (context) => funList[8]()),
              _radio(),
              _btn(
                title: 'allOpen',
                onTap: (_) async {
                  for (var item in funList) {
                    await item();
                  }
                },
              ),
              _btn(
                title: 'allClose',
                onTap: (_) =>
                    SmartDialog.dismiss(status: SmartStatus.allAttach),
              ),
            ]),
          ),
        );
      },
    );
  }

  Widget _radio() {
    var curIndex = 1;
    var list = [
      SmartAttachAlignmentType.inside,
      SmartAttachAlignmentType.center,
      SmartAttachAlignmentType.outside
    ];
    return StatefulBuilder(
        builder: (BuildContext context, StateSetter setState) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(list.length, (index) {
          return Row(children: [
            if (index == 0) const Text("SmartAttachAlignmentType(  "),
            Text("${list[index].toString()}: "
                .replaceAll("SmartAttachAlignmentType.", "")),
            Radio(
              value: index,
              groupValue: curIndex,
              onChanged: (value) {
                curIndex = value as int;
                SmartDialog.config.attach =
                    SmartConfigAttach(attachAlignmentType: list[index]);
                setState(() {});
              },
            ),
            if (index == list.length - 1) const Text(" )"),
            const SizedBox(width: 10),
          ]);
        }),
      );
    });
  }

  Widget _btn({
    required String title,
    required Function(BuildContext context) onTap,
  }) {
    return Container(
      margin: const EdgeInsets.all(25),
      child: Builder(builder: (context) {
        Color? color = title.contains('all') ? _randomColor : null;
        _contextList.add(context);
        return SizedBox(
          width: 130,
          child: ElevatedButton(
            style: ButtonStyle(
              backgroundColor: ButtonStyleButton.allOrNull<Color>(color),
            ),
            onPressed: () => onTap(context),
            child: Text(title),
          ),
        );
      }),
    );
  }

  Future _attachDialog(
      BuildContext context, AlignmentGeometry alignment) async {
    SmartDialog.showAttach(
      targetContext: context,
      usePenetrate: true,
      alignment: alignment,
      clickMaskDismiss: false,
      builder: (_) => Container(width: 100, height: 100, color: _randomColor),
    );
    await Future.delayed(const Duration(milliseconds: 350));
  }
}
