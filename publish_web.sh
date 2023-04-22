# flutter build web --web-renderer canvaskit
# flutter build web --web-renderer html
# 去掉pwa支持
#  --dart2js-optimization O4: dart2js压缩级别 (flutter默认的是O4优化级别)
#  -O0: 禁用许多优化。
#  -O1: 启用默认优化(仅是dart2js该命令的默认级别)
#  -O2: 在-O1优化基础上,尊重语言语义且对所有程序安全的其他优化（例如缩小）
#    备注：使用-O2,使用开发JavaScript编译器编译时,类型的字符串表示不再与Dart VM中的字符串表示相同
#  -O3: 在-O2优化基础上,并省略隐式类型检查。
#   注意：省略类型检查可能会导致您的应用程序因类型错误而崩溃
#  -O4: 在-O3优化基础上,启用更积极的优化
#   注意：-O4优化容易受到输入数据变化的影响,在依赖-O4之前,需测试用户输入中的边缘情况
# 去掉未使用icons
#  - flutter build apk
#  - 使用apk资源产物, 替换web资源产物
# 编译出产物移到目标文件位置
# 代理终端, push到github
flutter clean && flutter pub get \
&& flutter build web --web-renderer canvaskit --pwa-strategy none \
&& flutter build apk \
&& cp -r ./build/app/intermediates/flutter/release/flutter_assets/ ./build/web/assets/ \
&& cp -r ./build/web/ ./docs/web/ \
&& export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890 \
&& git add . && git commit -m "update web effect" && git push

# macos执行该命令: bash publish_web.sh

