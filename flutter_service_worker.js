'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "980a6eb54a81ae6d4d9e48962b38c19d",
"version.json": "6e8a97b6b4bcddf358917313c6db8466",
"index.html": "6c31743c3749c31d9b0faa197866fbda",
"/": "6c31743c3749c31d9b0faa197866fbda",
"main.dart.js": "2c8849cb3d3fcd7c242312164bfc650f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "01a1cc3bba3dcf8031d63a5a2dbc1573",
"assets/AssetManifest.json": "e8d6d55f4c1b827eafe7adacc311c663",
"assets/NOTICES": "13174a25af8d5789ebdb20aef0cb29cc",
"assets/FontManifest.json": "3ef43b2be5a4a8d7769e010b7ab1a68e",
"assets/AssetManifest.bin.json": "66a9c371f7197237226888b049f24b19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fa5bca52a4ea0324d548e3c389b53637",
"assets/fonts/MaterialIcons-Regular.otf": "7d42f7c435069dad5d6185d680544abf",
"assets/assets/svg/bottom_bar_svg/live_dark_ic.svg": "46ed22735a31b239100be08d27e720ba",
"assets/assets/svg/bottom_bar_svg/call_dark_ic.svg": "0677b2e1c0e850f701519cf0a10454e3",
"assets/assets/svg/bottom_bar_svg/home_dark_ic.svg": "60c87a0a9fa4dcfa6e856915a8ec550c",
"assets/assets/svg/bottom_bar_svg/search_dark_ic.svg": "d9739b580dd17c871a301adabedcaab5",
"assets/assets/svg/bottom_bar_svg/add_dark_ic.svg": "e9d99c9d508aa0040d52e2125caa79f0",
"assets/assets/svg/bottom_bar_svg/profile_ic.svg": "e4ceb3b63c09fcbec96af6da85879b4c",
"assets/assets/svg/bottom_bar_svg/chat_dark_ic.svg": "b207874ff0b5844cda683baae58ef00e",
"assets/assets/svg/bottom_bar_svg/call_ic.svg": "699795afd089583f7d87a67fa1f6eef3",
"assets/assets/svg/bottom_bar_svg/add_ic.svg": "c40985462d866d62c5c2eef4304dc9fc",
"assets/assets/svg/bottom_bar_svg/home_ic.svg": "4cfd2050e461f7e314706fd5e2f0d0d2",
"assets/assets/svg/bottom_bar_svg/search_ic.svg": "5a094f08a3ad6a81883fb52ae6c492e4",
"assets/assets/svg/bottom_bar_svg/profile_dark_ic.svg": "8b3b46925f5e751fd530b8eb18986683",
"assets/assets/svg/bottom_bar_svg/chat_ic.svg": "9135576c30a4835ffd60d6f2bfae95e5",
"assets/assets/svg/bottom_bar_svg/live_ic.svg": "490c8f41792edb14ec031f2fb58b9200",
"assets/assets/svg/auth_screen_svg/main_posture.svg": "268544bcf04f8a856c3c0b5dd7ca9f91",
"assets/assets/svg/auth_screen_svg/verify_otp.svg": "f905af7d64a61a9903c0cf305804aefc",
"assets/assets/svg/common_svg/go_live.svg": "8bdca2bcee4694f97c9b4af50819e077",
"assets/assets/svg/common_svg/back_ic.svg": "2328b5876e02a140f3231b4f5d15cfb0",
"assets/assets/svg/common_svg/notification_ic.svg": "f4e7a39a43d09b1e9f6e71b2c1be5ac0",
"assets/assets/svg/profile_screen_svg/unlock_ic.svg": "c51a3d558858a85180546154a8a7a236",
"assets/assets/svg/profile_screen_svg/logout.svg": "1d35a4945c1360ade9a3be96b9f396fd",
"assets/assets/svg/profile_screen_svg/notification_setting_ic.svg": "6ff0519b3fec6651a3cabbe789ef8710",
"assets/assets/svg/profile_screen_svg/wallet_ic.svg": "30111a51b4960fb58b047c01358ba508",
"assets/assets/svg/profile_screen_svg/about_ic.svg": "a33cfee42c19f2ee19cdb36637d754a7",
"assets/assets/svg/profile_screen_svg/dark_mode_ic.svg": "54c28dcb78d500aa9531b099407db8ea",
"assets/assets/svg/profile_screen_svg/language.svg": "ca11f871275c740e8405af45079b58d3",
"assets/assets/svg/profile_screen_svg/invite_frd_ic.svg": "d8c349c69155cb503f684e40fb04a65b",
"assets/assets/svg/profile_screen_svg/coin_frame.svg": "a7def7a9e6d8c4fa6cc033ec9acd014b",
"assets/assets/svg/profile_screen_svg/privacy_policy.svg": "624e0e6e17f0f0eada1c62a98102e563",
"assets/assets/svg/profile_screen_svg/coin.png": "4c0bf2feb140a6af115c704332ac8812",
"assets/assets/svg/profile_screen_svg/teams_ic.svg": "e1db98104b0266edc7ff12b9e7993ad0",
"assets/assets/svg/profile_screen_svg/delete_acc_ic.svg": "02a5aba1ab8d27a9e1fdc4877248f834",
"assets/assets/svg/home_screen_svg/video_call_ic.svg": "bf58245d85508e3438e8bbff60bc9c9e",
"assets/assets/svg/home_screen_svg/call_up.svg": "59d6d0e0efdd62551e1a630474a2f300",
"assets/assets/svg/home_screen_svg/saved_ic.svg": "cec47a23ff7b86855ef852803741d4cd",
"assets/assets/svg/home_screen_svg/portrait.svg": "4b0938df42043b618310ff012891dd0b",
"assets/assets/svg/home_screen_svg/landscape.svg": "8f2a48bed5760d64c2bc535eb50dbb4b",
"assets/assets/svg/home_screen_svg/square.svg": "526212b9926d44af100fc1a71f36d819",
"assets/assets/svg/home_screen_svg/call_down.svg": "e35d03c8fa95195d3cb4ae44a2d3e487",
"assets/assets/svg/home_screen_svg/saved_dark_ic.svg": "703c59cc74310561c4266f5cfcfbf449",
"assets/assets/svg/home_screen_svg/like_ic.svg": "05b0523fcb1809a19ad3e4ae8243dd44",
"assets/assets/svg/home_screen_svg/share_ic.svg": "0e6c659ac5cc0fb6229d025a41b17259",
"assets/assets/svg/home_screen_svg/mixed.svg": "a473d3870ec46bb381b6c987d7e457ed",
"assets/assets/svg/home_screen_svg/like_dark_ic.svg": "a321483c3c686d9f3b1c075e4da6708d",
"assets/assets/fonts/NewRocker-Regular.ttf": "91fd7dfc98eac307f9c256756c8b3129",
"assets/assets/fonts/Mulish-Regular.ttf": "e9dc075ce52b47c4ee98b72c26fdb5a2",
"assets/assets/fonts/Mulish-Black.ttf": "6c66a3f4257a8f99f11ba825084a122e",
"assets/assets/fonts/Mulish-Bold.ttf": "b45b8bb2035278c8d8dbce61a8c777ca",
"assets/assets/fonts/Mulish-Light.ttf": "cd1f360d333f52ef632ec4c465e1331f",
"assets/assets/fonts/Mulish-ExtraBold.ttf": "89cf5361413f75c512bbb3831eb231f8",
"assets/assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/Mulish-Medium.ttf": "285c30ba2332717949f100d2ff7efd25",
"assets/assets/fonts/Mulish-Semibold.ttf": "f5cfdb535f9cbec34edd14194c8d9f18",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
