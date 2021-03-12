import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

class HimalayaAudioConsole extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //左边播放按钮等控件
      Row(children: [
        //左切换
        _buildLeftSwitch(),

        //播放
        _buildPlay(),

        //右切换
        _buildRightSwitch(),

        //喜欢
        _buildLove(),

        //播放模式
        _buildPlayMode(),
      ]),

      //进度
      Row(children: []),

      //播放设置
      Row(children: [
        //声音调节
        Icon(
          CupertinoIcons.speaker_1,
          size: 20.dp,
          color: Colors.grey,
        ),

        //字幕
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20.dp),
          child: Icon(
            CupertinoIcons.compass,
            size: 20.dp,
            color: Colors.grey,
          ),
        ),

      ]),
    ]);
  }

  Widget _buildPlayMode() {
    return Icon(
      CupertinoIcons.arrow_2_squarepath,
      size: 20.dp,
      color: Colors.grey,
    );
  }

  Widget _buildLove() {
    return Container(
      margin: EdgeInsets.only(left: 30.dp, right: 20.dp),
      child: Icon(
        Icons.favorite_border,
        size: 20.dp,
        color: Colors.grey,
      ),
    );
  }

  Widget _buildPlay() {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 15.dp),
      child: Icon(
        CupertinoIcons.arrowtriangle_right_circle_fill,
        color: Colors.red,
        size: 50.dp,
      ),
    );
  }

  Widget _buildRightSwitch() {
    return Icon(
      CupertinoIcons.forward_end_fill,
      color: Colors.red,
      size: 17.dp,
    );
  }

  Widget _buildLeftSwitch() {
    return Icon(
      CupertinoIcons.backward_end_fill,
      color: Colors.red,
      size: 17.dp,
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      height: 60.dp,
      padding: EdgeInsets.symmetric(horizontal: 23.dp),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(color: Colors.black12, blurRadius: 10, spreadRadius: 2)
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: children,
      ),
    );
  }
}
