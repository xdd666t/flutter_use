import 'package:flutter/cupertino.dart';
import 'package:flutter/widgets.dart';

typedef FocusNodeBuilder = Widget Function(
    BuildContext context, FocusNode focusNode);
typedef OnLostFocus = void Function(Widget widget, FocusNode focusNode);

class FocusWidget extends StatefulWidget {
  final FocusNode focusNode;
  final Widget child;
  final OnLostFocus? onLostFocus;
  final bool showFocusArea;

  const FocusWidget({
    Key? key,
    required this.child,
    required this.focusNode,
    this.showFocusArea = false,
    this.onLostFocus,
  }) : super(key: key);

  @override
  FocusWidgetState createState() => FocusWidgetState();

  static FocusWidget builder(
      BuildContext context, {
        required FocusNodeBuilder builder,
        showFocusArea = false,
        OnLostFocus? onLostFocus,
      }) {
    // print('builder area $showFocusArea');
    final focusNode = FocusNode();
    return FocusWidget(
      focusNode: focusNode,
      showFocusArea: showFocusArea,
      onLostFocus: onLostFocus,
      child: builder(
        context,
        focusNode,
      ),
    );
  }
}

class FocusWidgetState extends State<FocusWidget> {
  OverlayEntry? _overlayEntry;
  late Rect rect;

  @override
  void initState() {
    // print('state init');
    widget.focusNode.addListener(update);
    super.initState();
  }

  @override
  void didUpdateWidget(FocusWidget oldWidget) {
    // print('didUpdateWidget');
    widget.focusNode.removeListener(update);
    widget.focusNode.addListener(update);
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    widget.focusNode.removeListener(update);
    super.dispose();
  }

  void update() {
    final renderBox = context.findRenderObject() as RenderBox;
    final size = renderBox.size;
    final offset = renderBox.localToGlobal(Offset.zero);
    rect = Rect.fromLTWH(offset.dx, offset.dy, size.width, size.height);
    _createOverlay();
  }

  void _removeOverlay() {
    _overlayEntry?.remove();
    _overlayEntry = null;
  }

  void _createOverlay() {
    _removeOverlay();
    if (widget.focusNode.hasFocus) {
      // print('has focus');
      final children = <Widget>[
        Listener(
          behavior: HitTestBehavior.translucent,
          onPointerMove: (e) {
            final scope = FocusScope.of(context);
            scope.unfocus();
          },
          onPointerUp: (e) {
            // print('onPointerDown');
            if (rect.contains(e.position) == false) {
              // print('超出');
              final scope = FocusScope.of(context);
              scope.unfocus();
              if (widget.onLostFocus != null)
                widget.onLostFocus?.call(widget.child, widget.focusNode);
              _removeOverlay();
            }
          },
        ),
      ];
      if (widget.showFocusArea) {
        children.insert(
            0,
            Positioned.fromRect(
              rect: rect,
              child: Container(
                color: Color(0x60ff0000),
              ),
            ));
      }
      _overlayEntry = new OverlayEntry(
        builder: (context) {
          return Stack(
            children: children,
          );
        },
      );
      Overlay.of(context)?.insert(_overlayEntry!);
    }
  }

  @override
  Widget build(BuildContext context) {
    return NotificationListener<LayoutChangedNotification>(
      child: widget.child,
      onNotification: (LayoutChangedNotification notification) {
        // print('notification $notification');
        update();
        return true;
      },
    );
  }
}