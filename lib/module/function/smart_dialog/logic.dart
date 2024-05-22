import 'package:flutter/material.dart';
import 'package:flutter_use/toolkit/utils/html_utils.dart';
import 'package:flutter_use/toolkit/utils/view_utils.dart';
import 'package:get/get.dart';
import 'package:tolyui_navigation/tolyui_navigation.dart';

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

  void _processLocation() async {
    // await ViewUtils.initFinish();
    // 处理url定位问题
    var url = HtmlUtils.curUrl;
    url = url.replaceFirst('/#/', '/');
    url = url.replaceFirst('#/', '/');
    url = url.replaceFirst('/#', '/');
    final uri = Uri.parse(url);
    final type = uri.queryParameters[SmartDialogState.dialogParam];
    for (var node in state.trees) {
      for (var subNode in node.children) {
        var ext = subNode.data.ext;
        if (ext is DialogItemInfo && ext.className == type) {
          state.menuTreeMeta = MenuTreeMeta(
            expandMenus: [node.data.router],
            activeMenu: null,
            root: MenuNode(
              children: state.trees,
              data: const MenuMeta(router: '', label: ''),
            ),
          );
          onItem(subNode);
          return;
        }
      }
    }
  }

  void onItem(MenuNode node) async {
    state.activeMenu = node;
    state.menuTreeMeta = state.menuTreeMeta.select(node, singleExpand: true);
    state.codeAnimationCtl.value = 0;
    var ext = node.data.ext;
    if (ext is DialogItemInfo) {
      HtmlUtils.push(state.urlParam, '${ext.className}');
    }
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
