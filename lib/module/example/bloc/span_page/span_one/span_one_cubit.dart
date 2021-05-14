import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:get/get.dart';

part 'span_one_state.dart';

class BlocSpanOneCubit extends Cubit<BlocSpanOneState> {
  BlocSpanOneCubit() : super(BlocSpanOneState().init());

  void init() {
    emit(state.init());
  }

  ///跳转到跨页面
  void toSpanTwo(BuildContext context) {
    Get.toNamed(RouteConfig.cubitSpanOne);
  }

  ///自增
  void increase() {
    state..count = ++state.count;
    emit(state.clone());
  }
}
