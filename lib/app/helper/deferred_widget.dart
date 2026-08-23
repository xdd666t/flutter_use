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
    super.key,
    required this.loadLibrary,
    required this.builder,
    Widget? placeholder,
  }) : placeholder = placeholder ?? const DeferredLoading();

  final LoadLibraryBuilder loadLibrary;
  final DeferredWidgetBuilder builder;
  final Widget placeholder;

  static final Map<LoadLibraryBuilder, Future<dynamic>> _moduleLoaders = {};
  static final Set<LoadLibraryBuilder> _loadedModules = {};

  /// 预加载
  static Future<dynamic> preload(LoadLibraryBuilder loadLibrary) {
    return _moduleLoaders.putIfAbsent(
      loadLibrary,
      () => loadLibrary().then((_) => _loadedModules.add(loadLibrary)),
    );
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
    _loadLibrary(widget.loadLibrary);
  }

  void _loadLibrary(LoadLibraryBuilder loadLibrary) {
    DeferredWidget.preload(loadLibrary).then((_) {
      if (!mounted || widget.loadLibrary != loadLibrary) return;
      setState(() {
        _loadBuilder = widget.builder;
        _loadChild = _loadBuilder?.call();
      });
    });
  }

  @override
  void didUpdateWidget(covariant DeferredWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.loadLibrary != widget.loadLibrary) {
      _loadBuilder = null;
      _loadChild = null;
      _loadLibrary(widget.loadLibrary);
    }
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
  const DeferredLoading({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      alignment: Alignment.center,
      child: const CircularProgressIndicator(),
    );
  }
}
