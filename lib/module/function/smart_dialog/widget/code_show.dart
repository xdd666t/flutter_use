part of '../view.dart';

class _CodeShow extends StatefulWidget {
  const _CodeShow({
    Key? key,
    required this.data,
  }) : super(key: key);

  final SmartDialogState data;

  @override
  State<_CodeShow> createState() => _CodeShowState();
}

class _CodeShowState extends State<_CodeShow> {
  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (BtnInfo item) {
      return [
        // 代码show
        _buildCodeShow(item),

        // 演示
        _buildCodeDemo(item),
      ];
    });
  }

  Expanded _buildCodeDemo(BtnInfo item) {
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

  Expanded _buildCodeShow(BtnInfo item) {
    return Expanded(
      flex: 3,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
        alignment: Alignment.topCenter,
        child: AnimatedOpacity(
          duration: const Duration(milliseconds: 200),
          curve: Curves.easeIn,
          opacity: widget.data.codeOpacity,
          child: CodePreview(code: item.demo ?? "暂无"),
        ),
      ),
    );
  }

  Widget _buildBg({required List<Widget> Function(BtnInfo item) builder}) {
    BtnInfo? btnInfo;
    for (var element in widget.data.trees) {
      element.selected = false;
      for (var subElement in element.btnInfo) {
        if (subElement.selected) {
          btnInfo = subElement;
          break;
        }
      }
    }
    return Expanded(
      child: Container(
        child: btnInfo != null ? Row(children: builder(btnInfo)) : Container(),
      ),
    );
  }
}
