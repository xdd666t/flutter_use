import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

//guide dialog
late BuildContext _aContext;
late BuildContext _bContext;

class AttachDialogGuide extends StatelessWidget {
  const AttachDialogGuide({Key? key}) : super(key: key);

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
        width: double.infinity,
        height: double.infinity,
        alignment: Alignment.center,
        margin: const EdgeInsets.symmetric(vertical: 100, horizontal: 80),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: Stack(children: [_pointA(), _pointB()]),
      );
    });
    await Future.delayed(const Duration(milliseconds: 500));
    _guideA(_aContext);
  }

  Widget _pointA() {
    return Positioned(
      left: 100,
      top: 100,
      child: Builder(builder: (context) {
        _aContext = context;
        return _point(
          onTap: () => _guideA(context),
          url:
              'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220103124847.jpg',
        );
      }),
    );
  }

  Widget _pointB() {
    return Positioned(
      right: 100,
      bottom: 100,
      child: Builder(builder: (context) {
        _bContext = context;
        return _point(
          onTap: () => _guideB(context),
          url:
              'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220103124847.jpg',
        );
      }),
    );
  }

  //example：highlightBuilder
  void _guideB(BuildContext context) {
    SmartDialog.showAttach(
      targetContext: context,
      alignment: Alignment.bottomCenter,
      highlightBuilder: (Offset targetOffset, Size targetSize) {
        return Positioned(
          top: targetOffset.dy - 10,
          left: targetOffset.dx - 10,
          child: Container(
            height: targetSize.height + 20,
            width: targetSize.width + 20,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Colors.white,
            ),
          ),
        );
      },
      animationType: SmartAnimationType.fade,
      clickMaskDismiss: false,
      keepSingle: true,
      builder: (_) {
        return _guide(onTap: () {
          SmartDialog.showToast('over');
          SmartDialog.dismiss();
        });
      },
    );
  }

  //example：highlight
  void _guideA(BuildContext context) {
    SmartDialog.showAttach(
      targetContext: context,
      alignment: Alignment.bottomCenter,
      highlightBuilder: (_, __) {
        return Positioned(
          left: 170,
          top: 190,
          child: Container(
            height: 120,
            width: 120,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Colors.white,
            ),
          ),
        );
      },
      animationType: SmartAnimationType.fade,
      clickMaskDismiss: false,
      keepSingle: true,
      builder: (_) {
        return _guide(onTap: () async {
          if (Random().nextBool()) await SmartDialog.dismiss();
          _guideB(_bContext);
        });
      },
    );
  }

  //point widget
  Widget _point({required VoidCallback onTap, required String url}) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: const BoxDecoration(
          boxShadow: [
            BoxShadow(color: Colors.black12, blurRadius: 8, spreadRadius: 0.2)
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(10),
          child: Image.network(url, height: 100, width: 100),
        ),
      ),
    );
  }

  Widget _guide({required VoidCallback? onTap}) {
    return Container(
      margin: const EdgeInsets.only(top: 20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(7),
        color: Colors.blue,
      ),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      child: Column(children: [
        const Text(
          'xdd666',
          style: TextStyle(color: Colors.white, fontSize: 20),
        ),
        ElevatedButton(
          onPressed: () => onTap?.call(),
          child: const Text('next'),
        )
      ]),
    );
  }
}
