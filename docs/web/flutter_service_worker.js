'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "1d4cf6a3b21846e0fdcf010a6305b312",
"main.dart.js_69.part.js": "ad9a5744c7bbbede4da6ea878f6c8f23",
"main.dart.js_24.part.js": "a97817bf6f9ebac0fa94c5c27bf2d13a",
"main.dart.js_34.part.js": "9790922ea9427e6bbdc8b0457db49990",
"main.dart.js_46.part.js": "3649fe7f22a37a3b641acfa93c8cf8de",
"main.dart.js_56.part.js": "1d86d74e561af2a0fc426b9f4d6fe429",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "9f7da5496a0805a1d24b192fc2d26701",
"main.dart.js_60.part.js": "a2c38c36773bd9cc1876baf8856e05cd",
"main.dart.js_70.part.js": "750e5f2aa5d1d814eb268ec05bb7f7b4",
"main.dart.js_12.part.js": "cbd92229edad9d87873d5a74d4e24d5d",
"main.dart.js_84.part.js": "cb6a7fdd5c43118076545530fd2c8876",
"main.dart.js_71.part.js": "072e1ee4fee12c6754dcd2036af980ee",
"main.dart.js_6.part.js": "18b74af3e69bd84506045f55782d0782",
"index.html": "a5a0b52414130a4d2cf5278fb3cfce42",
"/": "a5a0b52414130a4d2cf5278fb3cfce42",
"main.dart.js_13.part.js": "d50786efde64567d57686e98057682ff",
"main.dart.js_85.part.js": "679005ef3521330c657ec70bc85176f3",
"main.dart.js_68.part.js": "948f78a4b0e273f098b9066aecdbc0dc",
"main.dart.js_78.part.js": "689d1579ee919ffb4bc286ffb7d1621f",
"main.dart.js_25.part.js": "24e17865a96063d755b7e59c8e584888",
"main.dart.js_57.part.js": "a9c1600af743b900f636707b0c8ee7c3",
"main.dart.js_47.part.js": "bcc869841f96346d55b0717a7b1c175c",
"main.dart.js_11.part.js": "5081d263cb928055196c479d762afd43",
"main.dart.js_63.part.js": "dcfaf419ec0becb7ff19c656f7f94df6",
"main.dart.js_4.part.js": "d34b30b3e619cf94f2eaa8b3530b3dcf",
"main.dart.js_73.part.js": "ed5f72aca38e425a00a1fd4dec7d22f2",
"main.dart.js": "bc31f044fb5c81cd11a258a7763086e4",
"main.dart.js_87.part.js": "72b1f7ef381638c70c08bed763d8ba96",
"main.dart.js_18.part.js": "2830a4d7f82593933e0e84b798c87593",
"main.dart.js_45.part.js": "e3236bce852e188f4c360664464a0532",
"main.dart.js_55.part.js": "a5ea47714a89bd94e5f1fc0b24a05595",
"main.dart.js_27.part.js": "21b587a986444a582386db777f4940ec",
"main.dart.js_19.part.js": "9e1fe957de219f3e9241a508abc3cd51",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_54.part.js": "6d79722adca349fe6dddbf7ec3d3e510",
"main.dart.js_44.part.js": "421a3e5f05ff084391d3317fcc6b33db",
"main.dart.js_36.part.js": "cea3d288756ed9490b40156fe9049d16",
"main.dart.js_26.part.js": "85c3a383a75608987285b73e7b367698",
"main.dart.js_10.part.js": "f5d8c5d6e786472f6b7080fa415953ce",
"main.dart.js_5.part.js": "18caa85043e4dada73ef2458ab24102c",
"main.dart.js_62.part.js": "4013b78bb7aad349d3b2db146cb5d28e",
"main.dart.js_86.part.js": "83fa120edf54e69accf50c2983ea7f23",
"main.dart.js_83.part.js": "186967d7d58d30433c82aebae534dec4",
"main.dart.js_58.part.js": "6115a35c87c305fd1b9657fb1d9ba398",
"main.dart.js_77.part.js": "d0590429ac6837284563d43116372e3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "c6b48cebe8fdef6755342556d86a408a",
"main.dart.js_33.part.js": "2be922076344260906889fec7ad7b1c4",
"main.dart.js_9.part.js": "9075c4f4335fef39d4408835bb195e18",
"main.dart.js_50.part.js": "fb89a71538070ec289da8485b795da83",
"main.dart.js_32.part.js": "c877061954686b1b135130501ae6cff7",
"main.dart.js_22.part.js": "7bd43d9b0bb181d35c7d12309cf5ab31",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_82.part.js": "3e3d43c78b4bc3ba16ef6fa0d0df97fe",
"main.dart.js_59.part.js": "be92bf115fca3d57bf61c79e100e1d2e",
"main.dart.js_14.part.js": "89e8af6acb01b4daac8f538c097cead5",
"main.dart.js_76.part.js": "b3827c57c18f46b6e8a3de2b111f39f6",
"main.dart.js_1.part.js": "d46caaa3589fafdd4d55af18e0960076",
"main.dart.js_20.part.js": "3ea0c3fe5098b8daa79c6ec62a88bb14",
"main.dart.js_30.part.js": "3df3b18f82746556a561bfc542ede9c3",
"main.dart.js_89.part.js": "82e260d1292dd13e600f06acea3d08ca",
"main.dart.js_42.part.js": "68ce04c7a68dad8b14aa470d7a737e5b",
"main.dart.js_29.part.js": "afdc62e4275ef20292c054fe566bca5e",
"main.dart.js_80.part.js": "ac346e4e458a0688283803356a7bef66",
"main.dart.js_90.part.js": "cc658da7f8eef4039563dc432cdd2e51",
"main.dart.js_64.part.js": "2e543c39014fcc632b607b991aff9823",
"main.dart.js_3.part.js": "d78c8cd730ef84a72f0ac25586950f49",
"main.dart.js_74.part.js": "b72a9336bebeff5714a2494d5789d6f6",
"main.dart.js_16.part.js": "8ad0aa6e3efc853f7972bb55d0edb3a3",
"assets/AssetManifest.json": "9c0a7e0685e7d5dd18dea59426b0e5a3",
"assets/NOTICES": "5fa43e7fc47c2df530fc65b0c39375e2",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_81.part.js": "4b9642bd2f3c0d2b063e4c7f74dd1449",
"main.dart.js_28.part.js": "70b56af64e76957ad86e3d70e31a4381",
"main.dart.js_75.part.js": "befc85aca1e0cb970b33a4359fb47bd9",
"main.dart.js_2.part.js": "ac6f92285df120ef7236bd8214a84a20",
"main.dart.js_65.part.js": "922a0903c5ff62521b98815befe52e2b",
"main.dart.js_17.part.js": "4f8f6b38fc63a21098ea0a1df96fe841",
"main.dart.js_88.part.js": "5e20e06d6b5bd2660e6716ee006f4b13",
"main.dart.js_31.part.js": "9fd8893be19ba9b352f001828ae021ab",
"main.dart.js_21.part.js": "1d7547db615d180e59f27cede246d6d7",
"main.dart.js_53.part.js": "01cc0c61cdbfb10804c032f8af772f0d",
"main.dart.js_43.part.js": "64c475f97d06a207b9ae4141f9dd6a43",
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
