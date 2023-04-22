import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_use/app/ui/auto_ui.dart';

import '../input/input_actions.dart';

///此控件已减少相关依赖
///此控件进行少量导包修改即可移植其它项目使用
typedef SearchParamSingleCallback<D> = dynamic Function(D data);
typedef SearchParamVoidCallback = dynamic Function();

class SearchBar extends StatefulWidget {
  SearchBar({
    this.inputFormatters,
    this.hintText = '请输入',
    this.hintColor = const Color(0xFFCCCCCC),
    this.textColor = const Color(0xFF333333),
    this.keyboardType,
    this.autofocus,
    this.onChanged,
    this.iconColor = const Color(0xFFCCCCCC),
    this.onComplete,
    this.controller,
    this.onClear,
    this.bgColor = Colors.white,
  });

  ///背景色
  final Color bgColor;

  ///限制输入条件
  final List<TextInputFormatter>? inputFormatters;

  ///提示文字和样式颜色
  final String hintText;
  final Color hintColor;

  ///显示文字颜色
  final Color textColor;

  ///唤起不同的键盘类型
  final TextInputType? keyboardType;

  ///是否自动聚焦焦点
  final bool? autofocus;

  ///icon颜色
  final Color iconColor;

  ///回调输入的数据
  final SearchParamSingleCallback<String>? onChanged;

  ///输入完成  点击键盘上: 收缩,Ok等按钮
  final SearchParamSingleCallback<String>? onComplete;

  ///删除监听
  final SearchParamVoidCallback? onClear;

  ///输入框控制器
  final TextEditingController? controller;

  @override
  _SearchBarState createState() => _SearchBarState();
}

class _SearchBarState extends State<SearchBar>
    with SingleTickerProviderStateMixin {
  late FocusNode focusNode;
  late TextEditingController controller;

  ///动画
  late AnimationController animationController;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();

    focusNode = FocusNode();
    controller = widget.controller ?? TextEditingController();
    animationController = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 500),
    );
    animation = Tween(begin: 0.0, end: 1.0)
        .chain(CurveTween(curve: Curves.easeIn))
        .animate(animationController);

    //监听输入框数值变化
    controller.addListener(() {
      //处理下删除图标的显示
      String msg = controller.text;
      if (msg.length != 0) {
        animationController.forward();
      } else {
        animationController.reverse();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      //搜索icon
      _buildSearchIcon(),

      //输入框
      buildSearchInput(),

      //删除图标
      Expanded(
        child: buildSearchDelete(),
      )
    ]);
  }

  Widget buildSearchDelete() {
    return Container(
      margin: EdgeInsets.only(right: 18.dp),
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: () {
          //处理下删除逻辑
          animationController.reverse();
          controller.clear();

          if (widget.onChanged != null) {
            widget.onChanged!(controller.text);
          }

          if (widget.onClear != null) {
            widget.onClear!();
          }
        },
        child: ScaleTransition(
          scale: animation,
          child: Container(
            padding: EdgeInsets.all(10.dp),
            child: Icon(
              Icons.clear,
              size: 38.dp,
              color: widget.iconColor,
            ),
          ),
        ),
      ),
    );
  }

  Widget buildSearchInput() {
    return Container(
      width: 500.dp,
      padding: EdgeInsets.only(left: 24.dp),
      child: InputActions(
        context: context,
        focusNode: focusNode,
        child: TextField(
          focusNode: focusNode,
          controller: controller,
          keyboardType: widget.keyboardType,
          autofocus: widget.autofocus ?? false,
          textAlign: TextAlign.start,
          style: TextStyle(
            color: widget.textColor,
            fontSize: 28.sp,
          ),
          inputFormatters: widget.inputFormatters,
          textInputAction: TextInputAction.search,
          decoration: InputDecoration(
            ///较小空间时，使组件正常渲染，包括文本垂直居中
            isDense: true,
            hintText: widget.hintText,
            hintStyle: TextStyle(
              color: widget.hintColor,
              fontSize: 24.sp,
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
          onEditingComplete: () {
            if (widget.onComplete != null) {
              widget.onComplete!(controller.text);
            }

            FocusScope.of(context).requestFocus(FocusNode());
          },
        ),
      ),
    );
  }

  Widget _buildSearchIcon() {
    return Container(
      margin: EdgeInsets.only(left: 29.dp),
      child: Icon(Icons.search, color: widget.iconColor),
    );
  }

  ///主体背景构造
  Widget _buildBg({required List<Widget> children}) {
    return Container(
      height: 72.dp,
      width: MediaQuery.of(context).size.width,
      decoration: BoxDecoration(
        color: widget.bgColor,
        borderRadius: BorderRadius.circular(36),
      ),
      child: Row(children: children),
    );
  }

  @override
  void dispose() {
    super.dispose();
    animationController.dispose();
    controller.dispose();
  }
}
