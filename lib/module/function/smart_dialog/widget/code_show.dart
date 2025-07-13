part of '../view.dart';

class _CodeShow extends StatelessWidget {
  const _CodeShow({
    Key? key,
    required this.data,
  }) : super(key: key);

  final SmartDialogState data;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (DialogItemInfo item) {
      return [
        // 代码show
        _buildCodeShow(item),

        // 演示
        _buildCodeDemo(item),
      ];
    });
  }

  Expanded _buildCodeDemo(DialogItemInfo item) {
    return Expanded(
      flex: 1,
      child: Container(
        height: double.maxFinite,
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          color: Colors.grey.withOpacity(0.12),
        ),
        child: item.demo ?? Container(),
      ),
    );
  }

  Expanded _buildCodeShow(DialogItemInfo item) {
    return Expanded(
      flex: 3,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
        alignment: Alignment.topCenter,
        child: FadeTransition(
          opacity: CurvedAnimation(
            parent: data.codeAnimationCtl,
            curve: Curves.easeIn,
          ),
          child: CodePreview(className: item.className ?? ""),
        ),
      ),
    );
  }

  Widget _buildBg({
    required List<Widget> Function(DialogItemInfo item) builder,
  }) {
    DialogItemInfo? itemInfo;
    for (var node in data.trees) {
      for (var subNode in node.children) {
        if (subNode.data.route == data.activeMenu?.data.route) {
          var ext = subNode.data.ext;
          if (ext is! DialogItemInfo) {
            return Container();
          }
          itemInfo = ext as DialogItemInfo?;
          break;
        }
      }
    }

    return Expanded(
      child: itemInfo != null ? Row(children: builder(itemInfo)) : Container(),
    );
  }
}
