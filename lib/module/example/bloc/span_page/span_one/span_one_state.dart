part of 'span_one_cubit.dart';

class BlocSpanOneState {
  late int count;

  ///初始化方法
  BlocSpanOneState init() {
    return BlocSpanOneState()..count = 0;
  }

  ///克隆方法,针对于刷新界面数据
  BlocSpanOneState clone() {
    return BlocSpanOneState()..count = count;
  }
}

