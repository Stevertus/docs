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
    "revision": "738a10c7830d04c49fb0c7f83c40da41"
  },
  {
    "url": "assets/css/0.styles.4e729cb1.css",
    "revision": "98e7fc346121ded29542498db6e501a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f141a078.js",
    "revision": "caf462444efe4e1a49366494e076e8cc"
  },
  {
    "url": "assets/js/11.5080da60.js",
    "revision": "647101bf443fe6e6b029814be3add29f"
  },
  {
    "url": "assets/js/12.81968bdc.js",
    "revision": "bcaf43a489c84e30fca837a3012e9f22"
  },
  {
    "url": "assets/js/13.5e0a70c6.js",
    "revision": "8e35dfbf76c9fb12c8000e489319c68e"
  },
  {
    "url": "assets/js/14.8eb133f2.js",
    "revision": "61c811ecbc9a8d4ef58aaf0174707d63"
  },
  {
    "url": "assets/js/15.da860906.js",
    "revision": "2f979bd32486327696065570baea3c98"
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
    "url": "assets/js/7.3825aa1f.js",
    "revision": "244b35f0dc3f6850ca09be6508605c40"
  },
  {
    "url": "assets/js/8.3aa2e3cf.js",
    "revision": "0526de1a3e9982d995d11c0560f80e1a"
  },
  {
    "url": "assets/js/9.08d2516f.js",
    "revision": "0322d362f48a6ce67f3780dc21e2f0f6"
  },
  {
    "url": "assets/js/app.f6a9c5a8.js",
    "revision": "96fac04960dbad4c44e8316013c26e89"
  },
  {
    "url": "assets/js/vendors~docsearch.40a53132.js",
    "revision": "83c4540a4b9bd928a3fcee5ead93d87f"
  },
  {
    "url": "basics/index.html",
    "revision": "48662db6ab5b174a6fdac379839afd53"
  },
  {
    "url": "changes/index.html",
    "revision": "ba8b650d3bd7fc62a75b2ceb4837e34d"
  },
  {
    "url": "cli/index.html",
    "revision": "2f41026fc2f98e320ce87f0c80a1663e"
  },
  {
    "url": "guide/index.html",
    "revision": "b7f6919e318ed1116874c17684e2650e"
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
    "revision": "3c4ff4f87d2fa8054c3d0021ad92b718"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "b219d4237887e03a328c7507e314a668"
  },
  {
    "url": "texts/index.html",
    "revision": "1e470a7101a95e37cf2885697b3bea13"
  },
  {
    "url": "utils/index.html",
    "revision": "71780dd27f6095f58bae234d1f6f3d4c"
  },
  {
    "url": "wrappers/index.html",
    "revision": "34b32d285d0e04fde4918613588896ab"
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
