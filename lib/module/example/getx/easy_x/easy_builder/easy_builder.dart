import 'package:flutter/material.dart';

import '../easy.dart';
import 'easy_x_controller.dart';

///刷新控件,自带回收机制
class EasyBuilder<T extends EasyXController> extends StatefulWidget {
  final Widget Function(T logic) builder;

  final String? tag;
  final bool autoRemove;

  const EasyBuilder({
    Key? key,
    required this.builder,
    this.autoRemove = true,
    this.tag,
  }) : super(key: key);

  @override
  _EasyBuilderState<T> createState() => _EasyBuilderState<T>();
}

class _EasyBuilderState<T extends EasyXController>
    extends State<EasyBuilder<T>> {
  T? controller;
  VoidCallback? _remove;

  @override
  void initState() {
    super.initState();
    controller = Easy.find<T>(tag: widget.tag);

    controller!.xNotifier.addListener(_remove = () {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    super.dispose();
    if (widget.autoRemove) {
      Easy.delete<T>(tag: widget.tag);
    }

    controller!.xNotifier.dispose();
    controller = null;
    _remove = null;
  }

  @override
  Widget build(BuildContext context) {
    return widget.builder(controller!);
  }
}
