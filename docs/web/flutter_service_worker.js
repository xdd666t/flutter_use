'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "066a5e15663bf1779b85ea14a4952db8",
"main.dart.js_24.part.js": "951e9160fa7e37dd8e2408e307bf4c72",
"main.dart.js_34.part.js": "5e86138bd3af0df082748594b1352033",
"main.dart.js_46.part.js": "f8122e9501b84c2856ee40e651759fb3",
"main.dart.js_56.part.js": "2bd839b7c98a42a73c9f7bb88279f937",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "0a060536466100eb3a0f06b38e2d6475",
"main.dart.js_60.part.js": "1ad816c2e5dd038eeb097e7b731e71cc",
"main.dart.js_12.part.js": "c02dd1c842d63d116faed706a7b4b53f",
"main.dart.js_84.part.js": "e8da339a57eca3ee41d89687281e5d47",
"main.dart.js_71.part.js": "8df28b472926c4f726a09072e0183cc7",
"main.dart.js_61.part.js": "0426bcc190e96bf65572098da892a6d0",
"main.dart.js_6.part.js": "b6c937f01e5d148285b916d900c4de4d",
"index.html": "bb43068468b59f8f6d6a0892fe70ad8f",
"/": "bb43068468b59f8f6d6a0892fe70ad8f",
"main.dart.js_13.part.js": "1b05e52d2dec4af593e2e4d04e086783",
"main.dart.js_85.part.js": "c16d63894467c6c979ca97640f1b197e",
"main.dart.js_68.part.js": "84e42cdc7ac0622b20c9c7c0d3f2e267",
"main.dart.js_78.part.js": "5ae797eea6f210813ee75153073a09cb",
"main.dart.js_25.part.js": "397411330572da82f1005420b1a4b4df",
"main.dart.js_57.part.js": "b53a38d7274dde3dec378a8ffa232e75",
"main.dart.js_47.part.js": "63a59cc87f885a5b9d86a054636ade82",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "f0258b7b7a6edb0b378b25c40bf4e041",
"main.dart.js_73.part.js": "761f16cceb5509db9a87e98009860c0b",
"main.dart.js": "d7c70250a3f4b62670cade21b5320610",
"main.dart.js_87.part.js": "aa8023ea384d60322cb9260bc412913a",
"main.dart.js_18.part.js": "72b71980ea00de455c67fcf32deaad42",
"main.dart.js_45.part.js": "6bfd01bb726b266f5b20b35bc3bbcfa9",
"main.dart.js_55.part.js": "2cdb5b39874fe7112e72472300b7f561",
"main.dart.js_27.part.js": "ea31721dab5a663c779e69659257ade9",
"main.dart.js_19.part.js": "45bc55ec4779cd1ec38e56f6d9a96f91",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "a44a7cff852d457935cf988a853266a9",
"main.dart.js_36.part.js": "28d9456536c4f8a5d7fbfa77e0611729",
"main.dart.js_26.part.js": "e7bda15fad0711c0d00031d5e3c0354f",
"main.dart.js_10.part.js": "a228156965ab0fa81379e2e550bae014",
"main.dart.js_72.part.js": "5fba67dce1e85490eb502a7746d63d01",
"main.dart.js_5.part.js": "7039dcd08fe76dba81f6397ab92a79b4",
"main.dart.js_86.part.js": "4464ed2f41d3d7ed3c131c0af208a240",
"main.dart.js_83.part.js": "7991bf3dfa54bfedb6b8300ab742cdbc",
"main.dart.js_93.part.js": "51500ac179d78bd2ced0b9834a8a0082",
"main.dart.js_58.part.js": "f396e2199a9d15cb51eec6dfaf37176c",
"main.dart.js_48.part.js": "af6241fed25d9a06c82545cd47557b64",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "231b628bc5a0ce1f436592eadd86be46",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "30dfb456f7de7a5552df5b8959ff5f1f",
"main.dart.js_9.part.js": "22e9aa0361951f5357b131c9a61af256",
"main.dart.js_32.part.js": "600aedd383a5795934b8d62b5a4ecda5",
"main.dart.js_22.part.js": "592e5792c0d15d44e3e219f44465a607",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "9d55847d95c79f5058886876bad74a0d",
"main.dart.js_82.part.js": "0cbb493e693bd1484b492f184f1a7e5b",
"main.dart.js_49.part.js": "583dfcad6e64a0d9cc9633f48a4cb691",
"main.dart.js_59.part.js": "82ad26637c4720afe7b162badef91827",
"main.dart.js_14.part.js": "6d19a7f58c9aceaf9f1643695788f370",
"main.dart.js_76.part.js": "eb94d490d811387a91139bcde84bf3f4",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "9931b849f9f70993639a978cf2112e4e",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "360fdbfd43d995d20b3005fcb7de8eb2",
"main.dart.js_89.part.js": "f2a151975cefa04cb13f7eb0f8c6cf7f",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "d9156db179d70cd0c7ace4edc9bee170",
"main.dart.js_29.part.js": "b880127c033ca95086ab5dd7341ba884",
"main.dart.js_80.part.js": "ff2ca6a00a8f46080cda76ee16dbde54",
"main.dart.js_90.part.js": "58139c7f0c87d1f76a743f2e86a3c75d",
"main.dart.js_3.part.js": "4a96516242f1b07b9f2b2da30cc21d0f",
"main.dart.js_74.part.js": "3fa24a838a53546f6adb5a21fa555e7d",
"main.dart.js_16.part.js": "d981a574b4f8ff61039623d03d3050ed",
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
"main.dart.js_91.part.js": "51fa28bc4233a798da8060d462febab5",
"main.dart.js_81.part.js": "6d5f0b669dc2432b3c0aaaeec269065e",
"main.dart.js_28.part.js": "8d6c3d9d497e828c218dbc6cc3d607e7",
"main.dart.js_2.part.js": "a2305acbfbac826e021b7f40fc78b3f5",
"main.dart.js_65.part.js": "f690d48c4d8086257164334b9ed21c39",
"main.dart.js_17.part.js": "18d126432ff91f9876811bd48c572833",
"main.dart.js_88.part.js": "f6f9891c2b9fc0ec295423872dbeaf77",
"main.dart.js_31.part.js": "7f0c15bc5074080b8f74958aacda4741",
"main.dart.js_21.part.js": "06804e493d2e70a9553e4d9e4960b2f4",
"main.dart.js_53.part.js": "8e2a9855c5236792a9763b41b9da6d0f",
"main.dart.js_43.part.js": "1774eae97c9acea51055ad2495346a27",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
