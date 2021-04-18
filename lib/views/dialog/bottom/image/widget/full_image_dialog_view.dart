

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';

class FullImageDialogView extends StatefulWidget {
  FullImageDialogView({
    required this.imageWidgets,
    required this.currentIndex,
  });

  final List<ImageProvider> imageWidgets;

  final int currentIndex;

  @override
  _FullImageDialogViewState createState() => _FullImageDialogViewState();
}

class _FullImageDialogViewState extends State<FullImageDialogView> {
  late int currentIndex;

  @override
  void initState() {
    currentIndex = widget.currentIndex;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //图片预览
      _previewImage(),

      //退出按钮
      Positioned(
        top: 80.dp,
        right: 30.dp,
        child: _buildExit(),
      ),

      //预览图片位置标识
      Positioned(
        bottom: 30.dp,
        right: 30.dp,
        child: _buildImageTag(),
      ),
    ]);
  }

  Widget _buildExit() {
    return ClipOval(
      child: Material(
        color: Colors.transparent,
        child: InkResponse(
          child: IconButton(
            icon: Icon(
              CupertinoIcons.clear,
              color: Colors.white,
              size: 30,
            ),
            onPressed: () => Navigator.pop(context),
          ),
        ),
      ),
    );
  }

  Widget _buildImageTag() {
    return Text(
      '${currentIndex + 1}/${widget.imageWidgets.length}',
      style: TextStyle(color: Colors.white, fontSize: 30.sp),
    );
  }


  Widget _previewImage() {
    return PhotoViewGallery.builder(
      scrollPhysics: const BouncingScrollPhysics(),
      enableRotation: true,
      builder: (BuildContext context, int index) {
        return PhotoViewGalleryPageOptions(
          imageProvider: widget.imageWidgets[index],
          initialScale: PhotoViewComputedScale.contained * 0.8,
        );
      },
      itemCount: widget.imageWidgets.length,
      loadingBuilder: (context, event) => Center(
        child: Container(
          width: 20.0,
          height: 20.0,
          child: CircularProgressIndicator(
            value: (event == null || event.expectedTotalBytes == null)
                ? 0
                : event.cumulativeBytesLoaded / event.expectedTotalBytes!,
          ),
        ),
      ),
      pageController: PageController(initialPage: currentIndex),
      onPageChanged: (index) {
        //设置当前页面标识变换
        currentIndex = index;
        setState(() {});
      },
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      color: Colors.black,
      child: Stack(
        children: children,
      ),
    );
  }
}
