# flutter_use

## 效果地址

- [https://cnad666.github.io/flutter_use/web/index.html](https://cnad666.github.io/flutter_use/web/index.html)
  - 编译的web代码及其资源在docs文件夹下，这边github page路径选择的是docs


## 打包操作

- android（关闭R8压缩）
   - flutter build apk --no-shrink

- ios（生成 .app ，然后 在 XCode 执行 打包 操作）
   - flutter build ios --release --target=lib/app/main_dev.dart

## 关于编译

- 因为引用了：window_size 依赖，可能会导致编译运行报错（window上），进行下述设置即可解决
  - Window 10系统：设置 -> 更新和安全 -> 开发者选项 -> 开发人员模式：从任意元（包括松散文件）安装应用 -> 开启即可

![image-20210309154335161](https://cdn.jsdelivr.net/gh/CNAD666/MyData/pic/flutter/blog/20210309154345.png)