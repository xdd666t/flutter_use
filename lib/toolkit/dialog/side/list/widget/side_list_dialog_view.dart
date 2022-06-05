import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

class SideListDialogView extends StatelessWidget {
  SideListDialogView({
    Key? key,
    required this.title,
    this.imageUrl,
    required this.data,
    required this.onItem,
  }) : super(key: key);

  ///标题
  final String title;

  ///标题图片
  final String? imageUrl;

  ///数据源
  final List<String> data;

  ///点击item回调
  final ParamSingleCallback<int> onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      context: context,
      children: [
        //标题
        _buildTitle(),

        //灰色条-标题
        _buildGrayTitle(),

        //内容体
        Expanded(child: _buildContent(context)),
      ],
    );
  }

  Widget _buildContent(BuildContext context) {
    return MediaQuery.removePadding(
      removeTop: true,
      context: context,
      child: ListView.builder(
        itemCount: data.length,
        itemBuilder: (BuildContext context, int index) {
          return InkWell(
            onTap: () {
              onItem(index);
            },
            child: Column(
              children: [
                //内容
                Container(
                  height: 100.dp,
                  margin: EdgeInsets.only(left: 40.dp),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    data[index],
                    style: TextStyle(
                      color: Color(0xFF333333),
                      fontSize: 28.sp,
                    ),
                  ),
                ),

                //分割线
                Container(
                  margin: EdgeInsets.only(left: 40.dp),
                  height: 1.dp,
                  color: Colors.black.withOpacity(0.3),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildGrayTitle() {
    return Container(
      color: Color(0xFFEEEEEE),
      width: double.infinity,
      padding: EdgeInsets.symmetric(horizontal: 40.dp, vertical: 20.dp),
      child: Text(
        title,
        style: TextStyle(
          color: Color(0xFF333333),
          fontSize: 28.sp,
        ),
      ),
    );
  }

  Widget _buildTitle() {
    return Container(
      padding: EdgeInsets.all(40.dp),
      child: Row(
        children: [
          //图片
          imageUrl != null && imageUrl != ''
              ? Container(
                  margin: EdgeInsets.only(right: 20.dp),
                  child: Image.network(
                    imageUrl!,
                    height: 50.dp,
                    width: 50.dp,
                  ),
                )
              : Container(),

          //文字
          Text(
            title,
            style: TextStyle(
              color: Color(0xFF333333),
              fontSize: 32.sp,
              fontWeight: FontWeight.bold,
            ),
          )
        ],
      ),
    );
  }

  Widget _buildBg({
    required List<Widget> children,
    required BuildContext context,
  }) {
    return Container(
      color: Colors.white,
      height: double.infinity,
      width: 450.dp,
      padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top),
      child: Material(
        color: Colors.transparent,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: children,
        ),
      ),
    );
  }
}
