'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "3532add57861e9f8d58d312d7824f42c",
"main.dart.js_24.part.js": "bb8a7027e6e01e7d49ad2661f8f67043",
"main.dart.js_34.part.js": "66b300b532d77c0398d27be0a87d37fa",
"main.dart.js_46.part.js": "cc695454d25ba69f58cb076570d82a1a",
"main.dart.js_56.part.js": "65dedb65af9e28d664fb87fac195cc07",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "d46ed6512e4048c99a92625c2540e1c5",
"main.dart.js_60.part.js": "48b43c96def6ea18c433f9e8a9946096",
"main.dart.js_12.part.js": "7ae1ceeafae601e8c590a78012f77713",
"main.dart.js_84.part.js": "ce56db3cbf9da0f78173f2ffc4cfc916",
"main.dart.js_71.part.js": "721b148b7dc0e43b4fea02c2cd34f819",
"main.dart.js_61.part.js": "85fc67226dae45a6ca0718f2991df076",
"main.dart.js_6.part.js": "eb90dfeaf75cf8050cdbad1c4914baa4",
"index.html": "ebb9a96298c13ac95aec9b4902d00a06",
"/": "ebb9a96298c13ac95aec9b4902d00a06",
"main.dart.js_13.part.js": "98a0948bf4f831babef6f89b7c9e05e1",
"main.dart.js_85.part.js": "61645e3440bdf661a7f11ca4cebfce41",
"main.dart.js_68.part.js": "08b0161098cdd14c17ed23d8f9979265",
"main.dart.js_78.part.js": "216f3c18512fa5b7b2159c783c5b8a1f",
"main.dart.js_25.part.js": "b1864bcf780effc6cc78d0a5323ffa3c",
"main.dart.js_57.part.js": "08dce9d1c3c8be969f7618bd60e5297a",
"main.dart.js_47.part.js": "fc424107567b0be7e0310e3fad77f12c",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "6f6fa8ca0607dfb8f496bbea6eb2753c",
"main.dart.js_73.part.js": "42c915a88b6066a1bc825057c037a813",
"main.dart.js": "15f3459c860823d172dbf1f9eca0a22a",
"main.dart.js_87.part.js": "48f3d823e4bb384d175891b32a91bf3b",
"main.dart.js_18.part.js": "5bb0e55fc403cdb6b60e07ea92b49138",
"main.dart.js_45.part.js": "852c7dff1e0da58c256195eb0da778d8",
"main.dart.js_55.part.js": "2048846cf8f3348ad53edda7de4262cc",
"main.dart.js_27.part.js": "24641cf487d24651bb42ee31f0ad9cc1",
"main.dart.js_19.part.js": "084bfee739bce9af28c469cabb261c68",
"main.dart.js_44.part.js": "5fa7525429f38ea8e183b5315cc23f19",
"main.dart.js_36.part.js": "8b67d33103eced88d4133381a03d4095",
"main.dart.js_26.part.js": "28eacb5a6ce817c784f1085f71d58e21",
"main.dart.js_10.part.js": "3af595a8d035704e7170cf450040330a",
"main.dart.js_72.part.js": "25dd145d7b59641ba6782e777af0cd89",
"main.dart.js_5.part.js": "4c53215d2286e1c325eff4ec248463d4",
"main.dart.js_86.part.js": "6bdf47dacd68010e138fa9f347332c19",
"main.dart.js_83.part.js": "6e0c5552092cdc16c815af31f0eeb1cd",
"main.dart.js_93.part.js": "27bb95333f2ab71b17da544c38e0871c",
"main.dart.js_58.part.js": "400751c6ac31016b92e01e7010d6ab73",
"main.dart.js_48.part.js": "ee54334739efacddbbd562201ae09b3b",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "3de6e72a19a65eae357b8eacbc06eb2b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "4b68d3751890265353f60636001dbbf9",
"main.dart.js_9.part.js": "66e7f0e11a68060445103b35b1fce4ce",
"main.dart.js_32.part.js": "8ddd06f2cab74423dad4c2a721e3d7ce",
"main.dart.js_22.part.js": "ef6f0f057cb4dcc27af2a21a5ea00b32",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "371c375a4d54c0c765effc90a55a90bc",
"main.dart.js_82.part.js": "1191e8e76c99b17bcae8f87cc76ccfdd",
"main.dart.js_49.part.js": "7ee24ff1f3002221e1bcd7a888962cf2",
"main.dart.js_59.part.js": "a97b569a2ba9ca1cb6ad62309b46bbec",
"main.dart.js_14.part.js": "1b39fb3414e67094d7bcc2f7886d8d2a",
"main.dart.js_76.part.js": "28dbc1f486d1cdbc63cac905b76de573",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "c99d54e35034ac034b2e11dbbf5048e9",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "f00babddf93cf7799e1e484949ac1ae5",
"main.dart.js_89.part.js": "3d99e50f1a87712a935e849b474366c8",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "2f9b21b18d338d75692fb631e5a4f2d3",
"main.dart.js_29.part.js": "3a16da368e58c9191dc936d04821f73c",
"main.dart.js_80.part.js": "9e0ea335f353695a5862e51640ddbb5e",
"main.dart.js_90.part.js": "88a0abfb85bff2eb4a0e97f928fab4f4",
"main.dart.js_3.part.js": "8fe57d31885a98905ef17373ff732077",
"main.dart.js_74.part.js": "40ce07c116cd3450127b6f8903c4a2aa",
"main.dart.js_16.part.js": "92adc1aec0845507bd851074c9af7c03",
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
"main.dart.js_91.part.js": "1f406cf2f28690b47da83339a6afd1cb",
"main.dart.js_81.part.js": "4d9b595595ee16a83a68489c577d647d",
"main.dart.js_28.part.js": "103fee93d2b6e90ccae26fe29282b7eb",
"main.dart.js_2.part.js": "962ed602b80fcdaef57354e74659184d",
"main.dart.js_65.part.js": "7e0a9bdfb569c32117f1e26e4b705b9f",
"main.dart.js_17.part.js": "c7f963b3612dd5d7a1d05373fdf668e3",
"main.dart.js_88.part.js": "6809a37df6881d1a34431eaa7aad7e5f",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "5b402f546f4df160e89eeb396fbf2242",
"main.dart.js_53.part.js": "8be89ebc88ba0bf71992cc79b2087b96",
"main.dart.js_43.part.js": "6b9aa54c57849d595df77cd2c82ddf58"
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
