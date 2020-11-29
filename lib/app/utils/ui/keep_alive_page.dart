import 'package:flutter/material.dart';

//页面保活方法
Widget keepAliveWrapper(Widget child) => KeepAliveWidget(child);

class KeepAliveWidget extends StatefulWidget {
  final Widget child;
  const KeepAliveWidget(this.child);

  @override
  State<StatefulWidget> createState() {
    return  _KeepAliveState();
  }
}

class _KeepAliveState extends State<KeepAliveWidget> with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => true;

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return widget.child;
  }
}

