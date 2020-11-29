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
      children: data.map((e) => _buildItem(e)).toList(),
    );
  }

  Widget _buildItem(BtnInfo item) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(auto(20)),
      child: Stack(
        alignment: Alignment.center,
        children: [
          //背景
          Container(
            width: auto(400),
            height: auto(200),
            child: Image.network(item.bg, fit: BoxFit.cover),
          ),

          //毛玻璃背景
          ClipRRect(
            borderRadius: BorderRadius.circular(auto(100)),
            child: Container(
              height: auto(50),
              width: auto(150),
              child: _blurryBg(),
            ),
          ),

          //文字
          Center(
            child: Text(
              item.title,
              style: TextStyle(
                fontSize: setSp(20),
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),

          //点击效果
          Material(
            color: Colors.transparent,
            child: InkWell(onTap: () => onItem(item.tag)),
          )
        ],
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
      margin: EdgeInsets.symmetric(horizontal: auto(30), vertical: auto(30)),
      child: GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: auto(350), //子控件最大宽度为100
          childAspectRatio: 2, //宽高比为2:1
          crossAxisSpacing: auto(20),
          mainAxisSpacing: auto(30),
        ),
        children: children,
      ),
    );
  }
}
