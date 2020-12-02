# flutter_use

## 效果地址

- [https://cnad666.github.io/flutter_use/web/index.html](https://cnad666.github.io/flutter_use/web/index.html)
  - 编译的web代码及其资源在docs文件夹下，这边github page路径选择的是docs


## 打包操作

- android（关闭R8压缩）
   - flutter build apk --no-shrink

- ios（生成 .app ，然后 在 XCode 执行 打包 操作）
   - flutter build ios --release --target=lib/app/main_dev.dart