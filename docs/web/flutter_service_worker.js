'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "06649e872b6ee2937133dc3013faf0db",
"assets/AssetManifest.bin.json": "c62b8dec8df289b0d2c4f93a1321ca35",
"assets/AssetManifest.json": "1ac30f081138fff69fd2857bef437c6b",
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
"assets/lib/widgets/show_attach/attach_dialog_adjust.dart": "dfeea1ee65b4225828e1f6b48d9483bb",
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
"assets/NOTICES": "c421a53965cfc896cead1376f7d89f62",
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
"flutter_bootstrap.js": "32be2b9ddb06a8a16e6b766751030a04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ac0b8508fb3c5f09a41ae45698b6e79",
"/": "0ac0b8508fb3c5f09a41ae45698b6e79",
"main.dart.js": "c27f2bf90ea1bc6cbd8b64defb4c28d8",
"main.dart.js_1.part.js": "e40dd9a24d076e03900002716e7f6081",
"main.dart.js_11.part.js": "7e31005dd39daa1dd6d4c8ac1a87d8cf",
"main.dart.js_12.part.js": "63d4f99239e9d3e501b31a4f0a2aa3e3",
"main.dart.js_13.part.js": "4bc6b29d82dfb47fee06ce53e18a26b0",
"main.dart.js_14.part.js": "5438bc8e9c5db6d9f1cbe6da1d1300d2",
"main.dart.js_15.part.js": "d4fa1fd013e53cea7cfa4fa31890c761",
"main.dart.js_16.part.js": "18afbf1f73a95258b057bc334245a028",
"main.dart.js_17.part.js": "36b468a053ccc1f049210c49ebd50994",
"main.dart.js_18.part.js": "e80007f44896ad1d860298836825c8cd",
"main.dart.js_19.part.js": "7a73c04b11951ea06dc7eeec4f906a02",
"main.dart.js_2.part.js": "c9a73084740ba02f048b8ebfd0a0a681",
"main.dart.js_21.part.js": "7a166d9c861886d41ba197caaaed034a",
"main.dart.js_23.part.js": "492c83bf31db1e4f5cd1abeca85095a7",
"main.dart.js_24.part.js": "60a80a8565e3293904fe6df8b7a2c56d",
"main.dart.js_25.part.js": "eca7d83fd78d5e395af34277314528a5",
"main.dart.js_26.part.js": "1ce5f5f8ace39a8ce5d98cab31347e72",
"main.dart.js_29.part.js": "e2521cb350a140096f40be2b7aab5e77",
"main.dart.js_3.part.js": "4d1cc4f19fc1095caec82eb9e6f0a2ba",
"main.dart.js_30.part.js": "716310cbc391b526a7c1b2b097b9fc73",
"main.dart.js_31.part.js": "4ba93d73618078f0f3b3f13f30464ecd",
"main.dart.js_32.part.js": "944d54d1abee6fc6ca07d32a0509909b",
"main.dart.js_34.part.js": "6e67df5057dfb44c4993f479f91eb7ca",
"main.dart.js_35.part.js": "90572c4ddfc8dbbd511f5e153a766825",
"main.dart.js_36.part.js": "da259b3f7546d224243eea769edd9a4b",
"main.dart.js_37.part.js": "ab2cb79de8e22924148f9652087c092c",
"main.dart.js_38.part.js": "6a3726db53b85b44118b65fa09dc2680",
"main.dart.js_39.part.js": "79daea90b77376a392183b4ac144eb84",
"main.dart.js_4.part.js": "0228d2f9903829d9b21dcf45dea59e07",
"main.dart.js_40.part.js": "833097fcea82da5e8e6985589051f385",
"main.dart.js_41.part.js": "f9d43aec19ea1975fc83e0392cf36ef2",
"main.dart.js_42.part.js": "e8886426cb3d5f475627ffa22aba132d",
"main.dart.js_43.part.js": "1ef7aec1af71650ac19b598f74ac7e66",
"main.dart.js_44.part.js": "ce8dc3743699be7725de1862e76c83f9",
"main.dart.js_45.part.js": "ad0065ec9cb41fb6cf07587893cb4952",
"main.dart.js_46.part.js": "2483f0c9079076427ed5f1f1a28d4b6f",
"main.dart.js_47.part.js": "e332f44a8274c1905c83e886c1cb4040",
"main.dart.js_48.part.js": "6fa9e5ecee0aa363557344d751410203",
"main.dart.js_49.part.js": "5a00d075561d34917d3cf4f04c482345",
"main.dart.js_5.part.js": "56d775150a085cdf18ead5376aad77a8",
"main.dart.js_50.part.js": "85f3b5684f23e2b1e13a65909bd28f60",
"main.dart.js_51.part.js": "21ace865044ec2591d1f2587eab0d86f",
"main.dart.js_8.part.js": "6355c8e0a1562c07f8f54628ec89e4c7",
"main.dart.js_9.part.js": "6ca2b41e22bc71942c230b6e4bedbb7f",
"main.dart.mjs": "f6fe5b84091173662dab72bcdb36e1cf",
"main.dart.wasm": "58b1d92b6244666a844896281939677e",
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
