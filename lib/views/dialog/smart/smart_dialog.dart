import 'package:flutter/material.dart';

import 'widget/smart_dialog_view.dart';

class SmartDialog {
  ///实现单例
  factory SmartDialog() => _getInstance();

  static SmartDialog get instance => _getInstance();
  static SmartDialog _instance;

  static SmartDialog _getInstance() {
    if (_instance == null) {
      _instance = SmartDialog._internal();
    }
    return _instance;
  }

  ///呈现的Widget
  Widget _widget;
  GlobalKey<SmartDialogViewState> _key;
  OverlayEntry overlayEntry;

  SmartDialog._internal() {
    ///初始化一些参数
    overlayEntry = OverlayEntry(
      builder: (BuildContext context) {
        return SmartDialog.instance._widget ?? Container();
      },
    );
  }

  void show() {
    //展示弹窗
    _key = GlobalKey<SmartDialogViewState>();
    _widget = SmartDialogView(
      key: _key,
      child: Container(
        height: 200,
        width: 500,
        color: Colors.deepOrange,
      ),
      onBgTap: () {
        dismiss();
      },
    );

    rebuild();
  }

  ///关闭动画
  Future<void> dismiss() async {
    _widget = null;

    SmartDialogViewState smartDialogViewState = _key?.currentState;
    await smartDialogViewState?.dismiss();

    rebuild();
  }

  ///刷新重建
  ///
  /// 实际上是调用OverlayEntry中builder方法,重建布局
  void rebuild() {
    overlayEntry.markNeedsBuild();
  }
}
