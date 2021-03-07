import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:get/get.dart';

import 'state.dart';

class HimalayaLogic extends GetxController {
  final state = HimalayaState();

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
}
