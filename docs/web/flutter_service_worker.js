'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "adb3206a3f5ca9987e39263761243c11",
"main.dart.js_24.part.js": "5a93c3a73287773a83bd8a4eb1cdf4b7",
"main.dart.js_34.part.js": "99b5e8c1a31e0d7b0e46a67ae6f28205",
"main.dart.js_46.part.js": "cc695454d25ba69f58cb076570d82a1a",
"main.dart.js_56.part.js": "dc6293175c93d0b04eb0fd74d29a1a63",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "76c06af181b8f0d6c2b1afce67e6fa7b",
"main.dart.js_60.part.js": "2e19e5aeb2f534f8a709029eaec2f5f7",
"main.dart.js_12.part.js": "7ae1ceeafae601e8c590a78012f77713",
"main.dart.js_84.part.js": "ce56db3cbf9da0f78173f2ffc4cfc916",
"main.dart.js_71.part.js": "721b148b7dc0e43b4fea02c2cd34f819",
"main.dart.js_61.part.js": "85fc67226dae45a6ca0718f2991df076",
"main.dart.js_6.part.js": "20aa37b86099f191a7d6841352046fb2",
"index.html": "42d79b1fa352524c54f5e2223fd2dbf4",
"/": "42d79b1fa352524c54f5e2223fd2dbf4",
"main.dart.js_13.part.js": "8e24b1d8945117452acae3f401bb1ec7",
"main.dart.js_85.part.js": "ff6b48cb9b81f60270c438b80ba7813d",
"main.dart.js_68.part.js": "bde79cbd1b73f7fb1e9ab4b0b34ebf34",
"main.dart.js_78.part.js": "2135b36f08abe4155ead2220203f33e7",
"main.dart.js_25.part.js": "f7bb2c9d9b8feee38e7bbbc23c9428d4",
"main.dart.js_57.part.js": "7e0ac8830c8280921fc6e6822fc5a809",
"main.dart.js_47.part.js": "fc424107567b0be7e0310e3fad77f12c",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "ac96e9bd0f542572e23f2da33396e5c1",
"main.dart.js_73.part.js": "42c915a88b6066a1bc825057c037a813",
"main.dart.js": "e61b89316714542732486d3b6bbdcfed",
"main.dart.js_87.part.js": "8f4629300924b189f55b6da354dc33b6",
"main.dart.js_18.part.js": "836f1c2a04484419e24097c3ef234a54",
"main.dart.js_45.part.js": "c95526a8de05a4353402fe6a2034b95e",
"main.dart.js_55.part.js": "d4521f9e5050c7817b3e6ca3a4f5f09f",
"main.dart.js_27.part.js": "160aefd7d49429ac7eb71e409391fc22",
"main.dart.js_19.part.js": "2b7c77f4195e4b0c46a360eea2e8ca6c",
"main.dart.js_44.part.js": "5fa7525429f38ea8e183b5315cc23f19",
"main.dart.js_36.part.js": "deea8b79bd9440e67de428c0bc9ddc42",
"main.dart.js_26.part.js": "28eacb5a6ce817c784f1085f71d58e21",
"main.dart.js_10.part.js": "3af595a8d035704e7170cf450040330a",
"main.dart.js_72.part.js": "25dd145d7b59641ba6782e777af0cd89",
"main.dart.js_5.part.js": "605b78745957af8efb4ec1d664d94ecd",
"main.dart.js_86.part.js": "6bdf47dacd68010e138fa9f347332c19",
"main.dart.js_83.part.js": "6e0c5552092cdc16c815af31f0eeb1cd",
"main.dart.js_93.part.js": "c730b43c219c3a850ed8d03afa7397ec",
"main.dart.js_58.part.js": "400751c6ac31016b92e01e7010d6ab73",
"main.dart.js_48.part.js": "ee54334739efacddbbd562201ae09b3b",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "3de6e72a19a65eae357b8eacbc06eb2b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "4ac680d73d5c44cac7549e5a05893324",
"main.dart.js_9.part.js": "a5731191fed11c1bbdbcdaefbd169cdf",
"main.dart.js_32.part.js": "8ddd06f2cab74423dad4c2a721e3d7ce",
"main.dart.js_22.part.js": "afdfc0218f5492b035206e08befba403",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "371c375a4d54c0c765effc90a55a90bc",
"main.dart.js_82.part.js": "ad164bf14acbf62b0a439ffafa310939",
"main.dart.js_49.part.js": "7ee24ff1f3002221e1bcd7a888962cf2",
"main.dart.js_59.part.js": "f2d0c75f8bb8b796dba9bd262d40cc10",
"main.dart.js_14.part.js": "47586fc4c15aeeaaa7ffa5c0fc7cf9ec",
"main.dart.js_76.part.js": "35e8bcaa4d276f99da278eed1a46bf03",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "dd3c77122168b6126f78782495f5e8d9",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "f9c020d2887339a07a9c140b09fbb909",
"main.dart.js_89.part.js": "69542be20ad60777690db53207bd09cd",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "7998e71f300e0f2439f91eb9ac57e3a5",
"main.dart.js_29.part.js": "3a16da368e58c9191dc936d04821f73c",
"main.dart.js_80.part.js": "10323adc8739a30a4874d57e2250a387",
"main.dart.js_90.part.js": "235b498127379831a3d2a819c76f2719",
"main.dart.js_3.part.js": "cfb1aac7f4dd8f7b8da164cf0ba9ab99",
"main.dart.js_74.part.js": "d12125c134af6b416e8f6705fe1e65a0",
"main.dart.js_16.part.js": "129ce8e46cc78329bb5fa8f648605cd6",
"assets/AssetManifest.json": "fb3497bac92b8657a04fa26e798c1c4c",
"assets/NOTICES": "fc6cb71c5cc68c966f08b565e00776d5",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
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
"main.dart.js_81.part.js": "becaf43ef4b974553fd06e884f3bd89b",
"main.dart.js_28.part.js": "48ba57afd12c02930b8ac8bb87c86bd0",
"main.dart.js_2.part.js": "d7ab81fdbddfa4f8ebed59cef175fe8e",
"main.dart.js_65.part.js": "7e0a9bdfb569c32117f1e26e4b705b9f",
"main.dart.js_17.part.js": "db59e66fa529062b6536435caad67ef6",
"main.dart.js_88.part.js": "ee17b0df59dbec860c09a2324b02ba66",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "db1d5872804bdca24b8392d6a54e4636",
"main.dart.js_53.part.js": "6dc65357dbfa3ee7aac45991fbcafb17",
"main.dart.js_43.part.js": "1b95bb079cc946faba896a5df2640836"
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
