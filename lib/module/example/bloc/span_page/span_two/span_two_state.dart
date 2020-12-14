part of 'span_two_cubit.dart';

class SpanTwoState {
  int count;

  ///初始化方法
  SpanTwoState init() {
    return SpanTwoState()..count = 0;
  }

  ///克隆方法,针对于刷新界面数据
  SpanTwoState clone() {
    return SpanTwoState()..count = count;
  }
}
