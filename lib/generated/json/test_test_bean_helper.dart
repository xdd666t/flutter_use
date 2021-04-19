import 'package:flutter_use/bean/test/test_test_bean.dart';

testTestBeanFromJson(TestTestBean data, Map<String, dynamic> json) {
	if (json['data'] != null) {
		data.data = (json['data'] as List).map((v) => TestTestData().fromJson(v)).toList();
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

Map<String, dynamic> testTestBeanToJson(TestTestBean entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['data'] =  entity.data.map((v) => v.toJson()).toList();
	data['errorCode'] = entity.errorCode;
	data['errorMsg'] = entity.errorMsg;
	return data;
}

testTestDataFromJson(TestTestData data, Map<String, dynamic> json) {
	if (json['desc'] != null) {
		data.desc = json['desc'].toString();
	}
	if (json['id'] != null) {
		data.id = json['id'] is String
				? int.tryParse(json['id'])
				: json['id'].toInt();
	}
	if (json['imagePath'] != null) {
		data.imagePath = json['imagePath'].toString();
	}
	if (json['isVisible'] != null) {
		data.isVisible = json['isVisible'] is String
				? int.tryParse(json['isVisible'])
				: json['isVisible'].toInt();
	}
	if (json['order'] != null) {
		data.order = json['order'] is String
				? int.tryParse(json['order'])
				: json['order'].toInt();
	}
	if (json['title'] != null) {
		data.title = json['title'].toString();
	}
	if (json['type'] != null) {
		data.type = json['type'] is String
				? int.tryParse(json['type'])
				: json['type'].toInt();
	}
	if (json['url'] != null) {
		data.url = json['url'].toString();
	}
	return data;
}

Map<String, dynamic> testTestDataToJson(TestTestData entity) {
	final Map<String, dynamic> data = new Map<String, dynamic>();
	data['desc'] = entity.desc;
	data['id'] = entity.id;
	data['imagePath'] = entity.imagePath;
	data['isVisible'] = entity.isVisible;
	data['order'] = entity.order;
	data['title'] = entity.title;
	data['type'] = entity.type;
	data['url'] = entity.url;
	return data;
}