import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/logic.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';
import 'package:get/get.dart';

class HimalayaAudioConsole extends StatelessWidget {
  const HimalayaAudioConsole({
    Key? key,
    required this.data,
    required this.onRightArrow,
    required this.onLeftArrow,
    required this.onCatalog,
    required this.onCover,
    required this.onPlay,
    required this.onProgress,
    required this.onSpeed,
    required this.onSubtitle,
    required this.onTiming,
    required this.onVolume,
    required this.onLove,
    required this.onPlayModel,
  }) : super(key: key);

  ///数据源
  final HimalayaSubItemInfo data;

  ///左切换
  final ParamVoidCallback onLeftArrow;

  ///右切换
  final ParamVoidCallback onRightArrow;

  ///播放
  final ParamVoidCallback onPlay;

  ///喜欢
  final ParamVoidCallback onLove;

  ///播放模式
  final ParamVoidCallback onPlayModel;

  ///封面
  final ParamVoidCallback onCover;

  ///进度条
  final ParamVoidCallback onProgress;

  ///音量
  final ParamVoidCallback onVolume;

  ///字幕
  final ParamVoidCallback onSubtitle;

  ///倍速
  final ParamVoidCallback onSpeed;

  ///定时
  final ParamVoidCallback onTiming;

  ///目录
  final ParamVoidCallback onCatalog;

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

      //播放进度、信息
      Expanded(
        child: Row(children: [
          //作品封面
          _buildCover(),

          //播放进度和作品信息
          _buildPlayInfo(),
        ]),
      ),

      //播放设置
      Row(children: [
        //声音调节
        _buildVolume(),

        //字幕
        _buildSubtitle(),

        //倍速
        _buildSpeed(),

        //定时
        _buildTiming(),

        //目录
        _buildCatalog(),
      ]),
    ]);
  }

  Widget _buildPlayInfo() {
    return Expanded(
      child: Container(
        margin: EdgeInsets.only(right: 30.dp),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          //标题和事件
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            Row(children: [
              //标题信息
              GetBuilder<HimalayaLogic>(
                builder: (logic) {
                  return Text(
                    data.title,
                    style: TextStyle(fontSize: 15.sp),
                  );
                },
              ),

              Container(width: 15.dp),

              //副标题信息
              GetBuilder<HimalayaLogic>(
                builder: (logic) {
                  return Text(
                    data.subTitle ?? '',
                    style: TextStyle(fontSize: 15.sp),
                  );
                },
              ),
            ]),

            //进度
            Text('01:30 / 03:42', style: TextStyle(fontSize: 16.sp)),
          ]),

          //进度
          GestureDetector(
            onTap: () => onProgress(),
            child: Container(
              height: 10.dp,
              margin: EdgeInsets.only(top: 7.dp),
              child: Stack(alignment: Alignment.centerLeft, children: [
                //总进度条
                Container(
                  height: 3.dp,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10.dp),
                    color: Colors.grey,
                  ),
                ),

                //播放进度条
                Container(
                  width: 210.dp,
                  height: 3.dp,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10.dp),
                    color: Colors.red,
                  ),
                ),

                //锚点
                Positioned(
                  left: 200.dp,
                  child: Icon(Icons.circle, size: 10.dp, color: Colors.red),
                ),
              ]),
            ),
          ),
        ]),
      ),
    );
  }

  Widget _buildCover() {
    return Container(
      height: 50.dp,
      width: 50.dp,
      margin: EdgeInsets.only(left: 30.dp, right: 20.dp),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(5.dp),
        child: GestureDetector(
          onTap: () => onCover(),
          child: GetBuilder<HimalayaLogic>(
            builder: (logic) {
              return Image.network(data.tag ?? '');
            },
          ),
        ),
      ),
    );
  }

  Widget _buildCatalog() {
    return GestureDetector(
      onTap: () => onCatalog(),
      child: Icon(
        CupertinoIcons.text_append,
        size: 20.dp,
        color: Colors.grey,
      ),
    );
  }

  Widget _buildTiming() {
    return GestureDetector(
      onTap: () => onTiming(),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 20.dp),
        child: Text(
          '定时',
          style: TextStyle(
            fontSize: 16.sp,
            fontWeight: FontWeight.bold,
            color: Colors.grey.withOpacity(0.8),
          ),
        ),
      ),
    );
  }

  Widget _buildSpeed() {
    return GestureDetector(
      onTap: () => onSpeed(),
      child: Text(
        '倍速',
        style: TextStyle(
          fontSize: 16.sp,
          fontWeight: FontWeight.bold,
          color: Colors.grey.withOpacity(0.8),
        ),
      ),
    );
  }

  Widget _buildSubtitle() {
    return GestureDetector(
      onTap: () => onSubtitle(),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 20.dp),
        child: Icon(
          CupertinoIcons.textformat,
          size: 20.dp,
          color: Colors.grey,
        ),
      ),
    );
  }

  Widget _buildVolume() {
    return GestureDetector(
      onTap: () => onVolume(),
      child: Icon(
        CupertinoIcons.speaker_1,
        size: 20.dp,
        color: Colors.grey,
      ),
    );
  }

  Widget _buildPlayMode() {
    return GestureDetector(
      onTap: () => onPlayModel(),
      child: Icon(
        CupertinoIcons.arrow_2_squarepath,
        size: 20.dp,
        color: Colors.grey,
      ),
    );
  }

  Widget _buildLove() {
    return GestureDetector(
      onTap: () => onLove(),
      child: Container(
        margin: EdgeInsets.only(left: 30.dp, right: 20.dp),
        child: Icon(
          Icons.favorite_border,
          size: 20.dp,
          color: Colors.grey,
        ),
      ),
    );
  }

  Widget _buildPlay() {
    return GestureDetector(
      onTap: () => onPlay(),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 15.dp),
        child: Icon(
          CupertinoIcons.arrowtriangle_right_circle_fill,
          color: Colors.red,
          size: 50.dp,
        ),
      ),
    );
  }

  Widget _buildRightSwitch() {
    return GestureDetector(
      onTap: () => onRightArrow(),
      child: Icon(
        CupertinoIcons.forward_end_fill,
        color: Colors.red,
        size: 17.dp,
      ),
    );
  }

  Widget _buildLeftSwitch() {
    return GestureDetector(
      onTap: () => onLeftArrow(),
      child: Icon(
        CupertinoIcons.backward_end_fill,
        color: Colors.red,
        size: 17.dp,
      ),
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      height: 70.dp,
      padding: EdgeInsets.symmetric(horizontal: 23.dp),
      decoration: const BoxDecoration(
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
