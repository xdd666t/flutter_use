import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/keep_alive_page.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/module/example/example_view.dart';
import 'package:flutter_use/module/function/function_view.dart';
import 'package:meta/meta.dart';

part 'main_event.dart';

part 'main_state.dart';

class MainBloc extends Bloc<MainEvent, MainState> {
  MainBloc() : super(MainState().init());

  @override
  Stream<MainState> mapEventToState(MainEvent event) async* {
    ///main_view中添加的事件，会在此处回调，此处处理完数据，将数据yield，BlocBuilder就会刷新组件
    if (event is MainInitEvent) {
      yield await init();
    } else if (event is SwitchTabEvent) {
      ///获取到event事件传递过来的值,咱们拿到这值塞进MainState中
      ///直接在state上改变内部的值,然后yield,只能触发一次BlocBuilder,它内部会比较上次MainState对象,如果相同,就不build
      yield switchTap(event);
    }
  }


  ///初始化操作,在网络请求的情况下,需要使用如此方法同步数据
  Future<MainState> init() async {
    return state.clone();
  }

  ///切换tab
  MainState switchTap(SwitchTabEvent event) {
    return state.clone()..selectedIndex = event.selectedIndex;
  }
}
