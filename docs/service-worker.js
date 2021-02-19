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
    "revision": "cc15eaf8578f2969dc29339b6a760d32"
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
    "url": "assets/js/10.a2af9eb1.js",
    "revision": "48697e8dceb5e21516aec33339753680"
  },
  {
    "url": "assets/js/11.e7c5fff1.js",
    "revision": "0b50d3a792ce24720b9ae31006bf1376"
  },
  {
    "url": "assets/js/12.bcd0456f.js",
    "revision": "b6c6e6a4fbbff0ea12fb82856e431252"
  },
  {
    "url": "assets/js/13.db0f6b08.js",
    "revision": "90fb1ca038035a5f5f0991018bd33b00"
  },
  {
    "url": "assets/js/14.43a267de.js",
    "revision": "262cb5a6dd0149b00586e39c25923fc6"
  },
  {
    "url": "assets/js/15.014e2859.js",
    "revision": "00d2ab7355e420a1db395ab31cac1e06"
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
    "url": "assets/js/7.9801f09a.js",
    "revision": "9c0696b998f60c8fa668854deeacf0c2"
  },
  {
    "url": "assets/js/8.108b5884.js",
    "revision": "df8047bb2a1aff2eb72984c3ae23718b"
  },
  {
    "url": "assets/js/9.e914a2f1.js",
    "revision": "e04eeea7499ad06a2893057a7d9d7bcd"
  },
  {
    "url": "assets/js/app.60a132e3.js",
    "revision": "a114393274d2866775d74a58de612d78"
  },
  {
    "url": "assets/js/vendors~docsearch.40a53132.js",
    "revision": "83c4540a4b9bd928a3fcee5ead93d87f"
  },
  {
    "url": "basics/index.html",
    "revision": "2b50e724b50a1b492c4a606c61da1c1e"
  },
  {
    "url": "changes/index.html",
    "revision": "84a7099d08e276e3e202397530797e03"
  },
  {
    "url": "cli/index.html",
    "revision": "0a427f0e781dc3e1f479039caaf0cf7d"
  },
  {
    "url": "guide/index.html",
    "revision": "8a512ca5dd89151aba75922fae6ee46f"
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
    "revision": "f7f3fe8647043c3f4c9043b7fe16492c"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "ff1ba5819da1ee7112dd43a9c50817e3"
  },
  {
    "url": "texts/index.html",
    "revision": "062cbd02f0037306290d47d17af54df8"
  },
  {
    "url": "utils/index.html",
    "revision": "206af6fc49297eb0bb3b42e0d0c4ebe6"
  },
  {
    "url": "wrappers/index.html",
    "revision": "b7f4ce57fb6cb8495c83b6049a51a766"
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
