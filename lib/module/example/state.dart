import 'package:flutter_use/app/config/tag_config.dart';
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
          BtnInfo(title: '计数器-响应式', tag: ExampleConfig.counterGetX),
          BtnInfo(title: '计数器-简单式', tag: ExampleConfig.counterEasyGetX),
          BtnInfo(title: '计数器-进阶版', tag: ExampleConfig.counterHighGetX),
          BtnInfo(title: '跨页面事件交互', tag: ExampleConfig.jumpGetX),
          BtnInfo(title: 'GetX实例-自动释放', tag: ExampleConfig.autoDispose),
        ],
      ),

      //Bloc
      TreeTwiceInfo(
        title: 'flutter_bloc',
        btnInfo: [
          BtnInfo(title: 'Cubit', tag: ExampleConfig.cubit),
          BtnInfo(title: '全局Bloc', tag: ExampleConfig.globalBloc),
        ],
      ),

      //Provider
      TreeTwiceInfo(
        title: 'provider',
        btnInfo: [
          BtnInfo(title: '计数器-简单版', tag: ExampleConfig.providerEasy),
          BtnInfo(title: '计数器-进阶版', tag: ExampleConfig.providerHigh),
          BtnInfo(title: '计数器-拓展版', tag: ExampleConfig.providerExtended),
          BtnInfo(title: '全局Provider', tag: ExampleConfig.providerSpanOne),
        ],
      ),

      //测试
      TreeTwiceInfo(
        title: '测试',
        btnInfo: [
          BtnInfo(title: '测试布局', tag: ExampleConfig.testLayout),
          BtnInfo(title: '测试网络（不支持web)', tag: ExampleConfig.testNet),
        ],
      ),
    ];
  }
}
