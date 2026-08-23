import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

///跑马灯控件
class MarqueeWidget extends StatefulWidget {
  const MarqueeWidget.vertical({
    super.key,
    required this.children,
    this.animationRate = 20,
    this.delayedDuration = const Duration(milliseconds: 5000),
    this.curve = Curves.linearToEaseOut,
    this.spacing = 0,
  }) : assert(animationRate > 0),
       _scrollDirection = Axis.vertical;

  const MarqueeWidget.horizontal({
    super.key,
    required this.children,
    this.animationRate = 10,
    this.delayedDuration = const Duration(milliseconds: 0),
    this.curve = Curves.linear,
    this.spacing = 10,
  }) : assert(animationRate > 0),
       assert(spacing >= 0),
       _scrollDirection = Axis.horizontal;

  ///children
  final List<Widget> children;

  ///item spacing
  final double spacing;

  ///delay time：the higher the ratio, the faster the animation time
  final Duration delayedDuration;

  ///animation rate
  final double animationRate;

  ///animation type
  final Curve curve;

  ///scroll direction
  final Axis _scrollDirection;

  @override
  _MarqueeWidgetState createState() => _MarqueeWidgetState();
}

class _MarqueeWidgetState extends State<MarqueeWidget> {
  final ScrollController _controller = ScrollController();
  int _childCount = 0;
  int _selectedIndex = 0;
  Timer? _timer;

  void _initElements() {
    _childCount = widget.children.length;
    if (_childCount > 0 && widget._scrollDirection == Axis.vertical) {
      _childCount++;
    }
  }

  void _initScroll() {
    _timer?.cancel();
    SchedulerBinding.instance.addPostFrameCallback((_) {
      if (!mounted || _childCount == 0) return;

      //deal different condition
      if (widget._scrollDirection == Axis.vertical) {
        _animateVertical();
      } else if (widget._scrollDirection == Axis.horizontal) {
        _animateHorizontal();
      }
    });
  }

  void _animateVertical() {
    if (!mounted || !_controller.hasClients) return;

    final renderObject = context.findRenderObject();
    if (renderObject is! RenderBox) return;
    final height = renderObject.size.height;

    _selectedIndex = 0;
    _timer?.cancel();
    _timer = Timer.periodic(widget.delayedDuration, (timer) {
      if (!mounted || !_controller.hasClients) {
        timer.cancel();
        return;
      }
      //reach the tail node，need to relocation to the head node
      if (_selectedIndex == (_childCount - 1)) {
        _controller.jumpTo(0);
        _selectedIndex = 0;
      }
      _selectedIndex++;
      _controller.animateTo(
        height * _selectedIndex,
        duration: _animationDuration(height),
        curve: widget.curve,
      );
    });
  }

  void _animateHorizontal() {
    if (!mounted || !_controller.hasClients) return;

    _controller.position.moveTo(0);
    final extent = _controller.position.maxScrollExtent;

    _timer?.cancel();
    _timer = Timer(widget.delayedDuration, () async {
      if (!mounted || !_controller.hasClients) return;
      await _controller.animateTo(
        extent,
        duration: _animationDuration(extent),
        curve: widget.curve,
      );
      if (mounted) _animateHorizontal();
    });
  }

  Duration _animationDuration(double extent) {
    final milliseconds = (extent * 1000 / widget.animationRate).floor();
    return Duration(milliseconds: milliseconds < 1 ? 1 : milliseconds);
  }

  @override
  void initState() {
    super.initState();

    _initElements();
    _initScroll();
  }

  @override
  void didUpdateWidget(MarqueeWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    var childrenChanged = widget.children.length != oldWidget.children.length;
    if (widget._scrollDirection != oldWidget._scrollDirection ||
        childrenChanged) {
      _initElements();
      _initScroll();
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (widget.children.isEmpty) return const SizedBox.shrink();

        return ConstrainedBox(
          constraints: constraints,
          child: ListView.separated(
            itemCount: _childCount,
            physics: const NeverScrollableScrollPhysics(),
            controller: _controller,
            scrollDirection: widget._scrollDirection,
            padding: EdgeInsets.zero,
            itemBuilder: (context, index) {
              return Container(
                alignment: Alignment.centerLeft,
                height: constraints.constrainHeight(),
                child: widget.children[index % widget.children.length],
              );
            },
            separatorBuilder: (context, index) {
              return SizedBox(
                width: widget._scrollDirection == Axis.horizontal
                    ? widget.spacing
                    : 0,
                height: widget._scrollDirection == Axis.vertical
                    ? widget.spacing
                    : 0,
              );
            },
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    _timer?.cancel();
    _controller.dispose();
    super.dispose();
  }
}
