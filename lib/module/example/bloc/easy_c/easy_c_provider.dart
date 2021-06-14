import 'package:flutter/material.dart';

import 'easy_c.dart';

class EasyCProvider<T extends EasyC> extends InheritedWidget {
  EasyCProvider({
    Key? key,
    Widget? child,
    required this.create,
  }) : super(key: key, child: child ?? Container());

  final T Function(BuildContext context) create;

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => false;

  @override
  InheritedElement createElement() => EasyCInheritedElement(this);

  static T of<T extends EasyC>(BuildContext context) {
    var inheritedElement =
        context.getElementForInheritedWidgetOfExactType<EasyCProvider<T>>()
            as EasyCInheritedElement<T>?;

    if (inheritedElement == null) {
      throw 'not found';
    }

    return inheritedElement.value;
  }
}

class EasyCInheritedElement<T extends EasyC> extends InheritedElement {
  EasyCInheritedElement(EasyCProvider<T> widget) : super(widget);

  bool _firstBuild = true;

  late T _value;

  T get value => _value;

  @override
  void performRebuild() {
    if (_firstBuild) {
      _firstBuild = false;
      _value = (widget as EasyCProvider<T>).create(this);
    }

    super.performRebuild();
  }

  @override
  void unmount() {
    _value.close();
    super.unmount();
  }
}
