'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "737bd90ccfaa1f87c01c4d23c0f67495",
"main.dart.js_24.part.js": "229a86a5e503a2777ab89c65d5d588fa",
"main.dart.js_34.part.js": "f49f7b9c5554b7ffadadfb126492b407",
"main.dart.js_46.part.js": "cc695454d25ba69f58cb076570d82a1a",
"main.dart.js_56.part.js": "d42d89a1dcfff6a68a613b54c2fd942d",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "71ff0e7553f61ee67046a725e083a0ca",
"main.dart.js_60.part.js": "a5c7895d4a6c052f05e990021ecf5461",
"main.dart.js_12.part.js": "78bd00868ce1cb1181eaf93fc0214187",
"main.dart.js_84.part.js": "7f7601ccffa7e1752273ff92f51fe09f",
"main.dart.js_71.part.js": "01bec66230fb1e19a34f8dd53cb43257",
"main.dart.js_61.part.js": "535a3a52a336e1df178e0dd1645eecb2",
"main.dart.js_6.part.js": "774a7288d813918adec25ddbf49de057",
"index.html": "41d9825d03ea60e7606cf88453c1fb00",
"/": "41d9825d03ea60e7606cf88453c1fb00",
"main.dart.js_13.part.js": "583dd65ce0fe888c4b64c5bc592ee355",
"main.dart.js_85.part.js": "8a4c8775e315160e4a09560cd4d2efb0",
"main.dart.js_68.part.js": "7036f49da96121ba9017eb8cf039f298",
"main.dart.js_78.part.js": "7ad96f4c535c99df187ec05f92703c45",
"main.dart.js_25.part.js": "780523968cda43176831fb874eb6457f",
"main.dart.js_57.part.js": "6d756074dee28d7a683493541d62282e",
"main.dart.js_47.part.js": "570d858e3c12daf8ceb22d057780b2b3",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "bdfca0f2676c29afed9a9284b1ab0bb2",
"main.dart.js_73.part.js": "42c915a88b6066a1bc825057c037a813",
"main.dart.js": "9209843c090a10d6652ff6cd62fb9bd5",
"main.dart.js_87.part.js": "b4f6abb9801da4f34629333b9d6ac15e",
"main.dart.js_18.part.js": "1eb1c40262ce163b443ed46e291fe05c",
"main.dart.js_45.part.js": "86f084f4dcd57014c4f4b6ecc243bc04",
"main.dart.js_55.part.js": "1ed2849eec2ce60c1d1da361d6d70033",
"main.dart.js_27.part.js": "3aa10e3e362132c2f82c6a9c47df6275",
"main.dart.js_19.part.js": "2b7c77f4195e4b0c46a360eea2e8ca6c",
"main.dart.js_44.part.js": "005e03583dac2093550cc7e85e148966",
"main.dart.js_36.part.js": "d50a906a81e43e057b28d3dd6a28caf8",
"main.dart.js_26.part.js": "9d7d79a0e793a06a42f8241b0fd0fe33",
"main.dart.js_10.part.js": "3af595a8d035704e7170cf450040330a",
"main.dart.js_72.part.js": "25dd145d7b59641ba6782e777af0cd89",
"main.dart.js_5.part.js": "c062e00851688204f7c034a925910a4c",
"main.dart.js_86.part.js": "6bdf47dacd68010e138fa9f347332c19",
"main.dart.js_83.part.js": "6e0c5552092cdc16c815af31f0eeb1cd",
"main.dart.js_93.part.js": "e1e55cf4195c1ca74b35c65ce163e849",
"main.dart.js_58.part.js": "82c33a37050561d962cefdf2393e589d",
"main.dart.js_48.part.js": "bb5c7809a31a80e6decb2d82532231f3",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "3de6e72a19a65eae357b8eacbc06eb2b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "6ac45ad496b82d8681f4f3703cb28f77",
"main.dart.js_9.part.js": "a4f508d681a85ea48255dfd8cee9fc89",
"main.dart.js_32.part.js": "7c96594493a5b862278ca13f3d5248c3",
"main.dart.js_22.part.js": "212c8e72bbe46ad032e544d4ac243c04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "371c375a4d54c0c765effc90a55a90bc",
"main.dart.js_82.part.js": "b8e7f5b6f49f44b223eb7a4f50c2fdf3",
"main.dart.js_49.part.js": "2ff1b192c3a91b6da79b1da16093300a",
"main.dart.js_59.part.js": "40144e8c9a93f980503b69b5dbf2e93f",
"main.dart.js_14.part.js": "446c6fb878f3e44108992e16ce7a8eae",
"main.dart.js_76.part.js": "b9309d01ed3a7a9830fbcd701e2b49f2",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "475d70a9bf8a6a936411c6620b73dc07",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "4f009e9db90007c0c721b9e6bdb9fe7b",
"main.dart.js_89.part.js": "d67686f5290b79ca19d7b830d94df148",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "16f06bc058abb72ce1395d4e93b28a55",
"main.dart.js_29.part.js": "3a16da368e58c9191dc936d04821f73c",
"main.dart.js_80.part.js": "a71c4b6b245a7365ec1397ff45ecde89",
"main.dart.js_90.part.js": "235b498127379831a3d2a819c76f2719",
"main.dart.js_3.part.js": "c88a4967252b604b5a58168009b899ad",
"main.dart.js_74.part.js": "3dd21a89cb5f963e3c93a3518bb6473d",
"main.dart.js_16.part.js": "3eb061f53db9d4bb51d6df3bc1984ab3",
"assets/NOTICES.Z": "23c4fcfcf6a799fd0fa66dc0028893c5",
"assets/AssetManifest.json": "fb3497bac92b8657a04fa26e798c1c4c",
"assets/NOTICES": "fc6cb71c5cc68c966f08b565e00776d5",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "7f2fb21c467e6cfa00b4c27f4c784476",
"assets/lib/widgets/show/custome_dialog_location.dart": "132ef4f0a41f3987a98c7c071c7b1bfb",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "2c32b7474c093b575c80e365b606fad0",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "9eeca82f705293cc0319467993de84cd",
"assets/lib/widgets/show/custome_dialog_permanent.dart": "02503c61ba7cb650cee32e93732089e2",
"assets/lib/widgets/show/custome_dialog_stack.dart": "08041b25c807638151252e2ef5cc3a06",
"assets/lib/widgets/show/custome_dialog_penetrate.dart": "0b1736641b02d55f88af18a3d7cc37e2",
"assets/lib/widgets/show/custome_dialog_single.dart": "7a7ae5b47ddfd1de922050226b879a40",
"assets/lib/widgets/show/custome_dialog_system.dart": "783f63bde11011e973c9cbb2540a9763",
"assets/lib/widgets/show/custome_dialog_animation.dart": "8391096457353bfd335a656a16f84dab",
"assets/lib/widgets/show/custome_dialog_carry_result.dart": "1a17387c1f7a889050abe27147c447f3",
"assets/lib/widgets/show/custome_dialog_easy.dart": "3963e75c271d4b7635bc8de7f1344ebd",
"assets/lib/widgets/other/other_hard_close.dart": "b5753efd7045d011cb7fd51e946f6c26",
"assets/lib/widgets/other/other_trick.dart": "f6a7185f5b3168d29a40734cffa07a42",
"assets/lib/widgets/show_attach/attach_dialog_guide.dart": "7c3cd6353e81390f7033fe20798d2ea7",
"assets/lib/widgets/show_attach/attach_dialog_location.dart": "3722aa1664ed9f32d2fdaf62674121fd",
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "a9de6b259da83e38250ea6f1fe7e538a",
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
"assets/lib/widgets/show_toast/toast_interval_time.dart": "1c4bed3c60f66de50cdee596164c951d",
"assets/lib/widgets/show_toast/toast_default.dart": "c472de6fbe6a91a7d326dd42522764fa",
"assets/lib/widgets/show_toast/toast_smart.dart": "528f3c16f5b1b93a61d7a6865a7b2337",
"assets/lib/widgets/show_toast/toast_type.dart": "e0bf6c99c827d83ce80569df957e0b92",
"assets/lib/widgets/show_toast/toast_custom.dart": "12177f6294673fda693d3aba9e965904",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_91.part.js": "24a8aa5e400e03027ec297b2f14cff3c",
"main.dart.js_81.part.js": "aa9e5e5d851b0906b5941c52cc5e3c38",
"main.dart.js_28.part.js": "89f77a0381dcc1559a0233dccb043f8b",
"main.dart.js_2.part.js": "f632d7f422704c74a0fe01a84f637f6d",
"main.dart.js_65.part.js": "2259a78bae9e65858f029a9d5390151c",
"main.dart.js_17.part.js": "b7801f29bdcc7f899f9969c9d0242378",
"main.dart.js_88.part.js": "59ca7cc09efe0336d85557541797c2a4",
"main.dart.js_31.part.js": "517da99f4e0c578230ca626d166709cb",
"main.dart.js_21.part.js": "8ae79c700d85f8e7486f3f64418fc6c2",
"main.dart.js_53.part.js": "c5e61c792afd8d36a868e137bd903a2b",
"main.dart.js_43.part.js": "517c343ce05140643308b2f9b171b783"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
