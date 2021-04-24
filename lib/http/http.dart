import 'package:dio/dio.dart';
import 'package:flutter_toolkit_easy/flutter_toolkit.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/bean/base/base_response.dart';
import 'package:flutter_use/bean/test/net_list_bean.dart';
import 'package:flutter_use/bean/test/net_object_bean.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

///举例：搞定
testHttp() async {
  //处理一些初始化设置,此处加了一个自定义response拦截器
  Http.init();
  Log.d('测试Http');

  // 内数据源是实体
  var query = {'cid': '60'};
  var result = await Http.get(
    'https://www.wanandroid.com/article/list/0/json',
    queryParameters: query,
  );

  var bean = NetObjectBean().fromJson(result);
  showToast(bean.datas[0].title);
  Log.i(result);

  ///--------------------------------------------------------------

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
    NetUtil.instance.addInterceptor(LoadingInterceptor());
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
    BaseResponse bean = BaseResponse.fromJson(response.data);

    //可以在此处处理一些通用的错误信息
    // if(bean.errorCode == 1) {
    //   /// to implement you logic
    // }
    response.data = bean.data;

    handler.next(response);
  }
}

///此处定义一个弹窗加载拦截器
class LoadingInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    //打开加载弹窗
    EasyDialog.showLoading();
    super.onRequest(options, handler);
  }

  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    //关闭弹窗
    EasyDialog.dismiss();
    super.onResponse(response, handler);
  }

  @override
  void onError(DioError err, ErrorInterceptorHandler handler) {
    //关闭弹窗
    if (EasyDialog.isExist()) {
      EasyDialog.dismiss();
    }
    Log.i(err);
    super.onError(err, handler);
  }
}
