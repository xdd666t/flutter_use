import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/example/bloc/span_page/span_one/span_one_cubit.dart';
import 'package:flutter_use/module/example/provider/easy_p_counter_global/logic.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';

import 'app/config/route_config.dart';
import 'module/example/provider/easy_p/change_notifier_easy_p.dart';
import 'module/example/provider/span_page/span_one/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: RouteConfig.main,
      getPages: RouteConfig.getPages,
      navigatorObservers: [FlutterSmartDialog.observer],
      builder: FlutterSmartDialog.init(
        toastBuilder: (String msg, AlignmentGeometry alignment) {
          return ToastWidget(msg: msg, alignment: alignment);
        },
        loadingBuilder: (String msg, Color background) {
          return LoadingWidget(msg: msg, background: background);
        },
        builder: _builder,
      ),
    );
  }
}

///独立处理全局 Bloc 和 Provider
Widget _builder(BuildContext context, Widget? child) {
  return MultiBlocProvider(
    providers: [
      //此处通过MultiBlocProvider创建的Bloc或者Cubit是全局的
      BlocProvider.value(value: BlocSpanOneCubit()),
    ],
    child: MultiProvider(
      providers: [
        //此处通过MultiProvider创建的Provider是全局的
        ChangeNotifierProvider.value(value: ProSpanOneProvider()),

        // ChangeNotifierProvider(create: (context) => ProSpanOneProvider()),
      ],
      child: _customGlobalWidget(child),
    ),
  );
}

///自定义的一些全局控件
Widget _customGlobalWidget(Widget? child) {
  return ChangeNotifierEasyP(
    create: (BuildContext context) => CounterGlobalEasyP(),
    child: child,
  );
}


///自定义Toast和Loading控件
class LoadingWidget extends StatelessWidget {
  LoadingWidget({
    Key? key,
    required this.msg,
    required this.background,
  }) : super(key: key);

  final String msg;
  final Color background;

  @override
  Widget build(BuildContext context) {
    return _buildBg(children: [
      CircularProgressIndicator(
        strokeWidth: 3,
        valueColor: AlwaysStoppedAnimation(Colors.white),
      ),
      Container(
        margin: EdgeInsets.only(top: 20),
        child: Text(msg, style: TextStyle(color: Colors.white)),
      ),
    ]);
  }

  Widget _buildBg({required List<Widget> children}) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(15),
      ),
      child: Column(mainAxisSize: MainAxisSize.min, children: children),
    );
  }
}

class ToastWidget extends StatelessWidget {
  ToastWidget({
    Key? key,
    required this.msg,
    required this.alignment,
  }) : super(key: key);

  final String msg;
  final AlignmentGeometry alignment;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: alignment,
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 30, vertical: 50),
        padding: EdgeInsets.symmetric(horizontal: 25, vertical: 10),
        decoration: BoxDecoration(
          color: Colors.black,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text('$msg', style: TextStyle(color: Colors.white)),
      ),
    );
  }
}
