import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'screen_adapt_state.dart';

class ScreenAdaptCubit extends Cubit<ScreenAdaptState> {
  ScreenAdaptCubit() : super(ScreenAdaptInitial());
}
