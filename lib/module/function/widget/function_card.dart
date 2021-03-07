import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/bean/common/btn_info.dart';

class FunctionCard extends StatelessWidget {
  FunctionCard({
    Key key,
    this.data,
    this.onItem,
  }) : super(key: key);

  ///数据源
  final List<BtnInfo> data;

  ///item点击回调
  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      children: data.map((item) {
        return _buildItem(children: [
          //背景
          Container(
            width: 400.dp,
            height: 200.dp,
            child: Image.network(item.bg, fit: BoxFit.fitWidth),
          ),

          //毛玻璃背景
          !item.selected
              ? ClipRRect(
                  borderRadius: BorderRadius.circular(100.dp),
                  child: Container(
                    height: 50.dp,
                    width: 150.dp,
                    child: _blurryBg(),
                  ),
                )
              : Container(),

          //文字
          !item.selected
              ? Center(
                  child: Text(
                    item.title,
                    style: TextStyle(
                      fontSize: 20.sp,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                )
              : Container(),

          //点击效果
          Material(
            color: Colors.transparent,
            child: InkWell(onTap: () => onItem(item.tag)),
          )
        ]);
      }).toList(),
    );
  }

  Widget _buildItem({List<Widget> children}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20.dp),
      child: Stack(
        alignment: Alignment.center,
        children: children,
      ),
    );
  }

  ///主体内容区域的背景
  Widget _blurryBg() {
    return ClipRect(
      child: BackdropFilter(
        //设置图片模糊度 配套ClipRect使用，不然会造成全局模糊：BackdropFilter-毛玻璃效果
        filter: ImageFilter.blur(sigmaX: 3.0, sigmaY: 3.0),
        child: Opacity(
          opacity: 0.1,
          child: Container(color: Colors.black),
        ),
      ),
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 30.dp, vertical: 30.dp),
      child: GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: 350.dp, //子控件最大宽度为100
          childAspectRatio: 2, //宽高比为2:1
          crossAxisSpacing: 20.dp,
          mainAxisSpacing: 30.dp,
        ),
        children: children,
      ),
    );
  }
}
