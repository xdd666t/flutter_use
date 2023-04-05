import 'btn_info.dart';

///树形信息
class TreeTwiceInfo {
  TreeTwiceInfo({
    required this.title,
    required this.btnInfo,
    this.selected = false,
  });

  ///一级大标题
  String title;

  ///二级内容
  List<BtnInfo> btnInfo;

  ///做个控制
  bool selected;
}
