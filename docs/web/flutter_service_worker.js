'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "563f84ca777cf13c8db6faf603976e20",
"assets/AssetManifest.bin.json": "9d61b00133c02ae6ce071ced132d8b57",
"assets/AssetManifest.json": "47f2f38f97eac74f5df38f0db56cc6f0",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/FontManifest.json": "a42ea9150133377a04abe472e69c184a",
"assets/fonts/MaterialIcons-Regular.otf": "3afdd9ee93673cc2df3d54b0caadbebc",
"assets/lib/widgets/other/other_hard_close.dart": "3e06d10650c1fe3cdcf85c4e52d66b30",
"assets/lib/widgets/other/other_trick.dart": "f1768169e2977896c600ff2557cb601f",
"assets/lib/widgets/show/custome_dialog_animation.dart": "0a7c8996d9699d619c9925738e9ac165",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "cff419792c64ba1bb9044cb6c362159f",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "8ea2f329e16d83ea9cff9317e40f554b",
"assets/lib/widgets/show/custome_dialog_carry_result.dart": "5ca01b87ef54c019e44166191d933f5d",
"assets/lib/widgets/show/custome_dialog_easy.dart": "3123ad7f0fe2bbc052da832d16514dc0",
"assets/lib/widgets/show/custome_dialog_location.dart": "142d82c66191b6efd7f4fa8f521a3f18",
"assets/lib/widgets/show/custome_dialog_penetrate.dart": "0a4d584f302b27c53ee3641243c94002",
"assets/lib/widgets/show/custome_dialog_permanent.dart": "34f5fc7b9f727068c5c763af6ccd3d57",
"assets/lib/widgets/show/custome_dialog_single.dart": "55805be044a336a6c8f7a2331363fd64",
"assets/lib/widgets/show/custome_dialog_stack.dart": "a2deac8633f81444239955cb326584eb",
"assets/lib/widgets/show/custome_dialog_system.dart": "de9f9d92d7860899957147c54adb8404",
"assets/lib/widgets/show_attach/attach_dialog_business.dart": "efb279f2b84214bdc4f1d8a8152213f1",
"assets/lib/widgets/show_attach/attach_dialog_guide.dart": "78b6878e777dc2b7545ee1cdce205efd",
"assets/lib/widgets/show_attach/attach_dialog_imitate.dart": "0c3d0b9c6a1ffbc0a2b2d3cebe1064fe",
"assets/lib/widgets/show_attach/attach_dialog_location.dart": "021d311953b19cf9925d8419106ebe41",
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "ff6401bdfd39f48da9709e1b6202db99",
"assets/lib/widgets/show_attach/attach_dialog_scale_point.dart": "b0e0f0594c09dfb9af35898f11985657",
"assets/lib/widgets/show_attach/attach_dialog_target.dart": "0cf4b43d56a770db2be2609c2eaf32b3",
"assets/lib/widgets/show_loading/loading_custom.dart": "28661c7cb39dac3282950d572a176507",
"assets/lib/widgets/show_loading/loading_default.dart": "afaf1498d590f9c67aaeed7cad8f9deb",
"assets/lib/widgets/show_loading/loading_least_time.dart": "c8b762c2a244b89bc99b07f6f925a46c",
"assets/lib/widgets/show_loading/loading_param.dart": "bbcdd0e31e3d301d9ed249d0916e66b8",
"assets/lib/widgets/show_notify/notify_dialog_alter.dart": "75a69505bc319c6aeadb33b1fa7a0f35",
"assets/lib/widgets/show_notify/notify_dialog_error.dart": "0db1c777457da7c141865f6ab75544c7",
"assets/lib/widgets/show_notify/notify_dialog_failure.dart": "3cb618e398d954da30f433d24e3874ea",
"assets/lib/widgets/show_notify/notify_dialog_success.dart": "c44ff635f62bb35b9f871433060ad561",
"assets/lib/widgets/show_notify/notify_dialog_waring.dart": "f328195449676c36eb0222170f7d20d2",
"assets/lib/widgets/show_toast/toast_custom.dart": "0b719d20dc6a1be54c7a168d0e5deb9f",
"assets/lib/widgets/show_toast/toast_default.dart": "b2a106fbd7e8ac749a297be71d0b2018",
"assets/lib/widgets/show_toast/toast_interval_time.dart": "a0e97e1f5aedae96c1bc6c0c2f34c242",
"assets/lib/widgets/show_toast/toast_smart.dart": "67ca827ff521419bc860135f901378f0",
"assets/lib/widgets/show_toast/toast_type.dart": "5ebed4999a138fbeec2f1be9d200a6a8",
"assets/NOTICES": "efc1f49838a3c8d57db265e91d0e9708",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "86e5d9756e511e8685564e2ab88c15a8",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5bc21c3e9af33164cdc2a0cbd5a32685",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ac0b8508fb3c5f09a41ae45698b6e79",
"/": "0ac0b8508fb3c5f09a41ae45698b6e79",
"main.dart.js": "ab827d82178636e22da6f6766045a9cb",
"main.dart.js_1.part.js": "0f6304137b2c8f2b322aa9389eeae73c",
"main.dart.js_10.part.js": "7518ada0dacf669df05bef5c7baac850",
"main.dart.js_12.part.js": "63691b7db653113c6b0fc66356a8396a",
"main.dart.js_13.part.js": "450c55f5f53f4cd938d212619f7617c2",
"main.dart.js_18.part.js": "d6dcfc046b853eb7b0804e3c45ef83cb",
"main.dart.js_19.part.js": "d68f78da59bea5eb1349e774108a629a",
"main.dart.js_2.part.js": "8d3bdb41f9b0606537b401d35b7d5b4d",
"main.dart.js_20.part.js": "05603a03412a369a042f823c16c47c1a",
"main.dart.js_24.part.js": "b6ff7e827fb2ce42e9d4594da5cb86e0",
"main.dart.js_25.part.js": "2cde5eff0b42c5abaf582eb7d205d604",
"main.dart.js_26.part.js": "166e7a68501d143fd93e73815da63392",
"main.dart.js_27.part.js": "b62bd9fefba85b2ecdbc1ac27c5fe37c",
"main.dart.js_28.part.js": "7ae5f81338cd7b21851d85a6037a679b",
"main.dart.js_29.part.js": "0f5015e57a7fd3e444bcf62674dd6bc6",
"main.dart.js_3.part.js": "1aa496d4cf31e109b6e46546be327c8b",
"main.dart.js_30.part.js": "c97eaa08767c0ec9dcfbae17417d608b",
"main.dart.js_31.part.js": "19d5c8d323ba497fea699108b4079bb8",
"main.dart.js_32.part.js": "19590d1340172b53d08b829ec69aef70",
"main.dart.js_35.part.js": "ed5f0a1a4ab792b9522a7eeb36eaf38e",
"main.dart.js_36.part.js": "cc09f716be1d09e8a4da0fbdc1d5bb6f",
"main.dart.js_38.part.js": "3ba645ad62296a0273a7e2913b7a5913",
"main.dart.js_39.part.js": "ae46c74e805203efab88b4bb541e6739",
"main.dart.js_4.part.js": "1d5c27bfb58a02a15f454f6027f4074b",
"main.dart.js_40.part.js": "1031b0f70bd916804338eda9b19a8e5a",
"main.dart.js_41.part.js": "49514099f67f04bd23b125cbbf5e4d46",
"main.dart.js_42.part.js": "4ffa82559ad979e1d6b92540f02526b3",
"main.dart.js_43.part.js": "9a0caf2d07b574c0f5d327894d917e8a",
"main.dart.js_44.part.js": "0b0746acecc8691eccd6661e0569c9cc",
"main.dart.js_45.part.js": "f2d331f6365b3f00f5ff1d423793d341",
"main.dart.js_46.part.js": "6340f135c4c62aca11544c2ab6a92016",
"main.dart.js_48.part.js": "163e247f24e1a50dca33f8d503a8c6d4",
"main.dart.js_5.part.js": "32c5614c42f9025ca1415c004a589ea2",
"main.dart.js_50.part.js": "790ede8c507549cd14471e4347acc9c7",
"main.dart.js_51.part.js": "ed093d6ef18044f6b99301453b8dd824",
"main.dart.js_52.part.js": "d736dc894478d9a0d02e530c2c7a5696",
"main.dart.js_53.part.js": "248e9b562522505ae04bdb1952aa8b37",
"main.dart.js_56.part.js": "e0cb52da996729e30137c917307824cb",
"main.dart.js_57.part.js": "5d804c97c7198c4e844b44bd65ad20cd",
"main.dart.js_58.part.js": "34fdc6c08387ee87129e5b3eb04cd228",
"main.dart.js_59.part.js": "dcd7ccdc662f4451abd3763e27b46694",
"main.dart.js_61.part.js": "2b0ba57d9c41f8ce0155beddc6f2c270",
"main.dart.js_62.part.js": "64911df09a0d23a12a8806abb5d93263",
"main.dart.js_63.part.js": "25753bf5187286f964364530cebe4efe",
"main.dart.js_64.part.js": "47a8ac510bc95afc00862037176b89e8",
"main.dart.js_65.part.js": "bc95ece98a4d8c7cfc123635169c4ee0",
"main.dart.js_66.part.js": "ae3d3e80e8c641571a49f3e484732243",
"main.dart.js_67.part.js": "1cffabb06dc6d0e78b7021694b29383d",
"main.dart.js_68.part.js": "f1830fb88431c8bd1a7639be6cd591b8",
"main.dart.js_69.part.js": "cd4bc083cc8a31b96263e6d38f43baed",
"main.dart.js_7.part.js": "38918d6c399f6d454f3c9a3b70f29c77",
"main.dart.js_70.part.js": "37eb5dfab052a24fdef86cac5b091a0e",
"main.dart.js_71.part.js": "f8450f4a5b15d0b14d2b22ca39f2b22e",
"main.dart.js_72.part.js": "9443a1fa66944eac4ed0653756db7e37",
"main.dart.js_73.part.js": "a257e47f438dbf44ea152b98872364bb",
"main.dart.js_74.part.js": "033703eb86343d64e7ea984d3b4e4816",
"main.dart.js_75.part.js": "b40a5b9d7a76e9fb6e3a394b5455d882",
"main.dart.js_76.part.js": "e51c65f7e33a0a3251a832675c3e3b8a",
"main.dart.js_77.part.js": "b821d96f584ad4f3495c013ec2d1cc61",
"main.dart.js_78.part.js": "58f35a9a1e56b219e7fcb9d342349221",
"main.dart.js_8.part.js": "e3711615aa840815718d24f767eca6d8",
"main.dart.js_9.part.js": "d683644a4718c2930a2847ba0f72080a",
"main.dart.mjs": "f2a7a1151ca20428492add332bc6f499",
"main.dart.wasm": "64a765ac32d86d888e97c330a8885c13",
"manifest.json": "c5589df7dcc513a4d11e6655fb7eae77",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
