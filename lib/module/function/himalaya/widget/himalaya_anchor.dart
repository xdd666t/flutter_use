import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

///热门主播
class HimalayaAnchor extends StatelessWidget {
  HimalayaAnchor({
    Key? key,
    required this.data,
    required this.onAnchor,
  }) : super(key: key);

  ///数据源
  final List<HimalayaSubItemInfo> data;

  ///热门主播点击具体回调
  final ParamSingleCallback<HimalayaSubItemInfo> onAnchor;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //标题
      _buildTitle(),

      //卡片
      _buildCardBg(builder: (HimalayaSubItemInfo itemInfo) {
        return [
          //排名信息
          _buildRank(itemInfo),

          //头像
          _buildHeadPic(itemInfo),

          //主播名称
          _buildAnchorName(itemInfo),
        ];
      })
    ]);
  }

  Widget _buildAnchorName(HimalayaSubItemInfo itemInfo) {
    return Positioned(
      bottom: 0,
      left: 0,
      child: Container(
        width: 130.dp,
        margin: EdgeInsets.only(top: 120.dp),
        alignment: Alignment.bottomCenter,
        child: Text(
          itemInfo.subTitle ?? '',
          style: TextStyle(
            fontSize: 18.sp,
          ),
        ),
      ),
    );
  }

  Widget _buildHeadPic(HimalayaSubItemInfo itemInfo) {
    return Container(
      margin: EdgeInsets.only(top: 35.dp, right: 20.dp),
      child: GestureDetector(
        onTap: () => onAnchor(itemInfo),
        child: ClipOval(
          child: Container(
            height: 130.dp,
            width: 130.dp,
            child: Image.network(
              itemInfo.tag ?? '',
              fit: BoxFit.cover,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildRank(HimalayaSubItemInfo itemInfo) {
    return Positioned(
      right: 0,
      top: 0,
      child: Text(
        itemInfo.title,
        style: TextStyle(
          fontSize: 55.sp,
          color: Colors.grey.withOpacity(0.3),
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildTitle() {
    return Text(
      '热门主播',
      style: TextStyle(
        color: Colors.black,
        fontSize: 21.sp,
      ),
    );
  }

  Widget _buildCardBg({
    required List<Widget> Function(HimalayaSubItemInfo item) builder,
  }) {
    return Container(
      margin: EdgeInsets.only(top: 10.dp),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: List.generate(data.length, (index) {
          return Container(
            width: 150.dp,
            height: 200.dp,
            child: Stack(children: builder(data[index])),
          );
        }),
      ),
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      width: 800.dp,
      margin: EdgeInsets.only(top: 28.dp, bottom: 10.dp),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
