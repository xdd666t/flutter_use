import 'package:flutter_use/toolkit/typedef/function.dart';

import 'list/side_list_dialog.dart';

class SideDialog {
  ///侧边列表
  static Future<E> showList<E>({
    List<E>? list,
    String? imageUrl,
    ParamSingleCallback<E>? callback,
    String title = '请选择',
    String showKey = '',
  }) {
    return showSideListDialog<E>(
      list: list ?? [],
      imageUrl: imageUrl,
      callback: callback,
      title: title,
      showKey: showKey,
    );
  }
}
