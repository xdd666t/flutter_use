import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:visibility_detector/visibility_detector.dart';

class FunctionState {
  late List<BtnInfo> items;

  FunctionState() {
    //回调在每一帧的末尾触发,避免widget未加载完产生的报错
    VisibilityDetectorController.instance.updateInterval = Duration.zero;
    //初始化item
    items = [
      BtnInfo(
        title: '代码规范',
        tag: FunctionConfig.himalaya,
        bg: ImageHimalayaConfig.logo,
        selected: false,
      ),
      BtnInfo(
        title: 'SmartDialog',
        tag: FunctionConfig.smartDialog,
        bg: ImageFunctionConfig.functionBgOne,
      ),
      //暂不需要
      // BtnInfo(
      //   title: '弹窗控件',
      //   tag: FunctionConfig.dialog,
      //   bg: ImageFunctionConfig.functionBgTwo,
      // ),
      BtnInfo(
        title: '测试',
        tag: FunctionConfig.test,
        bg: ImageFunctionConfig.functionBgThree,
      ),
      BtnInfo(
        title: '测试',
        tag: FunctionConfig.test,
        bg: ImageFunctionConfig.functionBgFour,
      ),
      BtnInfo(
        title: '测试',
        tag: FunctionConfig.test,
        bg: ImageFunctionConfig.functionBgFive,
      ),
    ];
  }
}
