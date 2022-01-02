import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_loading.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/custom_toast.dart';
import 'package:flutter_use/module/function/smart_dialog/widget/other_trick.dart';
import 'package:flutter_use/views/widget/input/input_text.dart';
import 'package:get/get.dart';

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

      ///attach
      case SmartTag.attachLocation:
        _attachLocation();
        break;
      case SmartTag.attachPoint:
        _attachPoint();
        break;
      case SmartTag.attachImitate:
        _attachImitate();
        break;
      case SmartTag.attachBusiness:
        _attachBusiness();
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

      ///toast
      case SmartTag.toastDefault:
        SmartDialog.showToast('test toast');
        break;
      case SmartTag.toastLocation:
        _toastLocation();
        break;
      case SmartTag.toastCustom:
        SmartDialog.showToast('', widget: CustomToast('custom toast'));
        break;
      case SmartTag.toastType:
        _toastType();
        break;
      case SmartTag.toastSmart:
        _toastSmart();
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

  void _attachBusiness() {
    var attachA = (BuildContext context) {
      SmartDialog.showAttach(
        targetContext: context,
        alignmentTemp: Alignment.bottomCenter,
        widget: Container(
          height: 200,
          width: 350,
          margin: EdgeInsets.only(top: 8),
          color: Colors.white,
          child: ListView(children: [
            ListTile(title: Center(child: Text('选项A'))),
            ListTile(title: Center(child: Text('选项B'))),
            ListTile(title: Center(child: Text('选项C'))),
            ListTile(title: Center(child: Text('选项D'))),
            ListTile(title: Center(child: Text('选项E'))),
          ]),
        ),
      );
    };

    var businessA = Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: Text('Business A')),
        body: Column(children: [
          Container(
            width: double.infinity,
            height: 40,
            padding: EdgeInsets.only(top: 8),
            alignment: Alignment.center,
            child: Builder(builder: (context) {
              return GestureDetector(
                onTap: () => attachA(context),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  Text('下拉弹窗'),
                  Icon(Icons.arrow_drop_down),
                ]),
              );
            }),
          ),
          Divider(),
        ]),
      ),
    );
    var businessB = Container(
      width: 350,
      height: double.infinity,
      color: Colors.red,
      child: Scaffold(
        appBar: AppBar(title: Text('Business B')),
      ),
    );
    SmartDialog.show(
      isLoadingTemp: false,
      widget: Container(
        width: double.infinity,
        height: double.infinity,
        alignment: Alignment.center,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [businessA, businessB],
        ),
      ),
    );
  }

  void _attachImitate() {
    //模仿DropdownButton
    var imitate = (BuildContext context) {
      var list = ['小呆呆', '小菲菲', '小猪猪'];
      SmartDialog.showAttach(
        targetContext: context,
        isPenetrateTemp: true,
        widget: Container(
          margin: EdgeInsets.all(10),
          decoration: BoxDecoration(
            boxShadow: [
              BoxShadow(color: Colors.black12, blurRadius: 8, spreadRadius: 0.2)
            ],
          ),
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
                    child: Text('${list[index]}'),
                  ),
                ),
              );
            }),
          ),
        ),
      );
    };

    SmartDialog.show(
      isLoadingTemp: false,
      widget: Container(
        width: 600,
        height: 400,
        alignment: Alignment.center,
        padding: EdgeInsets.symmetric(horizontal: 100),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          home: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              DropdownButton<String>(
                value: '1',
                items: [
                  DropdownMenuItem(value: '1', child: Text('Dropdown：小呆呆')),
                  DropdownMenuItem(value: '2', child: Text('小菲菲')),
                  DropdownMenuItem(value: '3', child: Text('小猪猪'))
                ],
                onChanged: (value) {},
              ),
              Builder(builder: (context) {
                return Stack(children: [
                  DropdownButton<String>(
                    value: '1',
                    items: [
                      DropdownMenuItem(value: '1', child: Text('Attach：小呆呆'))
                    ],
                    onChanged: (value) {},
                  ),
                  GestureDetector(
                    onTap: () => imitate(context),
                    child: Container(
                      height: 50,
                      width: 140,
                      color: Colors.transparent,
                    ),
                  )
                ]);
              }),
            ],
          ),
        ),
      ),
    );
  }

  void _attachPoint() async {
    var attach = (Offset offset) {
      var random = Random().nextInt(100) % 5;
      var alignment = Alignment.topCenter;
      if (random == 0) alignment = Alignment.topCenter;
      if (random == 1) alignment = Alignment.centerLeft;
      if (random == 2) alignment = Alignment.center;
      if (random == 3) alignment = Alignment.centerRight;
      if (random == 4) alignment = Alignment.bottomCenter;
      SmartDialog.showAttach(
        targetContext: null,
        target: offset,
        isPenetrateTemp: true,
        clickBgDismissTemp: false,
        alignmentTemp: alignment,
        keepSingle: true,
        widget: ClipRRect(
          borderRadius: BorderRadius.circular(10),
          child: Container(width: 100, height: 100, color: randomColor()),
        ),
      );
    };

    SmartDialog.show(
      isLoadingTemp: false,
      widget: Container(
        width: 600,
        height: 400,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: GestureDetector(
          onTapDown: (detail) => attach(detail.globalPosition),
          child: Container(
            width: 500,
            height: 300,
            color: Colors.grey,
            alignment: Alignment.center,
            child: Text('click me', style: TextStyle(color: Colors.white)),
          ),
        ),
      ),
    );
  }

  void _attachLocation() async {
    var attach = (BuildContext context, AlignmentGeometry alignment) async {
      SmartDialog.showAttach(
        targetContext: context,
        isPenetrateTemp: true,
        alignmentTemp: alignment,
        clickBgDismissTemp: false,
        widget: Container(width: 100, height: 100, color: randomColor()),
      );
      await Future.delayed(Duration(milliseconds: 350));
    };

    //target widget
    List<BuildContext> list = [];
    var btn = ({
      required String title,
      required Function(BuildContext context) onTap,
    }) {
      return Builder(builder: (context) {
        Color? color = title.contains('all') ? randomColor() : null;
        list.add(context);
        return Container(
          width: 130,
          child: ElevatedButton(
            style: ButtonStyle(
              backgroundColor: ButtonStyleButton.allOrNull<Color>(color),
            ),
            onPressed: () => onTap(context),
            child: Text('$title'),
          ),
        );
      });
    };

    SmartDialog.show(
      isLoadingTemp: false,
      widget: Container(
        width: 700,
        padding: EdgeInsets.all(70),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Colors.white,
        ),
        child: Wrap(
          spacing: 50,
          runSpacing: 50,
          alignment: WrapAlignment.spaceEvenly,
          children: [
            btn(
              title: 'topLeft',
              onTap: (context) => attach(context, Alignment.topLeft),
            ),
            btn(
              title: 'topCenter',
              onTap: (context) => attach(context, Alignment.topCenter),
            ),
            btn(
              title: 'topRight',
              onTap: (context) => attach(context, Alignment.topRight),
            ),
            btn(
              title: 'centerLeft',
              onTap: (context) => attach(context, Alignment.centerLeft),
            ),
            btn(
              title: 'center',
              onTap: (context) => attach(context, Alignment.center),
            ),
            btn(
              title: 'centerRight',
              onTap: (context) => attach(context, Alignment.centerRight),
            ),
            btn(
              title: 'bottomLeft',
              onTap: (context) => attach(context, Alignment.bottomLeft),
            ),
            btn(
              title: 'bottomCenter',
              onTap: (context) => attach(context, Alignment.bottomCenter),
            ),
            btn(
              title: 'bottomRight',
              onTap: (context) => attach(context, Alignment.bottomRight),
            ),
            btn(
              title: 'allOpen',
              onTap: (_) async {
                await attach(list[0], Alignment.topLeft);
                await attach(list[1], Alignment.topCenter);
                await attach(list[2], Alignment.topRight);
                await attach(list[3], Alignment.centerLeft);
                await attach(list[4], Alignment.center);
                await attach(list[5], Alignment.centerRight);
                await attach(list[6], Alignment.bottomLeft);
                await attach(list[7], Alignment.bottomCenter);
                await attach(list[8], Alignment.bottomRight);
              },
            ),
            btn(
              title: 'allClose',
              onTap: (_) => SmartDialog.dismiss(status: SmartStatus.allDialog),
            ),
          ],
        ),
      ),
    );
  }

  void _otherHardClose() async {
    SmartDialog.show(
      backDismiss: false,
      clickBgDismissTemp: false,
      isLoadingTemp: false,
      widget: Container(
        height: 480,
        width: 500,
        padding: EdgeInsets.all(20),
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
              Text(
                '特大公告',
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
              ),
              // content
              Text('鄙人日夜钻研下面秘籍，终于成功钓到富婆'),
              Image.network(
                'https://cdn.jsdelivr.net/gh/xdd666t/MyData@master/pic/flutter/blog/20211102213746.jpeg',
                height: 200,
                width: 400,
              ),
              Text('鄙人思考了三秒钟，怀着\'沉重\'的心情，决定弃坑本开源软件'),
              Text('本人今后的生活是富婆和远方，已无\'精力\' 再维护本开源软件了'),
              Text('各位叼毛，有缘江湖再见！'),
              // button (only method of close the dialog)
              ElevatedButton(
                onPressed: () => SmartDialog.dismiss(),
                child: Text('再会！'),
              )
            ],
          ),
        ),
      ),
    );
  }

  void _dialogStack() async {
    var stack = ({
      double width = double.infinity,
      double height = double.infinity,
      String? msg,
    }) {
      return Container(
        width: width,
        height: height,
        color: randomColor(),
        alignment: Alignment.center,
        child: Text('dialog $msg', style: TextStyle(color: Colors.white)),
      );
    };

    //left
    SmartDialog.show(
      tag: 'A',
      widget: stack(msg: 'A', width: 70),
      alignmentTemp: Alignment.centerLeft,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //top
    SmartDialog.show(
      tag: 'B',
      widget: stack(msg: 'B', height: 70),
      alignmentTemp: Alignment.topCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //right
    SmartDialog.show(
      tag: 'C',
      widget: stack(msg: 'C', width: 70),
      alignmentTemp: Alignment.centerRight,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //bottom
    SmartDialog.show(
      tag: 'D',
      widget: stack(msg: 'D', height: 70),
      alignmentTemp: Alignment.bottomCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));

    //center：the stack handler
    SmartDialog.show(
      alignmentTemp: Alignment.center,
      isLoadingTemp: false,
      widget: Container(
        decoration: BoxDecoration(
            color: Colors.white, borderRadius: BorderRadius.circular(15)),
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 20),
        child: Wrap(spacing: 20, children: [
          ElevatedButton(
            child: Text('close dialog A'),
            onPressed: () => SmartDialog.dismiss(tag: 'A'),
          ),
          ElevatedButton(
            child: Text('close dialog B'),
            onPressed: () => SmartDialog.dismiss(tag: 'B'),
          ),
          ElevatedButton(
            child: Text('close dialog C'),
            onPressed: () => SmartDialog.dismiss(tag: 'C'),
          ),
          ElevatedButton(
            child: Text('close dialog D'),
            onPressed: () => SmartDialog.dismiss(tag: 'D'),
          ),
        ]),
      ),
    );
  }

  void _otherTrick() async {
    VoidCallback? callback;

    // display
    SmartDialog.show(
      alignmentTemp: Alignment.center,
      widget: OtherTrick(
        onUpdate: (VoidCallback onInvoke) => callback = onInvoke,
      ),
    );

    await Future.delayed(Duration(milliseconds: 500));

    // handler
    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      maskColorTemp: Colors.transparent,
      widget: Container(
        height: double.infinity,
        width: 150,
        color: Colors.white,
        alignment: Alignment.center,
        child: ElevatedButton(
          child: Text('add'),
          onPressed: () => callback?.call(),
        ),
      ),
    );
  }

  void _dialogKeepSingle() async {
    var single = (bool keepSingle, AlignmentGeometry alignment) async {
      SmartDialog.show(
        alignmentTemp: alignment,
        keepSingle: keepSingle,
        widget: Container(
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
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
          ),
        ),
      );
      await Future.delayed(Duration(seconds: 1));
    };

    await single(false, Alignment.bottomCenter);
    await single(true, Alignment.centerRight);
    await single(true, Alignment.centerRight);
    await single(false, Alignment.topCenter);
    await single(false, Alignment.centerLeft);
    await single(true, Alignment.centerRight);
    await single(true, Alignment.centerRight);
  }

  void _dialogPenetrate() {
    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      isPenetrateTemp: true,
      clickBgDismissTemp: false,
      widget: Container(
        width: 80,
        height: double.infinity,
        color: randomColor(),
      ),
    );
  }

  void _dialogLocation() async {
    var location = ({
      double width = double.infinity,
      double height = double.infinity,
    }) {
      return Container(width: width, height: height, color: randomColor());
    };

    //left
    SmartDialog.show(
      widget: location(width: 70),
      alignmentTemp: Alignment.centerLeft,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //top
    SmartDialog.show(
      widget: location(height: 70),
      alignmentTemp: Alignment.topCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //right
    SmartDialog.show(
      widget: location(width: 70),
      alignmentTemp: Alignment.centerRight,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //bottom
    SmartDialog.show(
      widget: location(height: 70),
      alignmentTemp: Alignment.bottomCenter,
    );
    await Future.delayed(Duration(milliseconds: 500));
    //center
    SmartDialog.show(
      widget: location(height: 100, width: 100),
      alignmentTemp: Alignment.center,
      isLoadingTemp: false,
    );
  }

  void _loadingCustom() async {
    var list = ['smile', 'icon', 'normal'];
    var onItem = (String msg) async {
      if (list[0] == msg) {
        SmartDialog.showLoading(isLoadingTemp: false, widget: CustomLoading());
      } else if (list[1] == msg) {
        SmartDialog.showLoading(
          isLoadingTemp: false,
          widget: CustomLoading(type: 1),
        );
      } else if (list[2] == msg) {
        SmartDialog.showLoading(widget: CustomLoading(type: 2));
      }

      await Future.delayed(Duration(seconds: 2));
      SmartDialog.dismiss();
    };

    SmartDialog.show(
      alignmentTemp: Alignment.centerRight,
      widget: MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _loadingParam() {
    var list = [
      'maskWidget',
      'maskColor',
      'background',
      'isLoading',
      'isPenetrate',
    ];
    var onItem = (String msg) async {
      if (list[0] == msg) {
        var maskWidget = Container(
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
        SmartDialog.showLoading(maskWidgetTemp: maskWidget);
      } else if (list[1] == msg) {
        SmartDialog.showLoading(maskColorTemp: randomColor().withOpacity(0.3));
      } else if (list[2] == msg) {
        SmartDialog.showLoading(background: randomColor());
      } else if (list[3] == msg) {
        SmartDialog.showLoading(isLoadingTemp: false);
      } else if (list[4] == msg) {
        SmartDialog.showLoading(isPenetrateTemp: true);
      }

      await Future.delayed(Duration(seconds: 2));
      SmartDialog.dismiss();
    };

    SmartDialog.show(
      alignmentTemp: Alignment.centerLeft,
      widget: MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _dialogEasy() {
    var custom = Container(
      height: 80,
      width: 180,
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(10),
      ),
      alignment: Alignment.center,
      child: Text('easy custom dialog', style: TextStyle(color: Colors.white)),
    );
    SmartDialog.show(widget: custom, isLoadingTemp: false);
  }

  void _loadingDefault() async {
    SmartDialog.showLoading();
    await Future.delayed(Duration(seconds: 2));
    SmartDialog.dismiss();
  }

  void _toastType() {
    var list = ['normal', 'first', 'last', 'firstAndLast'];
    var onItem = (String msg) {
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

      SmartDialog.showToast('1', type: type);
      SmartDialog.showToast('2', type: type);
      SmartDialog.showToast('3', type: type);
      SmartDialog.showToast('4', type: type);
      SmartDialog.showToast('5', type: type);
      SmartDialog.showToast('6', type: type);
    };

    SmartDialog.show(
      alignmentTemp: Alignment.centerLeft,
      widget: MultiHandleWidget(list: list, onItem: onItem),
    );
  }

  void _toastSmart() {
    SmartDialog.showToast(
      "I'm a smart toast",
      time: Duration(seconds: 6),
    );
    if (SmartDialog.config.isExistMain) return;

    SmartDialog.show(
      isPenetrateTemp: true,
      clickBgDismissTemp: false,
      widget: Container(
        height: 40,
        width: 100,
        padding: EdgeInsets.only(left: 20),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.6),
          borderRadius: BorderRadius.circular(100),
        ),
        child: InputText(textSize: 15, hintSize: 15),
      ),
    );
  }

  void _toastLocation() {
    SmartDialog.showToast('the toast at the bottom');
    SmartDialog.showToast(
      'the toast at the center',
      alignment: Alignment.center,
    );
    SmartDialog.showToast(
      'the toast at the top',
      alignment: Alignment.topCenter,
    );
  }
}
