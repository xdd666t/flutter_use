import 'package:flutter/material.dart';

///按钮信息
class BtnInfo {
  BtnInfo({
    this.title,
    this.tag,
    this.className,
    this.icon,
    this.bg,
    this.selected = false,
    this.demo,
  });

  ///按钮名称
  String? title;

  ///按钮标识
  String? tag;

  ///类名
  String? className;

  ///正常情况图标
  Icon? icon;

  ///背景
  String? bg;

  ///做个控制
  bool selected;

  /// 该按钮功能demo
  Widget? demo;

  /// jsonDecode(jsonStr) 方法中会调用实体类的这个方法。如果实体类中没有这个方法，会报错。
  Map toJson() {
    Map map = Map();
    map["title"] = this.title;
    map["tag"] = this.tag;
    map["icon"] = this.icon;
    map["bg"] = this.bg;
    map["selected"] = this.selected;
    return map;
  }
}
