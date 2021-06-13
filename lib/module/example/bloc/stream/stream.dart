import 'dart:async';

import 'package:flutter_use/module/example/bloc/stream/state.dart';

class StreamLogic {
  final state = StreamState();

  // 实例化流控制器
  final _controller = StreamController<StreamState>.broadcast();

  Stream<StreamState> get stream => _controller.stream;

  void increment() {
    // 使用Sink添加数据
    _controller.add(state..count = ++state.count);

    stream.listen((event) {});
  }

  void dispose() {
    // 关闭流控制器，释放资源
    _controller.close();
  }
}
