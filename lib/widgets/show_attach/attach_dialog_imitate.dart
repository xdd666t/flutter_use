import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

class AttachDialogImitate extends StatelessWidget {
  const AttachDialogImitate({Key? key}) : super(key: key);

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
    SmartDialog.show(builder: (_) {
      return Container(
        width: 600,
        height: 400,
        alignment: Alignment.center,
        margin: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          home: Container(
            padding: const EdgeInsets.symmetric(horizontal: 100),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [_dropdownButton(), _imitateDropdownButton()],
            ),
          ),
        ),
      );
    });
  }

  Widget _imitateDropdownButton() {
    return Builder(builder: (context) {
      return Stack(children: [
        _dropdownButton(title: 'Attach'),
        InkWell(
          onTap: () => _imitateDialog(context),
          child: Container(height: 50, width: 140, color: Colors.transparent),
        )
      ]);
    });
  }

  //imitate widget
  Widget _dropdownButton({String title = 'Dropdown'}) {
    return DropdownButton<String>(
      value: '1',
      items: [
        DropdownMenuItem(value: '1', child: Text('$title：小呆呆')),
        const DropdownMenuItem(value: '2', child: Text('小菲菲')),
        const DropdownMenuItem(value: '3', child: Text('小猪猪'))
      ],
      onChanged: (value) {},
    );
  }

  //模仿DropdownButton
  void _imitateDialog(BuildContext context) {
    var list = ['小呆呆', '小菲菲', '小猪猪'];
    SmartDialog.showAttach(
      targetContext: context,
      usePenetrate: true,
      nonAnimationTypes: [SmartNonAnimationType.maskClose_nonAnimation],
      builder: (_) {
        return Container(
          margin: const EdgeInsets.all(10),
          decoration: const BoxDecoration(boxShadow: [
            BoxShadow(color: Colors.black12, blurRadius: 8, spreadRadius: 0.2)
          ]),
          child: Column(
            children: List.generate(list.length, (index) {
              return Material(
                color: Colors.white,
                child: InkWell(
                  onTap: () => SmartDialog.dismiss(),
                  child: Container(
                    height: 50,
                    width: 100,
                    alignment: Alignment.center,
                    child: Text(list[index]),
                  ),
                ),
              );
            }),
          ),
        );
      },
    );
  }
}
