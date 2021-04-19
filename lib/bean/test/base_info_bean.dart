import 'package:flutter_use/generated/json/base/json_convert_content.dart';

class BaseInfoBean with JsonConvert<BaseInfoBean> {
	late String data;
	late int errorCode;
	late String errorMsg;
}
