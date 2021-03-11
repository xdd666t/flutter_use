import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';
import 'package:get/get.dart';

class HimalayaNewest extends StatelessWidget {
  HimalayaNewest({
    Key key,
    this.data,
    this.onSortTitle,
  }) : super(key: key);

  ///数据源
  final HimalayaState data;

  ///点击标题栏目
  final ParamSingleCallback<Rx<HimalayaSubItemInfo>> onSortTitle;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //标题 + 子栏目细分
      Row(children: [
        //标题
        _buildTitle(),

        //分类标题
        _buildSortTitle(),
      ])
    ]);
  }

  Widget _buildSortTitle() {
    return Row(
      children: data.newestSortList.map((e) {
        return GestureDetector(
          onTap: () => onSortTitle(e),
          child: Container(
            margin: EdgeInsets.symmetric(horizontal: 8.dp),
            child: Obx(() => Text(
                  e().title,
                  style: TextStyle(
                    fontSize: 16.dp,
                    color: e().isSelected ? Colors.red : Colors.grey,
                  ),
                )),
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
