import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/routes/navigator_util.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_cubit.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_two/span_two_view.dart';

part 'span_one_state.dart';

class SpanOneCubit extends Cubit<SpanOneState> {
  SpanOneCubit() : super(SpanOneState().init());

  void init() {
    emit(state.init());
  }

  ///跳转到跨页面
  void toSpanTwo(BuildContext context) {
    NavigatorUtil.goSpanTwoPage(context);
    // Navigator.push(context, MaterialPageRoute(builder: (context) => SpanTwoPage()));
  }

  ///自增
  void increase() {
    state..count = ++state.count;
    emit(state.clone());
  }
}
