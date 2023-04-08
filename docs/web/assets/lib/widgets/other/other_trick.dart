import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class OtherTrick extends StatelessWidget {
  const OtherTrick({Key? key}) : super(key: key);

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
    VoidCallback? callback;

    // display
    SmartDialog.show(
      alignment: Alignment.center,
      builder: (_) => InsideWidget(
        onUpdate: (VoidCallback onInvoke) => callback = onInvoke,
      ),
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
}

/// --------------------------------分隔符-----------------------------------

class InsideWidget extends StatefulWidget {
  const InsideWidget({Key? key, this.onUpdate}) : super(key: key);

  final Function(VoidCallback onInvoke)? onUpdate;

  @override
  _InsideWidgetState createState() => _InsideWidgetState();
}

class _InsideWidgetState extends State<InsideWidget> {
  int _count = 0;

  @override
  void initState() {
    // here
    widget.onUpdate?.call(() {
      _count++;
      setState(() {});
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
        ),
        child:
            Text('Counter： $_count ', style: const TextStyle(fontSize: 30.0)),
      ),
    );
  }
}
