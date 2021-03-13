import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:get/get.dart';

///适配文字
@deprecated
num setSp(num size) => ScreenUtil().setSp(size);

///自动适配,后面方便扩展
@deprecated
num auto(num size) => ScreenUtil().setWidth(size);

extension NumExtend on num {
  ///自动适配移动界面
  num get dp {
    //如果没初始化,需要初始化,防止web端直接导航页面报错
    AutoUi.init();
    return ScreenUtil().setWidth(this) * 2.72;
  }

  ///配置文字,文字适配请用sp单位
  num get sp {
    //如果没初始化,需要初始化,防止web端直接导航页面报错
    AutoUi.init();
    return ScreenUtil().setSp(this) * 2.72;
  }
}

class AutoUi {
  static AutoUi _instance;

  static void init() {
    if (_instance == null) {
      _instance = AutoUi();
      initAutoUi(Get.context);
    }
  }
}

//界面适配
void initAutoUi(BuildContext context) {
  ScreenUtil.init(
    // 设备像素大小(必须在首页中获取)
    BoxConstraints(
      maxWidth: MediaQuery.of(context).size.width,
      maxHeight: MediaQuery.of(context).size.height,
    ),
    Orientation.landscape,
    // 设计尺寸
    designSize: Size(1920, 1080),
    allowFontScaling: false,
  );
}
