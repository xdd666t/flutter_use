import 'package:flutter/material.dart';

class ChangeNotifierEasyP<T extends ChangeNotifier> extends StatelessWidget {
  ChangeNotifierEasyP({
    Key? key,
    required this.create,
    this.builder,
    this.child,
  }) : super(key: key);

  final T Function(BuildContext context) create;

  final Widget Function(BuildContext context)? builder;
  final Widget? child;

  @override
  Widget build(BuildContext context) {
    assert(
      builder != null || child != null,
      '$runtimeType  must specify a child',
    );

    return EasyPInherited(
      create: create,
      child: builder != null
          ? Builder(builder: (context) => builder!(context))
          : child!,
    );
  }
}

class EasyPInherited<T extends ChangeNotifier> extends InheritedWidget {
  EasyPInherited({
    Key? key,
    required Widget child,
    required this.create,
  }) : super(key: key, child: child);

  final T Function(BuildContext context) create;

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => false;

  @override
  InheritedElement createElement() => EasyPInheritedElement(this);
}

class EasyPInheritedElement<T extends ChangeNotifier> extends InheritedElement {
  EasyPInheritedElement(EasyPInherited<T> widget) : super(widget);

  bool _firstBuild = true;
  bool _shouldNotify = false;
  late T _value;
  late void Function() _callBack;

  T get value => _value;

  @override
  void performRebuild() {
    if (_firstBuild) {
      _firstBuild = false;
      _value = (widget as EasyPInherited<T>).create(this);

      _value.addListener(_callBack = () {
        // 处理刷新逻辑，此处无法直接调用notifyClients
        // 会导致owner!._debugCurrentBuildTarget为null，触发断言条件，无法向后执行
        _shouldNotify = true;
        markNeedsBuild();
      });
    }

    super.performRebuild();
  }

  @override
  Widget build() {
    if (_shouldNotify) {
      _shouldNotify = false;
      notifyClients(widget as EasyPInherited<T>);
    }
    return super.build();
  }

  @override
  void notifyDependent(covariant InheritedWidget oldWidget, Element dependent) {
    //此处就直接刷新添加的监听子Element了,不各种super了
    dependent.markNeedsBuild();
    // super.notifyDependent(oldWidget, dependent);
  }

  @override
  void unmount() {
    _value.removeListener(_callBack);
    _value.dispose();
    super.unmount();
  }
}
