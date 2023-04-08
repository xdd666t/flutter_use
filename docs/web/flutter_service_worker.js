'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "1d9680ea8c80d5aa832c3c8d4652a504",
"main.dart.js_24.part.js": "886a928e759e8d96cfc41aaae46b18a8",
"main.dart.js_34.part.js": "40dd0b56fcf8c17d42c1dbda80939d7f",
"main.dart.js_46.part.js": "9582d9695accdbaf1e2091a2d2e029d0",
"main.dart.js_56.part.js": "85b981a029e84d5ade70d823fe07e8ec",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "fa61919d746871b2bb952b06b960893f",
"main.dart.js_60.part.js": "fc2e74a4cb415c6c5cbfca6f561e0b23",
"main.dart.js_12.part.js": "92a56a0e43064380a05c22c7b7ceb8a7",
"main.dart.js_84.part.js": "ad2cbed12ebe1c50a90ca34e4cd3618b",
"main.dart.js_71.part.js": "bfd4162517b324dc40b0a72efe7c74bb",
"main.dart.js_61.part.js": "f2b51751ceec73067493be1467616c06",
"main.dart.js_6.part.js": "4214b40596d91c83a66bb2a9327e8782",
"index.html": "dc5e8bbc4b7fc3b83ed72ce0c84287aa",
"/": "dc5e8bbc4b7fc3b83ed72ce0c84287aa",
"main.dart.js_13.part.js": "97643b6d94b1ad79a0c1849d8865c091",
"main.dart.js_85.part.js": "6f12a04e3962da5ffe9f7ac824fe58b3",
"main.dart.js_68.part.js": "b58b54e2264480a05a46d8258540a40f",
"main.dart.js_78.part.js": "7e7e48dd29e787134eaaf62e1e9461d9",
"main.dart.js_25.part.js": "fafc1b481ba23c4f08a5d057e202bc27",
"main.dart.js_57.part.js": "1bcd27acbecbad46783e53493c27b307",
"main.dart.js_47.part.js": "fc424107567b0be7e0310e3fad77f12c",
"main.dart.js_11.part.js": "42228e753fa4dda9c668142e38456801",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "be5a40724cfd4e2b9229bb7bddd2995a",
"main.dart.js_73.part.js": "c086acddb086de19e508951198e6cfce",
"main.dart.js": "74ae6bbac6cbf0f93d6153953c4aa701",
"main.dart.js_87.part.js": "d29471a214151f9411e9b8241c3b0f1b",
"main.dart.js_18.part.js": "489f3c90559c5135c4ebc5440f1e7816",
"main.dart.js_45.part.js": "6cf3330aa2273979591446303e6976f4",
"main.dart.js_55.part.js": "2354f5681a87f499fde7f9e130b3661a",
"main.dart.js_27.part.js": "d1d88329547064f9141a0b0c96995b43",
"main.dart.js_19.part.js": "4f6c0cbeb5a4963e6d33f2a45293ef1d",
"main.dart.js_44.part.js": "d915e10564c92963e9a0dcb73d676638",
"main.dart.js_36.part.js": "75128749f5c4bf5d9f1eb0fcb1ba2562",
"main.dart.js_26.part.js": "eeb99541d5220bb6917a761b7a452bde",
"main.dart.js_10.part.js": "71e87be3c35b9d2c46c5d856a047edb2",
"main.dart.js_72.part.js": "f6ff49bc378d8630ba198392edc8926f",
"main.dart.js_5.part.js": "dc481b763ca00b5342836930d0b84a31",
"main.dart.js_86.part.js": "1dee3ea7c7c8fbbe3a5105f4b09f5150",
"main.dart.js_83.part.js": "956259022e604cf07fd40fbaf2751cac",
"main.dart.js_93.part.js": "345358b6a2f055d56915db97fc631584",
"main.dart.js_58.part.js": "8eee10b6bea2322f3f0b0a651ab8bc27",
"main.dart.js_48.part.js": "545bf470ce9f94a32de4cd172d6ab2f7",
"main.dart.js_67.part.js": "21f61c7ae451fd9c108acc2931de491c",
"main.dart.js_77.part.js": "beea8611c2be4b0fa4ddc58170aaa9f4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "99e00082cd6dfb2c8fc917f5b39372b5",
"main.dart.js_9.part.js": "86a5e7a0bbaa22a123354196d078663a",
"main.dart.js_32.part.js": "8ddd06f2cab74423dad4c2a721e3d7ce",
"main.dart.js_22.part.js": "ae50acffca28355c126f6ff525680b2c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "89c5602380eed7070d35fd0f77d29be9",
"main.dart.js_82.part.js": "8e0ea94397603c56a7ffa071171ad4ad",
"main.dart.js_49.part.js": "b58ef1d07861d94b03f5bb23646200cd",
"main.dart.js_59.part.js": "d745bacc688e761a698cbb4b0e73f527",
"main.dart.js_14.part.js": "14315b371d3ac8d20a4ff6d23323352a",
"main.dart.js_76.part.js": "7f43790b6ad38d954c2b7a6818f74cab",
"main.dart.js_66.part.js": "789c3113fc4a33bdbc4ef98f0acaf664",
"main.dart.js_1.part.js": "69623eb26f69f6ba199aa1aab1569d3e",
"main.dart.js_20.part.js": "ae012e7304e1f4137aaf66007c38704a",
"main.dart.js_30.part.js": "5b59965a56b963a17ea81a2b98bd88e6",
"main.dart.js_89.part.js": "6bb599607158e3690a75d5a583a94f20",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "e38d08cc68053b50e2d145693920a700",
"main.dart.js_29.part.js": "736e5cef78bbbcddaa321e4c8a58ed3b",
"main.dart.js_80.part.js": "22d0e14cd832496f61a2ee01419b71a0",
"main.dart.js_90.part.js": "990fe10198cbc454316bd39b59f6fd45",
"main.dart.js_3.part.js": "3022106cf36c0f17834b0758ed191a58",
"main.dart.js_74.part.js": "1c064faea85164a4fe3fdd5e29c22ef3",
"main.dart.js_16.part.js": "da3211bc1d2a4ee1381e736d2c0b0d4f",
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
"main.dart.js_91.part.js": "5da8dd7106362d817f5757813d6fcd40",
"main.dart.js_81.part.js": "9d87a5f64f1da189602cef3bde57024b",
"main.dart.js_28.part.js": "678cc924447556c3a0cf54a2da437dc9",
"main.dart.js_2.part.js": "e48d8a1388132ac04c46e64c8ec64c27",
"main.dart.js_65.part.js": "f0a9ad8607fa2e444c0bc70466ce441b",
"main.dart.js_17.part.js": "cf3b0c22f6c510e97f7320e4443858bb",
"main.dart.js_88.part.js": "3b40a1ce3ce2b1d8bd9aa62060cea19c",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "3030b490862378ec1939b194c3d8df0c",
"main.dart.js_53.part.js": "61bc3927af0c15f939dd78dd221cee9f",
"main.dart.js_43.part.js": "e7e7ec898260f826e36e33b5ead83513"
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
