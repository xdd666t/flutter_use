'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "d718bb4fbd8d225443126a2d89624774",
"main.dart.js_24.part.js": "1bd1b9963202b07b29e1c37a7d101590",
"main.dart.js_34.part.js": "0dec4dabe5fa84d6ea5a9b6d41122d77",
"main.dart.js_46.part.js": "092768a5f6add71d35a4b04693781a04",
"main.dart.js_56.part.js": "7cbaed1e978630f09352880406f0a02e",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "b0281370bc0056da2570db1bbeb47936",
"main.dart.js_60.part.js": "e6b07291f110366d0068d5063b3b724e",
"main.dart.js_12.part.js": "97eb54c521085ba0514d72e8c7b05827",
"main.dart.js_84.part.js": "2481bc9ef536af882c00f07c3c83521f",
"main.dart.js_71.part.js": "b4107c5df61a2737aa43938c9d7c0a48",
"main.dart.js_61.part.js": "e3adf451b29f136adeca9e0644c2e3b6",
"main.dart.js_6.part.js": "c5ed6c0fee31e38bd2b1d90655201ec6",
"index.html": "473f9593309b0a2fc9e079f3bc201880",
"/": "473f9593309b0a2fc9e079f3bc201880",
"main.dart.js_13.part.js": "f936d5052c12e041e4590793735dea91",
"main.dart.js_85.part.js": "d76b47fe7009184912a38c7262324ebf",
"main.dart.js_68.part.js": "11908dff2d5b255bc34eac888fda6aa5",
"main.dart.js_78.part.js": "b6d530a0a51979931ba2ac7875ffffc3",
"main.dart.js_25.part.js": "f82e0e7faa5e2559d3c6049a4d0998bb",
"main.dart.js_57.part.js": "004b3dc4312e9ae861ec4a9e49429693",
"main.dart.js_47.part.js": "a7bd5820256996a8bbff652d279dcfac",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "3a9de539e884a27f9ee4c2b67cbaf388",
"main.dart.js_73.part.js": "d8c5b557071c7dd93e07c23f814da180",
"main.dart.js": "2cb5f3b5259d3452fb918b040ad70730",
"main.dart.js_87.part.js": "4b1ba568b1e9b12e804c4d08bb463fa9",
"main.dart.js_18.part.js": "12a307a66bbbac3c6c79bdbff2f64548",
"main.dart.js_45.part.js": "bcdabe533e074789ff7aa2a8323eba31",
"main.dart.js_55.part.js": "35cc29f32d349a65a179f2decb90a128",
"main.dart.js_27.part.js": "1106e99ff5e5848d4c9a914f96425b2e",
"main.dart.js_19.part.js": "07912a256be89f502981807e9596fe76",
"main.dart.js_44.part.js": "c870f18b3d695ce8ba1c2709f6107d45",
"main.dart.js_36.part.js": "f0fe305c37f8177c6fe7656775e3c292",
"main.dart.js_26.part.js": "efdaf9187cb9ddd7eb75de2500ca14e2",
"main.dart.js_10.part.js": "8104a741bb3c9f3dd526e4765e841865",
"main.dart.js_72.part.js": "729194a0698ed526e579fc2eb767d576",
"main.dart.js_5.part.js": "99c03af3ba1afae72cc054bd0e538fa2",
"main.dart.js_86.part.js": "5e3f255dda1ef170db71a401831ef943",
"main.dart.js_83.part.js": "f4a5df568992557d318d8deba938ef4c",
"main.dart.js_93.part.js": "29d6717550e274cb6a73a9affac736a2",
"main.dart.js_58.part.js": "2ccf728a16096a56603768f336b0a9ca",
"main.dart.js_48.part.js": "135d5c397c620c5b85763ceee47f256a",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "26aa8d0825a615043569b852b6c4f825",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "9fc33a357f4f0d8beae211f5ac4c7c7e",
"main.dart.js_9.part.js": "d1346f40ead5a42aedac350245ccd49e",
"main.dart.js_32.part.js": "3e758adc319a6f99995ac231d45dfa5a",
"main.dart.js_22.part.js": "038d59d024c766047db6cf96cabc6a60",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "53d31cdfc37f72ae0fb36cfce6a0d92d",
"main.dart.js_82.part.js": "2830daede1425a29b514b20eed2e948b",
"main.dart.js_49.part.js": "3218bfe2eb6dd65783c89983599a55bc",
"main.dart.js_59.part.js": "e2eec027d09d0d011bd567766c70e55a",
"main.dart.js_14.part.js": "db25a06a0b444d1e3174368c8e78c9a4",
"main.dart.js_76.part.js": "c435fb68f3da95984ed5e96ffc2d2a49",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "60f0e5d710b494d064c2158fa6cded17",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "521d0eac8561b09f4a1170feb6576aea",
"main.dart.js_89.part.js": "efa885acd51543656237932569ae92df",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "bbd27c301af4c103876867172cac4f4b",
"main.dart.js_29.part.js": "590da5ca40eef78a1b81ee0be9b5e84e",
"main.dart.js_80.part.js": "36cab89076ce696790d7767e6c90ea83",
"main.dart.js_90.part.js": "792930e4772a15878dad5ae99ee040a3",
"main.dart.js_3.part.js": "ac7e5c3ba1d7aa9e76bdb5652fe49cc0",
"main.dart.js_74.part.js": "ec66bc918f3b4adbd8ea954742234809",
"main.dart.js_16.part.js": "be1eb9e27ab04568984493a0e7a15d40",
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
"main.dart.js_91.part.js": "23adcfad156d13dc4ec5ea26fe754a97",
"main.dart.js_81.part.js": "e1ad8b75fadc675372edfe5ff04fc0cb",
"main.dart.js_28.part.js": "5311ba13df92ec50be3b026a08919a97",
"main.dart.js_2.part.js": "9826133294a70c5e341de346964133c6",
"main.dart.js_65.part.js": "93149efc3218a35b85bd9709737a3666",
"main.dart.js_17.part.js": "b8cbc4dd0c5a5cdd3a365e0c54745b30",
"main.dart.js_88.part.js": "b1656b8f57b558f93eaa6051273fc304",
"main.dart.js_31.part.js": "7f0c15bc5074080b8f74958aacda4741",
"main.dart.js_21.part.js": "3d832c61e2108ada4801f393b122e408",
"main.dart.js_53.part.js": "e4656f97cd593eeaf2ce966e4d528bca",
"main.dart.js_43.part.js": "d4e4a1ee8f73d4f9f1f92b19fad84164"
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
