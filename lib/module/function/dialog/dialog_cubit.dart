import 'package:bloc/bloc.dart';
import 'package:flutter_use/bean/common/btn_info.dart';
import 'package:flutter_use/views/dialog/bottom/data/bottom_single_dialog.dart';

part 'dialog_state.dart';

class DialogCubit extends Cubit<DialogState> {
  DialogCubit() : super(DialogState().init());

  ///一些事件处理
  ///展示功能模块
  void showFun(context, tag) {
    switch (tag) {
      case 'bottom':
        _bottom(context);
        break;
    }
  }
}

///顶部弹窗
void _bottom(context){
  List<BtnInfo> list = [];
  for (var i = 0; i < 10; i++) {
    list.add(BtnInfo(title: "姓名-$i", tag: i.toString()));
  }
  showBottomSingleDialog<BtnInfo>(
    context,
    list: list,
    showKey: 'title',
    callback: (item) {
      print(item.title);
      print(item.tag);
    },
  );
}