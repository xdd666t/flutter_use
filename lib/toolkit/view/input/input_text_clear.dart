import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'input_actions.dart';

typedef InputClearParamSingleCallback<D> = dynamic Function(D data);
typedef InputClearParamVoidCallback = dynamic Function();

///输入框,带删除图标
class InputTextClear extends StatefulWidget {
  InputTextClear({
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
    this.iconColor = const Color(0xFFCCCCCC),
    this.onClear,
    this.enabled,
    this.onTap,
  });

  ///输入框的长宽
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
  final InputClearParamSingleCallback<String>? onChanged;

  ///输入完成回调
  final InputClearParamVoidCallback? onComplete;

  ///点击
  final InputClearParamVoidCallback? onTap;

  ///控制器
  final TextEditingController? controller;

  ///文字展示方形
  final TextAlign textAlign;

  ///icon颜色
  final Color iconColor;

  ///删除监听
  final InputClearParamVoidCallback? onClear;

  ///是否禁止输入
  final bool? enabled;

  @override
  _InputTextClearState createState() => _InputTextClearState();
}

class _InputTextClearState extends State<InputTextClear>
    with SingleTickerProviderStateMixin {
  late FocusNode _focusNode;
  late TextEditingController _textController;

  ///动画
  late AnimationController _animationController;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();

    ///处理输入框
    _focusNode = FocusNode();
    _textController = widget.controller ?? TextEditingController();
    //监听输入框数值变化
    _textController.addListener(() async {
      //处理下删除图标的显示
      String msg = _textController.text;
      if (msg.length != 0) {
        _animationController.forward();
      } else {
        _animationController.reverse();
      }
    });

    ///处理动画
    _animationController = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 500),
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0)
        .chain(CurveTween(curve: Curves.ease))
        .animate(_animationController);
  }

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //输入框
      _buildInput(),

      //删除图标
      Expanded(child: _buildDelete()),
    ]);
  }

  Widget _buildInput() {
    return _buildInputBg(
      context: context,
      child: TextField(
        focusNode: _focusNode,
        controller: _textController,
        keyboardType: widget.keyboardType,
        autofocus: widget.autofocus ?? false,
        textAlign: TextAlign.start,
        style: TextStyle(
          color: widget.textColor,
          fontSize: 28,
        ),
        inputFormatters: widget.inputFormatters,
        textInputAction: TextInputAction.search,
        enabled: widget.enabled,
        decoration: InputDecoration(
          //较小空间时，使组件正常渲染，包括文本垂直居中
          isDense: true,
          hintText: widget.hintText,
          hintStyle: TextStyle(
            color: widget.hintColor,
            fontSize: 24,
          ),
          border: InputBorder.none,
          contentPadding: EdgeInsets.all(0.0),
        ),
        onTap: widget.onTap,
        onChanged: (msg) {
          //监听输入的数值
          if (widget.onChanged != null) {
            widget.onChanged!(msg);
          }
        },
        onEditingComplete: () {
          if (widget.onComplete != null) {
            widget.onComplete!();
          }

          FocusScope.of(context).requestFocus(FocusNode());
        },
      ),
    );
  }

  Widget _buildDelete() {
    return Container(
      margin: EdgeInsets.only(right: 12),
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () {
          //处理下删除逻辑
          _animationController.reverse();
          _textController.clear();

          if (widget.onChanged != null) {
            widget.onChanged!(_textController.text);
          }

          if (widget.onClear != null) {
            widget.onClear!();
          }
        },
        child: ScaleTransition(
          scale: _animation,
          child: Container(
            padding: const EdgeInsets.all(10),
            child: Icon(
              Icons.clear,
              size: 38,
              color: widget.iconColor,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildBg({required List<Widget> children}) {
    return Row(
      children: children,
    );
  }

  Widget _buildInputBg({required BuildContext context, required Widget child}) {
    return Container(
      height: widget.height ?? 50,
      width: widget.widget ?? 300,
      alignment: Alignment.center,
      child: InputActions(
        context: context,
        focusNode: _focusNode,
        child: child,
      ),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    _textController.dispose();

    super.dispose();
  }
}
