import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'test_layout_state.dart';

class TestLayoutCubit extends Cubit<TestLayoutState> {
  TestLayoutCubit() : super(TestLayoutState().init());
}
