import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:get/get.dart';
import 'package:window_size/window_size.dart' as window_size;

import 'state.dart';

class HimalayaLogic extends GetxController {
  final state = HimalayaState();

  ///左切换
  void onLeftArrow() {
    showToast('左切换');
  }

  ///右切换
  void onRightArrow() {
    showToast('右切换');
  }

  ///播放
  void onPlay() {
    showToast('播放');
  }

  ///喜欢
  void onLove() {
    showToast('喜欢');
  }

  ///播放模式
  void onPlayModel() {
    showToast('播放模式');
  }

  ///封面
  void onCover() {
    showToast('封面');
  }

  ///进度条
  void onProgress() {
    showToast('进度条');
  }

  ///音量
  void onVolume() {
    showToast('音量');
  }

  ///字幕
  void onSubtitle() {
    showToast('字幕');
  }

  ///倍速
  void onSpeed() {
    showToast('倍速');
  }

  ///定时
  void onTiming() {
    showToast('定时');
  }

  ///目录
  void onCatalog() {
    showToast('目录');
  }

  ///榜单 - item
  void rankItem(HimalayaSubItemInfo itemInfo) {
    showToast(itemInfo.title);
    state.audioPlayInfo.update((val) {
      val.title = itemInfo.title;
      val.subTitle = itemInfo.subTitle;
      val.tag = itemInfo.tag;
    });
  }

  ///榜单 - 标题
  void rankTitle(String title) {
    showToast(title);
  }

  ///热门主播
  void hotAnchor(HimalayaSubItemInfo itemInfo) {
    showToast(itemInfo.subTitle);
  }

  ///最新精选 选择分类标题
  void sortTitle(Rx<HimalayaSubItemInfo> itemInfo) {
    for (var item in state.newestSortList) {
      if (item().isSelected) {
        item.update((val) => val.isSelected = false);
      }
    }
    itemInfo.update((val) => val.isSelected = true);
    showToast(itemInfo().title);
  }

  ///最新精选 点击具体card
  void onNewest(HimalayaSubItemInfo itemInfo) {
    showToast(itemInfo.title);
    state.audioPlayInfo.update((val) {
      val.title = itemInfo.title;
      val.subTitle = itemInfo.subTitle;
      val.tag = itemInfo.tag;
    });
  }

  ///猜你喜欢: 具体的卡片
  void guessDetail(HimalayaSubItemInfo itemInfo) {
    showToast(itemInfo.title);
    state.audioPlayInfo.update((val) {
      val.title = itemInfo.title;
      val.subTitle = itemInfo.subTitle;
      val.tag = itemInfo.tag;
    });
  }

  ///猜你喜欢: 换一批
  void guessChange() async {
    SmartDialog.showLoading(msg: '假装请求数据...');
    await Future.delayed(Duration(milliseconds: 2000));
    SmartDialog.dismiss();
  }

  ///处理点击banner事件
  void clickBanner(int index) {
    String pic = state.bannerList[index];
    List<String> picNames = pic.split('/');

    showToast(picNames[picNames.length - 1]);
  }

  ///处理点击左箭头事件
  void dealLeftArrow() {
    Get.back();
  }

  ///处理点击右箭头事件
  void dealRightArrow() {
    showToast('切换栏目');
  }

  ///刷新数据
  void onRefreshData() {
    showToast('刷新数据');
  }

  ///点击设置
  void onSetting() {
    showToast('设置相关参数');
  }

  ///切换皮肤
  void switchSkin() {
    showToast('切换皮肤');
  }

  ///监听搜索输入
  void onSearch(String msg) {}

  ///点击导航栏item
  void navigationItem(Rx<HimalayaSubItemInfo> item) {
    //显示点击的item栏目
    showToast(item().title);

    //处理不同item回调
    _restoreNavigationStatus(item().tag);
    switch (item().tag) {
      case TagHimalayaConfig.find:
        //发现
        break;
      case TagHimalayaConfig.broadcast:
        //广播电台
        break;
      case TagHimalayaConfig.fm:
        //私人FM
        break;
      case TagHimalayaConfig.rank:
        //排行榜
        break;
      case TagHimalayaConfig.sort:
        //全部分类
        break;
      case TagHimalayaConfig.subscription:
        //我的订阅
        break;
      case TagHimalayaConfig.update:
        //全部更新
        break;
      case TagHimalayaConfig.download:
        //下载中心
        break;
      case TagHimalayaConfig.history:
        //收听历史
        break;
      case TagHimalayaConfig.shop:
        //我的已购
        break;
      case TagHimalayaConfig.sound:
        //我喜欢的声音
        break;
      case TagHimalayaConfig.music:
        //我喜欢的音乐
        break;
    }
  }

  void _restoreNavigationStatus(String tag) {
    state.leftItemList.forEach((element) {
      element.subItemList.forEach((subElement) {
        if (subElement().tag == tag) {
          subElement.update((item) => item.isSelected = true);
        } else {
          subElement.update((item) => item.isSelected = false);
        }
      });
    });
  }

  @override
  void onInit() {
    //设置窗口顶部标题
    window_size.setWindowTitle('喜马拉雅演示demo');
    super.onInit();
  }

  @override
  void onClose() {
    window_size.setWindowTitle('Flutter Use');
    super.onClose();
  }
}
