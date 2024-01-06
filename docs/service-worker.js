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
    "revision": "55735b41182f4ebfb91f60e719bde8cd"
  },
  {
    "url": "assets/css/0.styles.6fd81274.css",
    "revision": "69cf7ec301a57b67fa608449ee27a3ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.295a09a4.js",
    "revision": "6ce5dd934c47ff7b56de5edf77aa0cd9"
  },
  {
    "url": "assets/js/11.3cb441df.js",
    "revision": "fdfc80d87273b930f4cd726e96e9d69a"
  },
  {
    "url": "assets/js/12.aba9d3a7.js",
    "revision": "b33ddbd53cbbbac5252451487610005b"
  },
  {
    "url": "assets/js/13.3d940b29.js",
    "revision": "d373945cd88781ded4270adf5376c191"
  },
  {
    "url": "assets/js/14.9aad6468.js",
    "revision": "414a0ad8c493910951fe7e9d34d3364c"
  },
  {
    "url": "assets/js/15.df0c3f9f.js",
    "revision": "e7229a43ab5d18b5405a9b79bb9b72f7"
  },
  {
    "url": "assets/js/16.a189b413.js",
    "revision": "b764e3135b7cd1eaab4999906b870ec1"
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
    "url": "assets/js/5.7b94a191.js",
    "revision": "08c7eb889ccf22bda4581cefcfda7350"
  },
  {
    "url": "assets/js/6.2d41613d.js",
    "revision": "3c3a02bb8334459dc36eeafce0f2d364"
  },
  {
    "url": "assets/js/7.dc2cff21.js",
    "revision": "d3e592ee6038dc48b44486edd740a5d1"
  },
  {
    "url": "assets/js/8.cf04cbf4.js",
    "revision": "9656e1f6c46c2f8fe9b1faaa534c2069"
  },
  {
    "url": "assets/js/9.7bd82acf.js",
    "revision": "591d39055c92984d38f8ce6cfb2740b4"
  },
  {
    "url": "assets/js/app.5eac23dc.js",
    "revision": "6a6d101023a254f70f84c7619a52e4d7"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "basics/index.html",
    "revision": "1dddc009cd80b348c5145a0095f46992"
  },
  {
    "url": "changes/index.html",
    "revision": "1e4e5956ea74dd0a7c50776d798e2c76"
  },
  {
    "url": "cli/index.html",
    "revision": "03d23a06ce90a43de44c662f44e09178"
  },
  {
    "url": "guide/index.html",
    "revision": "6a958b75647e4b94f9887bb380124525"
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
    "revision": "0ba929d19f75b7b0d1069a234101dad4"
  },
  {
    "url": "logo.png",
    "revision": "bae387251ce4be16314b4dd7190b6e25"
  },
  {
    "url": "modules/index.html",
    "revision": "f23db844b38f75769120821d4e2f4628"
  },
  {
    "url": "texts/index.html",
    "revision": "fc3a54f2949e82b0ccf95a763091c8fd"
  },
  {
    "url": "utils/index.html",
    "revision": "e4e54107e3258e76b5ec6660993460ca"
  },
  {
    "url": "wrappers/index.html",
    "revision": "5b827eed3edd95eedc53ba89c2aa9a02"
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
