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
    "revision": "95af7d6afd1ed197e4dc3d7da5ed9c9e"
  },
  {
    "url": "assets/css/0.styles.3099ab05.css",
    "revision": "49b62851363003ea651f9ee57072373c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2219a83a.js",
    "revision": "1c5558c4101248b91ffac39033338ac8"
  },
  {
    "url": "assets/js/11.696907b0.js",
    "revision": "6ede0c4158a5cd7d6c69c056f9b3c261"
  },
  {
    "url": "assets/js/12.d8ea0024.js",
    "revision": "72bbdf0160272e3dceda3add32a4496a"
  },
  {
    "url": "assets/js/13.9db619dc.js",
    "revision": "bc80c8cb74ed63ce77c553467040b417"
  },
  {
    "url": "assets/js/14.bae0e3a4.js",
    "revision": "4a1ac9d51885c3129e46b8b60f6357bb"
  },
  {
    "url": "assets/js/15.307f0031.js",
    "revision": "32c35913d2ca4ec4049a72500f8a7dcd"
  },
  {
    "url": "assets/js/16.d5f5f687.js",
    "revision": "6a419160290b2821e1caa44fc7d1fcf7"
  },
  {
    "url": "assets/js/17.a52a9175.js",
    "revision": "ca8a1cbe53ddc6c601853d3a6458ee2f"
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
    "url": "assets/js/6.403d2d02.js",
    "revision": "73a8cd8d6605dddaafbd4c48264c0c9e"
  },
  {
    "url": "assets/js/7.9a2a7292.js",
    "revision": "3f6c7652a512645ee9871495cd2286ac"
  },
  {
    "url": "assets/js/8.4ebf95ae.js",
    "revision": "a6635869ac1b44b40dcbc8226f74b7ee"
  },
  {
    "url": "assets/js/9.ef81edb1.js",
    "revision": "628b11451572c6620d481752b0ff45fd"
  },
  {
    "url": "assets/js/app.d6e19bbc.js",
    "revision": "1d4c4daa302945676471b217651307a7"
  },
  {
    "url": "assets/js/vendors~docsearch.e78d7987.js",
    "revision": "a70c6e6792996b68b67cff7cd552e7d0"
  },
  {
    "url": "basics/index.html",
    "revision": "71b5a2635ce5541d40cc99b6e83f9a20"
  },
  {
    "url": "changes/index.html",
    "revision": "f5d6e7b7bc4e318fa0fd4cd7a5380ffc"
  },
  {
    "url": "cli/index.html",
    "revision": "cd5283f238f440a207cf77b237b2ce7b"
  },
  {
    "url": "guide/index.html",
    "revision": "2f9859a924430f9adafcefea56404d8c"
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
    "revision": "b6763e07f36e8a3dc96b9901657040f0"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "ed2cb9d149033359e5ee17fb81be81b3"
  },
  {
    "url": "texts/index.html",
    "revision": "33107fce7b8a8566541bfbcb5a51022d"
  },
  {
    "url": "utils/index.html",
    "revision": "5c916d008c7a7c03a6f55ebe220c4d29"
  },
  {
    "url": "wrappers/index.html",
    "revision": "455d690dbc3d00bcfcc42422ef574bb2"
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
