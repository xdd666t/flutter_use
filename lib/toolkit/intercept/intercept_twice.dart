///俩层通用拦截器，T的类型必须一致
abstract class InterceptTwice<T> {
  void onInit(T data, TwiceHandler handler) => handler.next(data);

  void onSubmit(T data, TwiceHandler handler) => handler.next(data);
}

///添加拦截器,触发拦截器方法入口
class InterceptTwiceHandler<T> {
  _TwiceInitHandler _init = _TwiceInitHandler(intercepts: []);
  _TwiceSubmitHandler _submit = _TwiceSubmitHandler(intercepts: []);

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
  /// span: 设置该参数，可控跨越多级节点
  /// 默认0，则不跨越节点（遍历所有节点）
  next(dynamic data, {int span = 0});
}

///实现init处理器
class _TwiceInitHandler extends TwiceHandler {
  List<InterceptTwice> intercepts;

  int index;

  _TwiceInitHandler({
    this.index = 0,
    required this.intercepts,
  });

  @override
  next(dynamic data, {int span = 0}) {
    if ((index + span) >= intercepts.length) return;

    var intercept = intercepts[index + span];
    var handler = _TwiceInitHandler(
      index: index + (span + 1),
      intercepts: intercepts,
    );

    intercept.onInit(data, handler);
  }
}

///实现submit处理器
class _TwiceSubmitHandler extends TwiceHandler {
  List<InterceptTwice> intercepts;

  int index;

  _TwiceSubmitHandler({
    this.index = 0,
    required this.intercepts,
  });

  @override
  next(dynamic data, {int span = 0}) {
    if ((index + span) >= intercepts.length) {
      return;
    }

    var intercept = intercepts[index + span];
    var handler = _TwiceSubmitHandler(
      index: index + (span + 1),
      intercepts: intercepts,
    );

    intercept.onSubmit(data, handler);
  }
}
