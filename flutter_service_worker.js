'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "c56389126fef81de973c4f9872640f33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "47f144fd3e6614dc757ae12b0d18836e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85be98b5bf326cd4a2be23e465259398",
".git/logs/refs/heads/main": "85be98b5bf326cd4a2be23e465259398",
".git/logs/refs/remotes/origin/HEAD": "f60e213abb31f801bef3626a87106218",
".git/logs/refs/remotes/origin/main": "c0e3f5680cdda30a42f75862b1348e91",
".git/objects/0a/1ae17c5c6a0a288eda85e619c32221dfd72788": "8d623e0f275e7a7f1a3de2fd929fea58",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/a52bd84e11a71a4fe3b338a7014c4fb34b2eee": "85a863e798404cab9540cc8e69cce1f0",
".git/objects/2f/ebec5b12259dcb00bb2ace501112ceec8dbef6": "706a4b6765b0ec16d5869ca710c0b238",
".git/objects/31/3a4d19148a77db9acce9957d477b490b72b7c0": "8e6615eafed7fb93bc647b3e13007e3b",
".git/objects/33/f942bd9a723055b779c6b9fc2552d87dd1e581": "8b2b5285af73f5aa45c1ca96f9b7eb9f",
".git/objects/3d/d1ba93e97d803982e0797222c883980a6ae5c6": "7c75b3e71eb52a91da9ceb674b0c4cca",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/63/16c3eec82c03ef8518b49c895b03dce6a9a42e": "9505ee3b3530bc39cc69128a39d25906",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/3a106db6cd037faa69236c6bb5aa586f6273d3": "f87f163d6533490ac2080478532c562b",
".git/objects/ae/08edbf2cc9105f0152d7e6b59537d809f63ac5": "5bf8c33fe7fe67831fab200d4ad5a742",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/ec159fdf692c7b61aea9228a0c257bdf77eff8": "57b3eaf7c3ab2821c714c22c2cab3903",
".git/objects/b4/b03e235ba2dc4c84371612bb142a0253ce3f8c": "ea5212bf4cf16b2d8e1017ccb675702f",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/53a0b2776b1b1177d6a69c358dbf117a9483e9": "3d86d2056211505d06e2a88cf387c9f7",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/33a1f705989e1e08a26a201a39b910471ab33e": "651af22ee17e1d83051e803ad212e830",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/pack/pack-3487d593fa154c58f07c2c148d662a137af6e8f2.idx": "209c2f2a6bb614c6ae3a44aacf5db402",
".git/objects/pack/pack-3487d593fa154c58f07c2c148d662a137af6e8f2.pack": "842ea332fcfbf95c1c1693c72a713eed",
".git/objects/pack/pack-3487d593fa154c58f07c2c148d662a137af6e8f2.rev": "cd12fd76587d7258c9676f3c2849e196",
".git/packed-refs": "ddd54bd9ca35bfebf443750d4245b4a5",
".git/refs/heads/main": "e9ca01129dbee2a7ff470ca53a1310da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e9ca01129dbee2a7ff470ca53a1310da",
"assets/AssetManifest.bin": "4c7df9618b6d2c862b16753fc00f6732",
"assets/AssetManifest.bin.json": "18cf24853eac1e6f558368b71eb6e730",
"assets/AssetManifest.json": "b1957757c1b40c085779f0ac36be9999",
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
"assets/assets/images/featured.png": "740a2257fa2d0e01393bb71d5e99f68d",
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
"assets/assets/images/kibbi_web_logo.png": "c148f208de6ebc1de4ad7e508ef89671",
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
"assets/fonts/MaterialIcons-Regular.otf": "90e2cc5759d57d8982b8536bbdd898c3",
"assets/NOTICES": "120f7829dd5ec4516862990a8e779524",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "cf3387b768092edb91ab5c8114bd607d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f1cd548c5c8f4c55eeaf17a3b875bff8",
"icons/Icon-192.png": "eaf9df335957e3d80bcc3347b372a480",
"icons/Icon-512.png": "c1dcf932c997b5d724ded04b451db27f",
"icons/Icon-maskable-192.png": "eaf9df335957e3d80bcc3347b372a480",
"icons/Icon-maskable-512.png": "c1dcf932c997b5d724ded04b451db27f",
"index.html": "05a10c76553cf3e12fd2b147c28537c3",
"/": "05a10c76553cf3e12fd2b147c28537c3",
"ios_icon.png": "00498da332085718f65b28e481227930",
"main.dart.js": "2bf68e150f898b3ae3a8b5e8943ca985",
"manifest.json": "72ce207725932c75708bfdd7a8432c7b",
"version.json": "032bee21f5b7cb0a8dc55bc32258ad85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
