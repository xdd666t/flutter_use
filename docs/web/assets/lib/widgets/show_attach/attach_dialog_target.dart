import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:get/get.dart';

class AttachDialogTarget extends StatelessWidget {
  const AttachDialogTarget({Key? key}) : super(key: key);

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
    await _targetDialog(
      target: const Offset(0, 100),
      url:
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220104101555.jpeg',
      left: true,
    );

    await _targetDialog(
      target: const Offset(0, 220),
      url:
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220104101608.jpg',
      left: true,
    );
    await _targetDialog(
      target: const Offset(0, 340),
      url:
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220104110204.png',
      left: true,
    );
    await _targetDialog(
      target: const Offset(0, 460),
      url:
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220104110147.png',
      left: true,
    );
    await _targetDialog(
      target: Offset(MediaQuery.of(Get.context!).size.width, 580),
      url:
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220104101304.gif',
      left: false,
    );
  }

  Future _targetDialog({
    required Offset target,
    required String url,
    required bool left,
  }) async {
    SmartDialog.showAttach(
      targetContext: null,
      targetBuilder: (_, __) => target,
      usePenetrate: true,
      alignment: left ? Alignment.centerRight : Alignment.centerLeft,
      builder: (_) {
        return Container(
          height: 100,
          width: 200,
          margin: EdgeInsets.only(
            top: 10,
            bottom: 10,
            left: left ? 0 : 10,
            right: left ? 10 : 0,
          ),
          padding: EdgeInsets.only(right: left ? 50 : 0, left: left ? 0 : 50),
          alignment: left ? Alignment.centerRight : Alignment.centerLeft,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(left ? 0 : 20),
              bottomLeft: Radius.circular(left ? 0 : 20),
              topRight: Radius.circular(left ? 20 : 0),
              bottomRight: Radius.circular(left ? 20 : 0),
            ),
            boxShadow: const [
              BoxShadow(color: Colors.blue, blurRadius: 8, spreadRadius: 0.2)
            ],
          ),
          child: Image.network(url),
        );
      },
    );
    await Future.delayed(const Duration(milliseconds: 1500));
  }
}
