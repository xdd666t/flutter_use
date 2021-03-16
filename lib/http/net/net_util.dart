import 'dart:io';

import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';
import 'package:get/get_connect/http/src/request/request.dart';

import 'package/interceptor/error_interceptor.dart';
import 'package/interceptor/net_cache_interceptor.dart';
import 'package/net_configs.dart';

enum HttpMethod {
  /// Get.
  get,

  /// Post
  post,

  /// Put
  put,

  /// Delete
  delete,
}

///网络封装
class NetUtil {
  static NetUtil _instance = NetUtil._internal();

  static NetUtil get instance => _getInstance();

  static NetUtil _getInstance() {
    if (_instance == null) {
      _instance = NetUtil._internal();
    }
    return _instance;
  }

  Dio dio;
  CancelToken _cancelToken = new CancelToken();

  NetUtil._internal() {
    if (dio == null) {
      // BaseOptions、Options、RequestOptions 都可以配置参数，优先级别依次递增，且可以根据优先级别覆盖参数
      BaseOptions options = new BaseOptions(
        // 连接超时
        connectTimeout: NetConfig.connectTimeout,
        //发送超时
        sendTimeout: NetConfig.sendTimeout,
        // 响应流上前后两次接受到数据的间隔，单位为毫秒。
        receiveTimeout: NetConfig.receiveTimeout,
        // Http请求头.
        headers: {
          NetConfig.headerContentType: NetConfig.contentTypeForm,
        },
        // 设置内容类型为“multipart/form-data”
        contentType: NetConfig.contentTypeForm,
      );

      dio = new Dio(options);

      // 添加拦截器
      dio.interceptors.add(ErrorInterceptor());
      // 加内存缓存
      dio.interceptors.add(NetCacheInterceptor());
    }
    dio.interceptors.add(LogInterceptor());

    // 在调试模式下需要抓包调试，所以我们使用代理，并禁用HTTPS证书校验
    if (NetConfig.proxyEnable) {
      (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
          (client) {
        client.findProxy = (uri) {
          return "PROXY $NetConfig.proxyIp:$NetConfig.proxyPort";
        };
        //代理工具会提供一个抓包的自签名证书，会通不过证书校验，所以我们禁用证书校验
        client.badCertificateCallback =
            (X509Certificate cert, String host, int port) => true;
      };
    }
  }

  ///初始化公共属性
  ///
  /// [baseUrl] 地址前缀
  /// [connectTimeout] 连接超时赶时间
  /// [sendTimeout] 发送超时赶时间
  /// [receiveTimeout] 接收超时赶时间
  /// [interceptors] 基础拦截器
  void init({
    String baseUrl,
    int connectTimeout,
    int sendTimeout,
    int receiveTimeout,
    List<Interceptor> interceptors,
  }) {
    //初始化默认参数
    dio.options.baseUrl = baseUrl;
    dio.options.connectTimeout = connectTimeout ?? NetConfig.connectTimeout;
    dio.options.sendTimeout = connectTimeout ?? NetConfig.sendTimeout;
    dio.options.receiveTimeout = receiveTimeout ?? NetConfig.receiveTimeout;

    //添加拦截器
    if (interceptors != null && interceptors.isNotEmpty) {
      dio.interceptors.addAll(interceptors);
    }
  }

  /// Get 操作
  Future get(
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
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response;
  }

  /// Post 操作
  Future post(
    String path, {
    Map<String, dynamic> queryParameters,
    data,
    Options options,
    CancelToken cancelToken,
  }) async {
    var response = await request(
      path,
      method: HttpMethod.post,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response.data;
  }

  /// Put 操作
  Future put(
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
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response.data;
  }

  /// delete 操作
  Future delete(
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
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response;
  }

  /// Request 操作
  Future request(
    String path, {
    HttpMethod method = HttpMethod.get,
    data,
    Map<String, dynamic> queryParameters,
    Options options,
    CancelToken cancelToken,
    ProgressCallback onSendProgress,
    ProgressCallback onReceiveProgress,
  }) async {
    Options requestOptions = options ?? dio.options;
    Map<String, dynamic> authorization = getAuthorizationHeader();
    if (authorization != null) {
      requestOptions.headers = authorization;
    }
    if (method == HttpMethod.get) {
      requestOptions.method = 'GET';
    } else if (method == HttpMethod.post) {
      requestOptions.method = 'POST';
    } else if (method == HttpMethod.delete) {
      requestOptions.method = 'DELETE';
    } else if (method == HttpMethod.put) {
      requestOptions.method = 'PUT';
    }

    var response = await dio.request(
      path,
      data: data,
      queryParameters: queryParameters,
      options: requestOptions,
      cancelToken: cancelToken ?? _cancelToken,
      onSendProgress: onSendProgress,
      onReceiveProgress: onReceiveProgress,
    );
    return response.data;
  }

  /// 设置headers
  void setHeaders(Map<String, dynamic> map) {
    dio.options.headers.addAll(map);
  }

  /// 取消请求
  ///
  /// 同一个cancel token 可以用于多个请求，当一个cancel token取消时，所有使用该cancel token的请求都会被取消。
  /// 所以参数可选
  void cancelRequests({CancelToken token}) {
    token ?? _cancelToken.cancel("cancelled");
  }

  /// 读取本地配置
  Map<String, dynamic> getAuthorizationHeader() {
    var headers;
    String accessToken = NetConfig.accessToken;
    if (accessToken != null) {
      headers = {"Authorization": 'Bearer $accessToken'};
    }
    return headers;
  }
}
