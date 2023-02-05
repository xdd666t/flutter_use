'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "cee8a1e52020358dadf40698c01b1191",
"main.dart.js_69.part.js": "fcc02404661836c4f49e745f46f2902b",
"main.dart.js_24.part.js": "9620e55fffa2c34c55fd6fa23e512072",
"main.dart.js_34.part.js": "736db6cd888f1ad1f6239c2f49d91dfd",
"main.dart.js_46.part.js": "172407216ba372230ada122e135d13eb",
"main.dart.js_56.part.js": "51826102fa08781a69c68482a13f6fa2",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "db20607b056d8fd492ee5f3c06c41ef6",
"main.dart.js_60.part.js": "2d292d4695aebbfa949cc043ded77cdb",
"main.dart.js_70.part.js": "ef34ffb8e6c08d1571ebe9f032f8b834",
"main.dart.js_12.part.js": "bff0a3746a54f21def109d3f11a4a7cb",
"main.dart.js_84.part.js": "0da13a2a893bb33d5d561d49db8c073f",
"main.dart.js_71.part.js": "c7dbbc8754f4e5370f59824ade6c2b71",
"main.dart.js_61.part.js": "451db1f2694fe9d07eea8d76bbb0585a",
"main.dart.js_6.part.js": "1474ef5b66e7ee9d55fa7799b315d92a",
"index.html": "daa76ee9d2327884de3a68fd5cbab3a0",
"/": "daa76ee9d2327884de3a68fd5cbab3a0",
"main.dart.js_13.part.js": "8986bbdb2a728b6eb66bc7e6bfd0e751",
"main.dart.js_85.part.js": "c3b75d501ab32b0f8548d0ff344f1437",
"main.dart.js_68.part.js": "318c42eeac992408349217a7738b598a",
"main.dart.js_78.part.js": "c0cc1ad31cc6a7582f004824bdc13487",
"main.dart.js_25.part.js": "2d61bc5b43962a5dd55cce514b70ec3a",
"main.dart.js_57.part.js": "825240b2e87b3595d2a40a10c341c2fd",
"main.dart.js_47.part.js": "c3b730b8aaabba41639e2ac060069b11",
"main.dart.js_11.part.js": "cee75419d5cd04e64a00ca979f6ece4e",
"main.dart.js_63.part.js": "4346f4e8b49e1b3bcdba1a6185ffddeb",
"main.dart.js_4.part.js": "9950692719dea4a4a07cba5172be7cac",
"main.dart.js_73.part.js": "7676ae7e9bf93cd6ce96142392e9ccf9",
"main.dart.js": "ae9baac43b41992acb4aef5a758e7632",
"main.dart.js_87.part.js": "74f59dd32fb5d14a4f6bb2cd8c4409d8",
"main.dart.js_18.part.js": "680743c2257f937f6270cff550f6221b",
"main.dart.js_45.part.js": "43c32db6b29af4beb2fd6c6836ca254f",
"main.dart.js_55.part.js": "5280e3ba88f47cfafaf10631982b40ee",
"main.dart.js_27.part.js": "54d14cbe5048e91d228d376ca37d6395",
"main.dart.js_37.part.js": "d223efbf64cb39327ec2f4414309751f",
"main.dart.js_19.part.js": "f38b2a22019719dc3ae99c7ab012f76f",
"main.dart.js_54.part.js": "8289f9ce995bdba3503ec51aa53666f5",
"main.dart.js_44.part.js": "197ace20f2a1b7216ff9916ec1036483",
"main.dart.js_36.part.js": "3e8bb65004c262f72ca15f6feae56bb5",
"main.dart.js_26.part.js": "acc86ddf139c042d222c0e18b8d0f3df",
"main.dart.js_10.part.js": "c67364a5a387800ad3f099954dbe5aee",
"main.dart.js_72.part.js": "38a33fa9d65f4277659b6f07f019b073",
"main.dart.js_5.part.js": "a9fbca0aa9bc6c1f64beb3027906bce6",
"main.dart.js_62.part.js": "13b68339477ca38cd910cb88d0024629",
"main.dart.js_86.part.js": "8cb115d6ca7fd48f342eb37696f1dfd8",
"main.dart.js_83.part.js": "573167a8734cd0927ae6db1223c6986f",
"main.dart.js_58.part.js": "9c7209d3e8a6786de45626f95739a377",
"main.dart.js_48.part.js": "1658cd6f92a193299491ad5d4c176393",
"main.dart.js_15.part.js": "bc08a7445bb63fc50b808eed337747ae",
"main.dart.js_67.part.js": "770f2b6c9ac5ddab6c0ff5eba57b313c",
"main.dart.js_77.part.js": "d458d60427b43636a84ff57b131769b8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "e50ffcf29da58181b4c1ee1e07c410c7",
"main.dart.js_51.part.js": "68f8cce88e09366f155a330e4abde78b",
"main.dart.js_33.part.js": "c7556e56ef49397f00d7d94b22da1f10",
"main.dart.js_9.part.js": "02131b73343aa0b5c8682938ce6e55e7",
"main.dart.js_50.part.js": "39b9308f43be66727dd03a8ba6ddabc8",
"main.dart.js_40.part.js": "a35868094c41ef0cdc266591ee13dbbc",
"main.dart.js_32.part.js": "72124af2fc30cfcec397e307481e4ee9",
"main.dart.js_22.part.js": "3c86323ab817b18a74aca4f633391160",
"main.dart.js_8.part.js": "d1b4c295e6a7de2daf1436031b26a50d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_82.part.js": "797bdaa2b8548727b5ae162af7baf2d7",
"main.dart.js_59.part.js": "4e08e507d1f4a0f9c7d9263e82d0e75e",
"main.dart.js_14.part.js": "744d5f1ce852b9a859c0f6b51093db77",
"main.dart.js_76.part.js": "8a914203e303570d74d65e4132ae25b6",
"main.dart.js_66.part.js": "039ba3cd8faf91fadc49a52987080a86",
"main.dart.js_1.part.js": "c5b424fb74f7539f231f16e14c502944",
"main.dart.js_20.part.js": "4833443b6695681693c2b99185a69d33",
"main.dart.js_30.part.js": "a69dc236f3d1523200f6781bf252f3fb",
"main.dart.js_89.part.js": "e738070e143855568f2f0c48b30fe841",
"main.dart.js_42.part.js": "5c575410231d6f2d499fdb2d0ceaaabf",
"main.dart.js_52.part.js": "d225626babe38d9f390ea8b70022b8c7",
"main.dart.js_39.part.js": "6ad2b8e42cf3ca804997038b39b076d3",
"main.dart.js_29.part.js": "5798aca2b660e4a8a29323198205a21d",
"main.dart.js_80.part.js": "c426e3281a8e88b45ae4998a186355da",
"main.dart.js_90.part.js": "6d1601a2b6a3a5c7dc81746061d4afa1",
"main.dart.js_64.part.js": "277608190fed13cf3851e5e199a08d62",
"main.dart.js_3.part.js": "15da0cebbc8f8b3f260f53b800c8f22c",
"main.dart.js_74.part.js": "d438102a0ed60516ae92f9484f1a3c6c",
"main.dart.js_16.part.js": "d0ccbe8277cbb92723ecf2564211dddc",
"assets/AssetManifest.json": "683c9485adfa17145a028934bd53d5c0",
"assets/NOTICES": "732eefccc5f809ee248c54cbf6e22976",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"main.dart.js_81.part.js": "9ee012d0960bf90d20e4a2aeb833236f",
"main.dart.js_28.part.js": "040767595181531c89b220d982e359bd",
"main.dart.js_38.part.js": "4d0a0f79faaaffb7ba18cdb0fa3835db",
"main.dart.js_75.part.js": "e6d267ceb49a43c33bd564e2c127de3f",
"main.dart.js_2.part.js": "16ad6fd90d204f09767079649013828f",
"main.dart.js_65.part.js": "dd6ad9d6a4e72c06dcdf11f4d00574e8",
"main.dart.js_17.part.js": "5bf85c260a72a04150f6c0efafe1904c",
"main.dart.js_88.part.js": "6790b6ec023739eeb4a950435e16fe5d",
"main.dart.js_31.part.js": "949ba2066d2099b1dbeadec03fef4d52",
"main.dart.js_21.part.js": "86cdb710c0c83631dcc6e1de4752866c",
"main.dart.js_53.part.js": "796ca12acc5aea811d627672c9ae96d4",
"main.dart.js_43.part.js": "b7fbefd852fbe1d4fdb7d7de890f2a4e"
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
