import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';
import 'package:flutter_use/toolkit/typedef/function.dart';

class BottomSingleDialogView extends StatefulWidget {
  BottomSingleDialogView({
    Key? key,
    required this.onCancel,
    required this.onConfirm,
    required this.data,
    this.title = '请选择',
    this.cancel = '取消',
    this.confirm = '确认',
    this.titleTextStyle,
    this.cancelTextStyle,
    this.confirmTextStyle,
    this.itemTextStyle,
  }) : super(key: key);

  ///数据源
  final List<String> data;

  ///取消回调
  final ParamVoidCallback onCancel;

  ///确定回调
  final ParamSingleCallback<int> onConfirm;

  ///取消文本
  final String cancel;

  ///标题文本
  final String title;

  ///确认文本
  final String confirm;

  ///取消文本样式
  final TextStyle? cancelTextStyle;

  ///标题文本样式
  final TextStyle? titleTextStyle;

  ///确认文本样式
  final TextStyle? confirmTextStyle;

  ///item样式样式
  final TextStyle? itemTextStyle;

  @override
  _BottomSingleDialogViewState createState() => _BottomSingleDialogViewState();
}

class _BottomSingleDialogViewState extends State<BottomSingleDialogView> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      children: [
        //标题
        _buildTitle(),

        //分割线
        Container(height: 1.dp, color: Colors.black.withOpacity(0.2)),

        //内容列表
        Expanded(child: _buildContent()),
      ],
    );
  }

  Widget _buildTitle() {
    return Row(
      children: [
        //取消
        Expanded(flex: 1, child: _buildCancel()),

        //标题
        Expanded(flex: 3, child: _buildHeadTitle()),

        //确定
        Expanded(flex: 1, child: _buildConfirm()),
      ],
    );
  }

  Widget _buildContent() {
    return CupertinoPicker(
      itemExtent: 65.dp,
      useMagnifier: true,
      //选中项放大
      magnification: 1.2,
      squeeze: 1.1,
      onSelectedItemChanged: (int index) {
        _selectedIndex = index;
      },
      children: widget.data.asMap().keys.map((index) {
        return Container(
          alignment: Alignment.center,
          child: Text(
            widget.data[index],
            style: widget.itemTextStyle ??
                TextStyle(color: Color(0xFF333333), fontSize: 28.sp),
          ),
        );
      }).toList(),
    );
  }

  Widget _buildConfirm() {
    return _buildBtn(
      title: widget.confirm,
      alignment: Alignment.centerRight,
      style: widget.confirmTextStyle ??
          TextStyle(color: Color(0xFF0299FF), fontSize: 33.sp),
      onPressed: () => widget.onConfirm(_selectedIndex),
    );
  }

  Widget _buildHeadTitle() {
    return Container(
      alignment: Alignment.center,
      child: Text(
        widget.title,
        style: widget.titleTextStyle ??
            TextStyle(color: Color(0xFF333333), fontSize: 33.sp),
      ),
    );
  }

  Widget _buildCancel() {
    return _buildBtn(
      title: widget.cancel,
      alignment: Alignment.centerLeft,
      style: widget.cancelTextStyle ??
          TextStyle(color: Color(0xFF999999), fontSize: 33.sp),
      onPressed: () {
        widget.onCancel();
      },
    );
  }

  Widget _buildBtn({
    required VoidCallback onPressed,
    required String title,
    required AlignmentGeometry alignment,
    required TextStyle style,
  }) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10),
      alignment: alignment,
      child: RawMaterialButton(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(7)),
        onPressed: onPressed,
        child: Text(title, style: style),
      ),
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      height: 650.dp,
      padding: EdgeInsets.only(top: 2),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(10),
          topRight: Radius.circular(10),
        ),
      ),
      child: Column(
        children: children,
      ),
    );
  }
}
