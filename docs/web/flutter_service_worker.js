'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "aa95e4b2b056b33b018d6d85eab9f654",
"main.dart.js_69.part.js": "7b47b756e9d8866bec233ab4363edf21",
"main.dart.js_24.part.js": "46d60fae2c99d4f411315e5b6ab0e687",
"main.dart.js_34.part.js": "ccca1a1ebac9ebe4996700b9a2fa2cf6",
"main.dart.js_46.part.js": "f697789e3a6223e1acca5084806d2656",
"main.dart.js_56.part.js": "4ef0013059712065c818dac70d3980ce",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "c008958af29e2bf141720f49d85843e2",
"main.dart.js_60.part.js": "768928d4b26127a835cbaed1cc3cb6b4",
"main.dart.js_70.part.js": "75bae644c336991e14155a7ea4f080d8",
"main.dart.js_12.part.js": "3a268c01fd1feccfb04eb04d39ed7aad",
"main.dart.js_84.part.js": "cff2b3512688446eef26dd56589aa5f6",
"main.dart.js_71.part.js": "ea4639dd966f3492f62765404c97735d",
"main.dart.js_61.part.js": "451db1f2694fe9d07eea8d76bbb0585a",
"main.dart.js_6.part.js": "94f77f9a03ddf8f7cf08169b98819565",
"index.html": "18e1d88106724cb345475adb095fae05",
"/": "18e1d88106724cb345475adb095fae05",
"main.dart.js_13.part.js": "1530df3e58ee385a2d1217a23c1cfc49",
"main.dart.js_85.part.js": "8b9b547a66afbb035323a3962d5b724c",
"main.dart.js_68.part.js": "f5fb4d7f89278a8f0a5ea3292e38fb57",
"main.dart.js_78.part.js": "b93d058259adf5bbadf11c0082658561",
"main.dart.js_25.part.js": "1982384af0fa85627be986610a75d8d3",
"main.dart.js_57.part.js": "cdb62b7936624b9b8a051293a2ae53ab",
"main.dart.js_47.part.js": "580f94e0d627ccec1ff3d5e3215df3ab",
"main.dart.js_11.part.js": "1c0272d4e7a19456215c09b51bb37b90",
"main.dart.js_63.part.js": "f1b7b89f01ea1cb8c9e15bdcb684d2a8",
"main.dart.js_4.part.js": "3c3a16930434e495b5f2e06a894d9d92",
"main.dart.js_73.part.js": "647b1f5a81393688cc0ceed20118167c",
"main.dart.js": "5416cc47fea5526409932e27736d4aff",
"main.dart.js_87.part.js": "bb2be9e77779f2c3cfaa82aa9d772450",
"main.dart.js_18.part.js": "8faf20f950d1b052f0ba159a453edda1",
"main.dart.js_45.part.js": "72f7053d945d045922f23b4d57849e33",
"main.dart.js_55.part.js": "e3a313306455f12a20483392bca60310",
"main.dart.js_27.part.js": "ee750a7bfc44f3a606ab85883bd55c8b",
"main.dart.js_37.part.js": "d223efbf64cb39327ec2f4414309751f",
"main.dart.js_19.part.js": "4ef8c672341d905f69a1db410f611bf6",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_54.part.js": "aa7fd20ee9634c7f2a78f1130a7e5c73",
"main.dart.js_44.part.js": "9376b7c70e416d6e60dbde8a7704e190",
"main.dart.js_36.part.js": "e591fbd5fc4936dade1908893f44e198",
"main.dart.js_26.part.js": "de33bb696daa9cc73a406412193f48ac",
"main.dart.js_10.part.js": "4caad2a21e97ab27fb17de905dc4ca6b",
"main.dart.js_72.part.js": "38a33fa9d65f4277659b6f07f019b073",
"main.dart.js_5.part.js": "ea0b5ce82349d36aff8f3e8418fcd364",
"main.dart.js_62.part.js": "fd12a1f5de49b572cb8a10554ef8c1a8",
"main.dart.js_86.part.js": "d754f4617afcf1b6e8d35a7cc5723d2f",
"main.dart.js_83.part.js": "a1cc14e38ea5133e89079e697ab46440",
"main.dart.js_58.part.js": "66f3a7fd6261e768edac1a94e10dba5b",
"main.dart.js_48.part.js": "1658cd6f92a193299491ad5d4c176393",
"main.dart.js_15.part.js": "bc08a7445bb63fc50b808eed337747ae",
"main.dart.js_67.part.js": "770f2b6c9ac5ddab6c0ff5eba57b313c",
"main.dart.js_77.part.js": "aefaecbcd5604eaf58a3b0fad8e92fa2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "e50ffcf29da58181b4c1ee1e07c410c7",
"main.dart.js_51.part.js": "cf3b84412c75d0c43fb102370c52d531",
"main.dart.js_33.part.js": "0113a9100b96703ea2d61cc40bcb2586",
"main.dart.js_9.part.js": "2c8e2df884bd01815aafafba72703b9d",
"main.dart.js_50.part.js": "aa7190a3f9138490f33dc411924d09fa",
"main.dart.js_40.part.js": "a35868094c41ef0cdc266591ee13dbbc",
"main.dart.js_32.part.js": "77b11f90eaf60c68c293db014ee64332",
"main.dart.js_22.part.js": "207542322e08d1a99a6acffc39f48959",
"main.dart.js_8.part.js": "d1b4c295e6a7de2daf1436031b26a50d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_82.part.js": "fd94b8bfaa498b1f3e44990c1224ccda",
"main.dart.js_59.part.js": "5fe95fca3ee6c66cb7daa9bb52212729",
"main.dart.js_14.part.js": "c626fc72e217302e6662356cb6aa3c91",
"main.dart.js_76.part.js": "18b4cc3170fd8f65c03cf94990f96053",
"main.dart.js_66.part.js": "039ba3cd8faf91fadc49a52987080a86",
"main.dart.js_1.part.js": "fb747e29497f13f30178b066a1499507",
"main.dart.js_20.part.js": "73958e2a0fcb487bc62002e1a758c203",
"main.dart.js_30.part.js": "6a82c8f616281b938ae6e34f53e60166",
"main.dart.js_89.part.js": "06ee8a6fe87e0e3309c44bbaeaaf5f74",
"main.dart.js_42.part.js": "9fb0d9a37be7fa747c6f0758cc58870d",
"main.dart.js_52.part.js": "d225626babe38d9f390ea8b70022b8c7",
"main.dart.js_39.part.js": "6ad2b8e42cf3ca804997038b39b076d3",
"main.dart.js_29.part.js": "e9083024a6c05f67bcd2ebe935173fba",
"main.dart.js_80.part.js": "0266613bf7f62884a89a1cc564607cb1",
"main.dart.js_90.part.js": "cbe6d9aedb3aad9b4b442a3130ad5d54",
"main.dart.js_64.part.js": "9d0ff4dcca2054cf835682b56f77e59d",
"main.dart.js_3.part.js": "f1a6bb16914f1c4719496d762a141d5d",
"main.dart.js_74.part.js": "15fd90aaae4db5dc2a9c484ed03c37e4",
"main.dart.js_16.part.js": "fa364d3645601f078b39f69e6240fbd0",
"assets/NOTICES.Z": "fe8c96e9f5adf6dc2dbcab1dc383eaa7",
"assets/AssetManifest.json": "683c9485adfa17145a028934bd53d5c0",
"assets/NOTICES": "732eefccc5f809ee248c54cbf6e22976",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7f2fb21c467e6cfa00b4c27f4c784476",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"main.dart.js_81.part.js": "041f7775f357b9b49ca6ad14c413a5fc",
"main.dart.js_28.part.js": "45f631d5af206f4ddb7e594a6e3b5854",
"main.dart.js_38.part.js": "4d0a0f79faaaffb7ba18cdb0fa3835db",
"main.dart.js_75.part.js": "4f5e0444765db18d4561d89e1366d69a",
"main.dart.js_2.part.js": "2f2d477f3bda013fa8a633168fdac092",
"main.dart.js_65.part.js": "46ca83210f6634a11efec0b9965c75f3",
"main.dart.js_17.part.js": "449355a061b66824bda3811f8272f141",
"main.dart.js_88.part.js": "8ebb092ae516d8c7a8bf976120aab44b",
"main.dart.js_31.part.js": "a4b6b337535c09617b8e0d6395788012",
"main.dart.js_21.part.js": "d09874e69ea74c10e42173a29920742c",
"main.dart.js_53.part.js": "75a899f1c04828c5241e2e4ce2e3f2ad",
"main.dart.js_43.part.js": "615401f4a1936745ca121056b7eb64f3",
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
