import '../easy_x_notifier.dart';
import 'rx_easy.dart';

///拓展函数
extension IntExtension on int {
  RxInt get ebs => RxInt(this);
}

extension StringExtension on String {
  RxString get ebs => RxString(this);
}

extension DoubleExtension on double {
  RxDouble get ebs => RxDouble(this);
}

extension BoolExtension on bool {
  RxBool get ebs => RxBool(this);
}

///封装各类型
class RxInt extends Rx<int> {
  RxInt(int initial) : super(initial);

  RxInt operator +(int other) {
    value = value + other;
    return this;
  }

  RxInt operator -(int other) {
    value = value - other;
    return this;
  }
}

class RxDouble extends Rx<double> {
  RxDouble(double initial) : super(initial);

  RxDouble operator +(double other) {
    value = value + other;
    return this;
  }

  RxDouble operator -(double other) {
    value = value - other;
    return this;
  }
}

class RxString extends Rx<String> {
  RxString(String initial) : super(initial);
}

class RxBool extends Rx<bool> {
  RxBool(bool initial) : super(initial);
}

///主体逻辑
class Rx<T> {
  EasyXNotifier subject = EasyXNotifier();

  Rx(T initial) {
    _value = initial;
  }

  late T _value;

  bool firstRebuild = true;

  String get string => value.toString();

  @override
  String toString() => value.toString();

  set value(T val) {
    if (_value == val && !firstRebuild) return;
    firstRebuild = false;
    _value = val;

    subject.notify();
  }

  T get value {
    if (RxEasy.proxy != null) {
      RxEasy.proxy!.addListener(subject);
    }
    return _value;
  }
}
