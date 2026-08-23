import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_use/main.dart';

void main() {
  testWidgets('renders the main navigation shell', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 1));

    expect(find.byType(PageView), findsOneWidget);
    expect(find.text('功能'), findsOneWidget);
    expect(find.text('范例'), findsOneWidget);
    expect(find.text('设置'), findsOneWidget);
  });
}
