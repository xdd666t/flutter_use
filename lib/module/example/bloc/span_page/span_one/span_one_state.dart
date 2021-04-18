part of 'span_one_cubit.dart';

class SpanOneState {
  late int count;

  ///初始化方法
  SpanOneState init() {
    return SpanOneState()..count = 0;
  }

  ///克隆方法,针对于刷新界面数据
  SpanOneState clone() {
    return SpanOneState()..count = count;
  }
}

