'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "47644689b18c4bc1965367406cce3fd5",
"main.dart.js_69.part.js": "ad9a5744c7bbbede4da6ea878f6c8f23",
"main.dart.js_24.part.js": "d565e49d36b35e9348b8b3e675ca3509",
"main.dart.js_34.part.js": "246052229bb67c49cfa8e17dee8412fe",
"main.dart.js_46.part.js": "9228cfabacff324e6b7152a44e98b483",
"main.dart.js_56.part.js": "5e39b9fea5a3c8335219f9fe8924b311",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "457817f7c19a4e7193c9c6db21a0f2b9",
"main.dart.js_60.part.js": "a641e074fd5216f3571cf617557b0d0c",
"main.dart.js_70.part.js": "750e5f2aa5d1d814eb268ec05bb7f7b4",
"main.dart.js_12.part.js": "f9542a65f8f763871f30c16da0960e6a",
"main.dart.js_84.part.js": "00a704eec7ba671bf25525156b232155",
"main.dart.js_71.part.js": "0de557c80b6fe98b78ce6ae112d5f13b",
"main.dart.js_61.part.js": "e174e2530a51aa7b94dd7ba90bf438ef",
"main.dart.js_6.part.js": "76e3ec91aab977283e65281da361b975",
"index.html": "aa0751cfe21d00b96900ed0cb255cbec",
"/": "aa0751cfe21d00b96900ed0cb255cbec",
"main.dart.js_13.part.js": "63d24433cc6f8408a5d633857919b41a",
"main.dart.js_85.part.js": "f306a95314c1d705e3257ec231872a62",
"main.dart.js_68.part.js": "2eaf7cb78d57b87432e09daf9263a30b",
"main.dart.js_78.part.js": "0dfe5fca5bd9503b7a6de5fe8423bee2",
"main.dart.js_25.part.js": "bb626348508a5047db05952d9b1a8367",
"main.dart.js_57.part.js": "985877e68f27d73336749c1a78eba311",
"main.dart.js_47.part.js": "3b39d5fc1c2c1df7dfdd6fe52af729d0",
"main.dart.js_11.part.js": "3d8a3cfb479f0bd3b95430370864bed1",
"main.dart.js_63.part.js": "8a11cb28428f0ac672cebe3b00cbd8ef",
"main.dart.js_4.part.js": "b797fe517d439d6a808db9acaa40dc69",
"main.dart.js_73.part.js": "6417a499c506444be8c48eec24f501e4",
"main.dart.js": "fcc1682955f1fc728ddcf7d6b2f9dc4d",
"main.dart.js_87.part.js": "8aefff97eac43a8d6dc0f71e9454e501",
"main.dart.js_18.part.js": "a0e4444c586158f407b5178cb854baa7",
"main.dart.js_45.part.js": "11ef7dbd18a91fd4ad36eb33d938836f",
"main.dart.js_55.part.js": "c706ce9b98635c823a471e5e4e8e66db",
"main.dart.js_27.part.js": "0a75ca5887154caff893962e266bc6ce",
"main.dart.js_19.part.js": "f5ff19f269f970e8cd74e5b7aec6f6a7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_54.part.js": "6d79722adca349fe6dddbf7ec3d3e510",
"main.dart.js_44.part.js": "3e1022b168618806782bbd40c6bce333",
"main.dart.js_36.part.js": "22732b9bec2f779839d4b9997254c99f",
"main.dart.js_26.part.js": "bb0b6058a77813181cff28dbe1b588f7",
"main.dart.js_10.part.js": "61fb2d795ae009812df25420e11bef18",
"main.dart.js_72.part.js": "bd9c84f9a44cc9ade6ca7f6df9199981",
"main.dart.js_5.part.js": "b418e606eb356f57ae8b5f4574ffb436",
"main.dart.js_62.part.js": "4013b78bb7aad349d3b2db146cb5d28e",
"main.dart.js_86.part.js": "4d8a0bac33dd3b1ec10cadbe87438cfd",
"main.dart.js_83.part.js": "57c7827223f76b04732377f8b89f089f",
"main.dart.js_93.part.js": "7fcc18e4dad08d2c8801451c871e4472",
"main.dart.js_58.part.js": "d3d77c4b9f44bcfab4695ffc661dd4dc",
"main.dart.js_48.part.js": "032d4e32761c3c0f8f4d7759f172107c",
"main.dart.js_67.part.js": "32263fa51861db230f9af099f28b83c7",
"main.dart.js_77.part.js": "a7f89cc65ed74f1409960e6efa3785ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "c6b48cebe8fdef6755342556d86a408a",
"main.dart.js_33.part.js": "c1830f88d9386ba7ea06098148354290",
"main.dart.js_9.part.js": "7c66e195c03f7ac5a880fd070c5f3c6d",
"main.dart.js_50.part.js": "fb89a71538070ec289da8485b795da83",
"main.dart.js_32.part.js": "e75cd621cc45b3715c84e139cb07465b",
"main.dart.js_22.part.js": "3db2ffb15417010ad5219261b4391ee0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "b3f5533fc8fd7f3278af10bde0feaae1",
"main.dart.js_82.part.js": "5d81410f804dc04f0f9bc5397de5b7d2",
"main.dart.js_49.part.js": "18c8c799199f2292c708f4d6954f6da9",
"main.dart.js_59.part.js": "f3cc1e65e1a6a85ba7dd340800b8a714",
"main.dart.js_14.part.js": "01b057f712b8749b2bf2254fc7f6f767",
"main.dart.js_76.part.js": "df9279865188fc83b09c2cce8f4920c7",
"main.dart.js_66.part.js": "bf614fe88f8feaa142b4cf28c86183fd",
"main.dart.js_1.part.js": "e7f2d9d40dcc111d30482d3b39c00fae",
"main.dart.js_20.part.js": "89540c2eefd22aeca7644c403c0b306d",
"main.dart.js_30.part.js": "db283bef805b0efc364ac4fcd07a8778",
"main.dart.js_89.part.js": "690207ea44396e009ca2b044aa1e846e",
"main.dart.js_42.part.js": "b26d927019eaefc0f46beaf2ff8f47c8",
"main.dart.js_52.part.js": "3f80900a65971c278f683d4a8fe36b6d",
"main.dart.js_29.part.js": "89cddb7404236c60e9af0f4d4d162375",
"main.dart.js_80.part.js": "eab25c4e1db2ce7cb60e23b349d860ad",
"main.dart.js_90.part.js": "94195841e5e46a8c4307ca29f32df6a3",
"main.dart.js_64.part.js": "2e543c39014fcc632b607b991aff9823",
"main.dart.js_3.part.js": "17b301309bbc5c5f99b9879ab79134e4",
"main.dart.js_74.part.js": "73ccaf57b963df22a978b789332da531",
"main.dart.js_16.part.js": "a5f756584eb5b6cd00ffec19f9f7301e",
"assets/NOTICES.Z": "d2a3ef1ac43a7f16a311ed77769a6e92",
"assets/AssetManifest.json": "fb3497bac92b8657a04fa26e798c1c4c",
"assets/NOTICES": "dc37e480e599eb57293e09bb5587f022",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "7f2fb21c467e6cfa00b4c27f4c784476",
"assets/lib/widgets/show/custome_dialog_location.dart": "132ef4f0a41f3987a98c7c071c7b1bfb",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "2c32b7474c093b575c80e365b606fad0",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "b30a018ae47817cb1ee783a8168fbf82",
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
"assets/lib/widgets/show_loading/loading_custom.dart": "bc5f6e64e88f74748e27add1ccaf45bc",
"assets/lib/widgets/show_loading/loading_least_time.dart": "ef8e153b2a96555f1d2adf22e0280fc8",
"assets/lib/widgets/show_loading/loading_default.dart": "fb616216e5c7e80aa24404495df6181c",
"assets/lib/widgets/show_loading/loading_param.dart": "3bf6296b7785cad9e57bce025b03e6bd",
"assets/lib/widgets/show_notify/notify_dialog_error.dart": "efd4072e0257b2a25d4af5ba55fd8a58",
"assets/lib/widgets/show_notify/notify_dialog_alter.dart": "d7e65b65403cb080abd7bf1915953051",
"assets/lib/widgets/show_notify/notify_dialog_failure.dart": "f8899c2651312c961c279aac9b82e1a1",
"assets/lib/widgets/show_notify/notify_dialog_success.dart": "29b12a83c5345828c6430fd942501402",
"assets/lib/widgets/show_notify/notify_dialog_waring.dart": "4d5db91f739d15641a03656d82ee0c6c",
"assets/lib/widgets/show_toast/toast_interval_time.dart": "1c4bed3c60f66de50cdee596164c951d",
"assets/lib/widgets/show_toast/toast_default.dart": "c472de6fbe6a91a7d326dd42522764fa",
"assets/lib/widgets/show_toast/toast_smart.dart": "3c22fb5c37759e99076a08ddfc609f88",
"assets/lib/widgets/show_toast/toast_type.dart": "401203c720ac4779f8dd69d848e8c252",
"assets/lib/widgets/show_toast/toast_custom.dart": "4855206a8235dbaf77a4f47c42ac025d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_91.part.js": "6793966f3895e1b22e80b33e2ff9e656",
"main.dart.js_81.part.js": "9acd2396f27b03be015acae0d5c27767",
"main.dart.js_28.part.js": "179bc1f9e7f88930da95e11f9820fb1e",
"main.dart.js_75.part.js": "befc85aca1e0cb970b33a4359fb47bd9",
"main.dart.js_2.part.js": "2854493d2d4b3e04a1aa4aff98e8a7f7",
"main.dart.js_65.part.js": "5bae636fcde8d38cad2cda34d8126094",
"main.dart.js_17.part.js": "63589c1190aee8af94db3fde22416892",
"main.dart.js_88.part.js": "f7a679dab8de1f6afbec54bf0c996f7c",
"main.dart.js_31.part.js": "d942797aa8a95b911428bfa971931f2d",
"main.dart.js_21.part.js": "3119acc88dccc4be2f86eab28641f6b2",
"main.dart.js_53.part.js": "8ae2481b5c8807040acc8f6473f5c6de",
"main.dart.js_43.part.js": "8750f8084973c608c8a7cca91c416df0",
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
