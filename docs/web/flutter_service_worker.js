'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3147c605a5fecbbba4d47cef69e816ca",
"main.dart.js_69.part.js": "2bdd7a14859b76ae7cc821479ad0e67e",
"main.dart.js_24.part.js": "b756169e3170c97d480c222aec02f2c9",
"main.dart.js_34.part.js": "67310c4584870846c82a1aa89ae03c40",
"main.dart.js_46.part.js": "1f969012f11031bd32e28f0c46857d25",
"main.dart.js_56.part.js": "5c5a78ae06921037ca7bebec46edd0ff",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "74e48e97f7866a4f446a1c154158b93a",
"main.dart.js_70.part.js": "acfb85ffe0a2c799fedcb7bdc699c15e",
"main.dart.js_12.part.js": "3f9518605e5f7fb08801218f067ce931",
"main.dart.js_71.part.js": "5d521bfaa49d9ff60944dd3bcae9b5ff",
"main.dart.js_61.part.js": "838644d543baedb077af79e80566d793",
"index.html": "867daf4291ab13ee0f0f718b5f7c0811",
"/": "867daf4291ab13ee0f0f718b5f7c0811",
"main.dart.js_13.part.js": "d72e1cf4e303799e780ab5409453ea6b",
"main.dart.js_68.part.js": "eb5d15833e9f0bbbb1b8cb3fd072c124",
"main.dart.js_78.part.js": "8f68ca2a124763c1804bc375a65c84f5",
"main.dart.js_57.part.js": "59504397e8ee5108af40e610e23b2836",
"main.dart.js_11.part.js": "124de0da43cf9becbeeece7abc39f324",
"main.dart.js_63.part.js": "906507000907caf250414b7016baef03",
"main.dart.js_4.part.js": "a4708a4a2b8c41d2bcb84bb155e25960",
"main.dart.js_73.part.js": "2b894a46977ca605e818281b985b7883",
"main.dart.js": "ee84ce2eec0472cb186f81724bc67bda",
"main.dart.js_45.part.js": "14e1dcaea299befabfa3ebe2ba9703a7",
"main.dart.js_37.part.js": "3f6090f52c11ffbdba9cebc44ae54707",
"main.dart.js_19.part.js": "7c6907a0119b382fe857d6ff4b036e37",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_44.part.js": "6eb8955e277e6e29b0c3c6e05fd2b06d",
"main.dart.js_10.part.js": "d36ba7c6ca8807dbf56777cdbe623abb",
"main.dart.js_72.part.js": "c3b00c64b0bab49f1f521e6eac4b06a8",
"main.dart.js_5.part.js": "30d7b5f1f20bd9fec32386ee2a0a3dda",
"main.dart.js_62.part.js": "b09337245d008be0a0d27e06266f1b2b",
"main.dart.js_58.part.js": "6648af6adda3961c850f82472c6983d4",
"main.dart.js_48.part.js": "68d9d7df398057f1b4484b77fbef4759",
"main.dart.js_15.part.js": "9f5293dbe2e81f5dc1b54426b50c02d4",
"main.dart.js_67.part.js": "bedf2067a5b3ecc499f2f045b51cfa02",
"main.dart.js_77.part.js": "d46929d5a4fab48b90b0f41f52f6a976",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "4744e79c95a23bc38c325eef68793c45",
"main.dart.js_51.part.js": "0094d34fb31125088ba3d3284b75a9e3",
"main.dart.mjs": "f2a7a1151ca20428492add332bc6f499",
"main.dart.js_33.part.js": "10324dbe2fa673d4594bbbfdf8ebde35",
"main.dart.js_9.part.js": "0327b6c3627e872aaea4ca5b62cf628c",
"main.dart.js_50.part.js": "1028c82a662f2d64ab4290989445e4b2",
"main.dart.js_40.part.js": "251180c413d71221a294eedc6b1f6c70",
"main.dart.js_32.part.js": "0a72614ddcb36eec8feddbf6524178c5",
"main.dart.js_8.part.js": "8e8f3df08e911de5ccc9cc4f4083534d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "976cdf27f92d76d84eeefcf3ec3702b3",
"main.dart.js_59.part.js": "4a6784698bf6f270d13c811e27bef363",
"main.dart.js_14.part.js": "3028a0d0543da9987596e41d78f8a54f",
"main.dart.js_76.part.js": "b50a1e1912280afaa76a22f45acdc91f",
"main.dart.js_66.part.js": "789892cab3f10a790ad464e2bef3a4a9",
"main.dart.js_1.part.js": "a4a32618f66bd4ce126a0df4a9ea0c26",
"main.dart.js_20.part.js": "c8efe353e83ef4f770cdf2dc05eae06e",
"main.dart.js_30.part.js": "0666969027a57d3babde3659553ba3da",
"main.dart.js_42.part.js": "13bec93333823dbc88d979f9400fc41d",
"main.dart.js_52.part.js": "ec433efb8bfc475c765e360a945f6697",
"main.dart.wasm": "054bcbf5482b0a330c249ea243259f3c",
"main.dart.js_29.part.js": "f493ab2299f43c90b1b768e91f4cb133",
"main.dart.js_64.part.js": "6cadafc87306b9b50d5fb83798ce2a15",
"main.dart.js_3.part.js": "23838e44661da47a1c4f771a7554dc43",
"main.dart.js_74.part.js": "49ffe97196d51ba2f8d2949a71fab123",
"main.dart.js_16.part.js": "9a0c6bab4b5db76c40f7ee5f0dacf880",
"assets/AssetManifest.json": "7e257a88d1a2af438eef3ea22cb5ea39",
"assets/NOTICES": "7341667e59280c636bfc0f3e748f5d58",
"assets/FontManifest.json": "47d3fd92dbd2d336892172416f9b33c5",
"assets/AssetManifest.bin.json": "3503e4f2eda591f892ed26fdcf1723fd",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/widgets/show/custome_dialog_location.dart": "cc8a370b5989dc7e5a0192411cc2f69b",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "2c32b7474c093b575c80e365b606fad0",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "9eeca82f705293cc0319467993de84cd",
"assets/lib/widgets/show/custome_dialog_permanent.dart": "02503c61ba7cb650cee32e93732089e2",
"assets/lib/widgets/show/custome_dialog_stack.dart": "80cdd8ab515f848c68922370aa27e848",
"assets/lib/widgets/show/custome_dialog_penetrate.dart": "0b1736641b02d55f88af18a3d7cc37e2",
"assets/lib/widgets/show/custome_dialog_single.dart": "106211a33db31a755f49f923a99a9018",
"assets/lib/widgets/show/custome_dialog_system.dart": "783f63bde11011e973c9cbb2540a9763",
"assets/lib/widgets/show/custome_dialog_animation.dart": "8391096457353bfd335a656a16f84dab",
"assets/lib/widgets/show/custome_dialog_carry_result.dart": "1a17387c1f7a889050abe27147c447f3",
"assets/lib/widgets/show/custome_dialog_easy.dart": "3963e75c271d4b7635bc8de7f1344ebd",
"assets/lib/widgets/other/other_hard_close.dart": "b5753efd7045d011cb7fd51e946f6c26",
"assets/lib/widgets/other/other_trick.dart": "f6a7185f5b3168d29a40734cffa07a42",
"assets/lib/widgets/show_attach/attach_dialog_guide.dart": "7c3cd6353e81390f7033fe20798d2ea7",
"assets/lib/widgets/show_attach/attach_dialog_location.dart": "fa19f77b5a5e02ad646c356696fc90e4",
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "58a3a8acc4fabd702aad724b55b09042",
"assets/lib/widgets/show_attach/attach_dialog_business.dart": "0765805573f65fd70a7cc423d9b6cadb",
"assets/lib/widgets/show_attach/attach_dialog_scale_point.dart": "935dac137318992dc6f043c0e94863d2",
"assets/lib/widgets/show_attach/attach_dialog_imitate.dart": "db80aece36ad4fd3fe7b869987c1ed0f",
"assets/lib/widgets/show_attach/attach_dialog_target.dart": "439dea9bbfd5f547e69508ea81b2fd58",
"assets/lib/widgets/show_loading/loading_custom.dart": "4cac707f1c84e32371c7da2910683cba",
"assets/lib/widgets/show_loading/loading_least_time.dart": "ef8e153b2a96555f1d2adf22e0280fc8",
"assets/lib/widgets/show_loading/loading_default.dart": "fb616216e5c7e80aa24404495df6181c",
"assets/lib/widgets/show_loading/loading_param.dart": "a2103a7dbec7d1ff0acd510d49339cba",
"assets/lib/widgets/show_notify/notify_dialog_error.dart": "efd4072e0257b2a25d4af5ba55fd8a58",
"assets/lib/widgets/show_notify/notify_dialog_alter.dart": "d7e65b65403cb080abd7bf1915953051",
"assets/lib/widgets/show_notify/notify_dialog_failure.dart": "f8899c2651312c961c279aac9b82e1a1",
"assets/lib/widgets/show_notify/notify_dialog_success.dart": "29b12a83c5345828c6430fd942501402",
"assets/lib/widgets/show_notify/notify_dialog_waring.dart": "4d5db91f739d15641a03656d82ee0c6c",
"assets/lib/widgets/show_toast/toast_interval_time.dart": "7372c05fb540207d6ef5b48eefa2ed18",
"assets/lib/widgets/show_toast/toast_default.dart": "c472de6fbe6a91a7d326dd42522764fa",
"assets/lib/widgets/show_toast/toast_smart.dart": "9b6a095f43da577d1c2a76c3c53a8795",
"assets/lib/widgets/show_toast/toast_type.dart": "e0bf6c99c827d83ce80569df957e0b92",
"assets/lib/widgets/show_toast/toast_custom.dart": "12177f6294673fda693d3aba9e965904",
"assets/AssetManifest.bin": "360a2ca22b21763dea265a0ba8a22de3",
"assets/fonts/MaterialIcons-Regular.otf": "1e48775f53c5c7682d0a17f44abad0db",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_28.part.js": "65e3aab3ccc8e2c7e32b19dbd5dc7c20",
"main.dart.js_38.part.js": "79a3897a82a25b9fa992ed18e5ca9333",
"main.dart.js_75.part.js": "7b7b8e9e247e22c1d4a8de299863ce54",
"main.dart.js_2.part.js": "1ab492260295c396b37a2bc487adf55d",
"main.dart.js_65.part.js": "67e8afea5aff76278dbbbdcf6e867339",
"main.dart.js_17.part.js": "3443571ced643711a2fe472f18c1a7ec",
"main.dart.js_31.part.js": "caec95b238d3869626b0b9f548c76b1f",
"main.dart.js_53.part.js": "a6db8d6cb74ef0df948fd08263ac8ce7",
"main.dart.js_43.part.js": "3c824265de2fb46e7fec22d3866b8b3c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
