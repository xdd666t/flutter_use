import 'package:flutter/material.dart';
import 'package:flutter_use/views/dialog/assist/bean/file_info_bean.dart';

///展示图片
Future<void> bottomImageDialog({
  required List<FileInfoBean> imageList,
  required BuildContext context,
  required int currentIndex,
  bool? isSort,
}) async {
  // List<ImageProvider> images = [];
  //
  // if (isSort) {
  //   ///按数据源的顺序排序
  //   for (var bean in imageList) {
  //     if (bean is FileInfoBean) {
  //       images.add(NetworkImage(bean.imagePath));
  //     }
  //     else if (bean is Asset) {
  //       ByteData byteData = await bean.getByteData();
  //       Uint8List sourceBytes = byteData.buffer.asUint8List();
  //       images.add(MemoryImage(sourceBytes));
  //     }
  //   }
  // } else {
  //   ///网络图片全部在前
  //   for (var bean in imageList) {
  //     if (bean.isNet) {
  //       images.add(NetworkImage(bean.imagePath));
  //     }
  //   }
  //
  //   ///本地图片全部在后
  //   for (var bean in imageList) {
  //     if (!bean.isNet) {
  //       ByteData byteData = await bean.getByteData();
  //       Uint8List sourceBytes = byteData.buffer.asUint8List();
  //       images.add(MemoryImage(sourceBytes));
  //     }
  //   }
  // }
  //
  // showModalBottomSheet(
  //   context: context,
  //   isScrollControlled: true,
  //   builder: (BuildContext context) {
  //     return FullImageDialogView(
  //       imageWidgets: images,
  //       currentIndex: currentIndex,
  //     );
  //   },
  // );
}

///使用文件路径加载的写法
// Future<void> bottomImageDialog({
//   @required List imageList,
//   @required BuildContext context,
//   @required int currentIndex,
//   bool isSort,
// }) async {
//   List<String> stringList = [];
//
//   if (isSort) {
//     ///按数据源的顺序排序
//     for (var bean in imageList) {
//       if (bean is FileInfoBean) {
//         stringList.add(bean.imagePath);
//       } else if (bean is Asset) {
//         var file = await FileUtil.getImageFileByAssets(
//           await bean.getByteData(),
//           name: bean.name,
//         );
//         stringList.add(file.path);
//       }
//     }
//   } else {
//     ///网络图片全部在前
//     for (var bean in imageList) {
//       if (bean is FileInfoBean) {
//         stringList.add(bean.imagePath);
//       }
//     }
//
//     ///本地图片全部在后
//     for (var bean in imageList) {
//       if (bean is Asset) {
//         var file = await FileUtil.getImageFileByAssets(
//           await bean.getByteData(),
//           name: bean.name,
//         );
//         LogUtil.log('++++++++++++++++++++');
//         LogUtil.log(file.path);
//         stringList.add(file.path);
//       }
//     }
//   }
//
//   List<ImageProvider> images = [];
//   for (String path in stringList) {
//     if (path.startsWith('http')) {
//       images.add(NetworkImage(path));
//     } else {
//       images.add(AssetImage(path));
//     }
//   }
//
//   showModalBottomSheet(
//     context: context,
//     isScrollControlled: true,
//     builder: (BuildContext context) {
//       return FullImageDialogView(
//         imageWidgets: images,
//         currentIndex: currentIndex,
//       );
//     },
//   );
// }
