import 'package:flutter_screenutil/flutter_screenutil.dart';

///适配文字
@deprecated
num setSp(num size) {
 return ScreenUtil().setSp(size);
}

///自动适配,后面方便扩展
@deprecated
num auto(num size) {
  return ScreenUtil().setWidth(size);
}

extension NumExtend on num {
  ///自动适配移动界面
  num get dp {
    return ScreenUtil().setWidth(this) * 2.72;
  }

  ///配置文字,文字适配请用sp单位
  num get sp {
    return ScreenUtil().setSp(this) * 2.72;
  }
}
