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
    "revision": "4e68b7f9e01226cb3882dcb1d7935de4"
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
    "url": "assets/js/10.0f3eae7c.js",
    "revision": "fd7ee913a97018a19dcf605fcb52ff06"
  },
  {
    "url": "assets/js/11.85c13636.js",
    "revision": "d9530a50206b54286091c80f01cd75fd"
  },
  {
    "url": "assets/js/12.aba9d3a7.js",
    "revision": "b33ddbd53cbbbac5252451487610005b"
  },
  {
    "url": "assets/js/13.164873ee.js",
    "revision": "320558856dd53d7a3145f66fa0b12792"
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
    "url": "assets/js/9.8dafae01.js",
    "revision": "4198a2e3dd6daf1825e2f71d8fecbeaf"
  },
  {
    "url": "assets/js/app.7662dd37.js",
    "revision": "1d8cd2be054f3b8661c0a006e75b1a28"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "basics/index.html",
    "revision": "fbbcb265a7a3aa4870ab61e8c8ccff0d"
  },
  {
    "url": "changes/index.html",
    "revision": "6a04920104ac8692ebff6ff6c1da3d97"
  },
  {
    "url": "cli/index.html",
    "revision": "82ea22e3ccc2c2c2dd59cefd620856ae"
  },
  {
    "url": "guide/index.html",
    "revision": "03a135657e68bd337c549ba5e4304b52"
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
    "revision": "5eb65f75ec2f9d46d5fdf84e8bf4904b"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "a4b8f80fb0383572802c5b688e729e81"
  },
  {
    "url": "texts/index.html",
    "revision": "8439b7ec96cf23ef3439565598549c84"
  },
  {
    "url": "utils/index.html",
    "revision": "8f10bd11c64dd8a607fbac2ca93435cf"
  },
  {
    "url": "wrappers/index.html",
    "revision": "4e861cb88f5d4d3903cf14f519cf7322"
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
