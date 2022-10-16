import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_loading.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_toast.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/other_trick.dart';
import 'package:flutter_use/toolkit/view/input/input_text.dart';
import 'package:get/get.dart';

import '../../../app/ui/keep_alive_page.dart';
import 'state.dart';
import 'widget/multi_handle_widget.dart';

class SmartDialogLogic extends GetxController {
  final state = SmartDialogState();

  ///测试功能模块
  void showFun(tag) async {
    switch (tag) {

      ///dialog
      case SmartTag.dialogEasy:
        _dialogEasy();
        break;
      case SmartTag.dialogLocation:
        _dialogLocation();
        break;
      case SmartTag.dialogPenetrate:
        _dialogPenetrate();
        break;
      case SmartTag.dialogKeepSingle:
        _dialogKeepSingle();
        break;
      case SmartTag.dialogStack:
        _dialogStack();
        break;
      case SmartTag.dialogUseSystem:
        _dialogUseSystem();
        break;
      case SmartTag.dialogBindPage:
        _dialogBindPage();
        break;
      case SmartTag.dialogCarryResult:
        _dialogCarryResult();
        break;
      case SmartTag.dialogPermanent:
        _dialogPermanent();
        break;
      case SmartTag.dialogAnimationBuilder:
        _dialogAnimationBuilder();
        break;
      case SmartTag.dialogBindWidget:
        _dialogBindWidget();
        break;

      ///attach
      case SmartTag.attachLocation:
        _attachLocation();
        break;
      case SmartTag.attachPoint:
        _attachPoint();
        break;
      case SmartTag.attachTarget:
        _attachTarget();
        break;
      case SmartTag.attachImitate:
        _attachImitate();
        break;
      case SmartTag.attachBusiness:
        _attachBusiness();
        break;
      case SmartTag.attachGuide:
        _attachGuide();
        break;
      case SmartTag.attachScalePoint:
        _attachScalePoint();
        break;

      ///loading
      case SmartTag.loadingDefault:
        _loadingDefault();
        break;
      case SmartTag.loadingParam:
        _loadingParam();
        break;
      case SmartTag.loadingCustom:
        _loadingCustom();
        break;
      case SmartTag.loadingLeastTime:
        _loadingLeastTime();
        break;

      ///toast
      case SmartTag.toastDefault:
        _toastDefault();
        break;
      case SmartTag.toastCustom:
        _toastCustom();
        break;
      case SmartTag.toastType:
        _toastType();
        break;
      case SmartTag.toastSmart:
        _toastSmart();
        break;
      case SmartTag.toastIntervalTime:
        _toastIntervalTime();
        break;

      ///other
      case SmartTag.otherTrick:
        _otherTrick();
        break;
      case SmartTag.otherHardClose:
        _otherHardClose();
        break;
    }
  }

  void _attachTarget() async {
    targetDialog({
      required Offset target,
      required String url,
      required bool left,
    }) async {
      SmartDialog.showAttach(
        targetContext: null,
        targetBuilder: (_, __) => target,
        usePenetrate: true,
        alignment: left ? Alignment.centerRight : Alignment.centerLeft,
        builder: (_) {
          return Container(
            height: 100,
            width: 200,
            margin: EdgeInsets.only(
              top: 10,
              bottom: 10,
              left: left ? 0 : 10,
              right: left ? 10 : 0,
            ),
            padding: EdgeInsets.only(right: left ? 50 : 0, left: left ? 0 : 50),
            alignment: left ? Alignment.centerRight : Alignment.centerLeft,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(left ? 0 : 20),
                bottomLeft: Radius.circular(left ? 0 : 20),
                topRight: Radius.circular(left ? 20 : 0),
                bottomRight: Radius.circular(left ? 20 : 0),
              ),
              boxShadow: const [
                BoxShadow(color: Colors.blue, blurRadius: 8, spreadRadius: 0.2)
              ],
            ),
            child: Image.network(url),
          );
        },
      );
      await Future.delayed(const Duration(milliseconds: 1500));
    }

    await targetDialog(
      target: const Offset(0, 100),
      url:
          'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220104101555.jpeg',
      left: true,
    );

    await targetDialog(
      target: const Offset(0, 220),
      url:
          'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220104101608.jpg',
      left: true,
    );
    await targetDialog(
      target: const Offset(0, 340),
      url:
          'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220104110204.png',
      left: true,
    );
    await targetDialog(
      target: const Offset(0, 460),
      url:
          'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220104110147.png',
      left: true,
    );
    await targetDialog(
      target: Offset(MediaQuery.of(Get.context!).size.width, 580),
      url:
          'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220104101304.gif',
      left: false,
    );
  }

  void _attachScalePoint() async {
    TextEditingController? ctlOne;
    TextEditingController? ctlTwo;

    scalePoint(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        targetBuilder: (targetOffset, targetSize) {
          return Offset(targetOffset.dx, targetOffset.dy);
        },
        alignment: Alignment.bottomCenter,
        animationType: SmartAnimationType.scale,
        scalePointBuilder: (selfSize) {
          var halfWidth = (selfSize.width / 2);
          return Offset(
            double.tryParse(ctlOne?.text ?? halfWidth.toString()) ?? halfWidth,
            double.tryParse(ctlTwo?.text ?? '0') ?? 0,
          );
        },
        builder: (_) {
          return SizedBox(
            width: 50,
            child: Stack(children: <Widget>[
              Container(
                margin: const EdgeInsets.only(left: 25),
                child: Container(
                  width: 14,
                  height: 14,
                  color: Colors.white,
                  transform: Matrix4.rotationZ(pi / 4),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 7),
                width: 80,
                height: 130,
                decoration: const BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(4)),
                ),
                alignment: Alignment.center,
                child: const Text('指\n定\n缩\n放\n点'),
              ),
            ]),
          );
        },
      );
    }

    SmartDialog.show(
      onDismiss: () {
        ctlOne?.dispose();
        ctlTwo?.dispose();
      },
      builder: (_) {
        Widget inputText(TextEditingController? controller) {
          return SizedBox(
            width: 50,
            child: TextField(
              textAlign: TextAlign.center,
              controller: controller,
            ),
          );
        }

        return Container(
          width: 450,
          height: 350,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          child: Column(children: [
            //获取dx和dy数据
            Container(
              margin: const EdgeInsets.only(top: 20, bottom: 50),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const Text('dx:  '),
                  inputText(ctlOne = TextEditingController(text: '25')),
                  const SizedBox(width: 30),
                  const Text('dy:  '),
                  inputText(ctlTwo = TextEditingController(text: '0')),
                ],
              ),
            ),

            const Text('click add icon'),
            const SizedBox(height: 20),
            Builder(builder: (context) {
              return Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: () => scalePoint(context),
                  child: const Icon(Icons.add),
                ),
              );
            })
          ]),
        );
      },
    );
  }

  void _attachGuide() async {
    //guide dialog
    late BuildContext aContext;
    late BuildContext bContext;
    guide({required VoidCallback? onTap}) {
      return Container(
        margin: const EdgeInsets.only(top: 20),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(7),
          color: Colors.blue,
        ),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Column(children: [
          const Text(
            'xdd666',
            style: TextStyle(color: Colors.white, fontSize: 20),
          ),
          ElevatedButton(
            onPressed: () => onTap?.call(),
            child: const Text('next'),
          )
        ]),
      );
    }

    //example：highlightBuilder
    guideB(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.bottomCenter,
        highlightBuilder: (Offset targetOffset, Size targetSize) {
          return Positioned(
            top: targetOffset.dy - 10,
            left: targetOffset.dx - 10,
            child: Container(
              height: targetSize.height + 20,
              width: targetSize.width + 20,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.white,
              ),
            ),
          );
        },
        animationType: SmartAnimationType.fade,
        clickMaskDismiss: false,
        keepSingle: true,
        builder: (_) {
          return guide(onTap: () {
            SmartDialog.showToast('over');
            SmartDialog.dismiss();
          });
        },
      );
    }

    //example：highlight
    guideA(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.bottomCenter,
        highlightBuilder: (_, __) {
          return Positioned(
            left: 170,
            top: 190,
            child: Container(
              height: 120,
              width: 120,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.white,
              ),
            ),
          );
        },
        animationType: SmartAnimationType.fade,
        clickMaskDismiss: false,
        keepSingle: true,
        builder: (_) {
          return guide(onTap: () async {
            if (Random().nextBool()) await SmartDialog.dismiss();
            guideB(bContext);
          });
        },
      );
    }

    //point widget
    point({required VoidCallback onTap, required String url}) {
      return GestureDetector(
        onTap: onTap,
        child: Container(
          decoration: const BoxDecoration(
            boxShadow: [
              BoxShadow(color: Colors.black12, blurRadius: 8, spreadRadius: 0.2)
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Image.network(url, height: 100, width: 100),
          ),
        ),
      );
    }

    var pointA = Positioned(
      left: 100,
      top: 100,
      child: Builder(builder: (context) {
        aContext = context;
        return point(
          onTap: () => guideA(context),
          url:
              'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220103124847.jpg',
        );
      }),
    );
    var pointB = Positioned(
      right: 100,
      bottom: 100,
      child: Builder(builder: (context) {
        bContext = context;
        return point(
          onTap: () => guideB(context),
          url:
              'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20220103124847.jpg',
        );
      }),
    );
    SmartDialog.show(builder: (_) {
      return Container(
        width: double.infinity,
        height: double.infinity,
        alignment: Alignment.center,
        margin: const EdgeInsets.symmetric(vertical: 100, horizontal: 80),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: Stack(children: [pointA, pointB]),
      );
    });
    await Future.delayed(const Duration(milliseconds: 500));
    guideA(aContext);
  }

  void _attachBusiness() {
    //attach
    listDialog() {
      var list = ['小呆呆', '小菲菲', '小猪猪', '懒羊羊', '慢羊羊'];
      return Container(
        height: 200,
        width: 350,
        color: Colors.white,
        child: ListView(
          children: List.generate(list.length, (index) {
            return ListTile(title: Center(child: Text(list[index])));
          }),
        ),
      );
    }

    attachA(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.bottomCenter,
        highlightBuilder: (Offset targetOffset, Size targetSize) {
          return Positioned(
            child: Container(
              height: targetOffset.dy + targetSize.height,
              width: targetSize.width,
              color: Colors.white,
            ),
          );
        },
        builder: (_) => listDialog(),
      );
    }

    attachB(BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignment: Alignment.topCenter,
        highlightBuilder: (_, __) {
          return Positioned(
            right: 0,
            bottom: 0,
            child: Container(height: 40, width: 350, color: Colors.white),
          );
        },
        builder: (_) => listDialog(),
      );
    }

    //business widget
    var businessA = Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: const Text('Business A')),
        body: Builder(builder: (context) {
          return Column(mainAxisSize: MainAxisSize.min, children: [
            Container(
              width: double.infinity,
              height: 40,
              alignment: Alignment.center,
              child: GestureDetector(
                onTap: () => attachA(context),
                child: Row(mainAxisSize: MainAxisSize.min, children: const [
                  Text('下拉弹窗'),
                  Icon(Icons.arrow_drop_down),
                ]),
              ),
            ),
            Container(height: 1, width: double.infinity, color: Colors.grey),
          ]);
        }),
      ),
    );
    var businessB = Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: const Text('Business B')),
        body: Align(
          alignment: Alignment.bottomCenter,
          child: Builder(builder: (context) {
            return Column(mainAxisSize: MainAxisSize.min, children: [
              Container(height: 1, width: double.infinity, color: Colors.grey),
              Container(
                width: double.infinity,
                height: 40,
                alignment: Alignment.center,
                child: GestureDetector(
                  onTap: () => attachB(context),
                  child: Row(mainAxisSize: MainAxisSize.min, children: const [
                    Text('上弹弹窗'),
                    Icon(Icons.arrow_drop_up),
                  ]),
                ),
              ),
            ]);
          }),
        ),
      ),
    );
    SmartDialog.show(builder: (_) {
      return Container(
        width: double.infinity,
        height: double.infinity,
        alignment: Alignment.center,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [businessA, businessB],
        ),
      );
    });
  }

  void _attachImitate() {
    //模仿DropdownButton
    imitateDialog(BuildContext context) {
      var list = ['小呆呆', '小菲菲', '小猪猪'];
      SmartDialog.showAttach(
        targetContext: context,
        usePenetrate: true,
        nonAnimationTypes: [SmartNonAnimationType.maskClose_nonAnimation],
        builder: (_) {
          return Container(
            margin: const EdgeInsets.all(10),
            decoration: const BoxDecoration(boxShadow: [
              BoxShadow(color: Colors.black12, blurRadius: 8, spreadRadius: 0.2)
            ]),
            child: Column(
              children: List.generate(list.length, (index) {
                return Material(
                  color: Colors.white,
                  child: InkWell(
                    onTap: () => SmartDialog.dismiss(),
                    child: Container(
                      height: 50,
                      width: 100,
                      alignment: Alignment.center,
                      child: Text(list[index]),
                    ),
                  ),
                );
              }),
            ),
          );
        },
      );
    }

    //imitate widget
    dropdownButton({String title = 'Dropdown'}) {
      return DropdownButton<String>(
        value: '1',
        items: [
          DropdownMenuItem(value: '1', child: Text('$title：小呆呆')),
          const DropdownMenuItem(value: '2', child: Text('小菲菲')),
          const DropdownMenuItem(value: '3', child: Text('小猪猪'))
        ],
        onChanged: (value) {},
      );
    }

    imitateDropdownButton() {
      return Builder(builder: (context) {
        return Stack(children: [
          dropdownButton(title: 'Attach'),
          InkWell(
            onTap: () => imitateDialog(context),
            child: Container(height: 50, width: 140, color: Colors.transparent),
          )
        ]);
      });
    }

    SmartDialog.show(builder: (_) {
      return Container(
        width: 600,
        height: 400,
        alignment: Alignment.center,
        margin: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          home: Container(
            padding: const EdgeInsets.symmetric(horizontal: 100),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [dropdownButton(), imitateDropdownButton()],
            ),
          ),
        ),
      );
    });
  }

  void _attachPoint() async {
    targetDialog(Offset offset) {
      var random = Random().nextInt(100) % 5;
      var alignment = Alignment.topCenter;
      if (random == 0) alignment = Alignment.topCenter;
      if (random == 1) alignment = Alignment.centerLeft;
      if (random == 2) alignment = Alignment.center;
      if (random == 3) alignment = Alignment.centerRight;
      if (random == 4) alignment = Alignment.bottomCenter;
      SmartDialog.showAttach(
        targetContext: null,
        targetBuilder: (Offset targetOffset, Size targetSize) => offset,
        usePenetrate: true,
        clickMaskDismiss: false,
        alignment: alignment,
        keepSingle: true,
        builder: (_) {
          return ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Container(width: 100, height: 100, color: randomColor()),
          );
        },
      );
    }

    SmartDialog.show(builder: (_) {
      return Container(
        width: 600,
        height: 400,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: GestureDetector(
          onTapDown: (detail) => targetDialog(detail.globalPosition),
          child: Container(
            width: 500,
            height: 300,
            color: Colors.grey,
            alignment: Alignment.center,
            child: const Text(
              'click me',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      );
    });
  }

  void _attachLocation() {
    attachDialog(BuildContext context, AlignmentGeometry alignment) async {
      SmartDialog.showAttach(
        targetContext: context,
        usePenetrate: true,
        alignment: alignment,
        clickMaskDismiss: false,
        builder: (_) =>
            Container(width: 100, height: 100, color: randomColor()),
      );
      await Future.delayed(const Duration(milliseconds: 350));
    }

    //target widget
    List<BuildContext> contextList = [];
    List<Future Function()> funList = [
      () async => await attachDialog(contextList[0], Alignment.topLeft),
      () async => await attachDialog(contextList[1], Alignment.topCenter),
      () async => await attachDialog(contextList[2], Alignment.topRight),
      () async => await attachDialog(contextList[3], Alignment.centerLeft),
      () async => await attachDialog(contextList[4], Alignment.center),
      () async => await attachDialog(contextList[5], Alignment.centerRight),
      () async => await attachDialog(contextList[6], Alignment.bottomLeft),
      () async => await attachDialog(contextList[7], Alignment.bottomCenter),
      () async => await attachDialog(contextList[8], Alignment.bottomRight),
    ];
    btn({
      required String title,
      required Function(BuildContext context) onTap,
    }) {
      return Container(
        margin: const EdgeInsets.all(25),
        child: Builder(builder: (context) {
          Color? color = title.contains('all') ? randomColor() : null;
          contextList.add(context);
          return SizedBox(
            width: 130,
            child: ElevatedButton(
              style: ButtonStyle(
                backgroundColor: ButtonStyleButton.allOrNull<Color>(color),
              ),
              onPressed: () => onTap(context),
              child: Text(title),
            ),
          );
        }),
      );
    }

    SmartDialog.show(builder: (_) {
      return Container(
        width: 700,
        padding: const EdgeInsets.all(50),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: SingleChildScrollView(
          child: Wrap(alignment: WrapAlignment.spaceEvenly, children: [
            btn(title: 'topLeft', onTap: (context) => funList[0]()),
            btn(title: 'topCenter', onTap: (context) => funList[1]()),
            btn(title: 'topRight', onTap: (context) => funList[2]()),
            btn(title: 'centerLeft', onTap: (context) => funList[3]()),
            btn(title: 'center', onTap: (context) => funList[4]()),
            btn(title: 'centerRight', onTap: (context) => funList[5]()),
            btn(title: 'bottomLeft', onTap: (context) => funList[6]()),
            btn(title: 'bottomCenter', onTap: (context) => funList[7]()),
            btn(title: 'bottomRight', onTap: (context) => funList[8]()),
            btn(
              title: 'allOpen',
              onTap: (_) async {
                for (var item in funList) {
                  await item();
                }
              },
            ),
            btn(
              title: 'allClose',
              onTap: (_) => SmartDialog.dismiss(status: SmartStatus.allAttach),
            ),
          ]),
        ),
      );
    });
  }

  void _otherHardClose() async {
    SmartDialog.show(
      backDismiss: false,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          height: 480,
          width: 500,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
          ),
          alignment: Alignment.topCenter,
          child: SingleChildScrollView(
            child: Wrap(
              direction: Axis.vertical,
              crossAxisAlignment: WrapCrossAlignment.center,
              spacing: 10,
              children: [
                // title
                const Text(
                  '特大公告',
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
                // content
                const Text('鄙人日夜钻研下面秘籍，终于成功钓到富婆'),
                Image.network(
                  'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20211102213746.jpeg',
                  height: 200,
                  width: 400,
                ),
                const Text('鄙人思考了三秒钟，怀着\'沉重\'的心情，决定弃坑本开源软件'),
                const Text('本人今后的生活是富婆和远方，已无\'精力\' 再维护本开源软件了'),
                const Text('各位叼毛，有缘江湖再见！'),
                // button (only method of close the dialog)
                ElevatedButton(
                  onPressed: () => SmartDialog.dismiss(),
                  child: const Text('再会！'),
                )
              ],
            ),
          ),
        );
      },
    );
  }

  void _dialogBindWidget() async {
    openDialog(BuildContext context) {
      SmartDialog.show(
        usePenetrate: true,
        clickMaskDismiss: false,
        bindWidget: context,
        tag: context.hashCode.toString(),
        builder: (_) {
          var horizontal = Random().nextInt(10);
          var vertical = Random().nextInt(10);
          distance() => Random().nextInt(300).toDouble() + 100;
          return Container(
            width: 50,
            height: 50,
            margin: EdgeInsets.only(
              left: horizontal <= 5 ? distance() : 0,
              top: vertical <= 5 ? distance() : 0,
              right: horizontal > 5 ? distance() : 0,
              bottom: vertical > 5 ? distance() : 0,
            ),
            decoration: BoxDecoration(
              color: randomColor(),
              boxShadow: [
                BoxShadow(
                  color: randomColor(),
                  blurRadius: 8,
                  spreadRadius: 0.2,
                )
              ],
            ),
          );
        },
      );
    }

    childPage() {
      return Builder(builder: (context) {
        var tag = context.hashCode.toString();
        return KeepAlivePage(
          child: Center(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              ElevatedButton(
                onPressed: () => openDialog(context),
                child: Text('open dialog tag: $tag'),
              ),
              const SizedBox(height: 30),
              ElevatedButton(
                onPressed: () {
                  SmartDialog.dismiss(status: SmartStatus.allDialog, tag: tag);
                },
                child: Text('close all dialog tag: $tag'),
              ),
            ]),
          ),
        );
      });
    }

    SmartDialog.show(builder: (_) {
      var currentIndex = 0;
      var controller = PageController();
      return StatefulBuilder(builder: (context, setState) {
        return SizedBox(
          width: 700,
          height: 500,
          child: Scaffold(
            appBar: AppBar(title: const Text("bindWidget")),
            body: PageView(
              controller: controller,
              children: [childPage(), childPage(), childPage()],
            ),
            bottomNavigationBar: BottomNavigationBar(
              currentIndex: currentIndex,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.home), label: "home"),
                BottomNavigationBarItem(icon: Icon(Icons.adb), label: "adb"),
                BottomNavigationBarItem(icon: Icon(Icons.face), label: "face"),
              ],
              onTap: (index) {
                currentIndex = index;
                controller.jumpToPage(currentIndex);
                setState(() {});
              },
            ),
          ),
        );
      });
    });
  }

  void _dialogAnimationBuilder() async {
    SmartDialog.show(
      animationTime: const Duration(milliseconds: 3000),
      animationBuilder: (
        AnimationController controller,
        Widget child,
        AnimationParam animationParam,
      ) {
        return RotationTransition(
          turns: CurvedAnimation(parent: controller, curve: Curves.elasticIn),
          child: child,
        );
      },
      builder: (_) {
        return Container(
          color: Colors.white,
          padding: const EdgeInsets.all(30),
          child: const Text('custom animation dialog'),
        );
      },
    );
  }

  void _dialogPermanent() async {
    openPermanentDialog() {
      SmartDialog.show(
        permanent: true,
        alignment: Alignment.centerRight,
        usePenetrate: true,
        clickMaskDismiss: false,
        builder: (_) {
          return Container(
            width: 150,
            height: double.infinity,
            alignment: Alignment.center,
            decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(15),
                bottomLeft: Radius.circular(15),
              ),
              boxShadow: [
                BoxShadow(color: Colors.grey, blurRadius: 8, spreadRadius: 0.2)
              ],
            ),
            child: const Text('permanent dialog'),
          );
        },
      );
    }

    SmartDialog.show(builder: (_) {
      return Container(
        width: 300,
        height: 170,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Wrap(spacing: 20, children: [
          ElevatedButton(
            onPressed: () => openPermanentDialog(),
            child: const Text('open'),
          ),
          ElevatedButton(
            onPressed: () => SmartDialog.dismiss(force: true),
            child: const Text('close'),
          )
        ]),
      );
    });
  }

  void _dialogCarryResult() async {
    var result = await SmartDialog.show(builder: (_) {
      var message = '';
      return Container(
        width: 300,
        height: 170,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Container(
            width: 100,
            margin: const EdgeInsets.only(bottom: 30),
            child: TextField(onChanged: (msg) => message = msg),
          ),
          ElevatedButton(
            onPressed: () => SmartDialog.dismiss(result: message),
            child: const Text('show result'),
          )
        ]),
      );
    });

    SmartDialog.showToast("$result");
  }

  void _dialogBindPage() async {
    var index = 0;
    Function()? showDialog;

    toNewPage(bool useSystem) async {
      Get.to(
        () {
          return Scaffold(
            appBar: AppBar(title: Text('New Page ${++index}')),
            body: Container(
              color: randomColor(),
              alignment: Alignment.center,
              child: ElevatedButton(
                onPressed: () => showDialog?.call(),
                child: Text('test bindPage $index'),
              ),
            ),
          );
        },
        preventDuplicates: false,
      );
    }

    showDialog = () {
      SmartDialog.show(builder: (_) {
        return Container(
          width: 300,
          height: 170,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
          ),
          child: ElevatedButton(
            onPressed: () => toNewPage(false),
            child: Text('test bindPage $index'),
          ),
        );
      });
    };

    showDialog();
  }

  void _dialogUseSystem() async {
    toNewPage(bool useSystem) async {
      SmartDialog.show(
        useSystem: useSystem,
        bindPage: false,
        builder: (_) {
          return Container(
            color: Colors.white,
            padding: const EdgeInsets.all(30),
            child: Text(
              '跳转页面前测试弹窗(Test dialog before jumping to the page)\n\nuseSystem：$useSystem\nbindPage：false',
              textAlign: TextAlign.center,
            ),
          );
        },
      );
      await Future.delayed(const Duration(milliseconds: 800));
      Get.to(
        () => Scaffold(
          appBar: AppBar(title: const Text('New Page')),
          body: Container(
            color: randomColor(),
            alignment: Alignment.center,
            child: const Text(
              'New Page',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
        preventDuplicates: false,
      );
    }

    SmartDialog.show(
      useSystem: true,
      builder: (_) {
        return Container(
          width: 500,
          height: 300,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(children: [
            Container(
              margin: const EdgeInsets.only(top: 50),
              padding: const EdgeInsets.symmetric(horizontal: 30),
              child: const Text(
                '使用useSystem参数，可解决在弹窗上跳转新页面问题 \n\n'
                'Use the useSystem param to solve the problem of jumping to a new page on the dialog',
                textAlign: TextAlign.center,
              ),
            ),
            Expanded(
              child: Center(
                child: Wrap(spacing: 50, children: [
                  ElevatedButton(
                    onPressed: () => toNewPage(false),
                    child: const Text('not useSystem'),
                  ),
                  ElevatedButton(
                    onPressed: () => toNewPage(true),
                    child: const Text('useSystem'),
                  ),
                ]),
              ),
            )
          ]),
        );
      },
    );
  }

  void _dialogStack() async {
    stackDialog({
      required AlignmentGeometry alignment,
      required String tag,
      double width = double.infinity,
      double height = double.infinity,
    }) async {
      SmartDialog.show(
        tag: tag,
        alignment: alignment,
        builder: (_) {
          return Container(
            width: width,
            height: height,
            color: randomColor(),
            alignment: Alignment.center,
            child: Text(
              'dialog $tag',
              style: const TextStyle(color: Colors.white),
            ),
          );
        },
      );
      await Future.delayed(const Duration(milliseconds: 500));
    }

    //left
    await stackDialog(tag: 'A', width: 70, alignment: Alignment.centerLeft);
    //top
    await stackDialog(tag: 'B', height: 70, alignment: Alignment.topCenter);
    //right
    await stackDialog(tag: 'C', width: 70, alignment: Alignment.centerRight);
    //bottom
    await stackDialog(tag: 'D', height: 70, alignment: Alignment.bottomCenter);

    //center：the stack handler
    SmartDialog.show(
      alignment: Alignment.center,
      builder: (_) {
        return Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(15),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 20),
          child: Wrap(spacing: 20, children: [
            ElevatedButton(
              child: const Text('close dialog A'),
              onPressed: () => SmartDialog.dismiss(tag: 'A'),
            ),
            ElevatedButton(
              child: const Text('close dialog B'),
              onPressed: () => SmartDialog.dismiss(tag: 'B'),
            ),
            ElevatedButton(
              child: const Text('close dialog C'),
              onPressed: () => SmartDialog.dismiss(tag: 'C'),
            ),
            ElevatedButton(
              child: const Text('close dialog D'),
              onPressed: () => SmartDialog.dismiss(tag: 'D'),
            ),
          ]),
        );
      },
    );
  }

  void _otherTrick() async {
    VoidCallback? callback;

    // display
    SmartDialog.show(
      alignment: Alignment.center,
      builder: (_) =>
          OtherTrick(onUpdate: (VoidCallback onInvoke) => callback = onInvoke),
    );

    await Future.delayed(const Duration(milliseconds: 500));

    // handler
    SmartDialog.show(
      alignment: Alignment.centerRight,
      maskColor: Colors.transparent,
      builder: (_) {
        return Container(
          height: double.infinity,
          width: 150,
          color: Colors.white,
          alignment: Alignment.center,
          child: ElevatedButton(
            child: const Text('add'),
            onPressed: () => callback?.call(),
          ),
        );
      },
    );
  }

  void _dialogKeepSingle() async {
    singleDialog(bool keepSingle, AlignmentGeometry alignment) async {
      SmartDialog.show(
        alignment: alignment,
        keepSingle: keepSingle,
        builder: (_) {
          return Container(
            width: alignment == Alignment.bottomCenter ||
                    alignment == Alignment.topCenter
                ? double.infinity
                : 100,
            height: alignment == Alignment.bottomCenter ||
                    alignment == Alignment.topCenter
                ? 100
                : double.infinity,
            color: randomColor(),
            child: Center(
              child: Text(
                keepSingle ? 'single' : 'multiple',
                style: const TextStyle(color: Colors.white, fontSize: 25),
              ),
            ),
          );
        },
      );
      await Future.delayed(const Duration(seconds: 1));
    }

    await singleDialog(false, Alignment.bottomCenter);
    await singleDialog(true, Alignment.centerRight);
    await singleDialog(true, Alignment.centerRight);
    await singleDialog(false, Alignment.topCenter);
    await singleDialog(false, Alignment.centerLeft);
    await singleDialog(true, Alignment.centerRight);
    await singleDialog(true, Alignment.centerRight);
  }

  void _dialogPenetrate() {
    SmartDialog.show(
      alignment: Alignment.centerRight,
      usePenetrate: true,
      clickMaskDismiss: false,
      bindPage: false,
      builder: (_) {
        return Container(
          width: 80,
          height: double.infinity,
          color: randomColor(),
        );
      },
    );
  }

  void _dialogLocation() async {
    locationDialog({
      required AlignmentGeometry alignment,
      double width = double.infinity,
      double height = double.infinity,
    }) async {
      SmartDialog.show(
        alignment: alignment,
        builder: (_) =>
            Container(width: width, height: height, color: randomColor()),
      );
      await Future.delayed(const Duration(milliseconds: 500));
    }

    //left
    await locationDialog(width: 70, alignment: Alignment.centerLeft);
    //top
    await locationDialog(height: 70, alignment: Alignment.topCenter);
    //right
    await locationDialog(width: 70, alignment: Alignment.centerRight);
    //bottom
    await locationDialog(height: 70, alignment: Alignment.bottomCenter);
    //center
    await locationDialog(height: 100, width: 100, alignment: Alignment.center);
  }

  void _loadingLeastTime() async {
    SmartDialog.config.loading = SmartConfigLoading(
      leastLoadingTime: const Duration(seconds: 2),
    );
    SmartDialog.showLoading();
    SmartDialog.dismiss();
    SmartDialog.config.loading = SmartConfigLoading();
  }

  void _loadingCustom() async {
    var list = ['smile', 'icon', 'normal'];
    onItem(String msg) async {
      if (list[0] == msg) {
        SmartDialog.showLoading(
          animationType: SmartAnimationType.scale,
          builder: (_) => const CustomLoading(),
        );
      } else if (list[1] == msg) {
        SmartDialog.showLoading(
          animationType: SmartAnimationType.scale,
          builder: (_) => const CustomLoading(type: 1),
        );
      } else if (list[2] == msg) {
        SmartDialog.showLoading(builder: (_) => const CustomLoading(type: 2));
      }

      await Future.delayed(const Duration(seconds: 2));
      SmartDialog.dismiss(status: SmartStatus.loading);
    }

    SmartDialog.show(
      alignment: Alignment.centerRight,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _loadingParam() {
    var list = [
      'maskWidget',
      'maskColor',
      'SmartAnimationType.scale',
      'usePenetrate',
    ];
    onItem(String msg) async {
      if (list[0] == msg) {
        var maskWidget = SizedBox(
          width: double.infinity,
          height: double.infinity,
          child: Opacity(
            opacity: 0.6,
            child: Image.network(
              'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20211101103911.jpeg',
              fit: BoxFit.fill,
            ),
          ),
        );
        SmartDialog.showLoading(maskWidget: maskWidget);
      } else if (list[1] == msg) {
        SmartDialog.showLoading(maskColor: randomColor().withOpacity(0.3));
      } else if (list[2] == msg) {
        SmartDialog.showLoading(animationType: SmartAnimationType.scale);
      } else if (list[3] == msg) {
        SmartDialog.showLoading(usePenetrate: true);
      }

      await Future.delayed(const Duration(seconds: 2));
      SmartDialog.dismiss(status: SmartStatus.loading);
    }

    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _dialogEasy() {
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

  void _loadingDefault() async {
    SmartDialog.showLoading();
    await Future.delayed(const Duration(seconds: 2));
    SmartDialog.dismiss();
  }

  void _toastType() {
    var list = ['normal', 'first', 'last', 'firstAndLast'];
    onItem(String msg) {
      var type = SmartToastType.normal;
      if (list[0] == msg) {
        type = SmartToastType.normal;
      } else if (list[1] == msg) {
        type = SmartToastType.first;
      } else if (list[2] == msg) {
        type = SmartToastType.last;
      } else if (list[3] == msg) {
        type = SmartToastType.firstAndLast;
      }

      SmartDialog.showToast('1', displayType: type);
      SmartDialog.showToast('2', displayType: type);
      SmartDialog.showToast('3', displayType: type);
    }

    SmartDialog.show(
      alignment: Alignment.centerLeft,
      builder: (_) => MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _toastIntervalTime() async {
    SmartDialog.config.toast = SmartConfigToast(
      intervalTime: const Duration(milliseconds: 800),
    );
    for (var i = 0; i < 3; i++) {
      SmartDialog.showToast("toast $i").then((value) {
        if (!SmartDialog.config.isExistToast) {
          SmartDialog.config.toast = SmartConfigToast();
        }
      });
    }
  }

  void _toastSmart() {
    SmartDialog.showToast(
      "I'm a smart toast",
      displayTime: const Duration(seconds: 6),
    );
    if (SmartDialog.config.isExistDialog) return;

    SmartDialog.show(
      usePenetrate: true,
      clickMaskDismiss: false,
      builder: (_) {
        return Container(
          height: 40,
          width: 100,
          padding: const EdgeInsets.only(left: 20),
          decoration: BoxDecoration(
            color: Colors.black.withOpacity(0.6),
            borderRadius: BorderRadius.circular(100),
          ),
          child: InputText(textSize: 15, hintSize: 15),
        );
      },
    );
  }

  void _toastCustom() async {
    SmartDialog.showToast(
      '',
      builder: (_) => const CustomToast('custom toast'),
    );
  }

  void _toastDefault() async {
    SmartDialog.showToast('test toast');
  }
}
