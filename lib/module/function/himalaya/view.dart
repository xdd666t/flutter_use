import 'package:flutter/material.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_audio_console.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_banner.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_personal_info.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';
import 'widget/himalaya_function.dart';
import 'widget/himalaya_left_navigation.dart';

class HimalayaPage extends StatelessWidget {
  final HimalayaLogic logic = Get.put(HimalayaLogic());
  final HimalayaState state = Get.find<HimalayaLogic>().state;

  @override
  Widget build(BuildContext context) {
    return himalayaBuildBg(children: [
      //顶部：左边侧边导航栏 + 右边信息流
      himalayaBuildTopBg(children: [
        //左边导航栏
        HimalayaLeftNavigation(
          data: state,
          onTap: (Rx<HimalayaSubItemInfo> item) {
            //点击导航栏item回调
            logic.navigationItem(item);
          },
        ),

        //右边信息流
        himalayaBuildInfoListBg(children: [
          //顶部搜索框及其一些个人信息设置按钮
          HimalayaPersonalInfo(
            //搜索框输入监听
            onChanged: (String msg) => logic.onSearch(msg),
            //左箭头
            onLeftArrow: () => logic.dealLeftArrow(),
            //右箭头
            onRightArrow: () => logic.dealRightArrow(),
            //刷新按钮
            onRefresh: () => logic.onRefreshData(),
            //皮肤按钮
            onSkin: () => logic.switchSkin(),
            //设置按钮
            onSetting: () => logic.onSetting(),
          ),

          //轮播图
          HimalayaBanner(
            data: state.bannerList,
          ),
        ]),
      ]),

      //底部：音频播放控制台
      HimalayaAudioConsole(),
    ]);
  }
}
