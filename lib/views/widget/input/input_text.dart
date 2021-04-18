import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'input_actions.dart';

///输入控件封装，封装模块尽量减少依赖，方便移植
typedef InputParamSingleCallback<D> = dynamic Function(D data);
typedef InputParamVoidCallback = dynamic Function();

class InputText extends StatefulWidget {
  InputText({
    this.inputFormatters,
    this.hintText = '请输入',
    this.hintColor = const Color(0xFFCCCCCC),
    this.hintSize,
    this.textColor = const Color(0xFF333333),
    this.textSize,
    this.keyboardType,
    this.autofocus,
    this.onChanged,
    this.controller,
    this.textAlign = TextAlign.start,
    this.widget,
    this.height,
    this.onComplete,
    this.onLoseFocus,
    this.onGetFocus,
    this.maxLength,
    this.style,
    this.decoration,
    this.maxLines,
    this.minLines,
    this.onTap,
  });

  final double? height;
  final double? widget;

  ///限制输入条件
  final List<TextInputFormatter>? inputFormatters;

  ///提示文字、样式颜色、大小
  final String hintText;
  final Color hintColor;
  final double? hintSize;

  ///显示文字颜色、大小
  final Color textColor;
  final double? textSize;

  ///唤起不同的键盘类型
  final TextInputType? keyboardType;

  ///是否自动聚焦焦点
  final bool? autofocus;

  ///回调输入的数据
  final InputParamSingleCallback<String>? onChanged;

  ///输入完成回调
  final InputParamVoidCallback? onComplete;

  ///控制器
  final TextEditingController? controller;

  ///文字展示方形
  final TextAlign textAlign;

  ///失去焦点
  final InputParamVoidCallback? onLoseFocus;

  ///获取焦点
  final InputParamVoidCallback? onGetFocus;

  ///点击输入框
  final InputParamVoidCallback? onTap;

  ///最大行数
  final int? maxLines;

  /// 最小行数
  final int? minLines;

  ///编辑的字体样式
  final TextStyle? style;

  ///最大长度
  final int? maxLength;

  ///装饰类
  final InputDecoration? decoration;

  @override
  _InputTextState createState() => _InputTextState();
}

class _InputTextState extends State<InputText> {
  late FocusNode focusNode;

  @override
  void initState() {
    focusNode = FocusNode();
    //监听焦点获得和失去
    focusNode.addListener(() {
      if (focusNode.hasFocus && widget.onGetFocus != null) {
        widget.onGetFocus!();
      } else if (!focusNode.hasFocus && widget.onLoseFocus != null) {
        widget.onLoseFocus!();
      }
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: widget.height ?? 500,
      width: widget.widget ?? 300,
      alignment: Alignment.center,
      child: _inputText(context),
    );
  }

  Widget _inputText(BuildContext context) {
    return InputActions(
      context: context,
      focusNode: focusNode,
      child: TextField(
        focusNode: focusNode,
        controller: widget.controller,
        keyboardType: widget.keyboardType,
        autofocus: widget.autofocus ?? false,
        textAlign: widget.textAlign,
        style: widget.style ??
            TextStyle(
              color: widget.textColor,
              fontSize: widget.textSize ?? 28,
            ),
        inputFormatters: widget.inputFormatters,
        maxLengthEnforced: true,
        maxLines: widget.maxLines,
        minLines: widget.minLines,
        maxLength: widget.maxLength,
        decoration: widget.decoration ??
            InputDecoration(
              ///较小空间时，使组件正常渲染，包括文本垂直居中
              isDense: true,
              hintText: widget.hintText,
              hintStyle: TextStyle(
                color: widget.hintColor,
                fontSize: widget.hintSize ?? 28,
              ),
              border: InputBorder.none,
              contentPadding: EdgeInsets.all(0.0),
            ),
        onChanged: (msg) {
          //监听输入的数值
          if (widget.onChanged != null) {
            widget.onChanged!(msg);
          }
        },
        onEditingComplete: widget.onComplete,
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!();
          }
        },
      ),
    );
  }

  @override
  void dispose() {
    focusNode.dispose();
    super.dispose();
  }
}
