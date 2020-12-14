part of 'example_cubit.dart';

class ExampleState {
  List<TreeTwiceInfo> trees;

  ExampleState init() {
    return ExampleState()
      ..trees = [
        //Bloc
        TreeTwiceInfo(
          title: 'flutter_bloc',
          btnInfo: [
            BtnInfo(title: 'Cubit', tag: 'cubit'),
            BtnInfo(title: '跨页面事件(类似广播)', tag: 'span'),
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
