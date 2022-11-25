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
      // 拖拽区域
      SizedBox(height: 20, width: double.maxFinite, child: MoveWindow()),

      Expanded(
        child: Column(children: [
          // 头像
          _buildHeadImage(),

          // 侧边栏选项
          _buildItems(),

          // 缩放
          _buildScale(),
        ]),
      ),
    ]);
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      width: 120,
      color: const Color(0xFFF6F6F6),
      child: Column(children: children),
    );
  }

  Widget _buildItems() {
    var activeColor = Colors.blue;
    var normalColor = Colors.black;
    return Expanded(
      child: Column(
        children: List.generate(data.sideItems.length, (index) {
          var item = data.sideItems[index];
          return GetBuilder<MainLogic>(builder: (logic) {
            return Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              child: InkWell(
                onTap: () => onItem(index),
                child: SizedBox(
                  height: 50,
                  child: Row(children: [
                    //激活条
                    Container(
                      height: double.infinity,
                      width: 5,
                      color: data.selectedIndex == index
                          ? activeColor
                          : Colors.transparent,
                    ),

                    //item
                    Expanded(
                      child: Container(
                        width: double.maxFinite,
                        alignment: Alignment.center,
                        color: data.selectedIndex == index
                            ? Colors.white
                            : const Color(0xFFF6F6F6),
                        child: Row(mainAxisSize: MainAxisSize.min, children: [
                          Icon(
                            item.icon?.icon ?? Icons.abc,
                            color: data.selectedIndex == index
                                ? activeColor
                                : normalColor,
                          ),
                          const SizedBox(width: 3),
                          Text(
                            item.title ?? "",
                            style: TextStyle(
                              color: data.selectedIndex == index
                                  ? activeColor
                                  : normalColor,
                            ),
                          ),
                          const SizedBox(width: 7),
                        ]),
                      ),
                    )
                  ]),
                ),
              ),
            );
          });
        }),
      ),
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
        margin: const EdgeInsets.only(bottom: 30),
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
