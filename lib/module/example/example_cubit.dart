import 'package:bloc/bloc.dart';
import 'package:flutter_use/app/config/route_config.dart';

import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/bean/common/tree_info.dart';
import 'package:flutter_use/module/example/getx/jump_page/jump_one/view.dart';
import 'package:get/get.dart';

part 'example_state.dart';

class ExampleCubit extends Cubit<ExampleState> {
  ExampleCubit() : super(ExampleState().init());

  ///跳转到功能模块
  void toFun(context, tag) {
    switch (tag) {
      case 'globalGetX':
        Get.toNamed(RouteConfig.jumpOne);
        break;
      case 'cubit':
        Get.toNamed(RouteConfig.counter);
        break;
      case 'globalBloc':
        Get.toNamed(RouteConfig.spanOne);
        break;
      case 'testLayout':
        Get.toNamed(RouteConfig.testLayout);
        // SmartDialog.instance.show();
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
