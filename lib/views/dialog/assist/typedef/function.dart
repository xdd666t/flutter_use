///无参数请求回调
typedef DialogParamVoidCallback = dynamic Function();

///回调一个参数
typedef DialogParamSingleCallback<D> = dynamic Function(D data);

///回到俩个参数
typedef DialogParamTwiceCallback<O, T> = dynamic Function(O dataOne, T dataTwo);

///回调三个参数
typedef DialogParamThreeCallback<O, T, K> = dynamic Function(
    O dataOne, T dataTwo, K threeData);