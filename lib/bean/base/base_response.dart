class BaseResponse {
  dynamic data;
  int? errorCode;
  String? errorMsg;

  BaseResponse._({
    this.data,
    this.errorCode,
    this.errorMsg,
  });

  static BaseResponse fromJson(Map<String, dynamic> map) {
    return BaseResponse._(
      data: map['data'],
      errorCode: map['errorCode'],
      errorMsg: map['errorMsg'],
    );
  }
}
