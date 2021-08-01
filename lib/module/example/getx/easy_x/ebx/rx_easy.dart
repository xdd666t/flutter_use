
import '../easy_x_notifier.dart';

class RxEasy {
  EasyXNotifier easyXNotifier = EasyXNotifier();

  Map<EasyXNotifier, String> _listenerMap = {};

  bool get canUpdate => _listenerMap.isNotEmpty;

  static RxEasy? proxy;

  void addListener(EasyXNotifier notifier) {
    if (!_listenerMap.containsKey(notifier)) {
      //变量监听中刷新
      notifier.addListener(() {
        //刷新ebx中添加的监听
        easyXNotifier.notify();
      });
      //添加进入map中
      _listenerMap[notifier] = '';
    }
  }
}
