import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';


//按照宽度适配
num setWidth(num size){
  return ScreenUtil().setWidth(size);
}

//按照高度适配
num setHeight(num size){
  return ScreenUtil().setHeight(size);
}

//适配文字
num setSp(num size){
//  return ScreenUtil().setSp(size);
  return size.toDouble();
}

//自动适配,后面方便扩展
num auto(num size){
  return size.toDouble();
}


//界面适配
void autoUi(BuildContext context) {
  //填入设计稿中设备的屏幕尺寸
  //默认 width : 1080px , height:1920px , allowFontScaling:false
//    ScreenUtil.init(context);
  //假如设计稿是按iPhone6的尺寸设计的(iPhone6 750*1334)
//    ScreenUtil.init(context, width: 750, height: 1334);
  //设置字体大小根据系统的“字体大小”辅助选项来进行缩放,默认为false
//    ScreenUtil.init(context, width: 750, height: 1334, allowFontScaling: true);
  ScreenUtil.init(context, designSize: Size(750, 1334), allowFontScaling: true);
}