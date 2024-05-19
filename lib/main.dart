import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

// void main() {
//   // 解决启动白屏问题 或 Flutter2.5+首屏页面复杂，导致的加载异常问题
//   // main()方法并不是在Flutter给physicalSize赋值后才运行的，
//   // 这就导致部分机型性能比较好，还没赋值屏幕大小就可能启动渲染界面了。
//   // 如果size为有数值，监听测量回调，在回调中runApp
//   appReady() {
//     if (!window.physicalSize.isEmpty) {
//       window.onMetricsChanged = null;
//       runApp(const MyApp());
//       initWindow();
//     }
//   }
//
//   if (window.physicalSize.isEmpty) {
//     window.onMetricsChanged = appReady;
//   } else {
//     appReady();
//   }
//   // 相关初始化
//   CodePreview.config = CodePreviewConfig(codeTheme: CodeTheme.light);
// }
//
// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);
//
//   @override
//   Widget build(BuildContext context) {
//     return GetMaterialApp(
//       initialRoute: RouteConfig.main,
//       getPages: RouteConfig.getPages,
//       navigatorObservers: [FlutterSmartDialog.observer, GetXRouteObserver()],
//       builder: FlutterSmartDialog.init(
//         toastBuilder: (String msg) => CustomToastWidget(msg: msg),
//         loadingBuilder: (String msg) => CustomLoadingWidget(msg: msg),
//         builder: _builder,
//       ),
//     );
//   }
// }
//
// ///独立处理全局 Bloc 和 Provider
// Widget _builder(BuildContext context, Widget? child) {
//   return MultiBlocProvider(
//     providers: [
//       //此处通过MultiBlocProvider创建的Bloc或者Cubit是全局的
//       BlocProvider.value(value: BlocSpanOneCubit()),
//     ],
//     child: MultiProvider(
//       providers: [
//         //此处通过MultiProvider创建的Provider是全局的
//         ChangeNotifierProvider.value(value: ProSpanOneProvider()),
//
//         // ChangeNotifierProvider(create: (context) => ProSpanOneProvider()),
//       ],
//       child: _customGlobalWidget(child),
//     ),
//   );
// }
//
// ///自定义的一些全局控件
// Widget _customGlobalWidget(Widget? child) {
//   return ChangeNotifierEasyP(
//     create: (BuildContext context) => CounterGlobalEasyP(),
//     child: child,
//   );
// }


void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const SmartDialogPage(),
      navigatorObservers: [FlutterSmartDialog.observer],
      builder: FlutterSmartDialog.init(),
    );
  }
}

class SmartDialogPage extends StatelessWidget {
  const SmartDialogPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: const Text('SmartDialog-EasyDemo')),
      body: Container(
        margin: const EdgeInsets.all(30),
        child: Wrap(spacing: 20, children: [
          //toast
          ElevatedButton(
            onPressed: () => _showToast(),
            child: const Text('showToast'),
          ),

          //loading
          ElevatedButton(
            onPressed: () => _showLoading(),
            child: const Text('showLoading'),
          ),

          //notify
          ElevatedButton(
            onPressed: () => _showNotify(),
            child: const Text('showNotify'),
          ),

          //dialog
          ElevatedButton(
            onPressed: () => _show(),
            child: const Text('show'),
          ),

          //attach
          ElevatedButton(
            onPressed: () => _showAttach(context),
            child: const Text('showAttach'),
          ),

          //attach
          ElevatedButton(
            onPressed: () => _bindPage(context),
            child: const Text('bindPage'),
          ),
        ]),
      ),
    );
  }

  void _showToast() async {
    SmartDialog.showToast('test toast ---- ${Random().nextInt(999)}');

    // for (var i = 0; i < 9; i++) {
    //   SmartDialog.showToast(
    //     'test toast ---- $i',
    //     displayType: SmartToastType.multi,
    //   );
    // }
  }

  void _show() async {
    SmartDialog.show(builder: (_) {
      return Container(
        height: 80,
        width: 180,
        decoration: BoxDecoration(
          color: Colors.black,
          borderRadius: BorderRadius.circular(10),
        ),
        alignment: Alignment.center,
        child: const Text(
          'easy custom dialog',
          style: TextStyle(color: Colors.white),
        ),
      );
    });
  }

  void _showAttach(BuildContext ctx) {
    attachDialog(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.bottomCenter,
        animationType: SmartAnimationType.scale,
        highlightBuilder: (_, __) {
          return Positioned(child: Container());
        },
        scalePointBuilder: (selfSize) => Offset(selfSize.width, 0),
        builder: (_) {
          return Container(height: 50, width: 30, color: Colors.red);
        },
      );
    }

    //target widget
    SmartDialog.show(
      useSystem: true,
      builder: (_) {
        return Container(
          height: 300,
          width: 500,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          alignment: Alignment.center,
          child: Builder(builder: (context) {
            return ElevatedButton(
              onPressed: () => attachDialog(context),
              child: const Text('target widget'),
            );
          }),
        );
      },
    );
  }

  void _bindPage(BuildContext ctx) {
    //target widget
    SmartDialog.show(builder: (_) {
      return Container(
        height: 300,
        width: 500,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        alignment: Alignment.center,
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(ctx, MaterialPageRoute(builder: (_) {
              return Scaffold(
                appBar: AppBar(
                  title: const Text("New Page"),
                ),
                body: const Center(child: Text("New Page")),
              );
            }));
          },
          child: const Text('to new page'),
        ),
      );
    });
  }

  void _showLoading() async {
    SmartDialog.showLoading(msg: "test one");
    await Future.delayed(const Duration(seconds: 1));
    SmartDialog.showLoading(msg: "test two");
    await Future.delayed(const Duration(seconds: 1));
    SmartDialog.showLoading(msg: "test three");
    await Future.delayed(const Duration(seconds: 1));
    SmartDialog.dismiss();
  }

  void _showNotify() async {
    SmartDialog.showNotify(msg: '请求成功', notifyType: NotifyType.failure);
  }
}
