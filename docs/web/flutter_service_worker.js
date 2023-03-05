'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "3297045b8af9e1b215d0e78b32d1a62b",
"main.dart.js_69.part.js": "a8411e9f6394569e7932d0cb6fd0bf10",
"main.dart.js_24.part.js": "873ebb9e3bcb193a7eecb9761920f486",
"main.dart.js_34.part.js": "498943132e76e3d2c8ac65fab3de479f",
"main.dart.js_46.part.js": "f41e6156c459e27658b770859561030f",
"main.dart.js_56.part.js": "1146c737f2ecd00a291915db89434e10",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "de4a832bc47695ca6adfeecdadf93981",
"main.dart.js_60.part.js": "fe84e966a785b56e5e528ce3da170208",
"main.dart.js_70.part.js": "768d30835dd54b3b99867455781ce2ff",
"main.dart.js_12.part.js": "52fd2db509d5e5a491625f0f9022b610",
"main.dart.js_84.part.js": "08ebe915f5b668e3313bc3e93428722a",
"main.dart.js_71.part.js": "e779f1ffde4f948a890e30035122c012",
"main.dart.js_6.part.js": "2ccceae7254ca5f87732e5e515784c16",
"index.html": "2b20651a8da8745ffdca4dea60d84e47",
"/": "2b20651a8da8745ffdca4dea60d84e47",
"main.dart.js_13.part.js": "945bae2443a609983b3f4afa998f7bf8",
"main.dart.js_85.part.js": "0b3e20bff05db510ea83a16addb4374d",
"main.dart.js_68.part.js": "d46a8c6d562bbcf66319bdd489aca733",
"main.dart.js_78.part.js": "7596304e73ab5935b5dda5709fc8b9bc",
"main.dart.js_25.part.js": "4c5b3d27fbf7c7264ebbcfaf5401bc78",
"main.dart.js_57.part.js": "722737cceb20a7a67b923345bcbabfbc",
"main.dart.js_47.part.js": "c9223e01e86f23d9293b0f0fdb575e99",
"main.dart.js_11.part.js": "5081d263cb928055196c479d762afd43",
"main.dart.js_63.part.js": "dcfaf419ec0becb7ff19c656f7f94df6",
"main.dart.js_4.part.js": "f73982684c47407783be9849352ddeac",
"main.dart.js_73.part.js": "c3205c7c1bc95a17a4b528418945b6f1",
"main.dart.js": "9c58de4f1fad819ccad947f73c5ed928",
"main.dart.js_87.part.js": "f44068db0124520d3038199ef271fc1d",
"main.dart.js_18.part.js": "cd71f182c0edae5149a0d21be8c7f2d6",
"main.dart.js_45.part.js": "fd699d3b37ea0e19e979e292724f14ce",
"main.dart.js_55.part.js": "738cf463c3a545f863bbdf0f96691963",
"main.dart.js_27.part.js": "bfbcea0fc7ddc70333d1e21beb3fd3ab",
"main.dart.js_19.part.js": "11b09073f44e9d95d3e67f07a4d2c248",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_54.part.js": "e904179a05812760efea2212a0386a62",
"main.dart.js_44.part.js": "3ee611f9f4bae8b5a0f94b7c66d68077",
"main.dart.js_36.part.js": "4af38065ba09660d5b39e5fa5fcb45a0",
"main.dart.js_26.part.js": "aba3e4fe6b1cb937d8102d30b13fa2d0",
"main.dart.js_10.part.js": "cc6f885829aeeff011e3ade5da88abd1",
"main.dart.js_5.part.js": "cdcb5b1beb6e6253132f7fbdeaef5262",
"main.dart.js_62.part.js": "9c5000967da69c709e3fc610ab319add",
"main.dart.js_86.part.js": "baf88b517f5e8c7c0d432e1e40b4fd6c",
"main.dart.js_83.part.js": "0b48e969de08d3865018635a2ad4a396",
"main.dart.js_58.part.js": "ba604bce25facaa3e2cd8cba984aac14",
"main.dart.js_77.part.js": "df5924ed71c6b7762ddb03f30e02099b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_51.part.js": "6e4afd9318dcfd636e65eea82155b491",
"main.dart.js_33.part.js": "6f00f187a7b70f2b11b70cfa26df8a17",
"main.dart.js_9.part.js": "acc37d7c91c4b4243cf5c7b33be3954b",
"main.dart.js_50.part.js": "db49af31189389968af83ab3825371a3",
"main.dart.js_32.part.js": "0b6d0f541414296cc822b255f50ef6e3",
"main.dart.js_22.part.js": "41cddd8c81b8ccbecfba1143b3958d0d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_82.part.js": "7eecea54180501d150c442f1bf3d2bb6",
"main.dart.js_59.part.js": "214835d105b7a8b331c0f9a84ccf1bd4",
"main.dart.js_14.part.js": "0cf903e7143599ca07339f620628d60b",
"main.dart.js_76.part.js": "abdbe1a6a550fe66abe02c32fe0b6184",
"main.dart.js_1.part.js": "116928fc89634230f509c5d7a0603d04",
"main.dart.js_20.part.js": "74c06c70b061b9fdb7bfa0256feddac2",
"main.dart.js_30.part.js": "b97535b6e38c17e729b9d83a6b747188",
"main.dart.js_89.part.js": "470406448f8766213e65fd183871423f",
"main.dart.js_42.part.js": "68ce04c7a68dad8b14aa470d7a737e5b",
"main.dart.js_29.part.js": "fcc7c33d2eae4204b788d93a5aae10de",
"main.dart.js_80.part.js": "ecd6db4311c4b2d42762da32128d749f",
"main.dart.js_90.part.js": "2f9172f629b5e181874de4e997a26b5d",
"main.dart.js_64.part.js": "2e543c39014fcc632b607b991aff9823",
"main.dart.js_3.part.js": "7e725dc37ee08c79568c278497f21857",
"main.dart.js_74.part.js": "36594cfe1033886309a58fcd13e7c7b5",
"main.dart.js_16.part.js": "adcf357851cb0e44ab272b350f6114ac",
"assets/AssetManifest.json": "9c0a7e0685e7d5dd18dea59426b0e5a3",
"assets/NOTICES": "5fa43e7fc47c2df530fc65b0c39375e2",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_81.part.js": "da7632f44be5abf71ef98f2c2891bf50",
"main.dart.js_28.part.js": "1593f8024db90cd6611e9d30913ad898",
"main.dart.js_75.part.js": "fe1cdaf97b52e7874505a8e7b5d8a266",
"main.dart.js_2.part.js": "95c6e8abe878b3108f7c16a9d0a3e84e",
"main.dart.js_65.part.js": "5e0e6c7361357d1d6271427e8f600ecd",
"main.dart.js_17.part.js": "508fc37e6562700aef210c0dcbe2d547",
"main.dart.js_88.part.js": "3bb2adef9256e3560ca97ba448c53836",
"main.dart.js_31.part.js": "54f6efff5871f37c9b80e481db0d8207",
"main.dart.js_21.part.js": "d16b65c124f5f1aed0529c4e3865f9c5",
"main.dart.js_53.part.js": "96b0c4464710ccc7dfba33b499c0e6a8",
"main.dart.js_43.part.js": "df12e56dbb9970703fb0b31255d756f9",
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
