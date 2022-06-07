part of '../logic.dart';

class _CustomScaleTransition extends StatefulWidget {
  @override
  _CustomScaleTransitionState createState() => _CustomScaleTransitionState();
}

class _CustomScaleTransitionState extends State<_CustomScaleTransition>
    with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;

  @override
  void initState() {
    _ctrl = AnimationController(vsync: this, duration: Duration(seconds: 2));
    _ctrl.forward();
    super.initState();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _ctrl.forward(from: 0),
      child: Container(
        color: Colors.white,
        width: 100,
        height: 100,
        child: ScaleTransition(
          alignment: Alignment(0, 0),
          scale: CurvedAnimation(parent: _ctrl, curve: Curves.linear),
          child: Column(children: [
            Container(color: Colors.red, width: 100, height: 50),
            Container(color: Colors.blue, width: 100, height: 50)
          ]),
        ),
      ),
    );
  }
}
