import 'package:universal_html/html.dart' as html;

class HtmlUtils {
  static String get curUrl {
    return html.window.location.href;
  }

  static void push(String prefix, String path) {
    var list = curUrl.split(prefix);
    var origin = html.window.location.origin;
    // 必须判空, 不然除web平台外, 汇编会报错
    var curPath = curUrl.replaceFirst(origin ?? '', '');
    if (list.length == 2) {
      html.window.history.pushState(null, '', '${list[0]}$prefix$path');
    } else {
      html.window.history.pushState(null, '', '$curPath$prefix$path');
    }
  }
}
