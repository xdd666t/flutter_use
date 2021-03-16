import 'package:dio/dio.dart';

/// 网络配置
class NetConfig {
  /// 禁用实例化HttpConfig类
  NetConfig._();

  /// 是否启用代理
  static const proxyEnable = true;

  /// 代理服务IP
  static const proxyIp = '192.168.2.237';

  /// 代理服务端口
  static const proxyPort = 8888;

  /// 超时时间 20s
  static const int connectTimeout = 20000;

  /// 发送超时时间 20s
  static const int sendTimeout = 20000;

  /// 接收超时时间 20s
  static const int receiveTimeout = 20000;

  /// 请求内容类型 json，UTF-8
  static const String contentTypeJson = Headers.jsonContentType;

  /// 请求内容类型 form，UTF-8
  static const String contentTypeForm = 'multipart/form-data;charset=utf-8';
  static const String headerContentType = "content-type";

  /// 是否启用缓存
  static const cacheEnable = true;

  /// 缓存的最长时间，单位（秒）
  static const cacheMaxAge = 1000;

  /// 最大缓存数
  static const cacheMaxCount = 100;

  /// token
  static String accessToken = "";

  /// 是否 release
  static bool get isRelease => bool.fromEnvironment("dart.vm.product");
}
