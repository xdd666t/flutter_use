import 'dart:async';
import 'dart:io';

import 'package:dio/adapter.dart';
import 'package:dio/dio.dart';

import 'error_interceptor.dart';
import 'net_configs.dart';

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
  factory NetUtil() => instance;

  static NetUtil? _instance;

  static NetUtil get instance => _instance ??= NetUtil._internal();

  Dio dio = Dio();
  CancelToken _cancelToken = CancelToken();

  NetUtil._internal() {
    // BaseOptions、Options、RequestOptions 都可以配置参数，优先级别依次递增，且可以根据优先级别覆盖参数
    dio.options = BaseOptions(
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
      // contentType: NetConfig.contentTypeForm,
    );

    // 添加异常拦截器
    dio.interceptors.add(ErrorInterceptor());
    // 添加日志拦截器
    dio.interceptors.add(LogInterceptor());

    // 在调试模式下需要抓包调试，所以我们使用代理，并禁用HTTPS证书校验
    if (NetConfig.proxyEnable) {
      (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
          (client) {
        client.findProxy = (uri) {
          return "PROXY ${NetConfig.proxyIp}:${NetConfig.proxyPort}";
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
  /// [proxyEnable] 是否开启代理
  /// [proxyIp] 代理ip
  /// [proxyPort] 代理端口
  void init({
    required String baseUrl,
    int? connectTimeout,
    int? sendTimeout,
    int? receiveTimeout,
    List<Interceptor>? interceptors,
    bool proxyEnable = false,
    String proxyIp = '192.168.2.237',
    String proxyPort = '8888',
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

    //处理代理
    NetConfig.proxyEnable = proxyEnable;
    NetConfig.proxyIp = proxyIp;
    NetConfig.proxyPort = proxyPort;
  }

  /// Get 操作
  Future<T> get<T>(
    String path, {
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request<T>(
      path,
      method: HttpMethod.get,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response;
  }

  /// Post 操作
  Future<T> post<T>(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request<T>(
      path,
      method: HttpMethod.post,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response;
  }

  /// Put 操作
  Future<T> put<T>(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request<T>(
      path,
      method: HttpMethod.put,
      data: data,
      queryParameters: queryParameters,
      options: options,
      cancelToken: cancelToken ?? _cancelToken,
    );
    return response;
  }

  /// delete 操作
  Future<T> delete<T>(
    String path, {
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
  }) async {
    var response = await request<T>(
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
  Future<T> request<T>(
    String path, {
    required HttpMethod method,
    data,
    Map<String, dynamic>? queryParameters,
    Options? options,
    CancelToken? cancelToken,
    ProgressCallback? onSendProgress,
    ProgressCallback? onReceiveProgress,
  }) async {
    //处理网络类型
    if (method == HttpMethod.get) {
      dio.options.method = 'GET';
    } else if (method == HttpMethod.post) {
      dio.options.method = 'POST';
    } else if (method == HttpMethod.delete) {
      dio.options.method = 'DELETE';
    } else if (method == HttpMethod.put) {
      dio.options.method = 'PUT';
    }
    //处理请求设置
    options = options ?? Options();
    Completer<T> completer = Completer();
    dio
        .request<T>(
          path,
          data: data,
          queryParameters: queryParameters,
          options: options,
          cancelToken: cancelToken ?? _cancelToken,
          onSendProgress: onSendProgress,
          onReceiveProgress: onReceiveProgress,
        )
        .then((value) => {
              completer.complete(value.data),
            })
        .catchError((error) => {
              completer.complete(null),
              completer.completeError(error),
            })
        .whenComplete(() => null);

    return completer.future;
  }

  /// 添加拦截器
  void addInterceptor(Interceptor interceptor) {
    dio.interceptors.add(interceptor);
  }

  /// 移除拦截器
  void removeIntercept(Interceptor interceptor) {
    dio.interceptors.remove(interceptor);
  }

  /// 设置headers
  void setHeaders(Map<String, dynamic> map) {
    dio.options.headers.addAll(map);
  }

  /// 移除header
  void removeHeader(String? key) {
    dio.options.headers.remove(key);
  }

  /// 取消请求
  ///
  /// 同一个cancel token 可以用于多个请求，当一个cancel token取消时，所有使用该cancel token的请求都会被取消。
  /// 所以参数可选
  void cancelRequests({CancelToken? token}) {
    token ?? _cancelToken.cancel("cancelled");
  }
}
