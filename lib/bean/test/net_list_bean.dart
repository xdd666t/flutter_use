import 'package:flutter_use/generated/json/base/json_field.dart';
import 'package:flutter_use/generated/json/net_list_bean.g.dart';


@JsonSerializable()
class NetListBean {

	NetListBean();

	factory NetListBean.fromJson(Map<String, dynamic> json) => $NetListBeanFromJson(json);

	Map<String, dynamic> toJson() => $NetListBeanToJson(this);

	late String desc;
	late double id;
	late String imagePath;
	late double isVisible;
	late double order;
	late String title;
	late double type;
	late String url;
}
