part of 'example_cubit.dart';

class ExampleState {
  List<TreeTwiceInfo> trees;

  ExampleState init() {
    return ExampleState()
      ..trees = [
        //GetX
        TreeTwiceInfo(
          title: 'GetX',
          btnInfo: [
            BtnInfo(title: '计数器-响应式', tag: 'counterGetX'),
            BtnInfo(title: '计数器-简单式', tag: 'counterEasyGetX'),
            BtnInfo(title: '跨页面事件交互', tag: 'jumpGetX'),
          ],
        ),

        //Bloc
        TreeTwiceInfo(
          title: 'flutter_bloc',
          btnInfo: [
            BtnInfo(title: 'Cubit', tag: 'cubit'),
            BtnInfo(title: '全局Bloc', tag: 'globalBloc'),
          ],
        ),

        //布局
        TreeTwiceInfo(
          title: '布局',
          btnInfo: [
            BtnInfo(title: '测试布局', tag: 'testLayout'),
          ],
        ),
      ];
  }

  ExampleState clone() {
    return ExampleState()..trees = trees;
  }
}
