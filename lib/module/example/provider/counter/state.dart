class ProviderCounterState {
  late int count;

  ///初始化方法
  ProviderCounterState init() {
    return ProviderCounterState()..count = 0;
  }

  ///克隆方法,针对于刷新界面数据
  ProviderCounterState clone() {
    return ProviderCounterState()..count = count;
  }
}
