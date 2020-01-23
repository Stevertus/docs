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
    "revision": "6bba3367ebf154440342804f360e7ea5"
  },
  {
    "url": "assets/css/0.styles.c185b6a8.css",
    "revision": "002e0140e9f5aa6e3422caaf96380e71"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.142e5bba.js",
    "revision": "8e11515112ce89c3280a751318ef2aa9"
  },
  {
    "url": "assets/js/11.99d488d9.js",
    "revision": "1979b042f83df087f3d1e1b5901bccc5"
  },
  {
    "url": "assets/js/12.7c6fa769.js",
    "revision": "14c0785cdb0039ff9467a72630aa0713"
  },
  {
    "url": "assets/js/13.9f239187.js",
    "revision": "fdb4ccbc13e7d281aa8b8b85eaad6f07"
  },
  {
    "url": "assets/js/14.451f769f.js",
    "revision": "2a08671aacecc9ab6b8164af7606f5a2"
  },
  {
    "url": "assets/js/15.42062a04.js",
    "revision": "92eb4d101bd44e481dfbd0af110fa080"
  },
  {
    "url": "assets/js/2.97d93b85.js",
    "revision": "34ad365658970281395741c42cb6fff6"
  },
  {
    "url": "assets/js/3.2d5d9621.js",
    "revision": "b7cecf95f9beb211b8263bb148ed7cee"
  },
  {
    "url": "assets/js/4.8d3b251a.js",
    "revision": "19b410bdde965df70bcb933aafe3f04a"
  },
  {
    "url": "assets/js/5.5ffd5541.js",
    "revision": "7ef9150e9639740cc1c62ced2f386893"
  },
  {
    "url": "assets/js/6.bc9da8b5.js",
    "revision": "fa28760c71d4592797c379ef9d3d9414"
  },
  {
    "url": "assets/js/7.15c93cec.js",
    "revision": "7745ba8f00ff98daabde5b31469592fe"
  },
  {
    "url": "assets/js/8.1526b8de.js",
    "revision": "9d50f17a309bf1ec8cf87d608277364d"
  },
  {
    "url": "assets/js/9.bc3747f4.js",
    "revision": "bca149b1e4ec6285adbe3fa9c335519e"
  },
  {
    "url": "assets/js/app.c71f2e6a.js",
    "revision": "080bfcb60a80e5294d099b6e090588f6"
  },
  {
    "url": "basics/index.html",
    "revision": "6fbc7c8a56006e3d6ac4de747abc3d30"
  },
  {
    "url": "changes/index.html",
    "revision": "c01c209218ebd45be8fcea79ba8dd99c"
  },
  {
    "url": "cli/index.html",
    "revision": "63ce85eacddce2cc86356c3c38171f01"
  },
  {
    "url": "guide/index.html",
    "revision": "85bdd20876b00a3a1b59dbb02278f1cb"
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
    "revision": "6e8a6c8c90660d55090e335708772ddb"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "ac46c560e94f0bc0993195ff8c415c3b"
  },
  {
    "url": "texts/index.html",
    "revision": "9c556e65dcf2728118b942e3de0d15e0"
  },
  {
    "url": "utils/index.html",
    "revision": "6fc8883ec99868048ece5e90701ea4f9"
  },
  {
    "url": "wrappers/index.html",
    "revision": "5ba4dadee21b1dd78a578025a224607d"
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
