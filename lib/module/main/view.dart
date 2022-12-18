import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/module/main/logic.dart';
import 'package:flutter_use/module/main/state.dart';
import 'package:get/get.dart';

import '../../toolkit/typedef/function.dart';

part 'widget/side_navigation.dart';

class MainPage extends StatelessWidget {
  MainPage({Key? key}) : super(key: key);

  final MainLogic logic = Get.put(MainLogic());
  final MainState state = Get.find<MainLogic>().state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Row(children: [
        // 侧边栏区域
        _SideNavigation(
          data: state,
          //点击item
          onItem: (index) => logic.switchTap(index),
          //展开侧边栏
          onUnfold: (isUnfold) => logic.onUnfold(isUnfold),
          //缩放整体布局
          onScale: (isScale) => logic.onScale(isScale),
        ),

        // Expanded占满剩下的空间
        Expanded(
          child: Container(
            padding: const EdgeInsets.only(top: 30),
            child: PageView.builder(
              physics: const NeverScrollableScrollPhysics(),
              itemCount: state.pageList.length,
              itemBuilder: (context, index) => state.pageList[index],
              controller: state.pageController,
            ),
          ),
        ),
      ]),
    );
  }
}
