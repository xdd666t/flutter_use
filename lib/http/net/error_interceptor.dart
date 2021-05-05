import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

/// 错误处理拦截器
class ErrorInterceptor extends Interceptor {
  @override
  void onError(DioError err, ErrorInterceptorHandler handler) {
    // error统一处理
    AppException appException = AppException.init(err);
    // 错误提示
    debugPrint('DioError===: ${appException.toString()}');
    err.error = appException;

    handler.next(err);
  }
}

/// 自定义异常
class AppException implements Exception {
  final String? message;
  final int? code;

  AppException(this.code, this.message);

  String toString() => "$code$message";

  factory AppException.init(DioError error) {
    switch (error.type) {
      case DioErrorType.cancel:
        return AppException(-1, "请求取消");
      case DioErrorType.connectTimeout:
        return AppException(-1, "连接超时");
      case DioErrorType.sendTimeout:
        return AppException(-1, "请求超时");
      case DioErrorType.receiveTimeout:
        return AppException(-1, "响应超时");
      case DioErrorType.response:
        try {
          int errCode = error.response?.statusCode ?? -1;
          switch (errCode) {
            case 400:
              return AppException(errCode, "请求语法错误");
            case 401:
              return AppException(errCode, "没有权限");
            case 403:
              return AppException(errCode, "服务器拒绝执行");
            case 404:
              return AppException(errCode, "无法连接服务器");
            case 405:
              return AppException(errCode, "请求方法被禁止");
            case 500:
              return AppException(errCode, "服务器内部错误");
            case 502:
              return AppException(errCode, "无效的请求");
            case 503:
              return AppException(errCode, "服务器挂了");
            case 505:
              return AppException(errCode, "不支持HTTP协议请求");
            default:
              return AppException(
                  errCode, error.response?.statusMessage ?? '未知错误');
          }
        } catch (e) {
          return AppException(-1, "未知错误：${e.toString()}");
        }
      default:
        return AppException(-1, error.message);
    }
  }
}
