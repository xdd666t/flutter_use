import 'dart:async';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_use/entity/base/base_response.dart';
import 'package:flutter_use/http/net/error_interceptor.dart';
import 'package:flutter_use/http/net/net_util.dart';
import 'package:flutter_use/toolkit/intercept/intercept_single.dart';
import 'package:flutter_use/toolkit/intercept/intercept_twice.dart';
import 'package:flutter_use/toolkit/view/feature/marquee_widget.dart';
import 'package:flutter_use/toolkit/view/input/input_text_clear.dart';

void main() {
  group('network layer', () {
    late NetUtil net;
    late HttpClientAdapter originalAdapter;
    late _RecordingAdapter adapter;

    setUp(() {
      net = NetUtil.instance;
      originalAdapter = net.dio.httpClientAdapter;
      adapter = _RecordingAdapter();
      net.dio.httpClientAdapter = adapter;
    });

    tearDown(() {
      net.removeInterceptor(_TestResponseInterceptor.instance);
      net.dio.httpClientAdapter = originalAdapter;
    });

    test(
      'uses per-request methods and preserves configured timeouts',
      () async {
        net.init(
          baseUrl: '',
          connectTimeout: 100,
          sendTimeout: 200,
          receiveTimeout: 300,
        );

        final results = await Future.wait([
          net.request<int>(
            '/get',
            method: HttpMethod.get,
            cancelToken: CancelToken(),
          ),
          net.request<int>(
            '/post',
            method: HttpMethod.post,
            cancelToken: CancelToken(),
          ),
        ]);

        expect(results, [42, 42]);
        expect(adapter.methods, containsAllInOrder(['GET', 'POST']));
        expect(
          net.dio.options.connectTimeout,
          const Duration(milliseconds: 100),
        );
        expect(net.dio.options.sendTimeout, const Duration(milliseconds: 200));
        expect(
          net.dio.options.receiveTimeout,
          const Duration(milliseconds: 300),
        );
      },
    );

    test(
      'unwraps envelope responses while preserving raw list responses',
      () async {
        net.addInterceptor(_TestResponseInterceptor.instance);
        adapter.body = '{"data":{"value":42},"errorCode":0}';

        final object = await net.request<Map<String, dynamic>>(
          '/object',
          method: HttpMethod.get,
          cancelToken: CancelToken(),
        );
        expect(object, {'value': 42});

        adapter.body = '[1,2,3]';
        final list = await net.request<List<dynamic>>(
          '/list',
          method: HttpMethod.get,
          cancelToken: CancelToken(),
        );
        expect(list, [1, 2, 3]);
      },
    );

    test('maps Dio exceptions to user-facing application exceptions', () {
      final requestOptions = RequestOptions(path: '/');
      final exception = AppException.init(
        DioException(
          requestOptions: requestOptions,
          type: DioExceptionType.connectionTimeout,
        ),
      );

      expect(exception.code, -1);
      expect(exception.message, '连接超时');
      expect(exception.toString(), '-1连接超时');
    });

    test('parses response envelopes without requiring a network response', () {
      final response = BaseResponse.fromJson({
        'data': const <String, dynamic>{'id': 1},
        'errorCode': 0,
        'errorMsg': '',
      });

      expect(response.data, {'id': 1});
      expect(response.errorCode, 0);
      expect(response.errorMsg, '');
    });
  });

  group('interceptor chains', () {
    test('single interceptor chain preserves registration order', () {
      final events = <String>[];
      final handler = InterceptSingleHandler<int>();
      handler.add(_FirstSingleInterceptor(events));
      handler.add(_SecondSingleInterceptor(events));

      handler.intercept(1);

      expect(events, ['first:1', 'second:2']);
    });

    test('twice interceptor chain runs init and submit phases', () {
      final events = <String>[];
      final handler = InterceptTwiceHandler<int>();
      handler.add(_FirstTwiceInterceptor(events));
      handler.add(_SecondTwiceInterceptor(events));

      handler.onInit(1);
      handler.onSubmit(1);

      expect(events, [
        'init:first:1',
        'init:second:2',
        'submit:first:1',
        'submit:second:3',
      ]);
    });
  });

  group('widget lifecycle', () {
    testWidgets('does not dispose an externally owned text controller', (
      tester,
    ) async {
      final controller = TextEditingController(text: 'hello');
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(body: InputTextClear(controller: controller)),
        ),
      );
      await tester.pump();

      await tester.pumpWidget(const SizedBox.shrink());
      expect(() => controller.text = 'still usable', returnsNormally);
      controller.dispose();
    });

    testWidgets('renders empty marquees without modulo or timer errors', (
      tester,
    ) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: SizedBox(
            height: 40,
            child: MarqueeWidget.horizontal(children: []),
          ),
        ),
      );

      expect(find.byType(SizedBox), findsWidgets);
      await tester.pumpWidget(const SizedBox.shrink());
    });
  });
}

class _RecordingAdapter implements HttpClientAdapter {
  String body = '42';
  final methods = <String>[];

  @override
  Future<ResponseBody> fetch(
    RequestOptions options,
    Stream<Uint8List>? requestStream,
    Future<void>? cancelFuture,
  ) async {
    methods.add(options.method);
    return ResponseBody.fromString(
      body,
      200,
      headers: {
        Headers.contentTypeHeader: ['application/json'],
      },
    );
  }

  @override
  void close({bool force = false}) {}
}

class _TestResponseInterceptor extends Interceptor {
  static final instance = _TestResponseInterceptor();

  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    final data = response.data;
    if (data is Map) {
      response.data = BaseResponse.fromJson(
        Map<String, dynamic>.from(data),
      ).data;
    }
    handler.next(response);
  }
}

class _RecordingSingleInterceptor extends InterceptSingle<int> {
  _RecordingSingleInterceptor(this.name, this.events);

  final String name;
  final List<String> events;

  @override
  void intercept(int data, SingleHandler handler) {
    events.add('$name:$data');
    handler.next(data + 1);
  }
}

class _FirstSingleInterceptor extends _RecordingSingleInterceptor {
  _FirstSingleInterceptor(List<String> events) : super('first', events);
}

class _SecondSingleInterceptor extends _RecordingSingleInterceptor {
  _SecondSingleInterceptor(List<String> events) : super('second', events);
}

class _RecordingTwiceInterceptor extends InterceptTwice<int> {
  _RecordingTwiceInterceptor(this.name, this.events);

  final String name;
  final List<String> events;

  @override
  void onInit(int data, TwiceHandler handler) {
    events.add('init:$name:$data');
    handler.next(data + 1);
  }

  @override
  void onSubmit(int data, TwiceHandler handler) {
    events.add('submit:$name:$data');
    handler.next(data + 2);
  }
}

class _FirstTwiceInterceptor extends _RecordingTwiceInterceptor {
  _FirstTwiceInterceptor(List<String> events) : super('first', events);
}

class _SecondTwiceInterceptor extends _RecordingTwiceInterceptor {
  _SecondTwiceInterceptor(List<String> events) : super('second', events);
}
