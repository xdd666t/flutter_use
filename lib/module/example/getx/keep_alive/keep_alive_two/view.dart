import 'package:flutter/material.dart';
import 'package:flutter_use/app/utils/ui/auto_ui.dart';
import 'package:get/get.dart';

import 'logic.dart';

class KeepAliveTwoPage extends StatefulWidget {
  @override
  _KeepAliveTwoPageState createState() => _KeepAliveTwoPageState();
}

class _KeepAliveTwoPageState extends State<KeepAliveTwoPage>
    with AutomaticKeepAliveClientMixin {
  final KeepAliveTwoLogic logic = Get.put(KeepAliveTwoLogic());

  @override
  bool get wantKeepAlive => true;

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Text('保活页面-Two')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => logic.closePage(),
        child: const Icon(Icons.close),
      ),
      body: Center(
        child: Text('本页面为保活页面', style: TextStyle(fontSize: 30.sp)),
      ),
    );
  }
}
