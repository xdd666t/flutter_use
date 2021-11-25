import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/logic.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';
import 'package:get/get.dart';

class HimalayaNewest extends StatelessWidget {
  HimalayaNewest({
    Key? key,
    required this.data,
    required this.onSortTitle,
    required this.onNewest,
  }) : super(key: key);

  ///数据源
  final HimalayaState data;

  ///点击标题栏目
  final ParamSingleCallback<HimalayaSubItemInfo> onSortTitle;

  ///猜你喜欢具体栏目
  final ParamSingleCallback<HimalayaSubItemInfo> onNewest;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //标题 + 子栏目细分
      Row(children: [
        //标题
        _buildTitle(),

        //分类标题
        _buildSortTitle(),
      ]),

      //精选具体card
      _buildCardBg(builder: (item) {
        return [
          //图片卡片
          _buildPicCard(item),

          //文字描述
          Text(item.title, style: TextStyle(fontSize: 15.sp)),

          //子标题
          _buildSubTitle(item),
        ];
      }),
    ]);
  }

  Widget _buildSubTitle(HimalayaSubItemInfo item) {
    return Text(
      '${item.subTitle}',
      style: TextStyle(fontSize: 13.sp, color: Colors.grey),
    );
  }

  Widget _buildPicCard(HimalayaSubItemInfo item) {
    return Container(
      width: 150.dp,
      height: 150.dp,
      margin: EdgeInsets.only(top: 16.dp, bottom: 6.dp),
      decoration: BoxDecoration(),
      child: GestureDetector(
        onTap: () => onNewest(item),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(15.dp),
          child: Image.network(item.tag ?? ''),
        ),
      ),
    );
  }

  Widget _buildCardBg({
    required List<Widget> Function(HimalayaSubItemInfo item) builder,
  }) {
    return Wrap(
      runSpacing: 20.dp,
      spacing: 12.dp,
      children: List.generate(data.newestCardList.length, (index) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: builder(data.newestCardList[index]),
        );
      }),
    );
  }

  Widget _buildSortTitle() {
    return Row(
      children: data.newestSortList.map((e) {
        return GestureDetector(
          onTap: () => onSortTitle(e),
          child: Container(
            margin: EdgeInsets.symmetric(horizontal: 8.dp),
            child: GetBuilder<HimalayaLogic>(
              builder: (logic) {
                return Text(
                  e.title,
                  style: TextStyle(
                    fontSize: 16.dp,
                    color: e.isSelected ? Colors.red : Colors.grey,
                  ),
                );
              },
            ),
          ),
        );
      }).toList(),
    );
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

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      width: 800.dp,
      margin: EdgeInsets.only(top: 28.dp, bottom: 18.dp),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
