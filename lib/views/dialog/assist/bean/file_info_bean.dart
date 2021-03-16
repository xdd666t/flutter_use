import 'dart:typed_data';

import 'package:flutter/material.dart';

///添加的文件显示状态
enum FileInfoStatus {
  ///可删除状态
  statusDeletable,

  ///不可删除状态
  statusCantDeletable,

  ///添加图片状态
  statusAdd,
}

///文件信息实体
class FileInfoBean {
  ///网络图片url信息
  String imagePath;

  ///该文件状态
  FileInfoStatus status;

  ///本地图片资源
  // Asset imageAsset;

  ///id的作用组要是用来删除照片
  String id;

  ///判断是否是网络图片
  bool isNet;

  ///本地数据源全部使用源数据
  ByteData byteData;

  ///图片压缩质量
  static int quality = 60;

  FileInfoBean({
    this.id,
    @required this.isNet,
    this.imagePath,
    @required this.status,
    // this.imageAsset,
    this.byteData,
  });

  Future<ByteData> getByteData() async {
    return byteData;
  }
}
