import 'package:universal_html/html.dart' as html;

class HtmlUtils {
  static String get curUrl {
    return html.window.location.href;
  }

  static void push(String path) {
    html.window.history.pushState(null, '', '$path');
  }
}
