## 实体命名生成

### 使用 build_runner 生成 .g.dart 文件
flutter packages pub run build_runner build

### 监控生成文件，如果有改动时自动生成/更新 .g.dart 文件
flutter packages pub run build_runner watch

### 删除并重新创建.g.dart文件
flutter packages pub run build_runner build --delete-conflicting-outputs


