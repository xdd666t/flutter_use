import 'package:universal_html/html.dart' as html;

class HtmlUtils {
  static String get curUrl {
    return html.window.location.href;
  }

  static void push(String prefix, String path) {
    final list = curUrl.split(prefix);
    // universal_html exposes different nullability on native and web targets.
    // ignore: unnecessary_nullable_for_final_variable_declarations
    final String? origin = html.window.location.origin;
    final curPath = curUrl.replaceFirst(origin ?? '', '');
    if (list.length == 2) {
      html.window.history.pushState(null, '', '${list[0]}$prefix$path');
    } else {
      html.window.history.pushState(null, '', '$curPath$prefix$path');
    }
  }
}
