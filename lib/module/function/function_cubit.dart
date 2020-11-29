import 'package:bloc/bloc.dart';
import 'package:flutter_use/app/routes/navigator_util.dart';

import 'function_state.dart';

class FunctionCubit extends Cubit<FunctionState> {
  FunctionCubit() : super(FunctionState().init());

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case 'dialog':
        NavigatorUtil.goDialogPage(context);
        break;
    }
  }
}
