import 'package:flutter/material.dart';
import 'package:flutter_use/app/typedef/function.dart';
import 'package:focus_widget/focus_widget.dart';
import 'package:keyboard_actions/keyboard_actions.dart';

class InputActions extends StatelessWidget {
  InputActions({
    @required this.context,
    @required this.focusNode,
    @required this.child,
  });

  final BuildContext context;

  ///切记,一个界面存在多个输入控件, 焦点节点对象不能使用同一个
  ///每一个不同的TextField控件,都应该对应不同的FocusNode对象
  final FocusNode focusNode;

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return KeyboardActions(
      config: buildIOSKeyBoardNumberConfig(context, focusNode),
      disableScroll: true,
      child: FocusWidget(
        child: child,
        focusNode: focusNode,
      ),
    );
  }

  /// 配置iOS数字输入框
  static KeyboardActionsConfig buildIOSKeyBoardNumberConfig(
      BuildContext context, FocusNode focusNode,
      {ParamVoidCallback doneCallBack}) {
    return KeyboardActionsConfig(
      keyboardActionsPlatform: KeyboardActionsPlatform.IOS,
      keyboardBarColor: Colors.grey[200],
      nextFocus: false,
      actions: [
        KeyboardActionsItem(
          focusNode: focusNode,
          displayDoneButton: true,
          onTapAction: () {
            doneCallBack();
            focusNode.unfocus();
          },
          toolbarButtons: [
            (node) {
              return GestureDetector(
                onTap: () {
                  doneCallBack();
                  node.unfocus();
                },
                child: Container(
                  color: Colors.white,
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    "完成",
                    style: TextStyle(color: Colors.black),
                  ),
                ),
              );
            },
          ],
        ),
      ],
    );
  }
}
