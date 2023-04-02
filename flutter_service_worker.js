'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e65655dafe7a88e0ee3ace1e474adf73",
"assets/assets/images/ads.png": "2e358bba976d1db5e7ee0f2ef7a08d08",
"assets/assets/images/ads2.png": "14b195640f5054cad641e7470da68793",
"assets/assets/images/ads3.png": "f29f7019ae0fd45f43e0ccd076768af7",
"assets/assets/images/android_icon.png": "37b19e1155556c3b8177342096020945",
"assets/assets/images/apply_job.png": "690ae99872b26555e957ab647b6e2296",
"assets/assets/images/bird_shadow.png": "b5c309efe71c4b95df9e8f03c729f6ad",
"assets/assets/images/bird_shadow_2.png": "bc94ed0c371c9648b44a465435d7c005",
"assets/assets/images/calendar.png": "63bd4e416ad9208f2cd71c0a9d7a8742",
"assets/assets/images/chilli.png": "db69d025de9b4e45f7bb435145606856",
"assets/assets/images/clipboard.png": "d4dcea6d57914b0bc4a114adc3d8b7db",
"assets/assets/images/coworking.png": "721fa781780d11e44bc066edcb6051c0",
"assets/assets/images/employer_qr.png": "fb6c2744e8632dc47da3aef9f608ecc5",
"assets/assets/images/employer_qr_v2.png": "fd8e77ee0ac583df468344730eccf3d9",
"assets/assets/images/GetBizzy_text.png": "8236965570fbe226c2d4a5051d2380c2",
"assets/assets/images/hidepass.png": "6bea8ded1f6c070ea81c2aec387bdf82",
"assets/assets/images/icons/add-square.png": "3d7d6cd08c68ad3d8198d8344ba16d7f",
"assets/assets/images/icons/add.png": "2043541b5fddcbbd94e49647ec5dc0a5",
"assets/assets/images/icons/arrow_right.png": "7864916d1d6a8fe48fa627729c6cc655",
"assets/assets/images/icons/availability_afternoon_off.png": "1147508a785b3175987507e3c6a58a28",
"assets/assets/images/icons/availability_afternoon_on.png": "36053b03ed6f73807e9f1d0a1d787c60",
"assets/assets/images/icons/availability_evening_off.png": "83a9299924aa4d204fdc80aec3d71ee6",
"assets/assets/images/icons/availability_evening_on.png": "d5e518f9e1c1ad550c1b7638df8976b1",
"assets/assets/images/icons/availability_morning_off.png": "2b96876a0e37d32fe1c5da50ed23be30",
"assets/assets/images/icons/availability_morning_on.png": "79263909e39b8f8713a23e628f5250ec",
"assets/assets/images/icons/availability_off.png": "8b80aa4ff69de870a8be2b0d7c6e10b4",
"assets/assets/images/icons/availability_on.png": "ac307a5f8570b4c5230d6c3d044b828d",
"assets/assets/images/icons/availability_overnight_off.png": "6b21586e326e7c3a4320bf901f9d0b45",
"assets/assets/images/icons/availability_overnight_on.png": "f75997b178fc27911d63d1a783cea531",
"assets/assets/images/icons/back_button.png": "7eff872a505f963beab987717278d043",
"assets/assets/images/icons/book-saved.png": "b4cd3ff9d85cfc28763b1a8e74a38d92",
"assets/assets/images/icons/briefcase.png": "aff0c769e7bcf2ab7909a6cf6ee64ae0",
"assets/assets/images/icons/calendar.png": "5747f8716261ee05a02d7c541a9a5084",
"assets/assets/images/icons/call-off.png": "1169fa2572ddd6f1d0bd13d3f33d48e9",
"assets/assets/images/icons/call-on.png": "f7d7aa5760bd54d53ddf083cf663e21a",
"assets/assets/images/icons/cert.png": "7733484bb212d2bcd578b761e0452980",
"assets/assets/images/icons/chat-off.png": "f941a0c02ede616359ac31bd67e2a6a8",
"assets/assets/images/icons/chat-on.png": "5d2dd196c6786a5e16074ccdc1296a95",
"assets/assets/images/icons/check.png": "7e7bd55c123659c789270c0106cc8bd1",
"assets/assets/images/icons/check_no.png": "e83557aeec1824444913702877ffc877",
"assets/assets/images/icons/check_yes.png": "e5d437200981e95339815f10dc2323cc",
"assets/assets/images/icons/clear.png": "859da95b823f95a8ad6069ccb176eab9",
"assets/assets/images/icons/clock.png": "44357017835050e3543a71ab3b529b1e",
"assets/assets/images/icons/close-circle.png": "2c7d88ae5049b9b480f5a6f96c4471b3",
"assets/assets/images/icons/copy.png": "89348adb252245046be60c6e0568e0b3",
"assets/assets/images/icons/copy_referral_code.png": "18dd294447ac4992d0eab8ee1d79a815",
"assets/assets/images/icons/default_pin_focus.png": "ba1dab8deecc29adc34e4521bfd2de50",
"assets/assets/images/icons/default_pin_non_focus.png": "3031cce9e514430fdaeb08fbc6df0ff5",
"assets/assets/images/icons/default_pin_out_focus.png": "d6c3f877be4a299bc470370c0830b6c6",
"assets/assets/images/icons/default_pin_out_focus1.png": "f6dbda643694d102edc52ed39052945e",
"assets/assets/images/icons/delete.png": "de78eddc2230a93db283329627b3c342",
"assets/assets/images/icons/description.png": "a6a05c1b40882a4e4590f8aaf542fea9",
"assets/assets/images/icons/description_.png": "f125fa7f6d5576228cd6c3efc18364e5",
"assets/assets/images/icons/diamond.png": "a8808c2c69955b6c19ef162d11059bf6",
"assets/assets/images/icons/direction.png": "e66d59264e05c5b232063a1581c20753",
"assets/assets/images/icons/document-forward.png": "85ae3349654b8ec39e667e2a7427faf3",
"assets/assets/images/icons/document-text.png": "e656d3c1a4e9bce614a63b31723e6407",
"assets/assets/images/icons/document-upload.png": "1979a741c50d6e4ac3e3076a09bf25d3",
"assets/assets/images/icons/down.png": "6969c37506c7e4389ebae257dcbdfc93",
"assets/assets/images/icons/edit-2.png": "44b7af5fee6a9bd497aca0d272a0ec9a",
"assets/assets/images/icons/edit.png": "8b16a32deb0f95d0e2bfcb8ada4fc120",
"assets/assets/images/icons/email-off.png": "b2b08379aff7f53151ff107986f8024f",
"assets/assets/images/icons/email-on.png": "d537e9c9e11847cf15fd16de044f7f59",
"assets/assets/images/icons/email.png": "94e6080ba8e19d8341f24deba4ca1409",
"assets/assets/images/icons/filter.png": "37975c6a1be597a856024f1ab59f39e2",
"assets/assets/images/icons/Find%2520job-off.png": "b3cb17ff8671b5bf2528de4cb1595583",
"assets/assets/images/icons/Find%2520job-on.png": "80c2e13161d0414f14bd59d56fcbfbf0",
"assets/assets/images/icons/fire.png": "3e529ef29075608a9bcf100bc040b068",
"assets/assets/images/icons/heart.png": "6819949232f2cb7e25399cc186a49d3e",
"assets/assets/images/icons/heart2.png": "867749916a397593bf5b48ae4df5ea0f",
"assets/assets/images/icons/hidepass.png": "6bea8ded1f6c070ea81c2aec387bdf82",
"assets/assets/images/icons/home-off.png": "588abdbb583d51d4ea49c5b4e8e8f454",
"assets/assets/images/icons/home-on.png": "122aa0d46b7f114ba6f050ee9575f74e",
"assets/assets/images/icons/house_pin.png": "c0301e2529443727456a42d829f72e78",
"assets/assets/images/icons/info-circle.png": "d32583f71eb744bd5976e516457ed983",
"assets/assets/images/icons/job_detail.png": "146c080bbbca118883e71f86456a600b",
"assets/assets/images/icons/job_list.png": "c19071c6683dbfdca532ded1c1600db2",
"assets/assets/images/icons/job_map_pin.png": "b3f7718d61ae951c600d024d606d0cfd",
"assets/assets/images/icons/job_map_pin_gray.png": "e9d8a8e362b262a1ed49eaf1d87e6e2e",
"assets/assets/images/icons/job_map_pin_red.png": "5108896c0cb181c97a94a89fb9976de3",
"assets/assets/images/icons/lamguage.png": "f424fa442820dad7f8290459d783384a",
"assets/assets/images/icons/login.png": "e2ed40ba791fefeec8c954c9583d8a5f",
"assets/assets/images/icons/logout.png": "a7f291a468efad650434d41efa414389",
"assets/assets/images/icons/main_menu_1-off.png": "488b29fbdb50b5699f91d313c0df3253",
"assets/assets/images/icons/main_menu_1-on.png": "e7f2d344b57e3116bd9e5f71dbe1c7f8",
"assets/assets/images/icons/main_menu_2-off.png": "4256efec8dfbbf5b96828b9a021f0780",
"assets/assets/images/icons/main_menu_2-on.png": "f78e6ff056e7de1d083276227d2741bf",
"assets/assets/images/icons/main_menu_4-off.png": "3cf3bd52a220646dd51741e62ded6893",
"assets/assets/images/icons/main_menu_4-on.png": "5f30bc5f5ff226b08090fb5d229d9dfa",
"assets/assets/images/icons/main_menu_5-off.png": "0d300588cbb0aa9909d8a4771a1fa2d1",
"assets/assets/images/icons/main_menu_5-on.png": "44ee0b6761110a1ac73880c1fde65a2b",
"assets/assets/images/icons/map_pin.png": "871a953f9123fc55292b2813aad79681",
"assets/assets/images/icons/map_view.png": "5670eb2c9464898438f8f75f2232a5e8",
"assets/assets/images/icons/map_view_brown.png": "f4d3119e5122ac466b0a7fdbaacf5371",
"assets/assets/images/icons/more.png": "617abb6f42c79857646ba81d96e11262",
"assets/assets/images/icons/mouse-square.png": "cef53391bdba12231d64c569c00a231b",
"assets/assets/images/icons/My%2520jobs-off.png": "d4cb519e801df1989d87e395fa3e1737",
"assets/assets/images/icons/My%2520jobs-on.png": "0ebf8f064078f663666919d3efc9819a",
"assets/assets/images/icons/partner.png": "f9a1a917003f40c9f5c8ae2d7ddb3f59",
"assets/assets/images/icons/perks.png": "9caa60d57c150321624c4ee3657d45c8",
"assets/assets/images/icons/perks_.png": "1cfe735980df60b80c66165aac925c36",
"assets/assets/images/icons/phone.png": "fcee617f1326ac0ecad5ef61a7281f29",
"assets/assets/images/icons/pin.png": "de8b46b64effe856503cf65f91e356a7",
"assets/assets/images/icons/positions.png": "da0b860184478784a746e04c17e18bf2",
"assets/assets/images/icons/Profile-off.png": "85fcacc29e1e8ec1e775a591661ee4bf",
"assets/assets/images/icons/Profile-on.png": "c12829e950e55db13a7b16a40282337a",
"assets/assets/images/icons/qr_code.png": "e47920093cfc07c1910803b2493e7c3d",
"assets/assets/images/icons/quote.png": "39716e8cf7a8f122f290fc597d418b2f",
"assets/assets/images/icons/radio-off.png": "225480fa7ee53e76fcf3c110e9b051fa",
"assets/assets/images/icons/radio-on.png": "846592f3ae6d55c2433893cc625b412f",
"assets/assets/images/icons/rating.png": "56af92835201df3750c30d92c594e2d4",
"assets/assets/images/icons/refer.png": "6f8d2c4302efa5800d5487a26adcaf75",
"assets/assets/images/icons/resume-off.png": "ffa3e8243ca61b8cd491da6e273d9588",
"assets/assets/images/icons/resume-on.png": "657fff1a78d1a2ecd0d3b46b7fd0b412",
"assets/assets/images/icons/scan.png": "963727d2a4179a21425a6065da2899ff",
"assets/assets/images/icons/search.png": "4b216d1e399b48756b6d2fda177fea1c",
"assets/assets/images/icons/setting.png": "4cfd1b26108223ed23c5c92c57454048",
"assets/assets/images/icons/share.png": "e5959af33576d1b8333a198506ebaab9",
"assets/assets/images/icons/showmore.png": "43273d90468f9d665167240c3cd1c125",
"assets/assets/images/icons/showpass.png": "1395b1e51f0d8db9e0ead4438a5176b3",
"assets/assets/images/icons/star.png": "5a45fcc191a64d770b0ddde25bacc599",
"assets/assets/images/icons/stared.png": "79bd7e10744ec1e669f5d0260c2302ca",
"assets/assets/images/icons/stop.png": "b205bbe5bd936e22ef461daeffeda762",
"assets/assets/images/icons/stop_yellow.png": "c9bd181b283b6d3d7854f22606b69491",
"assets/assets/images/icons/tag.png": "7ebce87573d32685f47265f43c833e27",
"assets/assets/images/icons/tie.png": "da105a43636dd38ad5765288a6d65108",
"assets/assets/images/icons/tie_.png": "12580e3acb7d5b4fedaabfe93f107a4e",
"assets/assets/images/icons/unstared.png": "a66d94d6a9dc76fa81db0978b3bb81bd",
"assets/assets/images/icons/up.png": "bf7af8110c48288b7fedc94d6d56b6d2",
"assets/assets/images/icons/user-add.png": "344c05822c6604694e14d0ea7a7aaefd",
"assets/assets/images/icons/user-tick.png": "137a5fabb177627ceffb5cc997d5b008",
"assets/assets/images/icons/vali.png": "5c7a781ddd7380ad674faef00f4339f6",
"assets/assets/images/ios_icon.png": "90a90b911f91ae1822e14fc2fdfa7fa0",
"assets/assets/images/let.png": "bff964a8c40472aad9c2d87a005ee4fe",
"assets/assets/images/loading.gif": "b80c3622c166dc62362d4f9e05dca898",
"assets/assets/images/loading.json": "3bbbfb82c5d8dc3d3e660f740e8bbc54",
"assets/assets/images/loading2.gif": "db05eb6dc0be6a050b6ecc91f1f6a772",
"assets/assets/images/login_header.png": "5a9e552bc3ff626e42eaa84ef494273a",
"assets/assets/images/logo.png": "bbe9b6c3953f359ccfabc48846e737a5",
"assets/assets/images/logo.psd": "41d28d3dcf987fbee713edd713c2e191",
"assets/assets/images/logo_big.png": "bc30f13d743f8ae70c96da2cb7578b7e",
"assets/assets/images/mainstreet.png": "c30816c031b76014499953c109b4109c",
"assets/assets/images/mapleleaffoods_1.jpg": "9a4b806c40405d9319f9a087f32e2cd9",
"assets/assets/images/mapleleaffoods_2.jpg": "dc1e524487650b21ec651965ee96f9a2",
"assets/assets/images/mapleleaffoods_3.jpg": "ccd84654fd3b193e745897a06b34722c",
"assets/assets/images/mapleleaffoods_4.jpg": "e05b1dcd8cb1aead0b00d3a974f12e76",
"assets/assets/images/masterbuilt.png": "c37ce09d34855def2968743e91b53b92",
"assets/assets/images/no_avatar.png": "b88131de060cc7b4facf07072ae5d13d",
"assets/assets/images/no_avatar2.png": "544ad611fa5fe6e0a4142669839d10c7",
"assets/assets/images/oops.png": "13816723f9ff100bf0e0e26b16099afc",
"assets/assets/images/polite.png": "b82fff070765b458947238466a255736",
"assets/assets/images/qr_button_applicant.png": "bb28017f49abe860883b437700e36622",
"assets/assets/images/qr_button_employer.png": "21605ed5349093aa0636d10bee02eb27",
"assets/assets/images/qr_code.png": "2dbda641a1422b8a7a16f11ab5eb5960",
"assets/assets/images/referral_code_bg.png": "0a50298f3a24255938ed14e17a5a1ef1",
"assets/assets/images/refer_button_bg.png": "a02e4aadcdf1578f4b7445d44f1d1a54",
"assets/assets/images/resume_writing.png": "5ae0371ace5d5682643d71995a099168",
"assets/assets/images/rocket.png": "8296e793f2a6b04ebf43bc991ffc0a97",
"assets/assets/images/showpass.png": "1395b1e51f0d8db9e0ead4438a5176b3",
"assets/assets/images/sitting_man.png": "a86e9e7431463a17b38cbc8944191d9a",
"assets/assets/images/SmartMove-EmailBanner.jpg": "055f8e7e2eea9d37adc808358f921ccb",
"assets/assets/images/sorry_workman.png": "025a40140385deed77e20a5927db21ba",
"assets/assets/images/Splash.png": "26971d81a943a6eae785724cf58712f8",
"assets/assets/images/Splash_landscape.png": "a081fa5a19ac5d7e6011451867b708f5",
"assets/assets/images/test_avatar.png": "27627894491519f4273ee04b4cb6be2b",
"assets/assets/images/time_management.png": "fb7ad3f06afaa0715cef0ab5e562524c",
"assets/assets/images/walking_girl.png": "654e97bbaf50734b98a491f07c0ebb66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fd6a6b294edc6210d1ca4ccc80f485d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3e45f2ae82f853cd1c7ebc3c37622c8",
"/": "e3e45f2ae82f853cd1c7ebc3c37622c8",
"main.dart.js": "8a6f760ff3c860ade05919830c340c04",
"manifest.json": "7e7bbdb3e0c4c273794258504e42ae12",
"version.json": "032bee21f5b7cb0a8dc55bc32258ad85"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
