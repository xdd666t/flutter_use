part of 'main_bloc.dart';

class MainState {
  int selectedIndex;

  //分类按钮数据源
  List<BtnInfo> list;

  ///Navigation的item信息
  List<BtnInfo> itemList;

  ///PageView页面
  List<Widget> pageList;
  PageController pageController;

  MainState init() {
    return MainState()
      //PageView页面
      ..pageList = [
        keepAliveWrapper(FunctionPage()),
        keepAliveWrapper(ExamplePage()),
        keepAliveWrapper(Center(child: Container())),
      ]
      //item栏目
      ..itemList = [
        BtnInfo(
          title: "功能",
          icon: Icon(Icons.bubble_chart),
        ),
        BtnInfo(
          title: "范例",
          icon: Icon(Icons.opacity),
        ),
        BtnInfo(
          title: "设置",
          icon: Icon(Icons.settings),
        ),
      ]
      ..pageController = PageController()
      ..selectedIndex = 0;
  }

  MainState clone() {
    return MainState()
      ..pageController = pageController
      ..selectedIndex = selectedIndex
      ..itemList = itemList
      ..pageList = pageList;
  }
}
