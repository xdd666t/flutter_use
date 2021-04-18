import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///NavigationRail组件为侧边栏
class SideNavigation extends StatelessWidget {
  SideNavigation({
    required this.onItem,
    required this.selectedIndex,
    required this.sideItems,
    required this.isUnfold,
    required this.onUnfold,
    required this.isScale,
    required this.onScale,
  });

  ///侧边栏item
  final List sideItems;

  ///选择的index
  final int selectedIndex;
  final ParamSingleCallback onItem;

  ///是否展开  点击展开事件
  final bool isUnfold;
  final ParamSingleCallback<bool> onUnfold;

  ///缩放事件
  final bool isScale;
  final ParamSingleCallback<bool> onScale;

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      backgroundColor: Colors.white,
      //阴影Z轴高度
      elevation: 3,
      extended: isUnfold,
      labelType: isUnfold
          ? NavigationRailLabelType.none
          : NavigationRailLabelType.selected,
      //侧边栏中的item
      destinations: sideItems.map((item) => _buildItem(item)).toList(),
      //顶部widget
      leading: _buildTopLeading(),
      //底部widget
      trailing: _buildBottomTrailing(),
      selectedIndex: selectedIndex,
      onDestinationSelected: (int index) => onItem(index),
    );
  }

  Widget _buildBottomTrailing() {
    return Container(
      alignment: Alignment.bottomLeft,
      padding: const EdgeInsets.all(20),
      child: Wrap(
        direction: Axis.vertical,
        spacing: 20.dp,
        children: [
          //展开按钮
          // CupertinoSwitch(
          //   value: isUnfold,
          //   onChanged: onUnfold,
          // ),

          Container(
            width: 70.dp,
            child: Text('开启缩放'),
          ),

          //缩放按钮
          CupertinoSwitch(
            value: isScale,
            onChanged: onScale,
          ),
        ],
      ),
    );
  }

  Widget _buildTopLeading() {
    return Center(
      child: Container(
        width: 80.dp,
        height: 80.dp,
        margin: const EdgeInsets.all(8.0),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          image: DecorationImage(
              image: NetworkImage(
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383029432,2292503864&fm=26&gp=0.jpg"),
              fit: BoxFit.cover),
        ),
      ),
    );
  }

  NavigationRailDestination _buildItem(item) {
    return NavigationRailDestination(
      icon: item.icon,
      label: Container(
        padding: EdgeInsets.only(top: 10.dp),
        child: Text(
          item.title,
        ),
      ),
    );
  }
}
