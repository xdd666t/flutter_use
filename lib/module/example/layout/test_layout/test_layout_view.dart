import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/module/example/layout/test_layout/test_layout_cubit.dart';

class TestLayoutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) => TestLayoutCubit(),
      child: BlocBuilder<TestLayoutCubit, TestLayoutState>(builder: _buildBody),
    );
  }

  Widget _buildBody(BuildContext context, TestLayoutState state) {
    return _buildBg(children: [
      //底下
      Listener(
        onPointerDown: (event) {
          showSnackBar(context, '底部蓝色区域++++++++');
        },
        child: Container(
          height: 300,
          width: 300,
          color: Colors.blue,
        ),
      ),

      //上面 事件穿透
      Listener(
        behavior: HitTestBehavior.translucent,
        onPointerDown: (event) {
          showSnackBar(context, '上面红色区域---------');
        },
        child: Container(
          height: 200,
          width: 200,
        ),
      ),
    ]);
  }

  Widget _buildBg({List<Widget> children}) {
    return Scaffold(
      appBar: AppBar(title: Text('测试布局')),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: children,
        ),
      ),
    );
  }
}
