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
    "revision": "82a0a6cea146c710681715ad879c77d4"
  },
  {
    "url": "assets/css/0.styles.7b4e5be2.css",
    "revision": "d3c39ab06e4ba50d01f97dcaba3f5357"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6eece9a1.js",
    "revision": "10d6cd9ed38b8909d0976592f453b9ef"
  },
  {
    "url": "assets/js/11.c8e652b9.js",
    "revision": "2de0314f103f2a38c70a22612178eb73"
  },
  {
    "url": "assets/js/12.e72ae718.js",
    "revision": "ff1a8ead8ac76ef5526920040b71f0da"
  },
  {
    "url": "assets/js/13.36355b19.js",
    "revision": "497169c8b38f4c73f453a0b0ee3f029e"
  },
  {
    "url": "assets/js/14.5c94d079.js",
    "revision": "aa6769dd35914cca51d0e74daeb01162"
  },
  {
    "url": "assets/js/15.df0c3f9f.js",
    "revision": "e7229a43ab5d18b5405a9b79bb9b72f7"
  },
  {
    "url": "assets/js/16.6bc2aeaf.js",
    "revision": "97dc1f29412d928f1749fa8a0a0497a7"
  },
  {
    "url": "assets/js/17.9f196463.js",
    "revision": "1b87e1d4fd0b2d022a31fb4af4cc85b4"
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
    "url": "assets/js/5.0101fb96.js",
    "revision": "08a5249e54f62a4243f6a4e8aa9914c2"
  },
  {
    "url": "assets/js/6.2d41613d.js",
    "revision": "3c3a02bb8334459dc36eeafce0f2d364"
  },
  {
    "url": "assets/js/7.bb07e387.js",
    "revision": "7ed2129cea6a362366d1ebbe4ecdfeef"
  },
  {
    "url": "assets/js/8.cf04cbf4.js",
    "revision": "9656e1f6c46c2f8fe9b1faaa534c2069"
  },
  {
    "url": "assets/js/9.c991a8f8.js",
    "revision": "3a223d4d1d2063966deb5dbc75a9b9bf"
  },
  {
    "url": "assets/js/app.722464d9.js",
    "revision": "d8f7e884a1a783661d008d44a6f0a138"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "basics/index.html",
    "revision": "a492fb69698a1bd1a8d7c36a9e498f74"
  },
  {
    "url": "changes/index.html",
    "revision": "2c8bb8cca9a27ae16d60b31e2346637b"
  },
  {
    "url": "cli/index.html",
    "revision": "dac0cfc2b1e61cb57841802d9aacd72c"
  },
  {
    "url": "guide/index.html",
    "revision": "1da70594eab671146b1f9cec9293b262"
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
    "revision": "dc6cbf30f97506348e5f22c094159c01"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "037b0b86c216c66d0e78f7daabc8096e"
  },
  {
    "url": "texts/index.html",
    "revision": "08e1a15c424dc957d8530b65a675401b"
  },
  {
    "url": "utils/index.html",
    "revision": "4761d4925c5f8a4f7106f62feda7ea53"
  },
  {
    "url": "wrappers/index.html",
    "revision": "023abf41e56d78d3c7736a5f9d689b1b"
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
