import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';

class HimalayaRankList extends StatelessWidget {
  HimalayaRankList({
    Key key,
    this.data,
    this.onItem,
    this.onTitle,
  }) : super(key: key);

  ///数据源
  final List<HimalayaItemInfo> data;

  ///点击标题
  final ParamSingleCallback<String> onTitle;

  ///点击具体item
  final ParamSingleCallback<HimalayaSubItemInfo> onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (HimalayaItemInfo item) {
      return [
        //标题
        _buildTitle(item.title),

        //榜单
        _buildItemBg(
          item: item,
          builder: (int index) => Row(children: [
            //名次
            Text(index.toString()),

            //图标



          ]),
        ),
      ];
    });
  }

  Widget _buildItemBg({
    HimalayaItemInfo item,
    Widget Function(int index) builder,
  }) {
    return Container(
      margin: EdgeInsets.only(top: 20.dp),
      child: Column(
        children: item.subItemList.asMap().keys.map((int index) {
          return builder(index);
        }).toList(),
      ),
    );
  }

  Widget _buildTitle(String title) {
    return GestureDetector(
      onTap: () => onTitle(title),
      child: Row(children: [
        //标题名称
        Text(
          title,
          style: TextStyle(color: Colors.black, fontSize: 21.sp),
        ),

        //图标
        Container(
          margin: EdgeInsets.only(left: 10.dp),
          child: Icon(
            Icons.arrow_forward_ios,
            color: Colors.grey,
            size: 15,
          ),
        ),
      ]),
    );
  }

  Widget _buildBg({HimalayaItemBuilder builder}) {
    return Container(
      width: 800.dp,
      margin: EdgeInsets.only(top: 38.dp, bottom: 10.dp),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: data.map((e) {
          return Column(
            children: builder(e),
          );
        }).toList(),
      ),
    );
  }
}
