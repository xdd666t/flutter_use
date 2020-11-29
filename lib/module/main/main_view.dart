import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/module/main/main_bloc.dart';
import 'package:flutter_use/module/main/widget/side_navigation.dart';

class MainPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      ///在MainBloc上使用add方法,添加初始化事件
      create: (BuildContext context) => MainBloc()..add(MainInitEvent()),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: BlocBuilder<MainBloc, MainState>(builder: _body),
      ),
    );
  }

  ///主体模块
  Widget _body(BuildContext context, MainState state) {
    return Row(
      children: [
        ///侧边栏区域
        SideNavigation(
          selectedIndex: state.selectedIndex,
          sideItems: state.itemList,
          onItem: (index) {
            BlocProvider.of<MainBloc>(context).add(SwitchTabEvent(selectedIndex: index));
            state.pageController.jumpToPage(index);
          },
        ),

        ///Expanded占满剩下的空间
        Expanded(
          child: _mainBodyPage(state.pageController, state),
        )
      ],
    );
  }

  ///NavigationRail右边的区域,使用PageView,主体内容页面
  Widget _mainBodyPage(PageController pageController, MainState state) {
    return PageView.builder(
      physics: NeverScrollableScrollPhysics(),
      itemCount: state.pageList.length,
      itemBuilder: (context, index) => state.pageList[index],
      controller: pageController,
    );
  }
}
