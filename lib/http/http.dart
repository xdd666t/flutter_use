import 'package:dio/dio.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

import 'net/net_util.dart';

class Http {
  static NetRequestCallback _callback;

  static void init({
    String baseUrl,
    int connectTimeout,
    int sendTimeout,
    int receiveTimeout,
    List<Interceptor> interceptors,
  }) {
    NetUtil.instance.init(
      baseUrl: baseUrl,
      connectTimeout: connectTimeout,
      sendTimeout: sendTimeout,
      receiveTimeout: receiveTimeout,
      interceptors: interceptors,
    );

    _dealLoading();
  }

  ///Get请求
  static Future get(
    String path, {
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.get,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return _dealResponse(response);
  }

  ///Post请求
  static Future post(
    String path, {
    data,
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.post,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return _dealResponse(response);
  }

  ///Put请求
  static Future put(
    String path, {
    data,
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.put,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return _dealResponse(response);
  }

  ///Delete请求
  static Future delete(
    String path, {
    data,
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.delete,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return _dealResponse(response);
  }

  /// Request 操作
  ///
  /// 所有类型请求,都是调用此请求
  static Future request(
    String path, {
    HttpMethod method = HttpMethod.get,
    data,
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
    ProgressCallback onSendProgress,
    ProgressCallback onReceiveProgress,
  }) async {
    _callback.onStart();
    var response = await NetUtil.instance.request(
      path,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
      onSendProgress: onSendProgress,
      onReceiveProgress: onReceiveProgress,
    );
    _callback.onEnd();
    return response.data;
  }

  ///处理返回数据
  static Future _dealResponse(Future response) {
    //处理数据

    return response;
  }

  ///处理加载动画
  static void _dealLoading() {
    _callback = NetRequestCallback(
      onStart: () {
        //请求开始
        EasyDialog.showLoading();
      },
      onEnd: () {
        //请求结束
        EasyDialog.dismiss();
      },
    );
  }

  ///设置请求头
  static void setHeaders(Map<String, dynamic> map) {
    NetUtil.instance.setHeaders(map);
  }

  ///设置取消token
  static void cancelRequests({CancelToken token}) {
    NetUtil.instance.cancelRequests(token: token);
  }
}

/// 网络开始回调
typedef HttpCallback = void Function();

class NetRequestCallback {
  NetRequestCallback({
    this.onEnd,
    this.onStart,
  });

  ///开始
  final HttpCallback onStart;

  ///结束
  final HttpCallback onEnd;
}
