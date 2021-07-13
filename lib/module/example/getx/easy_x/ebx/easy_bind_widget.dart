import 'package:flutter/widgets.dart';
import 'package:flutter_use/module/example/getx/easy_x/easy.dart';

class EasyBindWidget extends StatefulWidget {
  const EasyBindWidget({
    Key? key,
    this.bind,
    this.tag,
    this.binds,
    this.tags,
    required this.child,
  })  : assert(
          binds == null || tags == null || binds.length == tags.length,
          'The binds and tags arrays length should be equal\n'
          'and the elements in the two arrays correspond one-to-one',
        ),
        super(key: key);

  final Object? bind;
  final String? tag;

  final List<Object>? binds;
  final List<String>? tags;

  final Widget child;

  @override
  _EasyBindWidgetState createState() => _EasyBindWidgetState();
}

class _EasyBindWidgetState extends State<EasyBindWidget> {
  @override
  Widget build(BuildContext context) {
    return widget.child;
  }

  @override
  void dispose() {
    _closeController();
    _closeControllers();

    super.dispose();
  }

  void _closeController() {
    if (widget.bind == null) {
      return;
    }

    var key = widget.bind.runtimeType.toString() + (widget.tag ?? '');
    Easy.delete(key: key);
  }

  void _closeControllers() {
    if (widget.binds == null) {
      return;
    }

    for (var i = 0; i < widget.binds!.length; i++) {
      var type = widget.binds![i].runtimeType.toString();

      if (widget.tags == null) {
        Easy.delete(key: type);
      } else {
        var key = type + (widget.tags?[i] ?? '');
        Easy.delete(key: key);
      }
    }
  }
}
