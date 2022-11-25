import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/keep_alive_page.dart';
import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/module/example/view.dart';
import 'package:flutter_use/module/function/view.dart';
import 'package:flutter_use/module/setting/view.dart';

class MainState {
  ///选择index
  late int selectedIndex;

  ///控制是否展开
  late bool isUnfold;

  ///是否缩放
  late bool isScale;

  ///Navigation的item信息
  late List<BtnInfo> sideItems;

  ///PageView页面
  late List<Widget> pageList;
  late PageController pageController;

  MainState() {
    //初始化index
    selectedIndex = 0;
    //默认不展开
    isUnfold = false;
    //默认不缩放
    isScale = false;
    //PageView页面
    pageList = [
      const KeepAlivePage(child: FunctionPage()),
      const KeepAlivePage(child: ExamplePage()),
      const KeepAlivePage(child: SettingPage()),
    ];

    //item栏目
    sideItems = [
      BtnInfo(
        title: "功能",
        icon: const Icon(Icons.bubble_chart),
      ),
      BtnInfo(
        title: "范例",
        icon: const Icon(Icons.opacity),
      ),
      BtnInfo(
        title: "设置",
        icon: const Icon(Icons.settings),
      ),
    ];
    //页面控制器
    pageController = PageController();
  }
}
