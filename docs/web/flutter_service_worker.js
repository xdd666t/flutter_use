'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "563f84ca777cf13c8db6faf603976e20",
"assets/AssetManifest.bin.json": "9d61b00133c02ae6ce071ced132d8b57",
"assets/AssetManifest.json": "47f2f38f97eac74f5df38f0db56cc6f0",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/FontManifest.json": "a42ea9150133377a04abe472e69c184a",
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
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "ff6401bdfd39f48da9709e1b6202db99",
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
"assets/NOTICES": "e6f2a1609ae3419d7f3291d88c6d043f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2849d330e37297c68f6da4178a0c823d",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "35988a284f052a114b616f50d78cf12a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ac0b8508fb3c5f09a41ae45698b6e79",
"/": "0ac0b8508fb3c5f09a41ae45698b6e79",
"main.dart.js": "49f03062d793db09d8bd0674a58477f5",
"main.dart.js_1.part.js": "b84dfa754cfa13f6310a4194e2870611",
"main.dart.js_10.part.js": "420899562dce60eca064c0073be51ec7",
"main.dart.js_11.part.js": "bf1d34e940739c4fc173ea5d3596c81b",
"main.dart.js_12.part.js": "309e5d036c0354afef65eb401347c85f",
"main.dart.js_13.part.js": "a65ad4e5980138187b7c0ac5cc775df1",
"main.dart.js_14.part.js": "4a76c4bee1da3f0f4d3ab1ee0c3f8112",
"main.dart.js_15.part.js": "63851e087b514f3c1d863816aa264020",
"main.dart.js_16.part.js": "86338503f637a60539201aed6b0920de",
"main.dart.js_17.part.js": "5733241d67e637edbaf6046e10b87711",
"main.dart.js_18.part.js": "465d8fcb376808634102c35c4d8ae33a",
"main.dart.js_19.part.js": "ea5c067c8f0dfd50d23bbba0927c373f",
"main.dart.js_2.part.js": "830afd573daf4030ac61ce06f855fb94",
"main.dart.js_20.part.js": "f5f0b012265bfb24c372284e4b1992ab",
"main.dart.js_24.part.js": "b6ff7e827fb2ce42e9d4594da5cb86e0",
"main.dart.js_25.part.js": "e571f0b3b0dbfe6e3da41b353f51977e",
"main.dart.js_26.part.js": "c4bb352834147f2e37ad4378418c5403",
"main.dart.js_27.part.js": "ef7c2a37ddcb3d24abec9670b834156f",
"main.dart.js_28.part.js": "7e0403283d7ffbf2b68450f503eab34e",
"main.dart.js_29.part.js": "726841726638335f28d59ca00da24146",
"main.dart.js_3.part.js": "c1c9f518422d6b851d787a0d52a651e9",
"main.dart.js_30.part.js": "097a19d5fa1a8bd7136244976d9be951",
"main.dart.js_31.part.js": "f7e5b687ec4a886bbf5f28f3ea15bf77",
"main.dart.js_32.part.js": "30b04cbbe2cd6ae24b3a6b08850364d7",
"main.dart.js_33.part.js": "9808eb2fd2eaa5cf3c3d37cd0317ba61",
"main.dart.js_34.part.js": "c6446cb3bfb9c296c21e4e5fcd8941ce",
"main.dart.js_35.part.js": "5a26d2a163a9e6bb1073b270f8462ce9",
"main.dart.js_36.part.js": "cb0b5b2e5b01c64ad0c4eafddeddbb3d",
"main.dart.js_37.part.js": "e2432bff7f85f6cd7e4132b8967cfd69",
"main.dart.js_38.part.js": "160aa0e8dda3baf622646a3d7aed9453",
"main.dart.js_39.part.js": "c31a1a032293f93aeddb51e982309e2c",
"main.dart.js_4.part.js": "a2ba773c0c05b725b65c66381097b048",
"main.dart.js_40.part.js": "c75276a013c54c6165972121b4d086fc",
"main.dart.js_41.part.js": "1081e9040e2793b948f6e150698504bf",
"main.dart.js_42.part.js": "a346fbedfea92a49061751b026dd9273",
"main.dart.js_43.part.js": "2f8d1dc2bb18e9980ffabd57acdac8a2",
"main.dart.js_44.part.js": "abfe71201acc28b0cad82ca71a2546cd",
"main.dart.js_45.part.js": "b4df22cc12f1ab4fe103cd0ac0971afe",
"main.dart.js_46.part.js": "38b57a8fd74554bf2fa3deb6ef04ba47",
"main.dart.js_48.part.js": "f6e7b66407c7980c90abbbe4b8cb270a",
"main.dart.js_5.part.js": "dc0c9296b3d4e9817c99503efc4c601a",
"main.dart.js_50.part.js": "f6f45e54b153eda7928aaa87627c7082",
"main.dart.js_51.part.js": "a55583b51b55e138d6a4b1369e8355fe",
"main.dart.js_52.part.js": "4dd8f07dbf97124432276da49bcc7819",
"main.dart.js_53.part.js": "0bfff0d36e98e3e25f23552c2c80a350",
"main.dart.js_56.part.js": "aee748a942d1f74f4303ce41433ca3a2",
"main.dart.js_57.part.js": "8815d6b3271445f9546410b37526348c",
"main.dart.js_58.part.js": "d9e1a5f892fa8a7b8e3dd1a58870fdd5",
"main.dart.js_59.part.js": "67e3387bf005ce03c73ff1d16ed67769",
"main.dart.js_61.part.js": "ed07d0d17eb0ba938974facd6aa5679e",
"main.dart.js_62.part.js": "c22131ef964984169660e8df7bcd1f99",
"main.dart.js_63.part.js": "10b0b2a93c29209dc9862f0212e1c4c4",
"main.dart.js_64.part.js": "ee57e2f9b8e940ac2bb42a33bd712667",
"main.dart.js_65.part.js": "7b120f27d2ad4b6fdd13b8f898ade2d4",
"main.dart.js_66.part.js": "422fcbbce7411aa1ce84f64d25124e4a",
"main.dart.js_67.part.js": "062ac86841fc31e29e257d85c342366d",
"main.dart.js_68.part.js": "6150dd5b4573c88ee648d5dffcbdb41e",
"main.dart.js_69.part.js": "5c7d616fa485e3048801c97fb94c0ee6",
"main.dart.js_7.part.js": "ff406aed472945ed9a9275d51b7aee5b",
"main.dart.js_70.part.js": "be46d0fc42e1a2513e434c0dcb6386ec",
"main.dart.js_71.part.js": "67f065cbfd5239ddae82a9d347302198",
"main.dart.js_72.part.js": "5ac6eb37a31b31272b1098e7f30b095c",
"main.dart.js_73.part.js": "2eeee9272968cebe94e4154629489078",
"main.dart.js_74.part.js": "7a87a84b10020399165940b5bcb46dac",
"main.dart.js_75.part.js": "473054acac7b7bc7a94fe55ee349dde3",
"main.dart.js_76.part.js": "d66b7dc8d4d157428c716ea7b7a2d78c",
"main.dart.js_77.part.js": "af1488eac9e6d49ceb33d319492bf9b3",
"main.dart.js_78.part.js": "10225d144467b536acb382328acd683b",
"main.dart.js_8.part.js": "a50f0237af33c09d83a6f458cc07bc0e",
"main.dart.js_9.part.js": "8327b040f36bca6ba305ac305920739b",
"main.dart.mjs": "f2a7a1151ca20428492add332bc6f499",
"main.dart.wasm": "f5851dad8931697c0f64c398870d8c05",
"manifest.json": "c5589df7dcc513a4d11e6655fb7eae77",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
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
