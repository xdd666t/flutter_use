'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "e2c38ce41281a5eac2e1f72b7514a0d0",
"main.dart.js_24.part.js": "3545815840320500ad3f3d5f657447d9",
"main.dart.js_34.part.js": "4e62355a8531845ff627c6a8800fea88",
"main.dart.js_46.part.js": "092768a5f6add71d35a4b04693781a04",
"main.dart.js_56.part.js": "56981fe4993546c21219e1df6a484839",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "5d68ab5ea8089a47e8471606cb211c8a",
"main.dart.js_60.part.js": "707aaf83babb2310e9067b1abbac5446",
"main.dart.js_12.part.js": "325c776a6fb6dd78dd8d7d853f495607",
"main.dart.js_84.part.js": "2481bc9ef536af882c00f07c3c83521f",
"main.dart.js_71.part.js": "8110898f1063cda04f3927d06a1ca391",
"main.dart.js_61.part.js": "55ca0659e6c7945133481e0df390be3d",
"main.dart.js_6.part.js": "451cd652385294044b82b0a9eab09b98",
"index.html": "d87f496e790c3e8133491b987a76be1e",
"/": "d87f496e790c3e8133491b987a76be1e",
"main.dart.js_13.part.js": "d174fbde38e3198bc045dabccb19f46f",
"main.dart.js_85.part.js": "b898740d46e8f171d82ad433f07415e9",
"main.dart.js_68.part.js": "67088037723d4d6f3983f51190114b60",
"main.dart.js_78.part.js": "0b2ca57c516ea0897f692166a5416a55",
"main.dart.js_25.part.js": "3051a6d144775d19de11c4898c1a967e",
"main.dart.js_57.part.js": "581e176e2e594409bdf194dda4ed6907",
"main.dart.js_47.part.js": "73f2acacde7cbd34409fe123b761c9d4",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "a3fc74f08fe5562a19218d44ba755c20",
"main.dart.js_73.part.js": "273aadf5787014649d774bb671cefbd7",
"main.dart.js": "bf0d9148fb7177260222c4cd8e1fd3a6",
"main.dart.js_87.part.js": "812d1ef49bf0588759520b2b009caeff",
"main.dart.js_18.part.js": "c2efc8fb8e2570480659b00370235ba0",
"main.dart.js_45.part.js": "b6c82f6ac5430c13f578f0f7a03f4183",
"main.dart.js_55.part.js": "8ec9af6d73c1a56c5725394629e64938",
"main.dart.js_27.part.js": "6ad8121cf0cc804f18274c3dbd2c9c01",
"main.dart.js_19.part.js": "45bc55ec4779cd1ec38e56f6d9a96f91",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "dc02f4be90ccb951bfa469a6daeb4351",
"main.dart.js_36.part.js": "59288c9267ec201aa24173df1a0db4ad",
"main.dart.js_26.part.js": "f1b607740b99c9b051edc14233509e67",
"main.dart.js_10.part.js": "0d1e1d7fb29727cba1fb64725323790e",
"main.dart.js_72.part.js": "fb204be93a5b1ab4b799a0cb017b2bf1",
"main.dart.js_5.part.js": "79c1b77f6e1bc29bd01d7cd9730af27d",
"main.dart.js_86.part.js": "5006962f4073bf3ca21b18764dc0b673",
"main.dart.js_83.part.js": "528a4b068cd67a472e82a0e2d0724437",
"main.dart.js_93.part.js": "70cea22665068a74d2ee80741e9bb40c",
"main.dart.js_58.part.js": "c418834e1ce4eac5a3367612a53f560d",
"main.dart.js_48.part.js": "56b2ff7887bef6ab10ad8db09d55191d",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "0f443c06f2558f1ce2ea6ad88926effa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "96855ea44c0a75f0e0fffff75c081981",
"main.dart.js_9.part.js": "1caf34c113eb24af4bdc839f9a9e9ead",
"main.dart.js_32.part.js": "269679bb18d87705b1dddada8a42f696",
"main.dart.js_22.part.js": "368058338e83d52a03f5d2b2d4ac9b57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "b83e6f0cda17c8d3d98345ef29854613",
"main.dart.js_82.part.js": "5463895d1982ca1ef75893ac4b9a4110",
"main.dart.js_49.part.js": "ec4ac708534ae840684702075c6bfe85",
"main.dart.js_59.part.js": "e3b707eca0d5702379e8a6494644115c",
"main.dart.js_14.part.js": "dd874e62a64933de2801fbcb6be78cc7",
"main.dart.js_76.part.js": "2665c335b114928f783dc582bbdc41a7",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "20c952c8918bc0bc8af0c6d5bbfbce62",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "473d64a11fdfb6ecb14212db72c5dae1",
"main.dart.js_89.part.js": "b6456080ee081db525e7412f565baeae",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "7f403c708e58c306485fa77b51cc6685",
"main.dart.js_29.part.js": "9fc6de516c72b7892ae624768dd3f1b0",
"main.dart.js_80.part.js": "dfdce76f1a3f4a4b077bb813abfe16b0",
"main.dart.js_90.part.js": "fdba59022afa07f4e1e7bb02ce886c98",
"main.dart.js_3.part.js": "6ed8720f1771226c33ed323599f3fd0e",
"main.dart.js_74.part.js": "df8d8c8b935beb5b9ee52d689a92ee95",
"main.dart.js_16.part.js": "670fd8bbbb1e85a5160e8f4d2c97168c",
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
"main.dart.js_91.part.js": "0b405acb40edf05a18fb759428011265",
"main.dart.js_81.part.js": "aecf6d4049478ecd322de2700059516f",
"main.dart.js_28.part.js": "811b464494597f9067302635cbc593e6",
"main.dart.js_2.part.js": "bf505e09a1779d1011658e01b8bc6cb7",
"main.dart.js_65.part.js": "218a9cc4f426a5e3a8fa3652fc221285",
"main.dart.js_17.part.js": "7eac4c555b513e2d85926b1111a8b71c",
"main.dart.js_88.part.js": "076b0b9b1f42c5aa7afd33c649c14a4b",
"main.dart.js_31.part.js": "071cd95d3b712dd842d40cd4961cb1a3",
"main.dart.js_21.part.js": "1b49804ab03651ca6637437428d18c3c",
"main.dart.js_53.part.js": "ca205a53f41291eb7afaaa4586586641",
"main.dart.js_43.part.js": "65b584a04d622f19869514bfd303f39c",
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
