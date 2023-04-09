import 'package:code_preview/code_preview.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_use/toolkit/utils/html_utils.dart';
import 'package:get/get.dart';

import '../../../entity/common/btn_info.dart';
import '../../../entity/common/tree_info.dart';
import 'state.dart';

class SmartDialogLogic extends GetxController
    with GetSingleTickerProviderStateMixin {
  final state = SmartDialogState();

  @override
  void onInit() {
    state.codeAnimationCtl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 600),
    );
    state.codeAnimationCtl.forward();
    _processLocation();
    super.onInit();
  }

  void _processLocation() {
    // 处理url定位问题
    var url = HtmlUtils.curUrl.replaceFirst('/#/', '/');
    url = url.replaceFirst('/#/', '/');
    url = url.replaceFirst('#/', '/');
    url = url.replaceFirst('/#', '/');
    final uri = Uri.parse(url);
    final type = uri.queryParameters[SmartDialogState.dialogParam];
    for (var element in state.trees) {
      element.selected = false;
      for (var subElement in element.btnInfo) {
        if (subElement.tag == type) {
          element.selected = true;
          subElement.selected = true;
          HtmlUtils.push(state.urlParam, '${subElement.tag}');
          notifyChildrens();
          return;
        }
      }
    }
  }

  void onItem(TreeTwiceInfo item, BtnInfo subItem) async {
    for (var element in state.trees) {
      element.selected = false;
      for (var subElement in element.btnInfo) {
        subElement.selected = false;
      }
    }

    item.selected = true;
    subItem.selected = true;
    state.codeAnimationCtl.value = 0;
    HtmlUtils.push(state.urlParam, '${subItem.tag}');
    update();

    Future.delayed(const Duration(milliseconds: 10), () {
      state.codeAnimationCtl.forward();
      update();
    });
  }

  @override
  void onClose() {
    state.codeAnimationCtl.dispose();
    super.onClose();
  }
}
