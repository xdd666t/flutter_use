import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';

///猜你喜欢
class HimalayaGuess extends StatelessWidget {
  HimalayaGuess({
    Key key,
    this.onChange,
    this.data,
    this.onGuess,
  }) : super(key: key);

  ///数据源
  final List<HimalayaSubItemInfo> data;

  ///换一批点击监听
  final ParamVoidCallback onChange;

  ///猜你喜欢具体栏目
  final ParamSingleCallback<HimalayaSubItemInfo> onGuess;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //标题 + 换一批
      Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        //标题
        _buildTitle(),

        //换一批
        _buildGuessChange()
      ]),

      //显示具体信息流
      _buildItemBg(itemBuilder: (item) {
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          //图片卡片
          _buildPicCard(item),

          //文字描述
          Text(item.title, style: TextStyle(fontSize: 15.sp)),

          Text(item.subTitle,
              style: TextStyle(fontSize: 13.sp, color: Colors.grey)),
        ]);
      })
    ]);
  }

  Widget _buildPicCard(HimalayaSubItemInfo item) {
    return Container(
      width: 150.dp,
      height: 150.dp,
      margin: EdgeInsets.only(top: 16.dp, bottom: 6.dp),
      decoration: BoxDecoration(),
      child: GestureDetector(
        onTap: () => onGuess(item),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(15.dp),
          child: Image.network(item.tag),
        ),
      ),
    );
  }

  Widget _buildItemBg({HimalayaSubBuilder itemBuilder}) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: data.map((e) {
        return itemBuilder(e);
      }).toList(),
    );
  }

  Widget _buildGuessChange() {
    return InkWell(
      onTap: onChange,
      borderRadius: BorderRadius.circular(100),
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 5.dp, horizontal: 15.dp),
        child: Row(children: [
          //图标
          Icon(Icons.autorenew, size: 15),

          Container(width: 12.dp),

          //文字
          Text(
            '换一批',
            style: TextStyle(color: Colors.black, fontSize: 15.sp),
          ),
        ]),
      ),
    );
  }

  Widget _buildTitle() {
    return Text(
      '猜你喜欢',
      style: TextStyle(
        color: Colors.black,
        fontSize: 21.sp,
      ),
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      width: 800.dp,
      margin: EdgeInsets.only(top: 38.dp, bottom: 18.dp),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
