import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class OtherHardClose extends StatelessWidget {
  const OtherHardClose({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => _show(),
        child: const Text("click me"),
      ),
    );
  }

  void _show() async {
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
                  'https://raw.githubusercontent.com/xdd666t/MyData/master/pic/flutter/blog/20211102213746.jpeg',
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
}
