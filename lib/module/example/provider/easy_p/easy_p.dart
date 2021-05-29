import 'package:flutter/material.dart';

import 'change_notifier_easy_p.dart';

class EasyP {
  /// 获取EasyP实例
  /// 获取实例的时候,Listener参数老是写错,这边直接用俩个方法区分了
  static T of<T extends ChangeNotifier>(BuildContext context) {
    return _getInheritedElement<T>(context).value;
  }

  /// 注册监听控件
  static T register<T extends ChangeNotifier>(BuildContext context) {
    var element = _getInheritedElement<T>(context);
    context.dependOnInheritedElement(element);
    return element.value;
  }

  /// 获取距离当前Element最近的集成InheritedElement<T>组件
  static EasyPInheritedElement<T>
      _getInheritedElement<T extends ChangeNotifier>(BuildContext context) {
    var inheritedElement = context
            .getElementForInheritedWidgetOfExactType<ChangeNotifierEasyP<T>>()
        as EasyPInheritedElement<T>?;

    if (inheritedElement == null) {
      throw EasyPNotFoundException();
    }

    return inheritedElement;
  }
}

class EasyPNotFoundException implements Exception {
  @override
  String toString() => 'Error: EasyPNotFound';
}
