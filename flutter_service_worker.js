'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7e985209267af78fbb767d23fa0c5040",
"version.json": "a35b094700db26348ec2f2a53c39b005",
"index.html": "dc7fa1f3abe899415e9fed005a9a035d",
"/": "dc7fa1f3abe899415e9fed005a9a035d",
"fetchDataFromExcel.js": "9e857747aa68508cf5f95e5b72df89ff",
"main.dart.js": "837912a196743751793ebc418547f4bb",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "474e97acd410c8ac4a6bc3f434ba0844",
"icons/Icon-192.png": "c97c9c6d73a917de0f8cd7bc2798f28f",
"icons/Icon-maskable-192.png": "c97c9c6d73a917de0f8cd7bc2798f28f",
"icons/Icon-maskable-512.png": "17d2725d76e557adc63105e75ac1a762",
"icons/Icon-512.png": "17d2725d76e557adc63105e75ac1a762",
"manifest.json": "4c4d2133a62918e1629d55469539e470",
"assets/AssetManifest.json": "be99d4723688605686910e3262976a4a",
"assets/NOTICES": "a827b28492f7e1c54469c5196d92017c",
"assets/FontManifest.json": "82fb37ec416653e76a362b48f934e0bf",
"assets/AssetManifest.bin.json": "e4379d94cd5a153bdc73f938c0f45864",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2e86cee14fb755be92d10c2d8e8acb0d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/img/warning.png": "fd3ab755626a405b2ba4d61e408eeef7",
"assets/assets/img/loader.gif": "726c30a8f4400ca0e6367357078de986",
"assets/assets/img/success.svg": "8949295ae23abab5d0460a9d737605d4",
"assets/assets/img/no_data_found.png": "a2cd7a61e417ce0746e9966275cc513e",
"assets/assets/img/error.svg": "320f90af291398fd97ca4d5d1c852ff6",
"assets/assets/logo/PRENEW.svg": "487835cf6546a02cd1b048c47bf57964",
"assets/assets/logo/prenew_logo_eagle.svg": "715a6aba5b23ad6f8bac039517d20641",
"assets/assets/logo/prenew_logo_background.svg": "b417f75fa2a82f2918c1ea98aea66916",
"assets/assets/icons/unit.svg": "79214eb79103437c02c75b271208269f",
"assets/assets/icons/circle.svg": "25d97cf9d864a46785d0c34fef7d4b19",
"assets/assets/icons/disable.svg": "322eed4cfd2279a0ebe244430ee7727d",
"assets/assets/icons/files.svg": "bcfde542a742d735c741c8c863ba196d",
"assets/assets/icons/file-certificate.svg": "218179bf134aa6d8180939633de2ca84",
"assets/assets/icons/warning.svg": "fa412e98f2e9eb38c5945ca48d63dd93",
"assets/assets/icons/versions.svg": "f48ac952dcca879a6b37912957867f1b",
"assets/assets/icons/zoom-in.svg": "1b5de53a55dffb90168ddcddf88fad93",
"assets/assets/icons/info_circle.svg": "de51fffca7307587da0dd2804f632e12",
"assets/assets/icons/asc.svg": "aa174bbd0d9fd42735382935c442d661",
"assets/assets/icons/zoom-out.svg": "6ffc93e86b5aa3264896cf8b8cd6569f",
"assets/assets/icons/circle-small.svg": "52be0dbd3e8665ea0334d8dd5e706827",
"assets/assets/icons/share.svg": "0b999a6e2c89fd0a6232a061ce2e76fa",
"assets/assets/icons/filter.svg": "2d8efb992f759d2832ff9df14b721f40",
"assets/assets/icons/timeline.svg": "0b39c4df108f362f33211133e6e21d03",
"assets/assets/icons/parking_not_allocate.svg": "27a87cf7706c6ae989bd88e7a0ea05a3",
"assets/assets/icons/circle-dot.svg": "17ba2e570b26f6715020b20a77075bf9",
"assets/assets/icons/parking.svg": "0b2e02450c721d86add34e746e1904f3",
"assets/assets/icons/users.svg": "02ea996474a1e431a9ec0903c57d5fdd",
"assets/assets/icons/dsc.svg": "77eeb2a1ec7171be4ba364b9c6241110",
"assets/assets/fonts/noto_sans/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/noto_sans/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/assets/fonts/noto_sans/NotoSans-Black.ttf": "45e579d4c5952595df0d5b0dfe75d53e",
"assets/assets/fonts/noto_sans/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/noto_sans/NotoSans-Thin.ttf": "1cf299dc471a137219ca9570173f53a1",
"assets/assets/fonts/noto_sans/NotoSans-SemiBold.ttf": "dfad8b708bc7b6911ed49a6f35680b10",
"assets/assets/fonts/noto_sans/NotoSans-Light.ttf": "9f45a3e1e6aa474995ba423d6137e5c7",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
