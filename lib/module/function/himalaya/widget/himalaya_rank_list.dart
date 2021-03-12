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
            _buildItemRank(index),

            //图标
            buildItemIcon(item, index),

            //信息
            _buildItemInfo(item, index),
          ]),
        ),
      ];
    });
  }

  Widget _buildItemInfo(HimalayaItemInfo item, int index) {
    return Container(
      margin: EdgeInsets.only(left: 10.dp),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          //标题
          Text(
            item.subItemList[index].title,
            style: TextStyle(fontSize: 15.sp),
          ),

          //子标题
          Container(
            margin: EdgeInsets.only(top: 5.dp),
            child: Text(
              item.subItemList[index].subTitle,
              style: TextStyle(fontSize: 13.sp, color: Colors.grey),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildItemIcon(HimalayaItemInfo item, int index) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(5.dp),
      child: Container(
        width: 60.dp,
        height: 60.dp,
        child: Image.network(item.subItemList[index].tag),
      ),
    );
  }

  Widget _buildItemRank(int index) {
    return Container(
      margin: EdgeInsets.only(right: 15.dp),
      child: Text(
        '${index + 1}',
        style: TextStyle(
          fontSize: 30.sp,
          fontWeight: FontWeight.bold,
          fontStyle: FontStyle.italic,
          color: Colors.grey.withOpacity(0.3),
        ),
      ),
    );
  }

  Widget _buildItemBg({
    HimalayaItemInfo item,
    Widget Function(int index) builder,
  }) {
    return Container(
      margin: EdgeInsets.only(top: 20.dp),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: item.subItemList.asMap().keys.map((int index) {
          return Container(
            margin: EdgeInsets.only(bottom: 20.dp),
            child: GestureDetector(
              onTap: () => onItem(item.subItemList[index]),
              child: builder(index),
            ),
          );
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
      margin: EdgeInsets.only(top: 38.dp, bottom: 50.dp),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: data.map((e) {
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: builder(e),
          );
        }).toList(),
      ),
    );
  }
}
