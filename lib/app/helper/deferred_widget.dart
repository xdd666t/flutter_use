import 'package:flutter/material.dart';

/// loadLibrary
typedef LoadLibraryBuilder = Future<dynamic> Function();

/// deferredWidgetBuilder
typedef DeferredWidgetBuilder = Widget Function();

/// 延迟加载组件
/// 不在 build 里使用 FutureBuilder 加载，因为 build 执行多少次就会导致 widget 创建多少次
/// 这里在 initState 加载，或者当 DeferredWidgetBuilder 改变时重新加载
class DeferredWidget extends StatefulWidget {
  const DeferredWidget({
    Key? key,
    required this.loadLibrary,
    required this.builder,
    Widget? placeholder,
  })  : placeholder = placeholder ?? const DeferredLoading(),
        super(key: key);

  final LoadLibraryBuilder loadLibrary;
  final DeferredWidgetBuilder builder;
  final Widget placeholder;

  static final Map<LoadLibraryBuilder, Future<dynamic>> _moduleLoaders = {};
  static final Set<LoadLibraryBuilder> _loadedModules = {};

  /// 预加载
  static Future<dynamic> preload(LoadLibraryBuilder loadLibrary) {
    if (!_moduleLoaders.containsKey(loadLibrary)) {
      _moduleLoaders[loadLibrary] = loadLibrary().then((_) {
        _loadedModules.add(loadLibrary);
      });
    }
    return _moduleLoaders[loadLibrary]!;
  }

  @override
  State<DeferredWidget> createState() => _DeferredWidgetState();
}

class _DeferredWidgetState extends State<DeferredWidget> {
  Widget? _loadChild;
  DeferredWidgetBuilder? _loadBuilder;

  @override
  void initState() {
    super.initState();
    if (DeferredWidget._moduleLoaders.containsKey(widget.loadLibrary)) {
      _onLibraryLoaded();
    } else {
      DeferredWidget.preload(widget.loadLibrary)
          .then((_) => _onLibraryLoaded());
    }
  }

  void _onLibraryLoaded() {
    setState(() {
      _loadBuilder = widget.builder;
      _loadChild = _loadBuilder?.call();
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loadBuilder != widget.builder && _loadChild != null) {
      _loadBuilder = widget.builder;
      _loadChild = _loadBuilder?.call();
    }
    return _loadChild ?? widget.placeholder;
  }
}

/// 延迟加载Loading
class DeferredLoading extends StatelessWidget {
  const DeferredLoading({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      alignment: Alignment.center,
      child: const CircularProgressIndicator(),
    );
  }
}
