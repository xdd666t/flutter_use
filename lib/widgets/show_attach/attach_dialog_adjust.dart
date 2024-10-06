import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class AttachDialogAdjust extends StatelessWidget {
  const AttachDialogAdjust({Key? key}) : super(key: key);

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
    attachDialog(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.bottomCenter,
        adjustBuilder: (AttachParam attachParam) {
          return AttachAdjustParam(
            alignment: Alignment.topCenter,
            builder: (_) {
              return Padding(
                padding: const EdgeInsets.only(bottom: 30),
                child: attachParam.selfWidget,
              );
            },
          );
        },
        builder: (_) {
          return Container(height: 50, width: 30, color: Colors.red);
        },
      );
    }

    //target widget
    SmartDialog.show(
      useSystem: true,
      builder: (_) {
        return Container(
          height: 300,
          width: 500,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          alignment: Alignment.center,
          child: Builder(builder: (context) {
            return ElevatedButton(
              onPressed: () => attachDialog(context),
              child: const Text('target widget'),
            );
          }),
        );
      },
    );
  }
}
