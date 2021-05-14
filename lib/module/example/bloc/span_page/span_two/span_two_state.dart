part of 'span_two_cubit.dart';

class BlocSpanTwoState {
  late int count;

  ///初始化方法
  BlocSpanTwoState init() {
    return BlocSpanTwoState()..count = 0;
  }

  ///克隆方法,针对于刷新界面数据
  BlocSpanTwoState clone() {
    return BlocSpanTwoState()..count = count;
  }
}
