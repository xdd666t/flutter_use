import 'package:flutter/material.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_anchor.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_audio_console.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_banner.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_guess.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_personal_info.dart';
import 'package:flutter_use/module/function/himalaya/widget/himalaya_rank_list.dart';
import 'package:get/get.dart';

import 'logic.dart';
import 'state.dart';
import 'widget/himalaya_function.dart';
import 'widget/himalaya_left_navigation.dart';
import 'widget/himalaya_newest.dart';

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
          //导航栏item回调
          onTap: (HimalayaSubItemInfo item) => logic.navigationItem(item),
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

          //右侧信息流 - 可滑动部分
          himalayaBuildScrollInfoListBg(children: [
            //轮播图
            HimalayaBanner(
              data: state.bannerList,
              //具体banner的监听
              onTap: (int index) => logic.clickBanner(index),
            ),

            //猜你喜欢
            HimalayaGuess(
              data: state.guessList,
              //换一批
              onChange: () => logic.guessChange(),
              //猜你喜欢具体卡片
              onGuess: (HimalayaSubItemInfo item) => logic.guessDetail(item),
            ),

            //最新精选
            HimalayaNewest(
              data: state,
              //分类标题
              onSortTitle: (item) => logic.sortTitle(item),
              //具体精选卡片
              onNewest: (HimalayaSubItemInfo item) => logic.onNewest(item),
            ),

            //热门主播
            HimalayaAnchor(
              data: state.anchorList,
              onAnchor: (HimalayaSubItemInfo item) => logic.hotAnchor(item),
            ),

            //各类榜单
            HimalayaRankList(
              data: state.rankList,
              //标题
              onTitle: (String title) => logic.rankTitle(title),
              //榜单上具体item
              onItem: (HimalayaSubItemInfo item) => logic.rankItem(item),
            ),
          ]),
        ]),
      ]),

      //底部：音频播放控制台
      HimalayaAudioConsole(
        data: state.audioPlayInfo,
        //左切换
        onLeftArrow: () => logic.onLeftArrow(),
        //播放
        onPlay: () => logic.onPlay(),
        //右切换
        onRightArrow: () => logic.onRightArrow(),
        //喜欢
        onLove: () => logic.onLove(),
        //播放模式
        onPlayModel: () => logic.onPlayModel(),
        //封面
        onCover: () => logic.onCover(),
        //进度
        onProgress: () => logic.onProgress(),
        //音量
        onVolume: () => logic.onVolume(),
        //标题
        onSubtitle: () => logic.onSubtitle(),
        //倍速
        onSpeed: () => logic.onSpeed(),
        //定时
        onTiming: () => logic.onTiming(),
        //目录
        onCatalog: () => logic.onCatalog(),
      ),
    ]);
  }
}
