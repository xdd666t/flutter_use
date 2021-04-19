import 'package:flutter_use/generated/json/base/json_convert_content.dart';

class TestTestBean with JsonConvert<TestTestBean> {
	late List<TestTestData> data;
	late int errorCode;
	late String errorMsg;
}

class TestTestData with JsonConvert<TestTestData> {
	late String desc;
	late int id;
	late String imagePath;
	late int isVisible;
	late int order;
	late String title;
	late int type;
	late String url;
}
