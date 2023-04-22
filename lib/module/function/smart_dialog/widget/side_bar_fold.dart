part of '../view.dart';

class _SideBarFold extends StatelessWidget {
  const _SideBarFold({
    Key? key,
    required this.data,
    required this.onItem,
  }) : super(key: key);

  final SmartDialogState data;

  final Function(DialogFoldInfo item, DialogItemInfo subItem) onItem;

  @override
  Widget build(BuildContext context) {
    return _buildBg(builder: (DialogFoldInfo item) {
      return [
        _buildItemBg(
          context: context,
          item: item,
          subBuilder: (DialogItemInfo subItem) => _buildItem(item, subItem),
        ),

        // 分割线
        const Divider(),
      ];
    });
  }

  Widget _buildItem(DialogFoldInfo item, DialogItemInfo subItem) {
    var activeColor = Colors.blue;
    var normalColor = Colors.black;
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
      child: InkWell(
        borderRadius: BorderRadius.circular(5),
        onTap: () => onItem(item, subItem),
        child: Container(
          padding: const EdgeInsets.only(
            left: 15,
            top: 15,
            bottom: 15,
            right: 10,
          ),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(5),
            color: subItem.selected ? activeColor.withOpacity(0.1) : null,
          ),
          alignment: Alignment.centerLeft,
          child: Text(
            subItem.title ?? '',
            style: TextStyle(
              fontSize: 15,
              color: subItem.selected ? activeColor : normalColor,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildItemBg({
    required BuildContext context,
    required DialogFoldInfo item,
    required Widget Function(DialogItemInfo subItem) subBuilder,
  }) {
    return Theme(
      data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8),
        child: ExpansionTile(
          backgroundColor: Colors.grey.withOpacity(0.12),
          tilePadding: EdgeInsets.zero,
          title: Container(
            alignment: Alignment.center,
            child: Text(item.title),
          ),
          initiallyExpanded: item.selected,
          children: List.generate(item.itemInfo.length, (subIndex) {
            var subItem = item.itemInfo[subIndex];
            return subBuilder(subItem);
          }),
        ),
      ),
    );
  }

  Widget _buildBg({
    required List<Widget> Function(DialogFoldInfo item) builder,
  }) {
    return Container(
      width: 150,
      height: double.maxFinite,
      color: Colors.grey.withOpacity(0.12),
      child: SingleChildScrollView(
        child: Container(
          margin: const EdgeInsets.only(right: 7, top: 15),
          child: Column(
            children: List.generate(data.trees.length, (index) {
              var item = data.trees[index];
              return Column(children: builder(item));
            }),
          ),
        ),
      ),
    );
  }
}
