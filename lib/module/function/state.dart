import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/entity/common/btn_info.dart';

class FunctionState {
  late List<BtnInfo> items;

  FunctionState() {
    //初始化item
    items = [
      BtnInfo(
        title: '代码规范',
        tag: FunctionStatus.himalaya,
        bg: ImageHimalayaConfig.logo,
        selected: false,
      ),
      BtnInfo(
        title: 'SmartDialog',
        tag: FunctionStatus.smartDialog,
        bg: ImageFunctionStatus.functionBgOne,
      ),
      BtnInfo(
        title: 'Animation',
        tag: FunctionStatus.animation,
        bg: ImageFunctionStatus.functionBgThree,
      ),
      BtnInfo(
        title: '测试',
        tag: FunctionStatus.animation,
        bg: ImageFunctionStatus.functionBgFour,
      ),
      BtnInfo(
        title: '测试',
        tag: FunctionStatus.test,
        bg: ImageFunctionStatus.functionBgFive,
      ),
    ];
  }
}

class FunctionStatus {
  ///喜马拉雅 代码规范
  static const String himalaya = 'himalaya';

  ///SmartDialog
  static const String smartDialog = 'smartDialog';

  ///Animation
  static const String animation = 'animation';

  ///测试
  static const String test = 'test';
}
