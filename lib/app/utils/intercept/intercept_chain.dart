/// 该拦截器以最简单的链表实现
abstract class InterceptChain<T> {
  InterceptChain? next;

  void intercept(T data) => next?.intercept(data);
}

class InterceptChainHandler<T> {
  InterceptChain? _interceptFirst;

  void add(InterceptChain interceptChain) {
    if (_interceptFirst == null) {
      _interceptFirst = interceptChain;
      return;
    }

    var node = _interceptFirst!;
    while (true) {
      if (node.next == null) {
        node.next = interceptChain;
        break;
      }
      node = node.next!;
    }
  }

  void intercept(T data) {
    _interceptFirst?.intercept(data);
  }
}
