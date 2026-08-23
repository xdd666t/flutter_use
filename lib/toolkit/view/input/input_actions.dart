import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/toolkit/view/input/focus_widget.dart';
import 'package:keyboard_actions/keyboard_actions.dart';

/// Adds a platform-aware keyboard toolbar around an input field.
class InputActions extends StatelessWidget {
  const InputActions({
    super.key,
    required this.context,
    required this.focusNode,
    required this.child,
  });

  // Kept as part of the public API for callers that already pass their build
  // context. The keyboard_actions package resolves platform details from the
  // current widget context, so the value is intentionally not used directly.
  final BuildContext context;

  /// Each input field must own a distinct focus node.
  final FocusNode focusNode;

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return KeyboardActions.done(
      enabled: defaultTargetPlatform == TargetPlatform.iOS,
      doneText: '完成',
      child: KeyboardField(
        focusNode: focusNode,
        showArrows: false,
        onDone: focusNode.unfocus,
        child: FocusWidget(focusNode: focusNode, child: child),
      ),
    );
  }
}
