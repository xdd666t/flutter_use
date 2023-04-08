'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "854c412217ef5b24a53d0656bb0543cb",
"main.dart.js_24.part.js": "c66c9859df4c9828d62320fe45a7f3f4",
"main.dart.js_34.part.js": "5e553be33a0cb6f925391c2a3a9b6372",
"main.dart.js_46.part.js": "cc695454d25ba69f58cb076570d82a1a",
"main.dart.js_56.part.js": "b19001d4f9348a97b42c3b8bdeea0611",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "5baccfd4377d5c4af228aa22b4505d5e",
"main.dart.js_60.part.js": "75111a27ef2f10de3df2bddd8f666c90",
"main.dart.js_12.part.js": "9895d01b9a2a30b6b2012f86335a80ce",
"main.dart.js_84.part.js": "ce56db3cbf9da0f78173f2ffc4cfc916",
"main.dart.js_71.part.js": "cf27a05167ac189e7454610c3f8c6d0c",
"main.dart.js_61.part.js": "85fc67226dae45a6ca0718f2991df076",
"main.dart.js_6.part.js": "62fa6c8c75e4f121114e241aea05000e",
"index.html": "2c8d687aa2174f8e65aa5ade645deb7a",
"/": "2c8d687aa2174f8e65aa5ade645deb7a",
"main.dart.js_13.part.js": "ca8e50c1be79724c0ce0aa7081491613",
"main.dart.js_85.part.js": "a78146a54284153a7fa984fa334bd987",
"main.dart.js_68.part.js": "7c379e42954f4d896350bf69d1a299e1",
"main.dart.js_78.part.js": "2bffeeda6522567d94254d61142beb77",
"main.dart.js_25.part.js": "90018e9860e303694e5cfe1fc8360909",
"main.dart.js_57.part.js": "acd1ff5a546ccf2b43010cbd03562c4e",
"main.dart.js_47.part.js": "fc424107567b0be7e0310e3fad77f12c",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "f06fea9a105a0ed4d889c2263b3b6f13",
"main.dart.js_73.part.js": "0059723087e9c991d703833cc93a8240",
"main.dart.js": "dbe51071dc8c6492812996b4a0452ebe",
"main.dart.js_87.part.js": "54cd1ddbd7b44a5c41468d09207c0d50",
"main.dart.js_18.part.js": "36d729bad869a87697c5fb18288b9de8",
"main.dart.js_45.part.js": "9cdd22bef8bee2cbcfa7722c7a4d858c",
"main.dart.js_55.part.js": "73510d2164f526c03e81fde4a8350b13",
"main.dart.js_27.part.js": "3e5e61629f631e8828494fa844ff676d",
"main.dart.js_19.part.js": "2b7c77f4195e4b0c46a360eea2e8ca6c",
"main.dart.js_44.part.js": "b2aaacb7b813e6366c2d322d147fab44",
"main.dart.js_36.part.js": "1acb290b71e87b6229ca15eb567e53e9",
"main.dart.js_26.part.js": "8967e34bde1152e3cf570eef4e1f6cb1",
"main.dart.js_10.part.js": "3d1aaba34f9495d1842112847cbbd1b4",
"main.dart.js_72.part.js": "17df0a6405444f96965ce43faa363fc6",
"main.dart.js_5.part.js": "b8077cf73f80bbdd0f91edecef274e9a",
"main.dart.js_86.part.js": "4b9bb7c78221d7f9386dc7b79466c414",
"main.dart.js_83.part.js": "64f20f641e499a2f05321f62812312b3",
"main.dart.js_93.part.js": "60ee3947648a6de27aa7a1240f876c06",
"main.dart.js_58.part.js": "d7fc6ae41a09f6d933036c0b20064c14",
"main.dart.js_48.part.js": "4d77841cba024a70580fae96c5744598",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "1a55873e55631de7588c6dd3f3aeacf7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "994f65155989f1e47104737959e4c954",
"main.dart.js_9.part.js": "5116242dc0740e5d2806267f054b8eaa",
"main.dart.js_32.part.js": "e11a239cbf99178c79f18295909bc043",
"main.dart.js_22.part.js": "b09bd9e9c4547682b80892b7e2dfd696",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "bff2a929c3fe5d61852e59228c05566f",
"main.dart.js_82.part.js": "5f714aba4ace23923171df30a6b73c18",
"main.dart.js_49.part.js": "74bb9f7e2087be17c76344c472496182",
"main.dart.js_59.part.js": "d38b508f72c9c2e8cb32158bae783b16",
"main.dart.js_14.part.js": "3339e22023c238c4bbf6210588d7e798",
"main.dart.js_76.part.js": "1f8f4eab19e60d3c7687af523f82c786",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "845a8b2a28fba76b549dbb729399eac3",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "25e83b20d3814e43e57df6abc1ffb662",
"main.dart.js_89.part.js": "622e13f59ceb6967679b106f484064d3",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "25b93d99820661e86a6e9a7ebe57e039",
"main.dart.js_29.part.js": "3a16da368e58c9191dc936d04821f73c",
"main.dart.js_80.part.js": "60dc9393f7c3a4b2e4f1934737dcaae3",
"main.dart.js_90.part.js": "1549835dfbc50faefd7c713af709f377",
"main.dart.js_3.part.js": "293daee4e1f016dba2bd4d13b034837e",
"main.dart.js_74.part.js": "c00613661f54f405c98ba323f5b2f265",
"main.dart.js_16.part.js": "40ec60bf2f41b42c218bbcd2afafcfcd",
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
"main.dart.js_91.part.js": "ee67e90f2af23ef290309be2caed8577",
"main.dart.js_81.part.js": "72523fb059e19458a1ae7dcba96a4a08",
"main.dart.js_28.part.js": "85f2215c70677dbc57074ce174fa63bf",
"main.dart.js_2.part.js": "e7cf1d12ec60ed38d0fdbd7d4b3557a6",
"main.dart.js_65.part.js": "5b0432e30d85032005ad1d81487e2a50",
"main.dart.js_17.part.js": "db59e66fa529062b6536435caad67ef6",
"main.dart.js_88.part.js": "0765fe4cb4c3df6bdcaa57c858f40c28",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "40a36a9a279d16c2b46cf3c38432b9fe",
"main.dart.js_53.part.js": "19a62013f8fc86de881b38649d8fa964",
"main.dart.js_43.part.js": "e94503db7a2fd522b7ffc7c12431d4d7"
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
