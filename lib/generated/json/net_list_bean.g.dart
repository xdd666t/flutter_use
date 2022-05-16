import 'package:flutter_use/bean/test/net_list_bean.dart';
import 'package:flutter_use/generated/json/base/json_convert_content.dart';

NetListBean $NetListBeanFromJson(Map<String, dynamic> json) {
	final NetListBean netListBean = NetListBean();
	final String? desc = jsonConvert.convert<String>(json['desc']);
	if (desc != null) {
		netListBean.desc = desc;
	}
	final double? id = jsonConvert.convert<double>(json['id']);
	if (id != null) {
		netListBean.id = id;
	}
	final String? imagePath = jsonConvert.convert<String>(json['imagePath']);
	if (imagePath != null) {
		netListBean.imagePath = imagePath;
	}
	final double? isVisible = jsonConvert.convert<double>(json['isVisible']);
	if (isVisible != null) {
		netListBean.isVisible = isVisible;
	}
	final double? order = jsonConvert.convert<double>(json['order']);
	if (order != null) {
		netListBean.order = order;
	}
	final String? title = jsonConvert.convert<String>(json['title']);
	if (title != null) {
		netListBean.title = title;
	}
	final double? type = jsonConvert.convert<double>(json['type']);
	if (type != null) {
		netListBean.type = type;
	}
	final String? url = jsonConvert.convert<String>(json['url']);
	if (url != null) {
		netListBean.url = url;
	}
	return netListBean;
}

Map<String, dynamic> $NetListBeanToJson(NetListBean entity) {
	final Map<String, dynamic> data = <String, dynamic>{};
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