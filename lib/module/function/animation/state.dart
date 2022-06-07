import '../../../entity/common/btn_info.dart';
import '../../../entity/common/tree_info.dart';

class AnimationState {
  late List<TreeTwiceInfo> trees;

  AnimationState() {
    trees = [
      //Dialog
      TreeTwiceInfo(
        title: 'Custom Animation',
        btnInfo: [
          BtnInfo(title: 'AnimationWidget', tag: AnimationTag.animationWidget),
        ],
      ),
    ];
  }
}

class AnimationTag {
  /// dialog
  static const String animationWidget = 'animationWidget';
}