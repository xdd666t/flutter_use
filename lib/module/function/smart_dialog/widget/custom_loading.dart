import 'package:flutter/material.dart';

class CustomLoading extends StatefulWidget {
  const CustomLoading({Key? key, this.type = 0}) : super(key: key);

  final int type;

  @override
  _CustomLoadingState createState() => _CustomLoadingState();
}

class _CustomLoadingState extends State<CustomLoading>
    with TickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    _controller = AnimationController(
      duration: const Duration(milliseconds: 800),
      vsync: this,
    );
    _controller.forward();
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _controller.reset();
        _controller.forward();
      }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      // smile
      Visibility(visible: widget.type == 0, child: _buildLoadingOne()),

      // icon
      Visibility(visible: widget.type == 1, child: _buildLoadingTwo()),

      // normal
      Visibility(visible: widget.type == 2, child: _buildLoadingThree()),
    ]);
  }

  Widget _buildLoadingOne() {
    return Stack(alignment: Alignment.center, children: [
      RotationTransition(
        alignment: Alignment.center,
        turns: _controller,
        child: Image.network(
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101174606.png',
          height: 110,
          width: 110,
        ),
      ),
      Image.network(
        'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101181404.png',
        height: 60,
        width: 60,
      ),
    ]);
  }

  Widget _buildLoadingTwo() {
    return Stack(alignment: Alignment.center, children: [
      Image.network(
        'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101162946.png',
        height: 50,
        width: 50,
      ),
      RotationTransition(
        alignment: Alignment.center,
        turns: _controller,
        child: Image.network(
          'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101173708.png',
          height: 80,
          width: 80,
        ),
      ),
    ]);
  }

  Widget _buildLoadingThree() {
    return Center(
      child: Container(
        height: 120,
        width: 180,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(15),
        ),
        alignment: Alignment.center,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          RotationTransition(
            alignment: Alignment.center,
            turns: _controller,
            child: Image.network(
              'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211101163010.png',
              height: 50,
              width: 50,
            ),
          ),
          Container(
            margin: EdgeInsets.only(top: 20),
            child: Text('loading...'),
          ),
        ]),
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
