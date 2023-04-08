'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "db8926f9d922111f5e3c37299a24e594",
"main.dart.js_24.part.js": "e4e6a3c93e362ea8396f2875b80119da",
"main.dart.js_34.part.js": "12893692414153cff5f6c6d8cddf4465",
"main.dart.js_46.part.js": "094de40ce8948a1360cc91854eef2e7e",
"main.dart.js_56.part.js": "089e9c1706ad314d7285bcb06230c896",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "8ada81d16e0aedc11950a73bd02d6432",
"main.dart.js_60.part.js": "7cdef25216342c48d4b739c235ab4c89",
"main.dart.js_12.part.js": "2538324e74202aaaecb3f6e65681727a",
"main.dart.js_84.part.js": "ad2cbed12ebe1c50a90ca34e4cd3618b",
"main.dart.js_71.part.js": "78e9d29ebc3849b2cfa2e2008aaba67f",
"main.dart.js_61.part.js": "f2b51751ceec73067493be1467616c06",
"main.dart.js_6.part.js": "0f460b97e57a76ed6da75a099b7ce574",
"index.html": "d6e4b1e42b0ca5e0ceb55eb74d748126",
"/": "d6e4b1e42b0ca5e0ceb55eb74d748126",
"main.dart.js_13.part.js": "3256211a06faf107a02be3282a2fc519",
"main.dart.js_85.part.js": "7c107e92a82e72e4b38a9a0d0fbe9da8",
"main.dart.js_68.part.js": "6adebd81e51269f134a10906c13f4cdf",
"main.dart.js_78.part.js": "c8241ac9bbb72b0abffc5477711bcb91",
"main.dart.js_25.part.js": "75242ec05d1811ba641fc575ee08b37d",
"main.dart.js_57.part.js": "b7418d78575f8a693dbae2e3be27a9d6",
"main.dart.js_47.part.js": "c622de8d5650d6b60cd4ff3b615f4ebe",
"main.dart.js_11.part.js": "42228e753fa4dda9c668142e38456801",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "5d625c4096b776d71affc8e313de9653",
"main.dart.js_73.part.js": "83c7f6f59f90bc3811d46ef3d3ac325e",
"main.dart.js": "930aed0c6e9dc79a6be7b19910ab5fdd",
"main.dart.js_87.part.js": "d29471a214151f9411e9b8241c3b0f1b",
"main.dart.js_18.part.js": "26ff7ed5c2ef0bdd1f34a4894ac50662",
"main.dart.js_45.part.js": "0b9d890c838526d7c61ddea636f2d87e",
"main.dart.js_55.part.js": "beab723e4ca40e46437294f751cf8160",
"main.dart.js_27.part.js": "3917464190f90918960e9f24ffea49b2",
"main.dart.js_19.part.js": "de4bfbc9bac1aa12185d62864dfee9f9",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "2e6072ac986304581520e0c6a7045d6b",
"main.dart.js_36.part.js": "ee5e5efef2e81077d0a2097d13e368be",
"main.dart.js_26.part.js": "eeb99541d5220bb6917a761b7a452bde",
"main.dart.js_10.part.js": "71e87be3c35b9d2c46c5d856a047edb2",
"main.dart.js_72.part.js": "f01ab08ef868bae863e9845146c2f63c",
"main.dart.js_5.part.js": "a2b37b63881c8379dfa7ac368e54e32a",
"main.dart.js_86.part.js": "1dee3ea7c7c8fbbe3a5105f4b09f5150",
"main.dart.js_83.part.js": "fde6d47a7d0c7349e5991c764f094233",
"main.dart.js_93.part.js": "f72d0f7982180b356efc302fbdf4b75b",
"main.dart.js_58.part.js": "b287fe0808135fe69e5d2f1eb48e52db",
"main.dart.js_48.part.js": "4265785cc6ef70db42237fa0116c508f",
"main.dart.js_67.part.js": "21f61c7ae451fd9c108acc2931de491c",
"main.dart.js_77.part.js": "da7b7488d93be2a1a796d74c607c23ab",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "ea15b2b81f7a34fdbcfb3966f8257a12",
"main.dart.js_9.part.js": "6789e65728ec4a31175dfe04d5091f27",
"main.dart.js_32.part.js": "8ddd06f2cab74423dad4c2a721e3d7ce",
"main.dart.js_22.part.js": "2d88a0bb4e34572e5119638046c953a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "1b5c17e817d0a7f0bf69ff1f39bbac91",
"main.dart.js_82.part.js": "8e0ea94397603c56a7ffa071171ad4ad",
"main.dart.js_49.part.js": "1d5efa3e7e21d58b5c490cae0af0f103",
"main.dart.js_59.part.js": "8abdda342ebc461f7a11941964ddf73a",
"main.dart.js_14.part.js": "c6055eb504cdd39ba0262d109cdc73e1",
"main.dart.js_76.part.js": "4c4f55f91ea46027ea1ba3306a43c447",
"main.dart.js_66.part.js": "789c3113fc4a33bdbc4ef98f0acaf664",
"main.dart.js_1.part.js": "8e900bcd3fbe5ba6c1d2dbf71fbcc159",
"main.dart.js_20.part.js": "ae012e7304e1f4137aaf66007c38704a",
"main.dart.js_30.part.js": "162c863a96dc7a6c6941c57121350354",
"main.dart.js_89.part.js": "bd818c95206c92a377217251c50129ad",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "d3584e61ea78b1ee22f905e11b3f5c19",
"main.dart.js_29.part.js": "736e5cef78bbbcddaa321e4c8a58ed3b",
"main.dart.js_80.part.js": "c52b3f55c1265a87477ee3883c52e88a",
"main.dart.js_90.part.js": "4c7eb350d751e53ee316a0b152f52e8c",
"main.dart.js_3.part.js": "6943232c2b6cb7ef739f8e883dd96c0d",
"main.dart.js_74.part.js": "9c9fd2008f443be50772fdf1b64b1717",
"main.dart.js_16.part.js": "aac2507d04edd7866b2571214397cefc",
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
"main.dart.js_91.part.js": "cd06c6d4c718a3c174154843878d92cf",
"main.dart.js_81.part.js": "5d7089e8966d4b456fee904ba57a7f5f",
"main.dart.js_28.part.js": "7dd4b4754a9cb4b642676737ef1dfdaf",
"main.dart.js_2.part.js": "ce0381950b606f59fe0b2605f654bc94",
"main.dart.js_65.part.js": "912f129f77fe9cbd5a5990626de794be",
"main.dart.js_17.part.js": "049c98711de9a88a0c6517d155e87f80",
"main.dart.js_88.part.js": "3d6b6630c0ca56e3ebb37c489d814e5f",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "d3767dc68935d304ad87a7530dced42a",
"main.dart.js_53.part.js": "957581609b497ace53b9314ceb7bef22",
"main.dart.js_43.part.js": "e9913754f458c59eaea267034259f97c",
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
