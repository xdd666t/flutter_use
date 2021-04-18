import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';

typedef FullConfirmParamVoidCallback = void Function();

///独立控件,尽量减少依赖
///
///用于提示是否确定自己的选择

class FullConfirmDialogView extends StatefulWidget {
  FullConfirmDialogView({
    Key? key,
    this.titleStyle,
    this.title,
    this.cancel = '取消',
    this.cancelStyle,
    this.confirm = '确认',
    this.confirmStyle,
    this.content,
    this.contentStyle,
    this.onCancel,
    this.onConfirm,
  });

  ///取消回调
  final FullConfirmParamVoidCallback? onCancel;

  ///确定回调
  final FullConfirmParamVoidCallback? onConfirm;

  ///标题内容
  final String? title;

  ///内容样式
  final TextStyle? titleStyle;

  ///内容信息
  final String? content;

  ///标题样式
  final TextStyle? contentStyle;

  ///标题内容
  final String cancel;

  ///标题样式
  final TextStyle? cancelStyle;

  ///标题内容
  final String confirm;

  ///标题样式
  final TextStyle? confirmStyle;

  @override
  _FullConfirmDialogViewState createState() => _FullConfirmDialogViewState();
}

class _FullConfirmDialogViewState extends State<FullConfirmDialogView>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  Widget build(BuildContext context) {
    return _buildBg(
      children: [
        //标题
        _buildTitle(),

        //内容
        _buildContent(),

        //确定和取消模块
        _buildClickEvent(context),
      ],
    );
  }

  @override
  void initState() {
    _controller = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 250),
    );
    _controller.forward();
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget _buildClickEvent(BuildContext context) {
    return Column(
      children: [
        //分割线
        Container(
          height: 1.dp,
          width: double.infinity,
          color: Color(0xFFEEEEEE),
        ),

        //确定和取消
        Container(
          height: 90.dp,
          child: Row(
            children: [
              //取消
              Expanded(child: _buildCancel()),

              //分割线
              Container(
                height: double.infinity,
                width: 1.dp,
                color: Color(0xFFEEEEEE),
              ),

              //确定
              Expanded(child: _buildConfirm()),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildConfirm() {
    return FlatButton(
      onPressed: () async {
        ///点击确定的关闭逻辑
        _dealCloseLogic(widget.onConfirm);
      },
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(8.dp),
        ),
      ),
      height: 90.dp,
      child: Text(
        widget.confirm,
        style: widget.confirmStyle ??
            TextStyle(
              color: Color(0xFF0299FF),
              fontSize: 30.sp,
            ),
      ),
    );
  }

  Widget _buildCancel() {
    return FlatButton(
      onPressed: () async {
        ///点击取消控制逻辑
        _dealCloseLogic(widget.onCancel);
      },
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(8.dp),
        ),
      ),
      height: 90.dp,
      child: Text(
        widget.cancel,
        style: widget.cancelStyle ??
            TextStyle(
              color: Color(0xFF333333),
              fontSize: 30.sp,
            ),
      ),
    );
  }

  Widget _buildContent() {
    return widget.title != null
        ? Container(
            padding: EdgeInsets.only(left: 47.dp, right: 47.dp),
            margin: EdgeInsets.only(top: 48.dp, bottom: 48.dp),
            child: Text(
              widget.content ?? '',
              style: widget.contentStyle ??
                  TextStyle(
                    color: Color(0xFF333333),
                    fontSize: 28.sp,
                  ),
            ),
          )
        : Container(
            padding: EdgeInsets.only(left: 47.dp, right: 47.dp),
            margin: EdgeInsets.only(top: 52.dp, bottom: 94.dp),
            child: Text(
              widget.content ?? '',
              style: widget.contentStyle ??
                  TextStyle(
                    color: Color(0xFF333333),
                    fontSize: 32.sp,
                  ),
            ),
          );
  }

  Widget _buildTitle() {
    return Visibility(
      visible: widget.title != null,
      child: Container(
        padding: EdgeInsets.only(left: 47.dp, right: 47.dp),
        child: Text(
          widget.title ?? '',
          style: widget.titleStyle ??
              TextStyle(
                color: Color(0xFF333333),
                fontSize: 32.sp,
                fontWeight: FontWeight.bold,
              ),
        ),
      ),
    );
  }

  ///关于一些背景设置
  Widget _buildBg({required List<Widget> children}) {
    return Center(
      child: ScaleTransition(
        scale: CurvedAnimation(
          parent: _controller,
          curve: Curves.linear,
        ),
        child: Container(
          width: 552.dp,
          padding: EdgeInsets.only(top: 42.dp),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8.dp),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: children,
          ),
        ),
      ),
    );
  }

  void _dealCloseLogic(FullConfirmParamVoidCallback? callBack) async {
    close();
    if (callBack != null) {
      callBack();
    }
  }

  void close() {
    _controller.reverse();
    Navigator.pop(context);
  }
}
