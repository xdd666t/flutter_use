import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/route_config.dart';

import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_cubit.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';
import 'package:get/get.dart';

part 'span_one_state.dart';

class SpanOneCubit extends Cubit<SpanOneState> {
  SpanOneCubit() : super(SpanOneState().init());

  void init() {
    emit(state.init());
  }

  ///跳转到跨页面
  void toSpanTwo(BuildContext context) {
    Get.toNamed(RouteConfig.spanTwo);
  }

  ///自增
  void increase() {
    state..count = ++state.count;
    emit(state.clone());
  }
}
