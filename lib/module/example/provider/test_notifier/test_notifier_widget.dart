import 'package:flutter/material.dart';

class TestNotifierWidget extends StatefulWidget {
  const TestNotifierWidget({
    Key? key,
    this.controller,
  }) : super(key: key);

  final TestNotifierController? controller;

  @override
  _TestNotifierState createState() => _TestNotifierState();
}

class _TestNotifierState extends State<TestNotifierWidget> {
  @override
  void initState() {
    ///添加回调 value改变时,自动触发回调内容
    widget.controller?.addListener(_change);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      widget.controller?.value ?? '初始值为空',
      style: TextStyle(fontSize: 30.0),
    );
  }

  ///被触发的回调
  void _change() {
    setState(() {});
  }
}

///控制器
class TestNotifierController extends ChangeNotifier {
  String _value = '0';

  String get value => _value;

  set value(String newValue) {
    if (_value == newValue) return;
    _value = newValue;
    notifyListeners();
  }
}
