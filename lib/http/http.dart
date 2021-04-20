import 'package:dio/dio.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/bean/base/base_response.dart';
import 'package:flutter_use/bean/test/net_list_bean.dart';
import 'package:flutter_use/bean/test/net_object_bean.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

///举例：搞定
testHttp() async {
  Log.d('测试Http');

  //内数据源是实体
  var query = {'cid': '60'};
  var result = await Http.get(
    'https://www.wanandroid.com/article/list/0/json',
    queryParameters: query,
  );

  var bean = NetObjectBean().fromJson(result);
  showToast(bean.datas[0].title);
  Log.i(result);

  //内数据源是列表
  var resultList = await Http.get(
    'https://www.wanandroid.com/banner/json',
    // 'https://api.ixiaowai.cn/api/api.php?return=json',
  );

  var list = (resultList as List).map((e) {
    return NetListBean().fromJson(e);
  }).toList();
  showToast(list[0].title);
  Log.i(resultList);
}

class Http {
  static NetRequestCallback _callback = NetRequestCallback(
    //请求开始
    onStart: () => EasyDialog.showLoading(),
    //请求结束
    onEnd: () => EasyDialog.dismiss(),
  );

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
  }

  ///Get请求
  static Future get(
    String path, {
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.get,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  ///Post请求
  static Future post(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.post,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  ///Put请求
  static Future put(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.put,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  ///Delete请求
  static Future delete(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.delete,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
    );
    return response;
  }

  /// Request 操作
  ///
  /// 所有类型请求,都是调用此请求
  static Future request(
    String path, {
    HttpMethod method = HttpMethod.get,
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
    ProgressCallback? onSendProgress,
    ProgressCallback? onReceiveProgress,
  }) async {
    _callback.onStart();
    var response = await NetUtil.instance.request(
      path,
      method: method,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken,
      onSendProgress: onSendProgress,
      onReceiveProgress: onReceiveProgress,
    );
    _callback.onEnd();
    return _dealResponse(response);
  }

  ///处理返回数据 处理通用结构
  static dynamic _dealResponse(var response) {
    //处理最外层数据结构
    BaseResponse bean = BaseResponse.fromJson(response);

    //可以在此处处理一些通用的错误信息
    // if(bean.errorCode == 1) {
    //   /// to implement you logic
    // }

    return bean.data;
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

/// 网络开始回调
typedef HttpCallback = void Function();

class NetRequestCallback {
  NetRequestCallback({
    required this.onEnd,
    required this.onStart,
  });

  ///开始
  final HttpCallback onStart;

  ///结束
  final HttpCallback onEnd;
}
