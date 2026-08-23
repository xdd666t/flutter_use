import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/keep_alive_page.dart';
import 'package:flutter_use/entity/common/btn_info.dart';
import 'package:flutter_use/module/example/view.dart';
import 'package:flutter_use/module/function/view.dart';
import 'package:flutter_use/module/setting/view.dart';

import '../../app/icon/x_icons.dart';

class MainState {
  ///选择index
  int selectedIndex = 0;

  ///控制是否展开
  bool isUnfold = false;

  ///是否缩放
  bool isScale = false;

  ///Navigation的item信息
  late final List<BtnInfo> sideItems;

  ///PageView页面
  late final List<Widget> pageList;
  late final PageController pageController;

  MainState() {
    //PageView页面
    pageList = [
      const KeepAlivePage(child: FunctionPage()),
      const KeepAlivePage(child: ExamplePage()),
      const KeepAlivePage(child: SettingPage()),
    ];

    //item栏目
    sideItems = [
      BtnInfo(title: "功能", icon: const Icon(XIcons.iterate)),
      BtnInfo(title: "范例", icon: const Icon(XIcons.product)),
      BtnInfo(title: "设置", icon: const Icon(XIcons.settings)),
    ];
    //页面控制器
    pageController = PageController();
  }

  void dispose() {
    pageController.dispose();
  }
}
