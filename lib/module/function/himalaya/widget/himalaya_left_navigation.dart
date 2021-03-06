import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:get/get.dart';

class HimalayaLeftNavigation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //图标
      _buildLogo(),

      //推荐总栏目
      _buildTitle('推荐'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '发现'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '广播电台'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '私人FM'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '排行榜'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '全部分类'),

      //我听总栏目
      _buildTitle('我听'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '我的订阅'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '全部更新'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '下载中心'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '收听历史'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '我的已购'),

      //我创建的听单
      _buildTitle('我创建的听单'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '我喜欢的声音'),
      //发现
      _buildItem(icon: Icons.account_tree_sharp, title: '我喜欢的音乐'),
    ]);
  }

  Container _buildItem({IconData icon, String title}) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 9.dp),
      child: Row(
        children: [
          //图标
          Icon(icon, size: 18),

          //描述
          Container(
            margin: EdgeInsets.only(left: 10.dp),
            child: Text(title),
          ),
        ],
      ),
    );
  }

  Widget _buildTitle(String title) {
    return Container(
      margin: EdgeInsets.only(top: 20.dp, bottom: 5.dp),
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
      child: Image.network(
        ImageHimalayaConfig.logo,
        width: 100.dp,
      ),
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      color: Colors.grey.withOpacity(0.1),
      padding: EdgeInsets.only(left: 23.dp, top: 18.dp),
      width: 200.dp,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: children,
      ),
    );
  }
}
