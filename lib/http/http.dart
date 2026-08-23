import 'package:dio/dio.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/app/ui/show.dart';
import 'package:flutter_use/entity/base/base_response.dart';
import 'package:flutter_use/entity/test/net_list_bean.dart';
import 'package:flutter_use/entity/test/net_object_bean.dart';
import 'package:flutter_use/toolkit/utils/log_util.dart';

import 'net/net_util.dart';

///dio封装 使用举例
Future<void> testHttp() async {
  //处理一些初始化设置
  Http.init();
  Log.d('测试Http');

  // 内数据源是实体
  var query = {'cid': '60'};
  var result = await Http.get(
    'https://www.wanandroid.com/article/list/0/json',
    queryParameters: query,
  );

  var bean = NetObjectBean.fromJson(result);
  showToast(bean.datas[0].title);
  Log.i(result);

  ///--------------------------------------------------------------

  //内数据源是列表
  var resultList = await Http.get(
    'https://www.wanandroid.com/banner/json',
    // 'https://api.ixiaowai.cn/api/api.php?return=json',
  );

  var list = (resultList as List).map((e) {
    return NetListBean.fromJson(e);
  }).toList();
  showToast(list[0].title);
  Log.i(resultList);
}

class Http {
  static final LoadingInterceptor loadingInterceptor = LoadingInterceptor();

  static void init({
    String baseUrl = '',
    int? connectTimeout,
    int? sendTimeout,
    int? receiveTimeout,
    List<Interceptor>? interceptors,
  }) {
    NetUtil.instance.init(
      baseUrl: baseUrl,
      connectTimeout: connectTimeout,
      sendTimeout: sendTimeout,
      receiveTimeout: receiveTimeout,
      interceptors: interceptors,
    );

    //处理通用的实体
    NetUtil.instance.addInterceptor(ResponseInterceptor());
    //处理全局loading
    NetUtil.instance.addInterceptor(loadingInterceptor);
  }

  ///Get请求
  static Future<T> get<T>(
    String path, {
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
    bool isLoading = true,
  }) async {
    final response = await request<T>(
      path,
      method: HttpMethod.get,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
      isLoading: isLoading,
    );
    return response;
  }

  ///Post请求
  static Future<T> post<T>(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
    bool isLoading = true,
  }) async {
    final response = await request<T>(
      path,
      method: HttpMethod.post,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
      isLoading: isLoading,
    );
    return response;
  }

  /// Request 操作
  /// Put、Delete请求之类都请使用Request请求
  ///
  /// 所有类型请求,都是调用此请求
  static Future<T> request<T>(
    String path, {
    HttpMethod method = HttpMethod.get,
    data,
    bool isLoading = true,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
    ProgressCallback? onSendProgress,
    ProgressCallback? onReceiveProgress,
  }) async {
    final requestOptions = (options ?? Options()).copyWith(
      extra: <String, Object?>{
        ...?options?.extra,
        LoadingInterceptor.showLoadingKey: isLoading,
      },
    );

    final response = await NetUtil.instance.request<T>(
      path,
      method: method,
      data: data,
      queryParameters: queryParameters,
      options: requestOptions,
      cancelToken: cancelToken,
      onSendProgress: onSendProgress,
      onReceiveProgress: onReceiveProgress,
    );
    return response;
  }

  ///设置请求头
  static void setHeaders(Map<String, dynamic> map) {
    NetUtil.instance.setHeaders(map);
  }

  ///设置取消token
  static void cancelRequests({CancelToken? token}) {
    NetUtil.instance.cancelRequests(token: token);
  }
}

///此处定义一个响应拦截器
class ResponseInterceptor extends Interceptor {
  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    //处理最外层数据结构
    final data = response.data;
    if (data is! Map) {
      handler.next(response);
      return;
    }

    final bean = BaseResponse.fromJson(Map<String, dynamic>.from(data));

    //可以在此处处理一些通用的错误信息
    // if(bean.errorCode == 1) {
    //   /// to implement your logic
    // }
    response.data = bean.data;

    handler.next(response);
  }
}

///此处定义一个弹窗加载拦截器
class LoadingInterceptor extends Interceptor {
  static const String showLoadingKey = 'flutter_use.showLoading';

  int _activeRequests = 0;

  bool _shouldShowLoading(RequestOptions options) =>
      options.extra[showLoadingKey] == true;

  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    //打开加载弹窗
    if (_shouldShowLoading(options)) {
      _activeRequests++;
      if (_activeRequests == 1) {
        SmartDialog.showLoading();
      }
    }

    handler.next(options);
  }

  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) async {
    //关闭弹窗
    await _finishLoading(response.requestOptions);

    handler.next(response);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) async {
    //关闭弹窗
    await _finishLoading(err.requestOptions);

    handler.next(err);
  }

  Future<void> _finishLoading(RequestOptions options) async {
    if (!_shouldShowLoading(options)) return;

    _activeRequests = (_activeRequests - 1).clamp(0, double.infinity).toInt();
    if (_activeRequests == 0 &&
        SmartDialog.checkExist(dialogTypes: {SmartAllDialogType.loading})) {
      await SmartDialog.dismiss(status: SmartStatus.loading);
    }
  }
}
