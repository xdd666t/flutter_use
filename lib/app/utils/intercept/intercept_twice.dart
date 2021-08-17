///俩层通用拦截器，T的类型必须一致
abstract class InterceptTwice<T> {
  void onInit(T data, TwiceHandler handler) => handler.next(data);

  void onSubmit(T data, TwiceHandler handler) => handler.next(data);
}

///添加拦截器,触发拦截器方法入口
class InterceptTwiceRealHandler<T> {
  _TwiceInitHandler _init = _TwiceInitHandler(index: 0, intercepts: []);
  _TwiceSubmitHandler _submit = _TwiceSubmitHandler(index: 0, intercepts: []);

  void add(InterceptTwice intercept) {
    //一种类型的拦截器只能添加一次
    for (var item in _init.intercepts) {
      if (item.runtimeType == intercept.runtimeType) {
        return;
      }
    }

    _init.intercepts.add(intercept);
    _submit.intercepts.add(intercept);
  }

  void delete(InterceptTwice intercept) {
    _init.intercepts.remove(intercept);
    _submit.intercepts.remove(intercept);
  }

  void onInit(T data) {
    _init.next(data);
  }

  void onSubmit(T data) {
    _submit.next(data);
  }
}

///------------实现不同处理器 参照 dio api设计 和 OkHttp实现思想---------------
abstract class TwiceHandler {
  next(dynamic data);
}

///实现init处理器
class _TwiceInitHandler extends TwiceHandler {
  List<InterceptTwice> intercepts;

  int index;

  _TwiceInitHandler({
    required this.index,
    required this.intercepts,
  });

  @override
  next(dynamic data) {
    if (index >= intercepts.length) {
      return;
    }

    var intercept = intercepts[index];
    var handler = _TwiceInitHandler(index: index + 1, intercepts: intercepts);

    intercept.onInit(data, handler);
  }
}

///实现submit处理器
class _TwiceSubmitHandler extends TwiceHandler {
  List<InterceptTwice> intercepts;

  int index;

  _TwiceSubmitHandler({
    required this.index,
    required this.intercepts,
  });

  @override
  next(dynamic data) {
    if (index >= intercepts.length) {
      return;
    }

    var intercept = intercepts[index];
    var handler = _TwiceSubmitHandler(index: index + 1, intercepts: intercepts);

    intercept.onSubmit(data, handler);
  }
}
