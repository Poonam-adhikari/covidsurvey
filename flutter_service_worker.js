'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "736a6cf90e33077fcc3e831b142e9e95",
"assets/assets/b3.png": "9e5e1d9fea8b83e380fc7463da87f403",
"assets/assets/five.gif": "43bcd414669c9dc5c7eac8452a231507",
"assets/assets/login_background.png": "e65d5af883892116597b8cf709a412bd",
"assets/assets/logo.png": "a2fcedbf7f7c2b9e918580e05d1dfd13",
"assets/assets/success.flr": "1c85c4f2ad186f82907c8fa945107b6f",
"assets/assets/supplies.png": "2c3ae65a554d1a19b4c0df9a4fd381e5",
"assets/assets/typing3.flr": "19531a4818a8d8321d57380f80cb55a5",
"assets/assets/world.flr": "6ba0e40dc5b1d241a2f9d41194cb8694",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "16da5e36cb7dec79f8dff99acdbf465f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "aff0df516d7e7b0784ef1e5c9b1a5d24",
"icons/Icon-192.png": "aff0df516d7e7b0784ef1e5c9b1a5d24",
"index.html": "d9a756c15f0fca63719048723b70a041",
"main.dart.js": "2ad2a41ea3e13e16e6c00e895ad74701",
"manifest.json": "9871e6080c8213b7f00a6d59a45b0bec"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
