import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

///跑马灯控件 
class MarqueeWidget extends StatefulWidget {
  const MarqueeWidget.vertical({
    Key? key,
    required this.children,
    this.animationRate = 20,
    this.delayedDuration = const Duration(milliseconds: 5000),
    this.curve = Curves.linearToEaseOut,
    this.spacing = 0,
  })  : assert(animationRate > 0),
        _scrollDirection = Axis.vertical,
        super(key: key);

  const MarqueeWidget.horizontal({
    Key? key,
    required this.children,
    this.animationRate = 10,
    this.delayedDuration = const Duration(milliseconds: 0),
    this.curve = Curves.linear,
    this.spacing = 10,
  })  : assert(animationRate > 0),
        assert(spacing >= 0),
        _scrollDirection = Axis.horizontal,
        super(key: key);

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

  _initElements() {
    _childCount = widget.children.length;
    if (_childCount > 0 && widget._scrollDirection == Axis.vertical) {
      _childCount++;
    }
  }

  _initScroll() {
    SchedulerBinding.instance?.addPostFrameCallback((timeStamp) {
      if (!mounted || _childCount == 0) return;

      //deal different condition
      if (widget._scrollDirection == Axis.vertical) {
        _animateVertical();
      } else if (widget._scrollDirection == Axis.horizontal) {
        _animateHorizontal();
      }
    });
  }

  _animateVertical() {
    var renderBox = context.findRenderObject() as RenderBox;
    var height = renderBox.size.height;

    _selectedIndex = 0;
    _timer?.cancel();
    _timer = Timer.periodic(widget.delayedDuration, (timer) {
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

  _animateHorizontal() async {
    _controller.position.moveTo(0);
    var extent = _controller.position.maxScrollExtent;

    _timer?.cancel();
    _timer = Timer(widget.delayedDuration, () async {
      await _controller.animateTo(
        extent,
        duration: _animationDuration(extent),
        curve: widget.curve,
      );
      _animateHorizontal();
    });
  }

  Duration _animationDuration(double extent) {
    return Duration(
      milliseconds: (extent * 1000 / widget.animationRate).floor(),
    );
  }

  @override
  void initState() {
    super.initState();

    _initElements();
    _initScroll();
  }

  @override
  void didUpdateWidget(MarqueeWidget oldWidget) {
    var childrenChanged = widget.children.length != oldWidget.children.length;
    if (widget._scrollDirection != oldWidget._scrollDirection ||
        childrenChanged) {
      _initElements();
      _initScroll();
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return ConstrainedBox(
          constraints: constraints,
          child: ListView.separated(
            itemCount: _childCount,
            physics: NeverScrollableScrollPhysics(),
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
              return SizedBox(width: widget.spacing);
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
