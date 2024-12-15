part of "../view.dart";

///NavigationRail组件为侧边栏
class _SideNavigation extends StatelessWidget {
  const _SideNavigation({
    Key? key,
    required this.data,
    required this.onItem,
    required this.onUnfold,
    required this.onScale,
  }) : super(key: key);

  /// 数据源
  final MainState data;

  ///选择的index
  final ParamSingleCallback onItem;

  ///是否展开  点击展开事件
  final ParamSingleCallback<bool> onUnfold;

  ///缩放事件
  final ParamSingleCallback<bool> onScale;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      Expanded(
        child: SingleChildScrollView(
          child: Column(children: [
            // 头像
            _buildHeadImage(),

            // 侧边栏选项
            _buildItems(),
          ]),
        ),
      ),

      // 缩放
      _buildScale(),
    ]);
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      width: 120,
      padding: const EdgeInsets.only(top: 20),
      color: Colors.grey.withOpacity(0.12),
      child: Column(children: children),
    );
  }

  Widget _buildItems() {
    var activeColor = Colors.blue;
    var normalColor = Colors.black;
    return Column(
      children: List.generate(data.sideItems.length, (index) {
        var item = data.sideItems[index];
        return GetBuilder<MainLogic>(builder: (logic) {
          return Container(
            margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
            child: InkWell(
              borderRadius: BorderRadius.circular(5),
              onTap: () => onItem(index),
              child: Container(
                height: 35,
                padding: const EdgeInsets.only(left: 12),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: data.selectedIndex == index
                      ? activeColor.withOpacity(0.1)
                      : null,
                ),
                alignment: Alignment.center,
                child: Row(children: [
                  Icon(
                    item.icon?.icon,
                    color: data.selectedIndex == index
                        ? activeColor
                        : normalColor,
                    size: 15,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    item.title ?? "",
                    style: TextStyle(
                      fontSize: 13,
                      color: data.selectedIndex == index
                          ? activeColor
                          : normalColor,
                    ),
                  ),
                ]),
              ),
            ),
          );
        });
      }),
    );
  }

  Widget _buildScale() {
    return Container(
      margin: const EdgeInsets.only(bottom: 40),
      alignment: Alignment.center,
      child: Wrap(direction: Axis.vertical, spacing: 15, children: [
        const Text('开启缩放'),

        //缩放按钮
        GetBuilder<MainLogic>(builder: (logic) {
          return CupertinoSwitch(
            activeColor: Colors.blue,
            trackColor: Colors.white,
            thumbColor: Colors.white,
            value: data.isScale,
            onChanged: onScale,
          );
        }),
      ]),
    );
  }

  Widget _buildHeadImage() {
    return Center(
      child: Container(
        width: 75,
        height: 75,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.only(top: 20, bottom: 30),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: Colors.blue.withOpacity(0.5),
              blurRadius: 8,
              spreadRadius: 0.2,
            )
          ],
          image: const DecorationImage(
            image: NetworkImage(
              "https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20220103124847.jpg",
            ),
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}
