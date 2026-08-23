import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

/// 错误处理拦截器
class ErrorInterceptor extends Interceptor {
  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    // error统一处理
    final appException = AppException.init(err);
    // 错误提示
    debugPrint('DioError===: ${appException.toString()}');

    final normalizedError = err.copyWith(error: appException);

    handler.next(normalizedError);
  }
}

/// 自定义异常
class AppException implements Exception {
  final String? message;
  final int? code;

  AppException(this.code, this.message);

  @override
  String toString() => '$code$message';

  factory AppException.init(DioException error) {
    switch (error.type) {
      case DioExceptionType.cancel:
        return AppException(-1, "请求取消");
      case DioExceptionType.connectionTimeout:
        return AppException(-1, "连接超时");
      case DioExceptionType.sendTimeout:
        return AppException(-1, "请求超时");
      case DioExceptionType.receiveTimeout:
        return AppException(-1, "响应超时");
      case DioExceptionType.badResponse:
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
                errCode,
                error.response?.statusMessage ?? '未知错误',
              );
          }
        } catch (e) {
          return AppException(-1, "未知错误：${e.toString()}");
        }
      case DioExceptionType.badCertificate:
        return AppException(-1, "证书校验失败");
      case DioExceptionType.connectionError:
        return AppException(-1, "网络连接失败");
      case DioExceptionType.transformTimeout:
      case DioExceptionType.unknown:
        return AppException(-1, error.message);
    }
  }
}
