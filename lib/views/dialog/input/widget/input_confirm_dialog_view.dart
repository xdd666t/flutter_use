import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:flutter_use/views/dialog/easy/easy_dialog.dart';

typedef InputConfirmParamVoidCallback = void Function(String content);

typedef InputCancelParamVoidCallback = void Function();

///独立控件,尽量减少依赖
///
///用于提示是否确定自己的选择

class InputConfirmDialogView extends StatefulWidget {
  InputConfirmDialogView(
      {Key key,
      this.titleStyle,
      this.title,
      this.cancel = '取消',
      this.cancelStyle,
      this.confirm = '确认',
      this.confirmStyle,
      this.hint,
      this.contentStyle,
      this.onCancel,
      this.onConfirm,
      this.maxLines,
      this.minLines,
      this.contentLength = 50,
      this.editingController});

  ///取消回调
  final InputCancelParamVoidCallback onCancel;

  ///确定回调
  final InputConfirmParamVoidCallback onConfirm;

  ///标题内容
  final String title;

  ///内容样式
  final TextStyle titleStyle;

  ///hint信息
  final String hint;

  ///标题样式
  final TextStyle contentStyle;

  ///标题内容
  final String cancel;

  ///标题样式
  final TextStyle cancelStyle;

  ///标题内容
  final String confirm;

  ///标题样式
  final TextStyle confirmStyle;

  ///指定最大行数
  final int maxLines;

  ///指定最小行数
  final int minLines;

  ///指定输入的文案最大长度
  final int contentLength;

  ///TextField控制器
  final TextEditingController editingController;

  @override
  _InputConfirmDialogViewState createState() => _InputConfirmDialogViewState();
}

class _InputConfirmDialogViewState extends State<InputConfirmDialogView>
    with SingleTickerProviderStateMixin {
  AnimationController _controller;

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
          height: auto(1),
          width: double.infinity,
          color: Color(0xFFEEEEEE),
        ),

        //确定和取消
        Container(
          height: auto(90),
          child: Row(
            children: [
              //取消
              Expanded(child: _buildCancel()),

              //分割线
              Container(
                height: double.infinity,
                width: auto(1),
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
        _dealConfirmCloseLogic(widget.onConfirm);
      },
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(auto(8)),
        ),
      ),
      height: auto(90),
      child: Text(
        widget.confirm,
        style: widget.confirmStyle ??
            TextStyle(
              color: Color(0xFF0299FF),
              fontSize: setSp(30),
            ),
      ),
    );
  }

  Widget _buildCancel() {
    return FlatButton(
      onPressed: () async {
        ///点击取消控制逻辑
        _dealCancelCloseLogic(widget.onCancel);
      },
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(auto(8)),
        ),
      ),
      height: auto(90),
      child: Text(
        widget.cancel,
        style: widget.cancelStyle ??
            TextStyle(
              color: Color(0xFF333333),
              fontSize: setSp(30),
            ),
      ),
    );
  }

  Widget _buildContent() {
    return widget.title != null
        ? Container(
            padding: EdgeInsets.only(left: auto(47), right: auto(47)),
            margin: EdgeInsets.only(top: auto(48), bottom: auto(48)),
            child: _buildTextField())
        : Container(
            padding: EdgeInsets.only(left: auto(47), right: auto(47)),
            margin: EdgeInsets.only(top: auto(52), bottom: auto(94)),
            child: _buildTextField());
  }

  Widget _buildTitle() {
    return Visibility(
      visible: widget.title != null,
      child: Container(
        padding: EdgeInsets.only(left: auto(47), right: auto(47)),
        child: Text(
          widget.title ?? '',
          style: widget.titleStyle ??
              TextStyle(
                color: Color(0xFF333333),
                fontSize: setSp(32),
                fontWeight: FontWeight.bold,
              ),
        ),
      ),
    );
  }

  Widget _buildTextField() {
    return Container(
      decoration: BoxDecoration(
          border: Border.all(width: auto((1)), color: Color(0xFFE5E5E5))),
      child: TextField(
        controller: widget.editingController,
        maxLines: widget.maxLines,
        minLines: widget.minLines,
        style: widget.contentStyle,
        maxLength: widget.contentLength,
        decoration: InputDecoration(
          counterText: '',
          hintText: widget.hint,
          hintStyle: TextStyle(color: Color(0xFF7B7B7B), fontSize: setSp(28)),
          isDense: true,
          contentPadding:
              EdgeInsets.symmetric(vertical: auto(20), horizontal: auto(10)),
          border: InputBorder.none,
        ),
      ),
    );
  }

  ///关于一些背景设置
  Widget _buildBg({List<Widget> children}) {
    return Center(
      child: ScaleTransition(
        scale: CurvedAnimation(
          parent: _controller,
          curve: Curves.linear,
        ),
        child: Container(
          width: auto(552),
          padding: EdgeInsets.only(top: auto(42)),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(auto(8)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: children,
          ),
        ),
      ),
    );
  }

  void _dealCancelCloseLogic(InputCancelParamVoidCallback callBack) async {
    close();
    if (callBack != null) {
      callBack();
    }
  }

  void _dealConfirmCloseLogic(InputConfirmParamVoidCallback callback) {
    if ((widget.editingController?.text ?? '').isEmpty) {
      EasyDialog.showToast(widget.hint);
      return;
    }
    close();
    if (callback != null) {
      callback(widget.editingController?.text ?? null);
    }
  }

  void close() {
    _controller.reverse();
    Navigator.pop(context);
  }
}
