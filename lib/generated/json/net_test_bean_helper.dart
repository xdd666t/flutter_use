import 'package:flutter_use/bean/test/net_test_bean.dart';

netTestBeanFromJson(NetTestBean data, Map<String, dynamic> json) {
	if (json['desc'] != null) {
		data.desc = json['desc'].toString();
	}
	if (json['id'] != null) {
		data.id = json['id'] is String
				? double.tryParse(json['id'])
				: json['id'].toDouble();
	}
	if (json['imagePath'] != null) {
		data.imagePath = json['imagePath'].toString();
	}
	if (json['isVisible'] != null) {
		data.isVisible = json['isVisible'] is String
				? double.tryParse(json['isVisible'])
				: json['isVisible'].toDouble();
	}
	if (json['order'] != null) {
		data.order = json['order'] is String
				? double.tryParse(json['order'])
				: json['order'].toDouble();
	}
	if (json['title'] != null) {
		data.title = json['title'].toString();
	}
	if (json['type'] != null) {
		data.type = json['type'] is String
				? double.tryParse(json['type'])
				: json['type'].toDouble();
	}
	if (json['url'] != null) {
		data.url = json['url'].toString();
	}
	return data;
}

Map<String, dynamic> netTestBeanToJson(NetTestBean entity) {
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