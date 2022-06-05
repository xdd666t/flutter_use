/// 该拦截器以最简单的链表实现
abstract class InterceptChainTwice<T> {
  InterceptChainTwice? next;

  void onInit(T data) {
    next?.onInit(data);
  }

  void onSubmit(T data) {
    next?.onSubmit(data);
  }
}

class InterceptChainTwiceHandler<T> {
  InterceptChainTwice? _interceptFirst;

  void add(InterceptChainTwice interceptChain) {
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

  void onInit(T data) {
    _interceptFirst?.onInit(data);
  }

  void onSubmit(T data) {
    _interceptFirst?.onSubmit(data);
  }
}
