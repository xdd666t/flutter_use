import 'dart:async';

import 'package:flutter/material.dart';

abstract class EasyC<T> {
  EasyC(this.state) : _controller = StreamController<T>.broadcast();

  final StreamController<T> _controller;

  T state;

  bool _emitted = false;

  Stream<T> get stream => _controller.stream;

  void emit(T newState) {
    if (_controller.isClosed) return;
    if (state == newState && _emitted) return;
    state = newState;
    _controller.add(state);
    _emitted = true;
  }

  @mustCallSuper
  Future<void> close() async {
    await _controller.close();
  }
}
