import 'package:bloc/bloc.dart';
import 'package:flutter_use/app/routes/navigator_util.dart';
import 'package:flutter_use/app/utils/ui/show.dart';

import 'function_state.dart';

class FunctionCubit extends Cubit<FunctionState> {
  FunctionCubit() : super(FunctionState().init());

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case 'smartDialog':
        NavigatorUtil.goSmartDialogPage(context);
        break;
      case 'dialog':
        NavigatorUtil.goDialogPage(context);
        break;
      default:
        showSnackBar(context, '暂无');
        break;
    }
  }
}
