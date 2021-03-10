import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';

class HimalayaNewest extends StatelessWidget {
  HimalayaNewest({
    Key key,
    this.data,
  }) : super(key: key);

  ///数据源
  final HimalayaState data;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //标题 + 子栏目细分
      Row(children: [
        //标题
        _buildTitle(),

        //有声书

        Container(
          margin: EdgeInsets.symmetric(horizontal: 18.dp),
          child: Text(
            '有声书',
            style: TextStyle(fontSize: 15.sp, color: Colors.grey),
          ),
        )
      ])
    ]);
  }

  Widget _buildTitle() {
    return Container(
      margin: EdgeInsets.only(right: 20.dp),
      child: Text(
        '最新精选',
        style: TextStyle(
          color: Colors.black,
          fontSize: 21.sp,
        ),
      ),
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 18.dp),
      width: 800.dp,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
