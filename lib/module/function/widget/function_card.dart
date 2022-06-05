import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

class FunctionCard extends StatelessWidget {
  FunctionCard({
    Key? key,
    required this.data,
    required this.onItem,
  }) : super(key: key);

  ///数据源
  final List<BtnInfo> data;

  ///item点击回调
  final ParamSingleCallback<String> onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (index) {
      var item = data[index];
      return _buildItem(children: [
        //背景
        Container(
          width: 400,
          height: 200,
          child: Image.network(item.bg ?? '', fit: BoxFit.fitWidth),
        ),

        //毛玻璃背景
        !item.selected
            ? ClipRRect(
                borderRadius: BorderRadius.circular(100),
                child: Container(
                  height: 50,
                  width: 150,
                  child: _blurryBg(),
                ),
              )
            : Container(),

        //文字
        !item.selected
            ? Center(
                child: Text(
                  item.title ?? '',
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              )
            : Container(),

        //点击效果
        Material(
          color: Colors.transparent,
          child: InkWell(onTap: () => onItem(item.tag ?? '')),
        )
      ]);
    });
  }

  Widget _buildItem({required List<Widget> children}) {
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
        child: Container(color: Colors.black.withOpacity(0.1)),
      ),
    );
  }

  Widget _buildBg({required Widget builder(int index)}) {
    return Container(
      margin: EdgeInsets.all(20),
      child: GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: 400, //子控件最大宽度
          childAspectRatio: 2, //宽高比为2:1
          crossAxisSpacing: 20,
          mainAxisSpacing: 30,
        ),
        children: List.generate(data.length, (index) {
          return builder(index);
        }),
      ),
    );
  }
}
