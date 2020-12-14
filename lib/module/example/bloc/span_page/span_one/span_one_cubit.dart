import 'package:bloc/bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_use/app/routes/navigator_util.dart';
import 'package:meta/meta.dart';

part 'span_one_state.dart';

class SpanOneCubit extends Cubit<SpanOneState> {
  SpanOneCubit() : super(SpanOneState().init());

  void init(){
    emit(state.init());
  }

  ///跳转到跨页面
  void toSpanTwo(BuildContext context){
    NavigatorUtil.goSpanTwoPage(context);
  }

  ///自增
  void increase() => emit(state.clone()..count = ++state.count);
}
