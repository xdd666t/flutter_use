/// 网络配置
class NetConfig {
  /// 禁用实例化HttpConfig类
  NetConfig._();

  /// 是否启用代理 代理服务IP 代理服务端口
  static bool proxyEnable = false;
  static String proxyIp = '';
  static String proxyPort = '';

  /// 超时时间 20s
  static const int connectTimeout = 20000;

  /// 发送超时时间 20s
  static const int sendTimeout = 20000;

  /// 接收超时时间 20s
  static const int receiveTimeout = 20000;

  /// 请求内容类型 form，UTF-8
  static const String contentTypeForm = 'multipart/form-data;charset=utf-8';
  static const String headerContentType = "content-type";
}
