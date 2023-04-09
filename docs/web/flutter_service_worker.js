'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "7a265f50e8108f2f9f51b3e682ca0819",
"main.dart.js_24.part.js": "23e7b0e874995a863bc7cc8bfdcf0dfe",
"main.dart.js_34.part.js": "5c92235458a55082ba8f4141b5b0ad8c",
"main.dart.js_46.part.js": "f8122e9501b84c2856ee40e651759fb3",
"main.dart.js_56.part.js": "6dd1ec2030929234767f74253fe1af61",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "2c3e0c71ee8444e9afdd62f37e08fc22",
"main.dart.js_60.part.js": "4803e8b81663bb85e38abf144c630e97",
"main.dart.js_12.part.js": "128f55f18391489fbfde337eeafadd3c",
"main.dart.js_84.part.js": "91fd31c5797e769e2341ad7867b3c2b8",
"main.dart.js_71.part.js": "39e71f249bc5a747c0c6c5649ae3da33",
"main.dart.js_61.part.js": "5057c47d04a9c9dff62bfb2f5793428b",
"main.dart.js_6.part.js": "6c51bfda71b81d35df72d50f2f14840b",
"index.html": "63f99271d8022fe993bca2dbebdc5513",
"/": "63f99271d8022fe993bca2dbebdc5513",
"main.dart.js_13.part.js": "fbd2ec24856ca7ae3eb9f4aed3db125a",
"main.dart.js_85.part.js": "607aca652325da0bfbba94cc0401a476",
"main.dart.js_68.part.js": "beae6be6edf83fdf42cdc6eb464291b2",
"main.dart.js_78.part.js": "43e203956ee38db22e61de6a1f965448",
"main.dart.js_25.part.js": "9d3e35a49fe9df071fb287808c1201a3",
"main.dart.js_57.part.js": "efa6179a1f08e8b4015d523923031ed6",
"main.dart.js_47.part.js": "63a59cc87f885a5b9d86a054636ade82",
"main.dart.js_11.part.js": "75137da564c4e0229a705806810fa6f3",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "7849f282670895edda2f9a5795b23864",
"main.dart.js_73.part.js": "f1ab286fafad0def01f1363056bd14ea",
"main.dart.js": "4a467f3c762d66f21caa6a959af20acc",
"main.dart.js_87.part.js": "1d3c554547e56f57256f80a9850e5420",
"main.dart.js_18.part.js": "ee40cb80764bd3315490697488dc6aac",
"main.dart.js_45.part.js": "c020554ac1ffc1dfb0e194c1aad5abee",
"main.dart.js_55.part.js": "35a881711f27e2cc3a0b67b134424249",
"main.dart.js_27.part.js": "bfc27a7740b961b3a1d0887a4361c12c",
"main.dart.js_19.part.js": "07912a256be89f502981807e9596fe76",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "6c44b2f3fe9083d813815a244ad28c03",
"main.dart.js_36.part.js": "db5ad8db01da240f3122c8bed63b962b",
"main.dart.js_26.part.js": "feb71fbc3fe06348c00056de4d79ad3b",
"main.dart.js_10.part.js": "5cbb27bc4c78665d530441874c84ee3d",
"main.dart.js_72.part.js": "5602428b5cd6c26cf155d384e0137ed6",
"main.dart.js_5.part.js": "8c3a82e486c20252f4420787e655024a",
"main.dart.js_86.part.js": "205c97d24099fafc6d7ebc47badbee33",
"main.dart.js_83.part.js": "a5dcb33da24c5ed6c7f3cd2ef300a264",
"main.dart.js_93.part.js": "b1e7445a5fa35b68f315774efd712fb6",
"main.dart.js_58.part.js": "b5bb962142ae5dd81e72e39d57e4cfa6",
"main.dart.js_48.part.js": "ef030a34fcd144208519594de9f9be64",
"main.dart.js_67.part.js": "8da9904971dd1a3f25108aae136290e7",
"main.dart.js_77.part.js": "91abb8755888fa86b0f174846f93de17",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "e954f2ffedb1c1aadea418477d5a5710",
"main.dart.js_9.part.js": "22445b6515758808969d21cb3735b945",
"main.dart.js_32.part.js": "ad9694873cdb2f8ebe546825ded4fa5e",
"main.dart.js_22.part.js": "fd8209d49c63c619689eeb8d469d32d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "7930f058e9caf72caf9ea256166e9b2f",
"main.dart.js_82.part.js": "80f8087268587de8fc29682b041c98b8",
"main.dart.js_49.part.js": "e745eef3af90d32588c358393905da15",
"main.dart.js_59.part.js": "241e2d2be9fa0d1c3510783a3f022935",
"main.dart.js_14.part.js": "881ec8a100a890b28fa3152f099d3f2b",
"main.dart.js_76.part.js": "12104a0a6f9cbc8f4d2cbcaae141d1c5",
"main.dart.js_66.part.js": "7dfabbb5c5a7bf77a13c29af644089d7",
"main.dart.js_1.part.js": "51898851c1801861e2d8c44c690100b0",
"main.dart.js_20.part.js": "7a90bc2602fed49f363896e69585f7a2",
"main.dart.js_30.part.js": "bc4b5ae87327a52ca2daa56322ae0fa8",
"main.dart.js_89.part.js": "6a0656d327533a3dda88e79942fa94bb",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "c5ae98307dc276d95f2e765b7dc35256",
"main.dart.js_29.part.js": "590da5ca40eef78a1b81ee0be9b5e84e",
"main.dart.js_80.part.js": "1750f2ded4cfb8a89daa0e784f81e938",
"main.dart.js_90.part.js": "dd546b7174246719c60a4f82671a5b22",
"main.dart.js_3.part.js": "c9c61dfdf99baf2bd478cc93dce300d9",
"main.dart.js_74.part.js": "ad861e4f9acdf6d4e3422492ee79fe2f",
"main.dart.js_16.part.js": "a227a791b7976d654d2f850f25efff0e",
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
"main.dart.js_91.part.js": "f7229adfe48d41338aaf286bcc022d6f",
"main.dart.js_81.part.js": "5ea906d6ddf63bc6bbf0fed91710996f",
"main.dart.js_28.part.js": "85df15cfeef54c964b0e129aa3363815",
"main.dart.js_2.part.js": "d998c48b75765e0f8d1e05aa44bde7f4",
"main.dart.js_65.part.js": "07b22dbdab7c42839aad3d277915c931",
"main.dart.js_17.part.js": "dc8c4da05ecfc8aff61cc4490fca9a16",
"main.dart.js_88.part.js": "81ef894c28e77cd912ac7505a1b809d1",
"main.dart.js_31.part.js": "7f0c15bc5074080b8f74958aacda4741",
"main.dart.js_21.part.js": "e4a2540b4e36b3c42914bd447c818466",
"main.dart.js_53.part.js": "b0dea1193b741d0ea65f3b2a70736532",
"main.dart.js_43.part.js": "be6e723c425581af04f38fa6013e7217",
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
