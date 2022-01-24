import 'package:flutter/material.dart';

class CustomLoadingWidget extends StatelessWidget {
  CustomLoadingWidget({
    Key? key,
    required this.msg,
    required this.background,
  }) : super(key: key);

  final String msg;
  final Color background;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      CircularProgressIndicator(
        strokeWidth: 3,
        valueColor: AlwaysStoppedAnimation(Colors.white),
      ),
      Container(
        margin: EdgeInsets.only(top: 20),
        child: Text(msg, style: TextStyle(color: Colors.white)),
      ),
    ]);
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(15),
      ),
      child: Column(mainAxisSize: MainAxisSize.min, children: children),
    );
  }
}
