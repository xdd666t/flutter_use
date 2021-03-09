import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///搜索框 个人信息 设置等按钮
class HimalayaPersonalInfo extends StatelessWidget {
  HimalayaPersonalInfo({
    Key key,
    this.onRefresh,
    this.onLeftArrow,
    this.onRightArrow,
    this.onSetting,
    this.onSkin,
    this.onChanged,
  }) : super(key: key);

  ///左右箭头回调
  final ParamVoidCallback onLeftArrow;
  final ParamVoidCallback onRightArrow;

  ///刷新回调
  final ParamVoidCallback onRefresh;

  ///刷新回调
  final ParamVoidCallback onSkin;

  ///刷新回调
  final ParamVoidCallback onSetting;

  ///输入框输入监听
  final ParamSingleCallback<String> onChanged;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //左右切换箭头 + 搜索框 + 刷新按钮
      Row(children: [
        //左右箭头 + 刷新图标
        _buildArrowAndRefresh(),

        //搜索框
        _buildSearch(),
      ]),

      //个人信息布局
      _buildPersonal(),
    ]);
  }

  Widget _buildPersonal() {
    return Row(children: [
      //头像
      ClipOval(
        child: Image.network(
          ImageHimalayaConfig.headPic,
          height: 35.dp,
          width: 35.dp,
        ),
      ),

      //皮肤
      Container(
        margin: EdgeInsets.only(left: 30.dp),
        child: IconButton(
          icon: Icon(
            Icons.skip_next,
            color: Colors.grey,
            size: 20,
          ),
          onPressed: onSkin,
        ),
      ),

      //设置
      Container(
        margin: EdgeInsets.only(left: 30.dp, right: 30.dp),
        child: IconButton(
          icon: Icon(
            Icons.settings,
            color: Colors.grey,
            size: 20,
          ),
          onPressed: onSetting,
        ),
      )
    ]);
  }

  Widget _buildSearch() {
    return Container(
      height: 30.dp,
      width: 300.dp,
      margin: EdgeInsets.only(left: 24.dp),
      decoration: BoxDecoration(
        color: Colors.grey.withOpacity(0.1),
        borderRadius: BorderRadius.circular(36),
      ),
      child: Row(children: [
        //搜索图标
        Container(
          margin: EdgeInsets.only(left: 10.dp),
          child: Icon(Icons.search, color: Colors.grey, size: 18),
        ),

        //输入框
        Container(
          width: 250.dp,
          padding: EdgeInsets.only(left: 12.dp),
          child: TextField(
            autofocus: false,
            textAlign: TextAlign.start,
            textInputAction: TextInputAction.search,
            decoration: InputDecoration(
              ///较小空间时，使组件正常渲染，包括文本垂直居中
              isDense: true,
              border: InputBorder.none,
              contentPadding: EdgeInsets.all(0.0),
            ),
            onChanged: onChanged,
          ),
        ),
      ]),
    );
  }

  Widget _buildArrowAndRefresh() {
    return Row(
      children: [
        //左图标
        IconButton(
          icon: Icon(Icons.arrow_back_ios, size: 16),
          onPressed: onLeftArrow,
        ),

        //右图标
        Container(
          margin: EdgeInsets.only(left: 30.dp),
          child: IconButton(
            icon: Icon(Icons.arrow_forward_ios_outlined, size: 16),
            onPressed: onRightArrow,
          ),
        ),

        //刷新图标
        Container(
          margin: EdgeInsets.only(left: 30.dp),
          child: IconButton(
            icon: Icon(Icons.autorenew, size: 16),
            onPressed: onRefresh,
          ),
        ),
      ],
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.dp, horizontal: 18.dp),
      width: 800.dp,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: children,
      ),
    );
  }
}
