# 代理终端
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890 \
# flutter build web --web-renderer canvaskit
# flutter build web --web-renderer html
# 去掉pwa支持, dart2js压缩级别
flutter clean && flutter pub get \
&& flutter build web --web-renderer canvaskit --pwa-strategy none  --dart2js-optimization O1 \
# 去掉未使用icons
#  - flutter build apk
#  - 使用apk资源产物, 替换web资源产物
flutter build apk \
&& cp -r ./build/app/intermediates/flutter/release/flutter_assets/ ./build/web/assets/ \
# 编译出产物移到目标为止
cp -r ./build/web/ ./docs/web/ \
# push
git add . && git commit -m "update web effect" && git push

# macos执行该命令: bash publish_web.sh

