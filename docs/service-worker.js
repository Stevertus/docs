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
    "revision": "26aa19c4735b79043b936ca549796556"
  },
  {
    "url": "assets/css/0.styles.0c892193.css",
    "revision": "f89ca10a6e751c4fb7b06709cbfb61c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcb34e68.js",
    "revision": "4a6817c8cbf4d242c24ee3fb737ea04a"
  },
  {
    "url": "assets/js/11.9b0ef040.js",
    "revision": "f73f5b68a5703a99a294571201bd4468"
  },
  {
    "url": "assets/js/12.67a8a205.js",
    "revision": "cc63edf91cfd964fdc1354b9bc152abc"
  },
  {
    "url": "assets/js/13.7d10671a.js",
    "revision": "6e5e47aa8dbdf0d4e143a2f65ce47fcc"
  },
  {
    "url": "assets/js/14.7a646605.js",
    "revision": "5d8dbcaec117421335fd5a06a68493ed"
  },
  {
    "url": "assets/js/15.5a8b834d.js",
    "revision": "2f894b1379ca5c6a12e5d133f7c161f0"
  },
  {
    "url": "assets/js/16.773ef420.js",
    "revision": "38aefb88b793402333eac2e3bd27eee4"
  },
  {
    "url": "assets/js/17.20deddb1.js",
    "revision": "ba0f9cc9f7900358ceeb275d6959771e"
  },
  {
    "url": "assets/js/3.dfd5eec8.js",
    "revision": "60112e67f159c8211c524949203d9304"
  },
  {
    "url": "assets/js/4.b62f82f6.js",
    "revision": "856fa0ac1c67b7a5837c39a27878b2f6"
  },
  {
    "url": "assets/js/5.e7619d9a.js",
    "revision": "89a582a8ce5d0f39d4313e9e7c3ba46f"
  },
  {
    "url": "assets/js/6.dbde5f1e.js",
    "revision": "047bd8eeddb22d5c0fba49b08ef180e8"
  },
  {
    "url": "assets/js/7.560827c4.js",
    "revision": "8acce37591f59de8e057c0cd0e493fc9"
  },
  {
    "url": "assets/js/8.4ebf95ae.js",
    "revision": "a6635869ac1b44b40dcbc8226f74b7ee"
  },
  {
    "url": "assets/js/9.d3009a46.js",
    "revision": "9e091225df5e1584c6bef406a5cc97f6"
  },
  {
    "url": "assets/js/app.a0c909d9.js",
    "revision": "08738a3315201b2fae700e1b0dda89b9"
  },
  {
    "url": "assets/js/vendors~docsearch.e78d7987.js",
    "revision": "a70c6e6792996b68b67cff7cd552e7d0"
  },
  {
    "url": "basics/index.html",
    "revision": "15d789c5a900ab256362ee944b0814d0"
  },
  {
    "url": "changes/index.html",
    "revision": "c65065ce69c3b1df24bdd5b48501cb87"
  },
  {
    "url": "cli/index.html",
    "revision": "72f53e5b41232017351b69b51c264bec"
  },
  {
    "url": "guide/index.html",
    "revision": "73f582178ad5b6141ebe6c9d1aa917c7"
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
    "revision": "9ed852e9d1ef95d046b4ce8a728c19c3"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "807c4f53aebb2b8bd4af9768f539bf3e"
  },
  {
    "url": "texts/index.html",
    "revision": "266fcde4298b7eb9c48a40e5a6fed0d0"
  },
  {
    "url": "utils/index.html",
    "revision": "a3aaaa7129b2954152475b4668da1d75"
  },
  {
    "url": "wrappers/index.html",
    "revision": "b2b776c1ecc352f90398167ec4babfe9"
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
