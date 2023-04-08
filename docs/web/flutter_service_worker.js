'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "b60283f586d0a1e6cfcee8b44d1c1b69",
"main.dart.js_24.part.js": "d984e044f7c731dbdb4c405dfecb0747",
"main.dart.js_34.part.js": "48d1be2d38557aa60db18551010b2044",
"main.dart.js_46.part.js": "f8122e9501b84c2856ee40e651759fb3",
"main.dart.js_56.part.js": "9bbbae839731010baa912685671a3a63",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "a54a30187462b6746a6ca632fc543d92",
"main.dart.js_60.part.js": "13cac1aeb91bfdf411df6be8c54cc481",
"main.dart.js_12.part.js": "0fdc6f6f5714ca3b9a0d05b5b4abada1",
"main.dart.js_84.part.js": "e8da339a57eca3ee41d89687281e5d47",
"main.dart.js_71.part.js": "d38a6980f4a1244084540b4be1390f7f",
"main.dart.js_61.part.js": "e6613b45cff890e9a503620ed388baac",
"main.dart.js_6.part.js": "d9779ccefb56d62a93b12b1ee9650885",
"index.html": "008a2bbc871001ac9346c612d37c8c78",
"/": "008a2bbc871001ac9346c612d37c8c78",
"main.dart.js_13.part.js": "8d00cf8769b141c63d979b83ad3985e4",
"main.dart.js_85.part.js": "e502db6184bd62e77ea9186f458a757f",
"main.dart.js_68.part.js": "0cf113299ac927867bf7deb05c121cf8",
"main.dart.js_78.part.js": "d89efa1c5a1a6e3b5aecd10c0eabab9a",
"main.dart.js_25.part.js": "a5b540ab17ca15e1f3bf1426b6d07efa",
"main.dart.js_57.part.js": "51afcbed2c733e1a5d588983ff95a4a2",
"main.dart.js_47.part.js": "ee74a9a9d58d3fd1cb33fffd16ef2b90",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "82c0751a6432c5516efe6c368fdbb559",
"main.dart.js_73.part.js": "17ea59debe80150eb43f814587b5fae9",
"main.dart.js": "944ad2ced7ac0b00a2a033330fad5129",
"main.dart.js_87.part.js": "0dabd9723fbced76c3cbdbd85bab60f2",
"main.dart.js_18.part.js": "89d81b66a3afd303fb0fa40de7d47e4f",
"main.dart.js_45.part.js": "b0d8ccd9fa13bdad4df04d936e6eba0f",
"main.dart.js_55.part.js": "8fca1dda7b2e836c39fe0dc310aab1e7",
"main.dart.js_27.part.js": "e5b41b52f7963c54cff0145a631036e6",
"main.dart.js_19.part.js": "45bc55ec4779cd1ec38e56f6d9a96f91",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "0b3664df33beb4989c0c33068c5fac21",
"main.dart.js_36.part.js": "6ce83381d1d7ff5804bd1c77830f99fd",
"main.dart.js_26.part.js": "f4d736529a3716a80019eb6aa72dbee1",
"main.dart.js_10.part.js": "5cbb27bc4c78665d530441874c84ee3d",
"main.dart.js_72.part.js": "e5887cd921fb994f9288ccfc178e6fdb",
"main.dart.js_5.part.js": "ba3d7715ebe607252d861f32ef1644a1",
"main.dart.js_86.part.js": "7c88219f800a4c260f9cb4c9c776b57d",
"main.dart.js_83.part.js": "a5dcb33da24c5ed6c7f3cd2ef300a264",
"main.dart.js_93.part.js": "5bbf714a72587a329d09800ff1f7fa08",
"main.dart.js_58.part.js": "c2d3f5b61ab5a024df4391d2092c2be7",
"main.dart.js_48.part.js": "f7a68fe7a5945f5791e28d1934597e24",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "1c7963fcf5a50a57375dd22dcaca59a5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "a3915d7ef5f21a4eb0d449da5e8ef73b",
"main.dart.js_9.part.js": "3d29e067ab49fafa2081c5df7a83f466",
"main.dart.js_32.part.js": "ad9694873cdb2f8ebe546825ded4fa5e",
"main.dart.js_22.part.js": "c10bdeee3f9e778d908275f56f9cb2c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "9e059a8477240621bf49e5ba797d8f90",
"main.dart.js_82.part.js": "d1e9443f9ac27068fec2853656c285e6",
"main.dart.js_49.part.js": "226a46b253ea70c5f92a347980a894fc",
"main.dart.js_59.part.js": "85d01b1124e95650df3a39173517264c",
"main.dart.js_14.part.js": "d6c53d91f0c4e5eb79b37685b3b47d7e",
"main.dart.js_76.part.js": "478f17785fef59ace71ea41868f4ce59",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "22e09f8e4143b2325f5ed99b80411fc2",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "f7b1faaaabc5e6f9fd3c39ffada6e901",
"main.dart.js_89.part.js": "0579586bc1cae209a764dc5034ecf679",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "12e50c5acd228aa3d8960dbc3a327a93",
"main.dart.js_29.part.js": "9fc6de516c72b7892ae624768dd3f1b0",
"main.dart.js_80.part.js": "9c8344122cc52ea11befbc91845ca738",
"main.dart.js_90.part.js": "1bec40f8a4708497f5e4f27a24d3eb07",
"main.dart.js_3.part.js": "e1bd17306e44c4226454386c5a4a19ca",
"main.dart.js_74.part.js": "349baee46c31f7dc32a1050b5f870f7c",
"main.dart.js_16.part.js": "eac9a9ffd6e74de748b20688817b01db",
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
"main.dart.js_91.part.js": "f4862a40f3bf4764ab6ea410ae3054be",
"main.dart.js_81.part.js": "8ea8bde1e63675d86a9abd894ff4a6ee",
"main.dart.js_28.part.js": "b0e7f1a7b20d299ae0030f66a6a5f40e",
"main.dart.js_2.part.js": "6e1d51e5f49cc970307ce5bbd63ac94d",
"main.dart.js_65.part.js": "6605f7c8fbd603e775ed32d8989a5a9f",
"main.dart.js_17.part.js": "9a57b77be128ca4eb243172e631d112c",
"main.dart.js_88.part.js": "2cd5e30eb1fa0f37a79c15e5220ddb14",
"main.dart.js_31.part.js": "87303099f22e0edbe2e472df59cdf8f7",
"main.dart.js_21.part.js": "e32fffd0286c865fa2b34e915e671ce9",
"main.dart.js_53.part.js": "48b76f5c441fb00873fe46d44fe6058c",
"main.dart.js_43.part.js": "ac2dbf9bd4e393dbbf966f7fb6bdea33",
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
