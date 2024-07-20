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
"flutter_bootstrap.js": "af75e8ff609b2e1027d1a97f9999b66f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ac0b8508fb3c5f09a41ae45698b6e79",
"/": "0ac0b8508fb3c5f09a41ae45698b6e79",
"main.dart.js": "fd9f1c07db311c5ebc4b748b7b519e21",
"main.dart.js_1.part.js": "e0eabfd84a7da5d9c5f3fa870fa15ec7",
"main.dart.js_11.part.js": "884ce72c04c015504e40e3cc7cd4b9b1",
"main.dart.js_12.part.js": "3ef3bdaef5afd2007f688bf89284b4e6",
"main.dart.js_13.part.js": "e6553b3b8d51623bfc78ca23531e02e6",
"main.dart.js_14.part.js": "be2542975329ead022049abcd0dd4ff9",
"main.dart.js_15.part.js": "99e5444f8303ea45b9dc5235b048b31b",
"main.dart.js_16.part.js": "f7e9d26f8f5e558a4a4f26b0133ec4e9",
"main.dart.js_17.part.js": "b0a9c87ec401c8e52602c68a85fecde8",
"main.dart.js_18.part.js": "ba31181d3e7b8d25a7bee7a7eadaf2f3",
"main.dart.js_19.part.js": "69abecb7a635a058de755417688d84c0",
"main.dart.js_2.part.js": "b4a0eca3980f92cdb07aff197f672451",
"main.dart.js_21.part.js": "189af29205a4552e10046bac1b7db196",
"main.dart.js_23.part.js": "2ba61e424c09346b262eeea2925389f7",
"main.dart.js_24.part.js": "b5dca205fd92f80bb6f99d51e3bf6677",
"main.dart.js_25.part.js": "c1e223124ff366a701013b53bb8ec89d",
"main.dart.js_26.part.js": "45b76bc8ea527fa6fc35e6baf80346ae",
"main.dart.js_29.part.js": "64d9c62c97911c17f09f290078aae350",
"main.dart.js_3.part.js": "8a7926e1f5244ad8b66cca2dd2e523d8",
"main.dart.js_30.part.js": "49d627e9f8c149a088b28325505edac9",
"main.dart.js_31.part.js": "b17fdc32f1804856aa505d0f014b2445",
"main.dart.js_32.part.js": "43bf41b42f6dc0f882253cdcdb55c005",
"main.dart.js_34.part.js": "a3b62b94b00e05724e577a66cbbf1775",
"main.dart.js_35.part.js": "b018a5909c1f29d6e4da9aa9cdd39326",
"main.dart.js_36.part.js": "11b386995866918d4c04f6b615353539",
"main.dart.js_37.part.js": "01e5b4116f90bcd331da08a848f32552",
"main.dart.js_38.part.js": "46b1469614295dac013fdd9fea493ccf",
"main.dart.js_39.part.js": "7f69a4144ca6298171b1f53852778736",
"main.dart.js_4.part.js": "a95eaa2285ace312902f934141fa2a2f",
"main.dart.js_40.part.js": "4011ba8100686527d5c1549be531e57e",
"main.dart.js_41.part.js": "26e0394df324605b15b6f7222e1809bd",
"main.dart.js_42.part.js": "795fb18367d55cdedbb07c68cef291af",
"main.dart.js_43.part.js": "ac0d6ef61be9a7f0e65266178d0700db",
"main.dart.js_44.part.js": "a031c6962393181587b349187aed366c",
"main.dart.js_45.part.js": "4936c68d2934ba16dc1d3ff3b26b75e9",
"main.dart.js_46.part.js": "d764ebf3204abf76b298dac88f4c5c0a",
"main.dart.js_47.part.js": "26300fd4834afc2f41a9d539c3ea0609",
"main.dart.js_48.part.js": "63f49277740979ad6ef4c15714f51a2e",
"main.dart.js_49.part.js": "845fdac7f6c21b390dce1bfa3a9300ac",
"main.dart.js_5.part.js": "9c13fa9e3773fe2a4c32df8f1d82bc41",
"main.dart.js_50.part.js": "c86537739b06d1ad5713ba3f8b34363d",
"main.dart.js_51.part.js": "786bdddaf3884996bf9a930cd50efcef",
"main.dart.js_8.part.js": "1c212ac20d2e6e80431d605c2c3a68af",
"main.dart.js_9.part.js": "a6557d2868c3c285e275f6182e550a66",
"main.dart.mjs": "1c6f57e9c5e3a88eef8f18bf5fb61df4",
"main.dart.wasm": "f646ed6f723ed022162ea14c1a01e131",
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
