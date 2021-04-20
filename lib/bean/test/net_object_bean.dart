import 'package:flutter_use/generated/json/base/json_convert_content.dart';

class NetObjectBean with JsonConvert<NetObjectBean> {
	late int curPage;
	late List<NetObjectDatas> datas;
	late int offset;
	late bool over;
	late int pageCount;
	late int size;
	late int total;
}

class NetObjectDatas with JsonConvert<NetObjectDatas> {
	late String apkLink;
	late int audit;
	late String author;
	late bool canEdit;
	late int chapterId;
	late String chapterName;
	late bool collect;
	late int courseId;
	late String desc;
	late String descMd;
	late String envelopePic;
	late bool fresh;
	late String host;
	late int id;
	late String link;
	late String niceDate;
	late String niceShareDate;
	late String origin;
	late String prefix;
	late String projectLink;
	late int publishTime;
	late int realSuperChapterId;
	late int selfVisible;
	late int shareDate;
	late String shareUser;
	late int superChapterId;
	late String superChapterName;
	late List<dynamic> tags;
	late String title;
	late int type;
	late int userId;
	late int visible;
	late int zan;
}
