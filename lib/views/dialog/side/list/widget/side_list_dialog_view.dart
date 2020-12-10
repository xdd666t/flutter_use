import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/views/dialog/assist/typedef/function.dart';

class SideListDialogView extends StatelessWidget {
  SideListDialogView({
    Key key,
    this.title,
    this.imageUrl,
    this.data,
    this.onItem,
  }) : super(key: key);

  ///标题
  final String title;

  ///标题图片
  final String imageUrl;

  ///数据源
  final List<String> data;

  ///点击item回调
  final DialogParamSingleCallback<int> onItem;

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
                  height: auto(100),
                  margin: EdgeInsets.only(left: auto(40)),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    data[index],
                    style: TextStyle(
                      color: Color(0xFF333333),
                      fontSize: setSp(28),
                    ),
                  ),
                ),

                //分割线
                Container(
                  margin: EdgeInsets.only(left: auto(40)),
                  height: auto(1),
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
      padding: EdgeInsets.symmetric(horizontal: auto(40), vertical: auto(20)),
      child: Text(
        title,
        style: TextStyle(
          color: Color(0xFF333333),
          fontSize: setSp(28),
        ),
      ),
    );
  }

  Widget _buildTitle() {
    return Container(
      padding: EdgeInsets.all(auto(40)),
      child: Row(
        children: [
          //图片
          imageUrl != null && imageUrl != ''
              ? Container(
                  margin: EdgeInsets.only(right: auto(20)),
                  child: Image.network(
                    imageUrl,
                    height: auto(50),
                    width: auto(50),
                  ),
                )
              : Container(),

          //文字
          Text(
            title,
            style: TextStyle(
              color: Color(0xFF333333),
              fontSize: setSp(32),
              fontWeight: FontWeight.bold,
            ),
          )
        ],
      ),
    );
  }

  Widget _buildBg({List<Widget> children, BuildContext context}) {
    return Container(
      color: Colors.white,
      height: double.infinity,
      width: auto(450),
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
