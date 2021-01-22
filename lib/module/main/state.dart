import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/keep_alive_page.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/module/example/view.dart';
import 'package:flutter_use/module/function/view.dart';

class MainState {
  ///选择index
  var selectedIndex;

  ///控制是否展开
  var isUnfold;

  ///分类按钮数据源
  List<BtnInfo> list;

  ///Navigation的item信息
  List<BtnInfo> itemList;

  ///PageView页面
  List<Widget> pageList;
  PageController pageController;

  MainState() {
    //初始化index
    selectedIndex = 0;
    //默认不展开
    isUnfold = false;
    //PageView页面
    pageList = [
      keepAliveWrapper(FunctionPage()),
      keepAliveWrapper(ExamplePage()),
      keepAliveWrapper(Center(child: Container())),
    ];
    //item栏目
    itemList = [
      BtnInfo(
        title: "功能",
        icon: Icon(Icons.bubble_chart),
      ),
      BtnInfo(
        title: "范例",
        icon: Icon(Icons.opacity),
      ),
      BtnInfo(
        title: "设置",
        icon: Icon(Icons.settings),
      ),
    ];
    //页面控制器
    pageController = PageController();
  }
}
