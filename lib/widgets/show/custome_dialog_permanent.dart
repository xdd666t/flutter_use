import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class CustomDialogPermanent extends StatelessWidget {
  const CustomDialogPermanent({Key? key}) : super(key: key);
  static const String _permanentTag = 'permanentDialog';

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() {
    SmartDialog.show(
      builder: (_) {
        return Container(
          width: 320,
          height: 180,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Padding(
                padding: EdgeInsets.fromLTRB(20, 25, 20, 20),
                child: Text(
                  'permanent 示例：\nmask 点击、返回事件都不会关闭侧边弹窗',
                  textAlign: TextAlign.center,
                ),
              ),
              Wrap(
                spacing: 20,
                children: [
                  ElevatedButton(
                    onPressed: _openPermanentDialog,
                    child: const Text('open'),
                  ),
                  ElevatedButton(
                    onPressed: () =>
                        SmartDialog.dismiss(tag: _permanentTag, force: true),
                    child: const Text('force close'),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  void _openPermanentDialog() {
    SmartDialog.show(
      tag: _permanentTag,
      keepSingle: true,
      permanent: true,
      alignment: Alignment.centerRight,
      usePenetrate: true,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          width: 170,
          height: double.infinity,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(15),
              bottomLeft: Radius.circular(15),
            ),
            boxShadow: [
              BoxShadow(color: Colors.grey, blurRadius: 8, spreadRadius: 0.2),
            ],
          ),
          child: const Text('permanent dialog'),
        );
      },
    );
  }
}
