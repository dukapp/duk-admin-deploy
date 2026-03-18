'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f7b6e6e0ea31d5987b4b9e6035391c3",
"version.json": "7f91678b3f001be4ddb928be8a960f77",
"index.html": "5d88c66e2af10f2688b343e78e539884",
"/": "5d88c66e2af10f2688b343e78e539884",
"CNAME": "6d3e767eda01b8a595db9a2b6a82761d",
"main.dart.js": "6d5baa682fa2d54f6062a76309455330",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5673e044f918021f1f16fdbb61d9d9e1",
"main.dart.mjs": "c4a7570515c451cfbc23208699669cd8",
"icons/Icon-192.png": "c20ca6f5f06f573c1f484c97475fd069",
"icons/Icon-maskable-192.png": "c20ca6f5f06f573c1f484c97475fd069",
"icons/Icon-maskable-512.png": "6320f8ac469a510d817b91a7e8fa09a2",
"icons/Icon-512.png": "6320f8ac469a510d817b91a7e8fa09a2",
"manifest.json": "cb54ae7d4d6a3ee0688cdef492035fbb",
"main.dart.wasm": "5fa582514e628207139c060b77c5bcd8",
"assets/NOTICES": "2d31be54c1bb72815026bcfeffc713ee",
"assets/FontManifest.json": "fc9789b755bb4ca3d7b5c5f8e68e35cf",
"assets/AssetManifest.bin.json": "6bf8b52b8fb755828c4539cd461180e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "2bffb99fefaa9e1f8a09f27e2abe3691",
"assets/packages/duk_ui/lib/fonts/LufgaThinItalic.ttf": "1249eb2dece0bb0a22298a1f84ef1eea",
"assets/packages/duk_ui/lib/fonts/LufgaExtraLight.ttf": "40e1d2ea9bd0e6f6145c471b8d2258d8",
"assets/packages/duk_ui/lib/fonts/LufgaLight.ttf": "1ddf17687f8773fda121f4ef0e6a9885",
"assets/packages/duk_ui/lib/fonts/LufgaItalic.ttf": "d8f169e34feae34deafd580f227a3e9f",
"assets/packages/duk_ui/lib/fonts/LufgaMediumItalic.ttf": "9d9c7b7114cd7ffaea39d8dcbff15df2",
"assets/packages/duk_ui/lib/fonts/LufgaBoldItalic.ttf": "a818526e213cad1ab89ad23b7da355fc",
"assets/packages/duk_ui/lib/fonts/LufgaBlackItalic.ttf": "25fc4be833ac3dbf682ea2c543277721",
"assets/packages/duk_ui/lib/fonts/LufgaLightItalic.ttf": "089d17df7fd5a9b1c68e7fd7c2169ae7",
"assets/packages/duk_ui/lib/fonts/LufgaExtraLightItalic.ttf": "7df43127232ea7f51629d0656e41e695",
"assets/packages/duk_ui/lib/fonts/LufgaExtraBoldItalic.ttf": "7f6a56a09034eefe59d7879e6d30ca6f",
"assets/packages/duk_ui/lib/fonts/LufgaExtraBold.ttf": "c75c443b141cd41d4c93ebf9e4b9c4db",
"assets/packages/duk_ui/lib/fonts/LufgaBold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/packages/duk_ui/lib/fonts/LufgaThin.ttf": "d5d5c39332e5a1d490334bf508cb80f5",
"assets/packages/duk_ui/lib/fonts/LufgaMedium.ttf": "9ab833326b202fb55eb336db57aa3508",
"assets/packages/duk_ui/lib/fonts/LufgaSemiBoldItalic.ttf": "2b78ffbc04cd7dffa5cacbed005271f6",
"assets/packages/duk_ui/lib/fonts/LufgaRegular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/packages/duk_ui/lib/fonts/LufgaBlack.ttf": "b9752220c09f69872de74ee3173f26d5",
"assets/packages/duk_ui/lib/fonts/LufgaSemiBold.ttf": "1e053b4805d075f403dd3e44a3d4ec31",
"assets/packages/duk_ui/lib/assets/achievements/level_1.svg": "ab56aac6c080735ff607ee9824a3b98b",
"assets/packages/duk_ui/lib/assets/achievements/level_3.svg": "0c2b75c8c808d40984aeed417a79e321",
"assets/packages/duk_ui/lib/assets/achievements/level_2.svg": "1f0d9774c2e9284a9a2ba89a3c50f6f3",
"assets/packages/duk_ui/lib/assets/loader.svg": "78e51b3c92f43d7ddfe82c3357ce6b32",
"assets/packages/duk_ui/lib/assets/icons/bed.svg": "f14a3d6db5915a04775a00fc6d52a054",
"assets/packages/duk_ui/lib/assets/icons/sunrise.svg": "e3ae1ae65ae4d7614b1ff39e598b0938",
"assets/packages/duk_ui/lib/assets/icons/soda.svg": "6a7b467ddc2913ed56ab1671d8ddab0d",
"assets/packages/duk_ui/lib/assets/icons/hand-hart.svg": "4392deab5297f6be4718d06fae575e09",
"assets/packages/duk_ui/lib/assets/icons/signature.svg": "90188b10648c5e11e8962aeaa3a3beed",
"assets/packages/duk_ui/lib/assets/icons/user_hexagon.svg": "6075105ecc79e4c2a81e7500fb4d493d",
"assets/packages/duk_ui/lib/assets/icons/language.svg": "ce4acbf1a4829bb1f8e282c035792ddf",
"assets/packages/duk_ui/lib/assets/icons/water.svg": "87c6d34096326d75716cd6ea69b910e8",
"assets/packages/duk_ui/lib/assets/icons/ice-cream.svg": "cb6a1f2b93154f6fd80f3975662f6728",
"assets/packages/duk_ui/lib/assets/icons/run.svg": "5fedf0e55117cb93025e4798544108a9",
"assets/packages/duk_ui/lib/assets/isotipo.svg": "f4f3cfd1d235e7a434ae8f4b27ef87dc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "bf31a02b7373021c1d8f0f26fd553c73",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/icon.png": "7c241d3a1bc0e6828e1d7d80c9b51ef9",
"assets/assets/images/logo.png": "52837ebe78b5f43cc1c4b5ac9aeca797",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
