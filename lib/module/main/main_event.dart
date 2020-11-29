part of 'main_bloc.dart';

@immutable
abstract class MainEvent {}

///初始化事件,这边目前不需要传什么值
class MainInitEvent extends MainEvent {}

///切换NavigationRail的tab
class SwitchTabEvent extends MainEvent {
  final int selectedIndex;

  SwitchTabEvent({@required this.selectedIndex});
}