import 'package:flutter/material.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/module/example/view.dart';
import 'package:flutter_use/module/function/view.dart';
import 'package:flutter_use/module/setting/view.dart';
import 'package:get/get.dart';

class MainState {
  ///选择index - 响应式
  late RxInt selectedIndex;

  ///控制是否展开 - 响应式
  late RxBool isUnfold;

  ///是否缩放 - 响应式
  late RxBool isScale;

  ///分类按钮数据源
  late List<BtnInfo> list;

  ///Navigation的item信息
  late List<BtnInfo> itemList;

  ///PageView页面
  late List<Widget> pageList;
  late PageController pageController;

  MainState() {
    //初始化index
    selectedIndex = 0.obs;
    //默认不展开
    isUnfold = false.obs;
    //默认不缩放
    isScale = false.obs;
    //PageView页面
    pageList = [
      KeepAlivePage(FunctionPage()),
      KeepAlivePage(ExamplePage()),
      KeepAlivePage(SettingPage()),
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
