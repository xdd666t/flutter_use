import 'package:flutter_use/bean/test/base_info_bean.dart';

baseInfoBeanFromJson(BaseInfoBean data, Map<String, dynamic> json) {
	if (json['data'] != null) {
		data.data = json['data'].toString();
	}
	if (json['errorCode'] != null) {
		data.errorCode = json['errorCode'] is String
				? int.tryParse(json['errorCode'])
				: json['errorCode'].toInt();
	}
	if (json['errorMsg'] != null) {
		data.errorMsg = json['errorMsg'].toString();
	}
	return data;
}

Map<String, dynamic> baseInfoBeanToJson(BaseInfoBean entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['data'] = entity.data;
	data['errorCode'] = entity.errorCode;
	data['errorMsg'] = entity.errorMsg;
	return data;
}