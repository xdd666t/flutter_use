part of 'example_cubit.dart';

class ExampleState {
  List trees;

  ExampleState init() {
    var trees = [
      //Bloc
      TreeTwiceInfo(
        title: 'flutter_bloc',
        btnInfo: [
          BtnInfo(title: 'Cubit', tag: 'cubit'),
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
    return ExampleState()..trees = trees;
  }

  ExampleState clone() {
    return ExampleState()..trees = trees;
  }
}
