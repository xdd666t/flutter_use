import 'package:flutter/material.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:get/get.dart';

///适配文字
@deprecated
num setSp(num size) => UiUtil().setSp(size);

///自动适配,后面方便扩展
@deprecated
num auto(num size) => UiUtil().setWidth(size);

extension NumExtend on num {
  ///自动适配移动界面
  double get dp {
    //如果没初始化,需要初始化,防止web端直接导航页面报错
    AutoUi.init();
    return UiUtil().setWidth(this);
  }

  ///配置文字,文字适配请用sp单位
  double get sp {
    //如果没初始化,需要初始化,防止web端直接导航页面报错
    AutoUi.init();
    return UiUtil().setWidth(this);
  }
}

class AutoUi {
  static AutoUi? _instance;

  static void init() {
    if (_instance == null) {
      _instance = AutoUi();
      initAutoUi(Get.context);
    }
  }
}

//界面适配
void initAutoUi(BuildContext? context) {
  if (context != null) return;

  UiUtil.init(
    // 通过context获取设备像素大小
    context: context!,
    // 设计尺寸
    // designSize: Size(1920 / 2.72, 1080 / 2.72),
    designSize: Size(1920, 1080),
  );
}
