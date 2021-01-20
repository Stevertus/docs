/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58ca992c01ef4815db10315a4eae94a6"
  },
  {
    "url": "assets/css/0.styles.2543e0e6.css",
    "revision": "98e7fc346121ded29542498db6e501a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.312a3553.js",
    "revision": "2a6d2da66031a1185b0ff907c43bd126"
  },
  {
    "url": "assets/js/11.5a4395eb.js",
    "revision": "46020f5058690d185c7561a63025f594"
  },
  {
    "url": "assets/js/12.bcd0456f.js",
    "revision": "b6c6e6a4fbbff0ea12fb82856e431252"
  },
  {
    "url": "assets/js/13.36cb203e.js",
    "revision": "93db090b9d87ca71934f44b70a681ac6"
  },
  {
    "url": "assets/js/14.ce2c1c70.js",
    "revision": "5a84ae69fb5a1b6f4620271cfde9dc9e"
  },
  {
    "url": "assets/js/15.59b985da.js",
    "revision": "cfae00dbc5b1036c63fc449267094058"
  },
  {
    "url": "assets/js/3.d5e4f865.js",
    "revision": "71d3ae917ca5e144c9fd4105b4650583"
  },
  {
    "url": "assets/js/4.7373f61c.js",
    "revision": "de6c8a80021e4d398b94a27cdafc6980"
  },
  {
    "url": "assets/js/5.ed251d15.js",
    "revision": "51f23f36bd848bd2282728e239e42cd0"
  },
  {
    "url": "assets/js/6.9f3498e6.js",
    "revision": "dc4dafebf3e56f21c0a12ca8f191c546"
  },
  {
    "url": "assets/js/7.e4ebd962.js",
    "revision": "7f4fab30e549f7f19b457ae5549860f7"
  },
  {
    "url": "assets/js/8.8f4f81a1.js",
    "revision": "8107c60f999fe439166ad0496ee14389"
  },
  {
    "url": "assets/js/9.89d7a436.js",
    "revision": "9ab808435f3deef44e6f591feb65b050"
  },
  {
    "url": "assets/js/app.8200dc41.js",
    "revision": "fc5e4d3fd7ed3fed936c3a1ad1944de4"
  },
  {
    "url": "assets/js/vendors~docsearch.40a53132.js",
    "revision": "83c4540a4b9bd928a3fcee5ead93d87f"
  },
  {
    "url": "basics/index.html",
    "revision": "ef03e4e784078a01bd5065fad2d071b2"
  },
  {
    "url": "changes/index.html",
    "revision": "9f2dbf93fb7b6cebe9b606b308371733"
  },
  {
    "url": "cli/index.html",
    "revision": "83dce710b9785de5c290a2019ff12a2b"
  },
  {
    "url": "guide/index.html",
    "revision": "8c1e330010030c08e615a6f0a3ea4f71"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "4181ca22bacaac3d6869fa6d3a218944"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "d75976847cb20b155ab65f65120111bc"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "83cb68b9b8c4b5b441dc367a1a901a81"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "759397e79576c7cf78d1bb6b5b140f05"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "123257b1fd02bf91f6857b272bc507d8"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "a8c7d7888e7daff15202d08f08cde78e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "6123ef9726b2ba06c6dc57cc303f0591"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "a21b4017476a6c586bbd047203753a91"
  },
  {
    "url": "index.html",
    "revision": "3d067a4c9d8521ee54b7af6e15c95c07"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "89153366975ea72e71ce6528f898df80"
  },
  {
    "url": "texts/index.html",
    "revision": "8e8a63a0363bdb5d678dca4c5f5eebdd"
  },
  {
    "url": "utils/index.html",
    "revision": "ffe96e06bbe3b8dc0c681e4498186655"
  },
  {
    "url": "wrappers/index.html",
    "revision": "d466606607e4b1ca31351fd5d6fe2bd8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
