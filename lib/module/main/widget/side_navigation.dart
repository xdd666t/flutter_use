import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

///NavigationRail组件为侧边栏
class SideNavigation extends StatelessWidget {
  SideNavigation({
    this.onItem,
    this.selectedIndex,
    this.sideItems,
    this.isUnfold,
    this.onUnfold,
  });

  ///侧边栏item
  final List sideItems;

  ///选择的index
  final int selectedIndex;
  final ParamSingleCallback onItem;

  ///是否展开
  final bool isUnfold;

  ///点击展开事件
  final ParamSingleCallback<bool> onUnfold;

  @override
  Widget build(BuildContext context) {
    return _navigationRailSide(context);
  }

  //增加NavigationRail组件为侧边栏
  Widget _navigationRailSide(BuildContext context) {
    //顶部widget
    Widget topWidget = Center(
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

    //底部widget
    Widget bottomWidget = Container(
      alignment: Alignment.bottomLeft,
      padding: const EdgeInsets.all(20),
      child: Wrap(
        direction: Axis.vertical,
        spacing: 20.dp,
        children: [
          //展开按钮
          CupertinoSwitch(
            value: isUnfold,
            onChanged: onUnfold,
          ),
        ],
      ),
    );

    return NavigationRail(
      backgroundColor: Colors.white,
      //阴影Z轴高度
      elevation: 3,
      extended: isUnfold,
      labelType: isUnfold
          ? NavigationRailLabelType.none
          : NavigationRailLabelType.selected,
      //侧边栏中的item
      destinations: sideItems.map((item) {
        return NavigationRailDestination(
          icon: item.icon,
          label: Container(
            padding: EdgeInsets.only(top: 10.dp),
            child: Text(
              item.title,
            ),
          ),
        );
      }).toList(),
      //顶部widget
      leading: topWidget,
//    //底部widget
      trailing: bottomWidget,
      selectedIndex: selectedIndex,
      onDestinationSelected: (int index) {
        onItem(index);
      },
    );
  }
}
