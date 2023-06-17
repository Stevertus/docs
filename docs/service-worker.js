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
    "revision": "8f7c79482991a921988aef4203d5a81a"
  },
  {
    "url": "assets/css/0.styles.ea36118f.css",
    "revision": "ac8c5e36e9ed26dfef19c3ddb505244d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a89c419.js",
    "revision": "d6d1d59bbc8691aee6fa2fa398daeaf1"
  },
  {
    "url": "assets/js/11.faaa215c.js",
    "revision": "a4bf6028b0ec8660f3699b2138018d35"
  },
  {
    "url": "assets/js/12.53adf62c.js",
    "revision": "914ac05541d2d8d1edb03e91fac56192"
  },
  {
    "url": "assets/js/13.a3a59a79.js",
    "revision": "f00ebdfc21c0969ef5ef0e75595db0cd"
  },
  {
    "url": "assets/js/14.cfc89862.js",
    "revision": "b0128253b67947067d349058eaa06dc6"
  },
  {
    "url": "assets/js/15.ab4a9617.js",
    "revision": "8669d7269092ec55cb2cdc4d08c581fa"
  },
  {
    "url": "assets/js/16.f5442387.js",
    "revision": "e75b3d4a47fcc1fcbc572815f83cdbe0"
  },
  {
    "url": "assets/js/17.9bfd5168.js",
    "revision": "21fbd09bcc0fb1b65ad01338815cd1eb"
  },
  {
    "url": "assets/js/18.a7dbb55f.js",
    "revision": "1931bd2b7428b64a8187b6bbedbd5d15"
  },
  {
    "url": "assets/js/3.854349fe.js",
    "revision": "a65fbe5d9f0e57bb45a29c2836ae278a"
  },
  {
    "url": "assets/js/4.afda6bc7.js",
    "revision": "ad68b716340489e1d9232c9e40cd4ab9"
  },
  {
    "url": "assets/js/5.2f96d947.js",
    "revision": "71b1bccf5afea24af94e3971cca6436b"
  },
  {
    "url": "assets/js/6.27ef4142.js",
    "revision": "913d3abcc8bdb24e5566759e917ab1e6"
  },
  {
    "url": "assets/js/7.56651ae6.js",
    "revision": "3270370c8dc34a4382d4ccf4f910bc0c"
  },
  {
    "url": "assets/js/8.cf04cbf4.js",
    "revision": "9656e1f6c46c2f8fe9b1faaa534c2069"
  },
  {
    "url": "assets/js/9.bed413e2.js",
    "revision": "68c24bf3e7ff6f6311d5a18200cbc22a"
  },
  {
    "url": "assets/js/app.e5a6abb1.js",
    "revision": "402ef12e44b8c36423c2bc9b9de6c798"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "basics/index.html",
    "revision": "0bcb74bdcda2d98a725b8dd67f369108"
  },
  {
    "url": "changes/index.html",
    "revision": "7adfb8b0f772e99cbec9910115e0f06c"
  },
  {
    "url": "cli/index.html",
    "revision": "c10996b3b45b05ab3299003e100afda8"
  },
  {
    "url": "guide/index.html",
    "revision": "7663ff51182f4f0f3fce12fd4939f82c"
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
    "revision": "2a322eb20dc02871c8fa307386996c79"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "a04a3fa13a12c1ad22ceaa0d8078c2c3"
  },
  {
    "url": "texts/index.html",
    "revision": "ed0a1b3d4909f124c23af11780e7acdb"
  },
  {
    "url": "utils/index.html",
    "revision": "82e620a88ff4e2bfa79ddf5d6297938a"
  },
  {
    "url": "wrappers/index.html",
    "revision": "c213ec5eafd9df6fd37daf8706539867"
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
