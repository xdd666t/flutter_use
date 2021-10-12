[![stars](https://img.shields.io/github/stars/CNAD666/flutter_use?logo=github)](https://github.com/CNAD666/flutter_use) [![issues](https://img.shields.io/github/issues/CNAD666/flutter_use?logo=github)](https://github.com/CNAD666/flutter_use/issues)

# 效果地址

- Web：[https://cnad666.github.io/flutter_use/web/index.html](https://cnad666.github.io/flutter_use/web/index.html)
  - 编译的web代码及其资源在docs文件夹下，这边github page路径选择的是docs
- Windows：[Windows平台安装包](https://wwa.lanzoui.com/b099z6w6d)
  - 密码：xdd666

# 代码路径

- 代码规范：[Flutter 改善套娃地狱问题（仿喜马拉雅PC页面举例）](https://juejin.cn/post/6939774499399139336)
  - 每一个靓仔应该去了解了解的奇技淫巧

```dart
├─lib
│  ├─module
│  │  ├─function
│  │  │  ├─himalaya       ///仿喜马拉雅PC代码在此目录下
│  │  │  │  └─widget
```

- GetX

  - 使用篇：[Flutter GetX使用---简洁的魅力！](https://juejin.cn/post/6924104248275763208)
  - 源码篇：[Flutter GetX深度剖析 | 我们终将走出自己的路（万字图文）](https://juejin.cn/post/6984593635681517582)

```dart
├─lib
│  ├─module
│  │  ├─example
│  │  │  ├─getx                 ///getx演示代码在此目录下
│  │  │  │  ├─auto_dispose
│  │  │  │  ├─counter_binding
│  │  │  │  ├─counter_easy
│  │  │  │  ├─counter_high_get
│  │  │  │  ├─counter_rx
│  │  │  │  ├─easy_x
│  │  │  │  │  ├─easy_builder
│  │  │  │  │  └─ebx
│  │  │  │  ├─easy_x_builder
│  │  │  │  ├─easy_x_ebx
│  │  │  │  ├─jump_page
│  │  │  │  │  ├─jump_one
│  │  │  │  │  └─jump_two
│  │  │  │  └─widget
```


- Provider：Provider的刷新机制真的很有趣！

  - 使用+源码深度剖析：[Flutter Provider的另一面（万字图文）](https://juejin.cn/post/6968272002515894303)

```dart
├─lib
│  ├─module
│  │  ├─example
│  │  │  ├─provider        /// provider演示代码在此目录下
│  │  │  │  ├─counter_easy
│  │  │  │  ├─counter_high
│  │  │  │  ├─custom_builder
│  │  │  │  ├─easy_p
│  │  │  │  ├─easy_p_counter
│  │  │  │  ├─easy_p_counter_global
│  │  │  │  ├─span_page
│  │  │  │  │  ├─span_one
│  │  │  │  │  └─span_two
│  │  │  │  └─test_notifier
```


- Bloc
  - 使用篇：[flutter_bloc使用解析---骚年，你还在手搭bloc吗！](https://juejin.cn/post/6856268776510504968)
  - 源码篇：[Flutter Bloc背后的思想](https://juejin.cn/post/6973900070358319135)

```dart
├─lib
│  ├─module
│  │  ├─common
│  │  │  └─widget
│  │  ├─example
│  │  │  ├─bloc               ///bloc演示代码在此目录下
│  │  │  │  ├─counter_bloc
│  │  │  │  ├─counter_cubit
│  │  │  │  ├─custom_builder
│  │  │  │  ├─easy_c
│  │  │  │  ├─easy_c_counter
│  │  │  │  ├─span_page
│  │  │  │  │  ├─span_one
│  │  │  │  │  └─span_two
│  │  │  │  └─stream
```



# 关于编译

- 因为引用了：window_size 依赖，可能会导致编译运行报错（window上），进行下述设置即可解决
  - Window 10系统：设置 -> 更新和安全 -> 开发者选项 -> 开发人员模式：从任意元（包括松散文件）安装应用 -> 开启即可

![image-20210309154335161](https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/blog/20210309154345.png)

# 打包操作

- android（关闭R8压缩）
  - flutter build apk --no-shrink
- ios（生成 .app ，然后 在 XCode 执行 打包 操作）
  - flutter build ios --release
- web：使用CanvasKit模式
  - flutter build web --web-renderer canvaskit
