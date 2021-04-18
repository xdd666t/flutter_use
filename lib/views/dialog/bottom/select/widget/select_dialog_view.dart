import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/views/dialog/assist/typedef/function.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

class SelectDialogView extends StatelessWidget {
  SelectDialogView({
    Key? key,
    required this.data,
    required this.onSelect,
    this.title = '请选择',
  }) : super(key: key);

  ///数据源
  final List<String> data;

  ///选择回到
  final DialogParamSingleCallback<int> onSelect;

  ///标题
  final String title;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      ///标题
      _buildTitle(),

      ///选择内容项目
      _buildSelectItem(),

      ///取消
      _buildCancel(),
    ]);
  }

  Widget _buildCancel() {
    return ClipRRect(
      borderRadius: BorderRadius.circular(10.dp),
      child: Material(
        color: Colors.white,
        child: InkWell(
          onTap: () => EasyDialog.dismiss(),
          child: Container(
            height: 100.dp,
            alignment: Alignment.center,
            child: Text(
              '取消',
              style: TextStyle(color: Color(0xFF999999), fontSize: 32.sp),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildSelectItem() {
    return Container(
      margin: EdgeInsets.only(bottom: 20.dp),
      child: ClipRRect(
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(10.dp),
          bottomLeft: Radius.circular(10.dp),
        ),
        child: Column(
          children: data.asMap().keys.map((index) {
            return _buildItem(index);
          }).toList(),
        ),
      ),
    );
  }

  Widget _buildItem(int index) {
    return Column(
      children: [
        Material(
          color: Colors.white,
          child: InkWell(
            onTap: () {
              onSelect(index);
            },
            child: Container(
              margin: EdgeInsets.only(bottom: 1.dp),
              height: 90.dp,
              alignment: Alignment.center,
              child: Text(
                data[index],
                style: TextStyle(
                  color: Color(0xFF333333),
                  fontSize: 30.sp,
                ),
              ),
            ),
          ),
        ),

        //分割线
        Visibility(
          visible: (data.length - 1) != index,
          child: Container(height: 0.4.dp, color: Colors.black),
        ),
      ],
    );
  }

  Widget _buildTitle() {
    return Column(
      children: [
        Container(
          height: 110.dp,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(10.dp),
              topRight: Radius.circular(10.dp),
            ),
          ),
          alignment: Alignment.center,
          child: Text(
            title,
            style: TextStyle(
              color: Color(0xFF333333),
              fontSize: 32.sp,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),

        //分割线
        Container(height: 0.8.dp, color: Colors.black),
      ],
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      margin: EdgeInsets.all(10.dp),
      child: Material(
        color: Colors.transparent,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: children,
        ),
      ),
    );
  }
}
