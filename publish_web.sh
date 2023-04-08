# 生成指令
# flutter build web --web-renderer canvaskit
# flutter build web --web-renderer html
# 去掉未使用icons
#  - flutter build apk
flutter clean && flutter pub get && flutter build apk && flutter build web --web-renderer canvaskit \
&& cp -r ./build/app/intermediates/flutter/release/flutter_assets/ ./build/web/assets/ \
&& cp -r ./build/web/ ./docs/web/ \
&& git add . && git commit -m "update web effect" && git push

# macos执行该命令: bash publish_web.sh

