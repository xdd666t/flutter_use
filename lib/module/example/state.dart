import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/bean/common/tree_info.dart';

class ExampleState {
  late List<TreeTwiceInfo> trees;

  ExampleState() {
    trees = [
      //GetX
      TreeTwiceInfo(
        title: 'GetX',
        btnInfo: [
          BtnInfo(title: '计数器-响应式', tag: ExampleStatus.getCounterRx),
          BtnInfo(title: '计数器-简单式', tag: ExampleStatus.getCounterEasy),
          BtnInfo(title: '计数器-进阶版', tag: ExampleStatus.getCounterHigh),
          BtnInfo(title: '跨页面事件交互', tag: ExampleStatus.getJump),
          BtnInfo(title: 'GetX实例-自动释放', tag: ExampleStatus.getAutoDispose),
          BtnInfo(title: '计数器-binding', tag: ExampleStatus.getCounterBinding),
          BtnInfo(
              title: 'EasyX-自定义EasyBuilder刷新机制',
              tag: ExampleStatus.counterEasyXBuilder),
          BtnInfo(
              title: 'EasyX-自定义ebx刷新机制', tag: ExampleStatus.counterEasyXEbx),
        ],
      ),

      //Bloc
      TreeTwiceInfo(
        title: 'Bloc',
        btnInfo: [
          BtnInfo(title: '计数器-Cubit', tag: ExampleStatus.blCubitCounter),
          BtnInfo(title: '计数器-Bloc', tag: ExampleStatus.blBlocCounter),
          BtnInfo(title: '全局Bloc', tag: ExampleStatus.globalBloc),
          BtnInfo(title: 'Stream应用', tag: ExampleStatus.stream),
          BtnInfo(title: '自定义Builder', tag: ExampleStatus.blCustomBuilder),
          BtnInfo(title: '自定义状态管理框架-EasyC', tag: ExampleStatus.counterEasyC),
        ],
      ),

      //Provider
      TreeTwiceInfo(
        title: 'Provider',
        btnInfo: [
          BtnInfo(title: '计数器-简单版', tag: ExampleStatus.providerEasy),
          BtnInfo(title: '计数器-进阶版', tag: ExampleStatus.providerHigh),
          BtnInfo(title: '全局Provider', tag: ExampleStatus.providerSpanOne),
          BtnInfo(title: 'ChangeNotifier使用', tag: ExampleStatus.testNotifier),
          BtnInfo(title: '自定义Builder', tag: ExampleStatus.customBuilder),
          BtnInfo(title: '自定义状态管理框架-EasyP', tag: ExampleStatus.counterEasyP),
          BtnInfo(
              title: '自定义状态管理框架-EasyP全局',
              tag: ExampleStatus.counterGlobalEasyP),
        ],
      ),

      //测试
      TreeTwiceInfo(
        title: '测试',
        btnInfo: [
          BtnInfo(title: '测试布局', tag: ExampleStatus.testLayout),
          BtnInfo(title: '测试网络（不支持web)', tag: ExampleStatus.testNet),
        ],
      ),
    ];
  }
}

class ExampleStatus {
  ///GetX栏目
  static const String getCounterRx = 'getCounterRx';
  static const String getCounterEasy = 'getCounterEasy';
  static const String getCounterHigh = 'getCounterHigh';
  static const String getJump = 'getJump';
  static const String getAutoDispose = 'getAutoDispose';
  static const String getCounterBinding = 'getCounterBinding';
  static const String counterEasyXBuilder = 'counterEasyXBuilder';
  static const String counterEasyXEbx = 'counterEasyXEbx';

  ///Bloc栏目
  static const String blCubitCounter = 'blCubitCounter';
  static const String blBlocCounter = 'blBlocCounter';
  static const String globalBloc = 'globalBloc';
  static const String stream = 'stream';
  static const String blCustomBuilder = 'blCustomBuilder';
  static const String counterEasyC = 'counterEasyC';

  ///Provider栏目
  static const String providerEasy = 'providerEasy';
  static const String providerHigh = 'providerHigh';
  static const String providerSpanOne = 'providerSpanOne';
  static const String testNotifier = 'testNotifier';
  static const String customBuilder = 'customBuilder';
  static const String counterEasyP = 'counterEasyP';
  static const String counterGlobalEasyP = 'counterGlobalEasyP';

  ///测试栏目
  static const String testLayout = 'testLayout';
  static const String testNet = 'testNet';
}
