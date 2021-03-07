import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///搜索框 个人信息 设置等按钮
class HimalayaPersonalInfo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //左右切换箭头
      Icon(Icons.arrow_back_ios),
      Icon(Icons.arrow_forward_ios),
    ]);
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      margin: EdgeInsets.only(top: 18.dp),
      child: Row(),
    );
  }
}
