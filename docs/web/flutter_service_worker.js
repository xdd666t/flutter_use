'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f2952fd99766739abca696656eecfbd7",
"assets/AssetManifest.bin.json": "ac71a3ee317f4bea6a06baca58a32a13",
"assets/AssetManifest.json": "3a216b491bd4782da897711fcdad8a9d",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/FontManifest.json": "47d3fd92dbd2d336892172416f9b33c5",
"assets/fonts/MaterialIcons-Regular.otf": "1e48775f53c5c7682d0a17f44abad0db",
"assets/lib/widgets/other/other_hard_close.dart": "3e06d10650c1fe3cdcf85c4e52d66b30",
"assets/lib/widgets/other/other_trick.dart": "f1768169e2977896c600ff2557cb601f",
"assets/lib/widgets/show/custome_dialog_animation.dart": "0a7c8996d9699d619c9925738e9ac165",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "cff419792c64ba1bb9044cb6c362159f",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "8ea2f329e16d83ea9cff9317e40f554b",
"assets/lib/widgets/show/custome_dialog_carry_result.dart": "5ca01b87ef54c019e44166191d933f5d",
"assets/lib/widgets/show/custome_dialog_easy.dart": "3123ad7f0fe2bbc052da832d16514dc0",
"assets/lib/widgets/show/custome_dialog_location.dart": "142d82c66191b6efd7f4fa8f521a3f18",
"assets/lib/widgets/show/custome_dialog_penetrate.dart": "0a4d584f302b27c53ee3641243c94002",
"assets/lib/widgets/show/custome_dialog_permanent.dart": "34f5fc7b9f727068c5c763af6ccd3d57",
"assets/lib/widgets/show/custome_dialog_single.dart": "55805be044a336a6c8f7a2331363fd64",
"assets/lib/widgets/show/custome_dialog_stack.dart": "a2deac8633f81444239955cb326584eb",
"assets/lib/widgets/show/custome_dialog_system.dart": "de9f9d92d7860899957147c54adb8404",
"assets/lib/widgets/show_attach/attach_dialog_business.dart": "efb279f2b84214bdc4f1d8a8152213f1",
"assets/lib/widgets/show_attach/attach_dialog_guide.dart": "78b6878e777dc2b7545ee1cdce205efd",
"assets/lib/widgets/show_attach/attach_dialog_imitate.dart": "0c3d0b9c6a1ffbc0a2b2d3cebe1064fe",
"assets/lib/widgets/show_attach/attach_dialog_location.dart": "021d311953b19cf9925d8419106ebe41",
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "c7697ec28e8e0e93834c04edba88bd5c",
"assets/lib/widgets/show_attach/attach_dialog_scale_point.dart": "b0e0f0594c09dfb9af35898f11985657",
"assets/lib/widgets/show_attach/attach_dialog_target.dart": "0cf4b43d56a770db2be2609c2eaf32b3",
"assets/lib/widgets/show_loading/loading_custom.dart": "28661c7cb39dac3282950d572a176507",
"assets/lib/widgets/show_loading/loading_default.dart": "afaf1498d590f9c67aaeed7cad8f9deb",
"assets/lib/widgets/show_loading/loading_least_time.dart": "c8b762c2a244b89bc99b07f6f925a46c",
"assets/lib/widgets/show_loading/loading_param.dart": "bbcdd0e31e3d301d9ed249d0916e66b8",
"assets/lib/widgets/show_notify/notify_dialog_alter.dart": "75a69505bc319c6aeadb33b1fa7a0f35",
"assets/lib/widgets/show_notify/notify_dialog_error.dart": "0db1c777457da7c141865f6ab75544c7",
"assets/lib/widgets/show_notify/notify_dialog_failure.dart": "3cb618e398d954da30f433d24e3874ea",
"assets/lib/widgets/show_notify/notify_dialog_success.dart": "c44ff635f62bb35b9f871433060ad561",
"assets/lib/widgets/show_notify/notify_dialog_waring.dart": "f328195449676c36eb0222170f7d20d2",
"assets/lib/widgets/show_toast/toast_custom.dart": "0b719d20dc6a1be54c7a168d0e5deb9f",
"assets/lib/widgets/show_toast/toast_default.dart": "b2a106fbd7e8ac749a297be71d0b2018",
"assets/lib/widgets/show_toast/toast_interval_time.dart": "a0e97e1f5aedae96c1bc6c0c2f34c242",
"assets/lib/widgets/show_toast/toast_smart.dart": "67ca827ff521419bc860135f901378f0",
"assets/lib/widgets/show_toast/toast_type.dart": "5ebed4999a138fbeec2f1be9d200a6a8",
"assets/NOTICES": "c61eed026891f431915c1fc5f14ee983",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89f94c772176a1b91e236a57611bac8c",
"/": "89f94c772176a1b91e236a57611bac8c",
"main.dart.js": "5a10648fc546fadc7fba969997686db9",
"main.dart.js_1.part.js": "61cc3f737288b1d66bf1e23e3b278407",
"main.dart.js_10.part.js": "357613a12f6d24aae53b76cfa1fb501a",
"main.dart.js_11.part.js": "90a62328ae69fc9ca6ebbe3ddc56f6be",
"main.dart.js_12.part.js": "8a202a233ccfdedd1a27d5de3d4069cc",
"main.dart.js_13.part.js": "08ec5d8eef9c6f5765bcbddbe1db7ce6",
"main.dart.js_14.part.js": "2fba3dfb20b57183a9826e9866cc02bf",
"main.dart.js_15.part.js": "bc8fd7bddc38f33e593840cabf6dee34",
"main.dart.js_16.part.js": "1cc6567d7be762f83b060ec395fb6968",
"main.dart.js_17.part.js": "00e829b7962e89b9c5cad06e8af457a3",
"main.dart.js_19.part.js": "618cf37c4494816f26162f80f5d8cdbd",
"main.dart.js_2.part.js": "08576c0e569287c4ec85a4fb528d0faf",
"main.dart.js_20.part.js": "eb68cd2cfb6392ebc2a6c8ce95e05c22",
"main.dart.js_24.part.js": "67a923819a947e7835e98a356d065d01",
"main.dart.js_28.part.js": "98fb97f4c0bc0bd252cf2c34e880871d",
"main.dart.js_29.part.js": "88361ad8c8733574d6ed026df8216e66",
"main.dart.js_3.part.js": "5d00b2c5d2ba53deb7488f07b84f37ca",
"main.dart.js_30.part.js": "600da6e492824ce588c579936a28662c",
"main.dart.js_31.part.js": "b3156e2fff5d61824ac47856a7cd6702",
"main.dart.js_32.part.js": "8063c58416dd8a176b3e070d3e661d62",
"main.dart.js_33.part.js": "3b83661b3f917bfe2a9d75cf88636642",
"main.dart.js_34.part.js": "f195e885be30e29021504aec6bc5dd5a",
"main.dart.js_37.part.js": "0b78c45f68befea6b68bc54c9973037b",
"main.dart.js_38.part.js": "b482a1db728788466b68bc31318e4e1f",
"main.dart.js_4.part.js": "cfbfad313308cde4adb6574b5bae1faa",
"main.dart.js_40.part.js": "d06f52ec9663e7bfee7c7b79396e592a",
"main.dart.js_41.part.js": "7159c9a6b9c39cfd78eff576a8e3d6f7",
"main.dart.js_42.part.js": "f69dc8567a64baf17c809b801fec648d",
"main.dart.js_43.part.js": "006e94587e8d1a912c78eab2bb1f907a",
"main.dart.js_44.part.js": "a29217266a7011f3991e3a6c47332377",
"main.dart.js_45.part.js": "29f1201281e0a0066897ecf5ae64db3f",
"main.dart.js_46.part.js": "5c4e7068fae90ea5a8981c6bbf7f6dc5",
"main.dart.js_48.part.js": "a695f6e0e811bd3efa21bc9e017ceb0f",
"main.dart.js_5.part.js": "fdcbb74999a3a888bc68814b959bc3e9",
"main.dart.js_50.part.js": "8c5feb719cfb31dc554b4a85ae980fe6",
"main.dart.js_51.part.js": "f80fb25776b07b4f0c9bc77443e3bd4c",
"main.dart.js_52.part.js": "5c1f9d7f208788e6e1a23ba81efd7035",
"main.dart.js_53.part.js": "d890b5c234bdeba57b571457309728ee",
"main.dart.js_56.part.js": "afc1651fc8a1e1dfd0fd8d1d65046834",
"main.dart.js_57.part.js": "dda3b9921731ca159ac3fff695928a57",
"main.dart.js_58.part.js": "12734c07f372b568e35212df74e27ab2",
"main.dart.js_59.part.js": "51a3ef6cd8cea2c90fa05a4cf4d8ed65",
"main.dart.js_61.part.js": "1e10883fa955ff5714fdf5b66bfdb597",
"main.dart.js_62.part.js": "e33d8b8792c2ee560fbf04601b07dd7c",
"main.dart.js_63.part.js": "a112bc98b25dd74166189174428b4f9a",
"main.dart.js_64.part.js": "5846af7fbc876835c1fae1df4fea40d4",
"main.dart.js_65.part.js": "24f6b8c980b53e172b5d2bc1eb8d8d14",
"main.dart.js_66.part.js": "d03fafefbabe0166d602f60dafc89e8e",
"main.dart.js_67.part.js": "8980d83fa221b43b5692fdca65c7774c",
"main.dart.js_68.part.js": "fdf842dc5d6e7a5b2a8fa65040bca5f5",
"main.dart.js_69.part.js": "bed4160c657e8e18cefade745fde2c44",
"main.dart.js_7.part.js": "3eb4f6abcab25e1debd0e79c86d814b9",
"main.dart.js_70.part.js": "7b2317556de883a49c38b66789898035",
"main.dart.js_71.part.js": "e265960c0b174a20c1987800bbf7b84f",
"main.dart.js_72.part.js": "a3febdc20a4525a1b7693474dfbeb4d0",
"main.dart.js_73.part.js": "8fa4cdc56230fc46b40443e62e42f26b",
"main.dart.js_74.part.js": "7f7385651e2e633048a3ccdfb309af90",
"main.dart.js_75.part.js": "146f72bf36f82f68ed50b58c5f5995bf",
"main.dart.js_76.part.js": "b804d7e524d3115453fd41017920b1e7",
"main.dart.js_77.part.js": "5c6ccb9f86bf1beef16b2197c3cc929d",
"main.dart.js_78.part.js": "6cd6198925ae259217128805810ebe7d",
"main.dart.js_8.part.js": "75fc131eb350727589aad9ff70a3e693",
"main.dart.js_9.part.js": "7b53a49af7b890f850dad9f4096961f0",
"manifest.json": "c5589df7dcc513a4d11e6655fb7eae77",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
