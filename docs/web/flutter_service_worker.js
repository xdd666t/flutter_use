'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "83b33934b11b28d6f5050c15368be804",
"main.dart.js_24.part.js": "6853fc14d1587f314f4871da5bbc6299",
"main.dart.js_34.part.js": "1be154e75239808f2a79439ed6c6f2a4",
"main.dart.js_46.part.js": "9582d9695accdbaf1e2091a2d2e029d0",
"main.dart.js_56.part.js": "0379cf1fcba683f3bd654b582eeda0a7",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "2c4e228cf50b6962717639489fda21ab",
"main.dart.js_60.part.js": "5e473a25a91558f410cc8a70e567243f",
"main.dart.js_12.part.js": "e3b7342190bd7528c4b16116ac9e41bd",
"main.dart.js_84.part.js": "ad2cbed12ebe1c50a90ca34e4cd3618b",
"main.dart.js_71.part.js": "97b49a5d8ccb946b4cf046a776dd312a",
"main.dart.js_61.part.js": "f2b51751ceec73067493be1467616c06",
"main.dart.js_6.part.js": "d251be98c3365df89b9b48b4a518ded4",
"index.html": "06c0fc27fc2071f20157aa36c956e31f",
"/": "06c0fc27fc2071f20157aa36c956e31f",
"main.dart.js_13.part.js": "623854483a5baf37dedf3afc8e4f1a2b",
"main.dart.js_85.part.js": "e720b63aa5ed15874c2d0c7cc807cf95",
"main.dart.js_68.part.js": "9856fba291e12a236b9c3acbef8361d0",
"main.dart.js_78.part.js": "a3dbdeadbdf165d558b7c2dc7a66ab0f",
"main.dart.js_25.part.js": "6acbc7ec2831795672cc695ac15ccd11",
"main.dart.js_57.part.js": "be7944a9f44a1900dc22358b35e1a0d0",
"main.dart.js_47.part.js": "fc424107567b0be7e0310e3fad77f12c",
"main.dart.js_11.part.js": "42228e753fa4dda9c668142e38456801",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "1ea94a702894bae06e1cba9dcb6c6888",
"main.dart.js_73.part.js": "0a32139bb9135f502c46e6cd89d1b291",
"main.dart.js": "47401ff1578b692c356e4304703214cd",
"main.dart.js_87.part.js": "1696c26e393963f128243e871792dd88",
"main.dart.js_18.part.js": "efc9ba16e6b1a5e6d0890e3fc4e6dc65",
"main.dart.js_45.part.js": "9576250223a3651d4eb572655bfc3f47",
"main.dart.js_55.part.js": "7877711a0c93fd0a9a56999dbed78e5d",
"main.dart.js_27.part.js": "8f224fc97a391961ed1f51de41dc384c",
"main.dart.js_19.part.js": "4f6c0cbeb5a4963e6d33f2a45293ef1d",
"main.dart.js_44.part.js": "ce5cc073d8d406521c0f33dbb19069eb",
"main.dart.js_36.part.js": "c8a721a7462a76136f592360732babb9",
"main.dart.js_26.part.js": "8008a38c65b8f9fb01da36611c76dc76",
"main.dart.js_10.part.js": "4ecfa04f0161528733de5aa038ee8a56",
"main.dart.js_72.part.js": "7c7d980cb44bd92895018d969e2e8b02",
"main.dart.js_5.part.js": "c32e3c45646a26fa5cd92b562860f48f",
"main.dart.js_86.part.js": "06ec90cb05284b065ba1315c55d30a45",
"main.dart.js_83.part.js": "cab71250b203b900ee37a817c0f78152",
"main.dart.js_93.part.js": "c450d00978262837f0e16db638fe85ef",
"main.dart.js_58.part.js": "a849ac8df5323b48caaf295aa5a63e88",
"main.dart.js_48.part.js": "1a95e546e3bd8da45552ec9ab2317d0c",
"main.dart.js_67.part.js": "21f61c7ae451fd9c108acc2931de491c",
"main.dart.js_77.part.js": "2324eefc2375e13d84df50a6048dcce8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "2b2dddefff0f02a37b14ba51d975ea60",
"main.dart.js_9.part.js": "1255ca912cb15a89e5aa57f122190618",
"main.dart.js_32.part.js": "e11a239cbf99178c79f18295909bc043",
"main.dart.js_22.part.js": "8255e38d89502b326d65a411089f526a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "91b31ec8b1e4435599c79331ca91ecc1",
"main.dart.js_82.part.js": "4c0c129bc545afa8b0944e0aac77618d",
"main.dart.js_49.part.js": "1f3fd69eaeeef5df0d5b2e3c2a365e57",
"main.dart.js_59.part.js": "80cdc3a9b404b54bda83b2943b30012b",
"main.dart.js_14.part.js": "eb897cc19540ceff7bde58eb8c4366c3",
"main.dart.js_76.part.js": "e9b39388f2f4a3839b785f230556ffa4",
"main.dart.js_66.part.js": "789c3113fc4a33bdbc4ef98f0acaf664",
"main.dart.js_1.part.js": "5014b823f8875c4aa05b59c366aa8e4a",
"main.dart.js_20.part.js": "ae012e7304e1f4137aaf66007c38704a",
"main.dart.js_30.part.js": "1390879a4eff6d2cdcd0c05bc10e453d",
"main.dart.js_89.part.js": "38ec29db8cd079588c41366a78d5460a",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "dc26e0a8203737db5c4a3d1712fb2807",
"main.dart.js_29.part.js": "736e5cef78bbbcddaa321e4c8a58ed3b",
"main.dart.js_80.part.js": "9f426d09bd635ff853d80718613ee819",
"main.dart.js_90.part.js": "d750dd4522f4873c97bcebfae9f1396c",
"main.dart.js_3.part.js": "5af53dc9db9169f618a0a9f2a3e99cc0",
"main.dart.js_74.part.js": "61e4b605ea82fc661b2cbd966c13f55d",
"main.dart.js_16.part.js": "1fefb76796766ced8527bf4c805a6052",
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
"main.dart.js_91.part.js": "af3e5d01535c85085db3ff47f0212c4d",
"main.dart.js_81.part.js": "77a6e12179fc45eb2a24cab4b2dce494",
"main.dart.js_28.part.js": "33bd6279ca2022a1192836cafde486b2",
"main.dart.js_2.part.js": "88bf3640ba664067cc87db402940966a",
"main.dart.js_65.part.js": "4dd9a1975c0313bc7217fe6840a8681d",
"main.dart.js_17.part.js": "cf3b0c22f6c510e97f7320e4443858bb",
"main.dart.js_88.part.js": "d7ea7d550bee37aef32d3df5f1ee6dbb",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "48309de01e4978ad0d87eb9af4c08a62",
"main.dart.js_53.part.js": "7912d92c0be71c3fc9f07860bf1e05f0",
"main.dart.js_43.part.js": "c55a9f9bda9ffa70f16e434e54c0d069"
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
