'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f2952fd99766739abca696656eecfbd7",
"assets/AssetManifest.bin.json": "ac71a3ee317f4bea6a06baca58a32a13",
"assets/AssetManifest.json": "3a216b491bd4782da897711fcdad8a9d",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/FontManifest.json": "47d3fd92dbd2d336892172416f9b33c5",
"assets/fonts/MaterialIcons-Regular.otf": "1e48775f53c5c7682d0a17f44abad0db",
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
"assets/NOTICES": "4d59ac4d9c382f4280c7609464d019ea",
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
"flutter_bootstrap.js": "8fb6c9f4b9df5beb4ad6614fa25c689c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06b48a96351164b1029b367b9ffaca1d",
"/": "06b48a96351164b1029b367b9ffaca1d",
"main.dart.js": "e9d605ba2149927156e070d9c80b83ca",
"main.dart.js_1.part.js": "30f94b419998b9d72cecb698685dc261",
"main.dart.js_10.part.js": "9d04154e32c84c5d0444777d05717cc6",
"main.dart.js_11.part.js": "bf1d34e940739c4fc173ea5d3596c81b",
"main.dart.js_12.part.js": "85174533ce65526d84302e579e9e29d4",
"main.dart.js_13.part.js": "1407d7937c2612e449a8b67c5a80cef7",
"main.dart.js_14.part.js": "4a76c4bee1da3f0f4d3ab1ee0c3f8112",
"main.dart.js_15.part.js": "63851e087b514f3c1d863816aa264020",
"main.dart.js_16.part.js": "86338503f637a60539201aed6b0920de",
"main.dart.js_17.part.js": "5733241d67e637edbaf6046e10b87711",
"main.dart.js_19.part.js": "30a931175e44461f189b19dec3d692aa",
"main.dart.js_2.part.js": "fdf60373e805ea48ed9fba65f46da024",
"main.dart.js_20.part.js": "c2820c64c873deead6b8c0a49eec9c28",
"main.dart.js_24.part.js": "b7f439ab6e3c826b528425e68166b968",
"main.dart.js_28.part.js": "5e89af91cb59d77dfee8c9e5dde88837",
"main.dart.js_29.part.js": "da9ba8f7cd6c7a71fd30cb3bf113a327",
"main.dart.js_3.part.js": "e6df24994a2151047768b2986e6fe820",
"main.dart.js_30.part.js": "fcf2f5c3d2aacb32b0c266a51b046b6b",
"main.dart.js_31.part.js": "80be45b03393d65596322a031e2da889",
"main.dart.js_32.part.js": "bb8e827a84425e9e4acb8ca3b83b63b9",
"main.dart.js_33.part.js": "9808eb2fd2eaa5cf3c3d37cd0317ba61",
"main.dart.js_34.part.js": "c6446cb3bfb9c296c21e4e5fcd8941ce",
"main.dart.js_37.part.js": "e2432bff7f85f6cd7e4132b8967cfd69",
"main.dart.js_38.part.js": "308d3d176c1c7c5fe2c36fd74cd201b5",
"main.dart.js_4.part.js": "d0c165f1ec8b8c44816fdcb7bff7fdc6",
"main.dart.js_40.part.js": "ef7a5f5d8d7a874ddb965f2d904b0443",
"main.dart.js_41.part.js": "941808eb3993bbc583e57b0a8ff658f7",
"main.dart.js_42.part.js": "e33bb07557b20cca127ff5f343973de5",
"main.dart.js_43.part.js": "3a2d759080f002ebca4694b7ffde9207",
"main.dart.js_44.part.js": "80de306c6eb7fbe3f400ffb2cebd1657",
"main.dart.js_45.part.js": "72787f7b547c27b87731ffafc4b7faf5",
"main.dart.js_46.part.js": "e04cd60924c7907b122cc869ed8e90f5",
"main.dart.js_48.part.js": "21a7fa90c551b2806bd43f230df06239",
"main.dart.js_5.part.js": "9f553a141e6f602f3c9ce9009c4d667c",
"main.dart.js_50.part.js": "d9f281802ac5f1983a4dfd79ceb19b9e",
"main.dart.js_51.part.js": "f3f60a9071cb67b9c4adfe83e46f3b16",
"main.dart.js_52.part.js": "18d92e9cf3ffb5555aaaca87d3ebc6e2",
"main.dart.js_53.part.js": "08f1171a47897629f3f96c53cf57c989",
"main.dart.js_56.part.js": "1ef68df936ab21c84d67b6d355cca9c5",
"main.dart.js_57.part.js": "9ee57088603b5a52c57de86cb302a1e2",
"main.dart.js_58.part.js": "2e9aa6e2d197ab3528d9be0daf42e3cc",
"main.dart.js_59.part.js": "be2a782e9cbd452887664fab2df63140",
"main.dart.js_61.part.js": "7f68a71c0f4c608c464f193b7ae921ce",
"main.dart.js_62.part.js": "f9b7f7685d55b79bda93287532e3efe6",
"main.dart.js_63.part.js": "a1043ca119f16687c9dc5353c2eff34c",
"main.dart.js_64.part.js": "b7703c9831f10d170af8940376013899",
"main.dart.js_65.part.js": "b81b3af83deb3b83f5e58c83efb0a1b0",
"main.dart.js_66.part.js": "03d843590b58c529e0dc9f26e463270e",
"main.dart.js_67.part.js": "ab559bfcf0654b09d3ffc246c1c2020c",
"main.dart.js_68.part.js": "8cb8f6a14d93677c8d9baf9e8b3a40d0",
"main.dart.js_69.part.js": "86774083fb8407276b74dc9cfc57a199",
"main.dart.js_7.part.js": "2ab7b108894fb5ad87ae5bc3468d269b",
"main.dart.js_70.part.js": "cc5a9edfec4f126cc30c0da577f345c5",
"main.dart.js_71.part.js": "f21beb08ad632a989a9e3fbdb14bbe0d",
"main.dart.js_72.part.js": "8dffe358e7804f696482e45d31a25479",
"main.dart.js_73.part.js": "99beb8c82b6cc4c3a2e6696a9affccf7",
"main.dart.js_74.part.js": "c671a8466b5fd2b5399295dd601c2566",
"main.dart.js_75.part.js": "56d2b489077b9ff3a890e17e3e0b2bca",
"main.dart.js_76.part.js": "e6c5dce4055b93ca34f0e1f5ecb9106a",
"main.dart.js_77.part.js": "3b4b0f9e59a293209ba0ee47de29e85d",
"main.dart.js_78.part.js": "88e7c81966d51471f523c81f5771bae2",
"main.dart.js_8.part.js": "17055bd947abd9103865ca4be34b8f29",
"main.dart.js_9.part.js": "867ef862de0dba9e6fd2b77f7b3192a2",
"manifest.json": "c5589df7dcc513a4d11e6655fb7eae77",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
