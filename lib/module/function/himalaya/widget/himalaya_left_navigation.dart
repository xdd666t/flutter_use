import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';
import 'package:get/get.dart';

typedef ItemListBuilder = List<Widget> Function(HimalayaItemInfo item);

class HimalayaLeftNavigation extends StatelessWidget {
  HimalayaLeftNavigation({
    Key key,
    this.data,
    this.onTap,
  }) : super(key: key);

  final HimalayaState data;

  final ParamSingleCallback<Rx<HimalayaSubItemInfo>> onTap;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //喜马拉雅logo图标
      _buildLogo(),

      //遍历俩层循环：不同item栏目 - 可点击,可滑动
      //第一层：标题 + 子item列表
      //第二层：子item详细布局
      _buildItemListBg(itemListBuilder: (item) {
        return [
          //最外层item - 大标题
          _buildTitle(item.title),

          //子栏目 - 列表
          Column(
            children: item.subItemList.map((e) {
              return _buildItem(item: e, callback: onTap);
            }).toList(),
          ),
        ];
      }),
    ]);
  }

  Widget _buildItemListBg({ItemListBuilder itemListBuilder}) {
    return Expanded(
      child: Scrollbar(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: data.leftItemList.map((e) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: itemListBuilder(e),
              );
            }).toList(),
          ),
        ),
      ),
    );
  }

  Widget _buildItem({
    Rx<HimalayaSubItemInfo> item,
    ParamSingleCallback<Rx<HimalayaSubItemInfo>> callback,
  }) {
    return Obx(
      () => InkWell(
        onTap: () => callback(item),
        child: Container(
          padding: EdgeInsets.symmetric(vertical: 9.dp),
          child: Row(children: [
            //选中红色长方形条块
            Container(
              height: 17.dp,
              width: 2.dp,
              color: item().isSelected ? Colors.red : Colors.transparent,
              margin: EdgeInsets.only(right: 21.dp),
            ),

            //图标
            Icon(
              item().icon,
              size: 18,
              color: item().isSelected ? Colors.red : Colors.black,
            ),

            //描述
            Container(
              margin: EdgeInsets.only(left: 10.dp),
              child: Text(
                item().title,
                style: TextStyle(
                  color: item().isSelected ? Colors.red : Colors.black,
                ),
              ),
            ),
          ]),
        ),
      ),
    );
  }

  Widget _buildTitle(String title) {
    return Container(
      margin: EdgeInsets.only(left: 23.dp, top: 20.dp, bottom: 5.dp),
      child: Text(
        title,
        style: TextStyle(
          fontSize: 14.sp,
          color: Colors.grey,
        ),
      ),
    );
  }

  Widget _buildLogo() {
    return Container(
      margin: EdgeInsets.only(left: 23.dp),
      child: Image.network(
        ImageHimalayaConfig.logo,
        width: 100.dp,
      ),
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      color: Colors.grey.withOpacity(0.06),
      padding: EdgeInsets.only(top: 18.dp),
      width: 200.dp,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
