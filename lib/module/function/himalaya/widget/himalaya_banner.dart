import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

class HimalayaBanner extends StatelessWidget {
  HimalayaBanner({
    Key key,
    this.data,
    this.onTap,
  }) : super(key: key);

  ///数据源
  final List<String> data;

  ///点击banner的监听
  final ParamSingleCallback<int> onTap;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 700.dp,
      height: 200.dp,
      margin: EdgeInsets.only(top: 18.dp),
      child: Swiper(
        itemBuilder: (BuildContext context, int index) {
          return InkWell(
            onTap: () => onTap(index),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(15.dp),
              child: Image.network(data[index], fit: BoxFit.cover),
            ),
          );
        },
        autoplay: true,
        itemCount: data.length,
        viewportFraction: 0.8,
        scale: 0.9,
        layout: SwiperLayout.DEFAULT,
      ),
    );
  }
}
