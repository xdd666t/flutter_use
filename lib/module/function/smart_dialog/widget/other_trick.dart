import 'package:flutter/material.dart';

class OtherTrick extends StatefulWidget {
  const OtherTrick({Key? key, this.onUpdate}) : super(key: key);

  final Function(VoidCallback onInvoke)? onUpdate;

  @override
  _OtherTrickState createState() => _OtherTrickState();
}

class _OtherTrickState extends State<OtherTrick> {
  int _count = 0;

  @override
  void initState() {
    // here
    widget.onUpdate?.call(() {
      _count++;
      setState(() {});
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 50, vertical: 20),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Text('Counter： $_count ', style: TextStyle(fontSize: 30.0)),
      ),
    );
  }
}
