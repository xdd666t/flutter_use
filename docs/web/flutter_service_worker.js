'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c8ac7e0fcaa188bc33b98dbbc83aa3f",
"main.dart.js_69.part.js": "185458bcf17d3a9c351564de516a10f2",
"main.dart.js_24.part.js": "7fed387eeb24dc771a96d048d2267f35",
"main.dart.js_34.part.js": "ed96c9f3a7fd887a6238cf80194a5d99",
"main.dart.js_46.part.js": "9be72ac2952ead22a0885ca91a37841f",
"main.dart.js_56.part.js": "9d3fe5fb17ff209d4c72df4573d47f2a",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "75366b635b4a74f1204dfaf5159dc832",
"main.dart.js_70.part.js": "d63e601066223bd8a99de57d8576e17d",
"main.dart.js_12.part.js": "e999b1756b2e9a9a38b81bffaff68ec9",
"main.dart.js_71.part.js": "106d60e86702e381d9c3b953ea930e90",
"main.dart.js_61.part.js": "fa56a78e1aa8aa5460555ab2920067a9",
"index.html": "867daf4291ab13ee0f0f718b5f7c0811",
"/": "867daf4291ab13ee0f0f718b5f7c0811",
"main.dart.js_13.part.js": "6f40f6c39681ef82b5c681aa9630aae8",
"main.dart.js_68.part.js": "d9f9232d43dc56b7621163434416216f",
"main.dart.js_78.part.js": "6596bee173c7cbd43d5c132b6382662c",
"main.dart.js_57.part.js": "4f30a66870c7e7c4a75cc572742cbc61",
"main.dart.js_11.part.js": "6a6633fdf134d76194992ade57dddeca",
"main.dart.js_63.part.js": "2c2dc09e73ec273f363aa10c5aa39e02",
"main.dart.js_4.part.js": "ea792b46fdca918da5392508fc10d33b",
"main.dart.js_73.part.js": "327bd32d8f7a81806dc508dfde805bd8",
"main.dart.js": "d3254ce8b04014a9589b7cd7d08719ac",
"main.dart.js_45.part.js": "2f3d173d56b7b962d6589071988995d4",
"main.dart.js_37.part.js": "2f80d43c0061a2beab011381356712d1",
"main.dart.js_19.part.js": "90a8074e6c4da2d825308bb9ed5202a6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_44.part.js": "e16a57cb1cf2658d59aaebf2e5233211",
"main.dart.js_10.part.js": "786e3da8c846e3387c8982fe0d097de0",
"main.dart.js_72.part.js": "06035c09a8de4aceafaa6a924facd439",
"main.dart.js_5.part.js": "ebb8dfff32ffb2a11eeaa621d4815591",
"main.dart.js_62.part.js": "27a1595acff6b8043cfa3f9894ad83a2",
"main.dart.js_58.part.js": "99833f8c4f39d6121b11cbd7ecb6b95e",
"main.dart.js_48.part.js": "67cb79c5931e5fa6683f64d4ec276ef0",
"main.dart.js_15.part.js": "a8f3c8b8078296862857317e1bb5dcc0",
"main.dart.js_67.part.js": "e690ad1f82693b31f249e911efdaaca6",
"main.dart.js_77.part.js": "f6f174f2136fa4be70b7b5bd2496c335",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "19e797333e18138ae73adf6e5d3ed1b1",
"main.dart.js_51.part.js": "c00addb081d85bcf976167d4c16e382d",
"main.dart.mjs": "f2a7a1151ca20428492add332bc6f499",
"main.dart.js_33.part.js": "d6535370bafd418e03412e5236240a0b",
"main.dart.js_9.part.js": "0c39efe45e8bd9485471bcccfac9ee13",
"main.dart.js_50.part.js": "947cf3e3316b7b918f6ebe72208f142d",
"main.dart.js_40.part.js": "fe5725833067c93310cee4728fe0e7f6",
"main.dart.js_32.part.js": "830d9503beacedf3909b3faa4d442735",
"main.dart.js_8.part.js": "682aa6f8be50d1f98563bf33f5c15604",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "976cdf27f92d76d84eeefcf3ec3702b3",
"main.dart.js_59.part.js": "937e495aa6ca515da76bf7a2009cbb7c",
"main.dart.js_14.part.js": "5a12d95f5e2a72f35db34f72766d1cff",
"main.dart.js_76.part.js": "aeda7dc50ef7bce2fca2defb29f6e5ee",
"main.dart.js_66.part.js": "d36fa4c805a383688c3da368df9f4543",
"main.dart.js_1.part.js": "45087d267439219cdad1a263b27c8e7e",
"main.dart.js_20.part.js": "858cffdf02c9b352f8beef133b1994c0",
"main.dart.js_30.part.js": "62dc012a20d66545d9751e726fa86fa0",
"main.dart.js_42.part.js": "8e78d3837137211efacd5fbada679e24",
"main.dart.js_52.part.js": "5a7388b5b29b4820c481269f273b2ee4",
"main.dart.wasm": "27226f31c976149547b52ef36a5e3bca",
"main.dart.js_29.part.js": "7df9df10ba3402eebf950192cce010fb",
"main.dart.js_64.part.js": "79ae977142ca1ccd18d4fbba0a43f5b3",
"main.dart.js_3.part.js": "23afe6bdf25859531afa5f861b28d727",
"main.dart.js_74.part.js": "56d19b45ebbecc527e1cb7646eaeabbf",
"main.dart.js_16.part.js": "2230a22887b9f81553bf2d9fd002b731",
"assets/AssetManifest.json": "d09bf642be1a50e54bcd61e7fc3b0d91",
"assets/NOTICES": "901215f6e5984ec5d3557216a887902f",
"assets/FontManifest.json": "a42ea9150133377a04abe472e69c184a",
"assets/AssetManifest.bin.json": "461457eea6d26b871610400ebc94f086",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "892fd4ed3d59da1d231e7ab1459c8142",
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
"assets/AssetManifest.bin": "254d6c5c5d7f6d8ba903630741bf2b44",
"assets/fonts/MaterialIcons-Regular.otf": "1e48775f53c5c7682d0a17f44abad0db",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_28.part.js": "224041ee33f04c6575becf59dd82bae3",
"main.dart.js_38.part.js": "6dac279c05969cbcb1e51b24f63e6404",
"main.dart.js_75.part.js": "c81ec7ab4f1d6e2db8678142876d621f",
"main.dart.js_2.part.js": "5e23859b7de7d9854f1c719fadb8c1c9",
"main.dart.js_65.part.js": "17bef9a177631b4b9c7e24615f52d96e",
"main.dart.js_17.part.js": "82919c0efc4c0edec9293ab26f7f7cd0",
"main.dart.js_31.part.js": "c2e2c951a84af0dc306b82afaaa125a7",
"main.dart.js_53.part.js": "f7c0111876b46c44953d8b443a4c7f51",
"main.dart.js_43.part.js": "5ac5c9ce8aa0f2a97688cd811b2bf144",
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
