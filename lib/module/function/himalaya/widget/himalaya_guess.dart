import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/module/function/himalaya/state.dart';

///猜你喜欢
typedef ItemBuilder = Widget Function(HimalayaSubItemInfo item);

class HimalayaGuess extends StatelessWidget {
  HimalayaGuess({
    Key key,
    this.onChange,
    this.data,
  }) : super(key: key);

  ///数据源
  final List<HimalayaSubItemInfo> data;

  ///换一批点击监听
  final ParamVoidCallback onChange;

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
        return Column(children: [
          //图片布局
          Container(
            width: 110.dp,
            height: 100.dp,
            child: Image.network(item.tag),
          ),
        ]);
      })
    ]);
  }

  Widget _buildItemBg({ItemBuilder itemBuilder}) {
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

  Text _buildTitle() {
    return Text(
      '猜你喜欢',
      style: TextStyle(
        color: Colors.black,
        fontSize: 18.sp,
        fontWeight: FontWeight.w600,
      ),
    );
  }

  Row buildTitleAndRefresh() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        //标题
        _buildTitle(),

        //换一批
        _buildGuessChange()
      ],
    );
  }

  Widget _buildBg({List<Widget> children}) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10.dp),
      width: 700.dp,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: children,
      ),
    );
  }
}
