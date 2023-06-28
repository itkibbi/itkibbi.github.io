'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "c56389126fef81de973c4f9872640f33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "74d371d1b7a366c5224a9e6d3d9080bc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "94b7acf379a2dbb4a6381bfbbfe9cffa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b9b0899e1c63c5af0e2b1a1f4f89aad",
".git/logs/refs/heads/main": "5b9b0899e1c63c5af0e2b1a1f4f89aad",
".git/logs/refs/remotes/origin/HEAD": "5bc0b7172f43d9426c7b467aa098ff21",
".git/logs/refs/remotes/origin/main": "7ed0b5231f181982bb886500df0955d2",
".git/objects/01/f1b4acd67c7c708bc18d847ae92312afa294f3": "9a27737cf4a94b720eb959770677d872",
".git/objects/03/2c96300af258caab0b3e9a1b7eccdb5d89197c": "82a1c2d04553648ff8531704e38c3a9a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/872d928f415894bca9271e9f09d62d24f2f7c7": "bba407718f541b193b8affab177bb989",
".git/objects/12/44cc85818cf80691eaa61c6ce9a2e800c3e5c1": "562bdf31541dde99b8d58046e5041c9b",
".git/objects/14/fac1d6163452a66f5f065a02f75dab6e3c5f2a": "9e02d8fb9ce6b0cc98d9cffeba3f0bcf",
".git/objects/1b/672b92c8c167d37d6c1c8f1197fdefa60ed720": "233862a881ddf8f97b4a32a8e6dde424",
".git/objects/1b/bcef3037d9d4169699ae17c544bc64235e63b3": "a5e1f3402c11d203eab548c90d8bf928",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/d9cfb4779c22946362d00d98ab3da6289add68": "be4ace5abbfcd32453069e0d49ec56c9",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/191866aa82cbcacda7a0063e21afc782a87ddd": "d8d9ef030cfda4b88b623ef758f50f94",
".git/objects/20/1b919862b16f17912e5c436e265382dd0b3f1b": "96989a6e439485675149f054f5a3d16e",
".git/objects/22/db4bc0037ffb3d56e944aa951ad35217253178": "bce1e99ff6f6e2912fc18e915abae391",
".git/objects/24/90ad669412b66f27185a4221c149ccff34541a": "bf272ded8cb17549098d8dc509a2e092",
".git/objects/25/1756437bd7ef7356e70e4aa541b77b6d06432c": "e124dbc4cc062876071f54479d0ade42",
".git/objects/25/fdde254c000e9da17af52f2c1731c29aa65239": "2f31bd6057a72e06e31a61a701981988",
".git/objects/26/55fd14ea4b40e58319e194f276d79c3a98c86d": "616ec8591bf377c58973e6e922ce31b3",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/29/4d5cfb350576da800ec9c5412bddbbbe7a83e7": "dce79f6e6b939ff29b8c6b8fcf487932",
".git/objects/2b/664f660d5af8931aa2ac1f23c7308474af05e4": "b826a08ebb5108ddc2628c5ae11a6662",
".git/objects/30/7632e8a5b608b12db75d82267ad289d210a475": "135eb6987ab8323709f7613f0887556a",
".git/objects/33/1df2968186d20bd0fac8986af03ee0f40ec1b2": "6994c9756608557cdc564946fd8baf14",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/8d19c82cc0fa43a869cd6214dd3f5f1dda564b": "63d6effba174f061175a313f0523038f",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/ea4e59b6eea2e9e8b6949dec20575f1f751fb8": "b305f12a848b087a33772d20abaed1e1",
".git/objects/41/71b493acd94552d224c69ddd5ce41570a13911": "8a825a47be3dbd0bec08d18c8f9a2ed8",
".git/objects/42/78110f00506da5d66e0b70e9bd9fce61d0d7ec": "187456b0730fc524825f45e5f8a44882",
".git/objects/43/f6d07b613d04efdbd68faf8ec34fbb25a1b45f": "62ec31647ff08076ab0c47b3156948d1",
".git/objects/44/739f943b7eb4340c5fa72c9b474109a60caeab": "cda3c5c9450793732e413ab6172cf5ec",
".git/objects/49/e1a254a1e26b50a9ea86639ef85b3798bf0f87": "5851572ef24d91034dc8a845a4fe6d6c",
".git/objects/4c/71f0a99d2423bdda91f64e0569a452c81db70a": "78c226fa1087cf908bfac686c0ccf362",
".git/objects/4e/02cbf78f4467eee9f025f653d650ddadcd0c0e": "8b7ca81372c2c8fc4c309b2323ac1192",
".git/objects/4f/3111cce71b3cbdc27db85cbaf8b4baa8f01376": "97a167f94e0a8388c512668b89cd60e3",
".git/objects/4f/b6180d2134b4b39c611d12c281d3b4a6141604": "dc5ef2b4d0088b5463a07ef964bf7604",
".git/objects/4f/da36abc0c54e7f326ac4dde6b26c564a44c1a5": "aec9ee01ad4176d03af939575f11f2d7",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/ccd132121428522c60eee445907499472d8106": "44f33b0b070df750e4ae58a87fb23917",
".git/objects/55/4e1762597f4ba8bf0173bd6d90c0282494a526": "5ce3c3483afcebd4e51b22f40853e86c",
".git/objects/57/6a381b8275d35c197ba825b2103be2c35e6827": "303f7c2b4ddb2b1d48066923a4d59f57",
".git/objects/58/168022eae2a4a918e8cdd3d54cf13a7aed11ff": "3b30fb7b8c928528843f52183237b555",
".git/objects/59/66f0f787021e4ea55991166cbdc347e4f39599": "3c6da5e0e6da1e37d1996b0f73810f5e",
".git/objects/5c/f8d38679456af186068668cf54397fde6ad058": "be1c41a322663b367fdd6ea3015028c8",
".git/objects/62/4d88727de483ce4c97665abf2e4e2a1ff2b226": "78e54eb3b2e3c8f3af273aa1692667b8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/032f518aeb4f3073f0efad8e4048d924ccbb1a": "746a62aade6b297595c5c836938c305f",
".git/objects/65/23f7b0e0038d4c7260c2f951e1e153f3fba74d": "706a56fb2647e75dcd183c101e2e29e5",
".git/objects/67/b57066e0e71f8f2099722e63e05b75ec56a6ee": "2e2313a826fc46b7b6e0d45f6d11b2a5",
".git/objects/68/87db828b455dd8b06c7414ffa7098f403de295": "386cb865336fa8ba5ec3dcf5d934092a",
".git/objects/6a/8b4ec3d40aba48f9ac0acd19f07116ab2089eb": "ab3a22b85ecc140bfaa317f6d6630740",
".git/objects/6d/4b9f2e5f9a3a6ddfea82b450c9f049e73448e6": "f11f42747e8cd090459f9a29f8c9b1fb",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/77/19d15713929353f38daed6131821d90e69af2f": "7c2640037fc9ce5f641298210cec4632",
".git/objects/79/55b379549d685687bbad74da5a36abf1238f54": "f0b5e3b9ce0feeccf83663d8a693c872",
".git/objects/79/b4e7f1fd431d67e2751116cbf9e425f18bba4f": "ab3ea01e1c85b40f85d20232eb9b439b",
".git/objects/79/cf3a5fa8cb5251518f61d667bf4964146386cc": "bf61838a1226a3e6405105fc8d863507",
".git/objects/7b/21c4b30ff996427953dce14df4b40afbe7dbb6": "e5b7defd4addd4f3829f4194941f197f",
".git/objects/7b/add830b0fe8c86298d695c0e0dc58e77593110": "a19f14e334a04016c7953a88b7b43375",
".git/objects/7d/a999e75558230d42a67db8b4f858a44bd6c10e": "3be92dedf61bdd267338a314341ec39f",
".git/objects/7e/18cf216ebff7574a541cd3f6bdd143582a7f4a": "75fc380ab24a20a8d1e01dc913dde95f",
".git/objects/83/33669788a9702021d792af7821683e53a5135f": "36eeaf24d8e69e6874e1de284b0fc872",
".git/objects/83/ab17e34233f78882a6c7d14f19a92d94f17c3d": "4ddf6b2d05fa492a0ffa642fb4280729",
".git/objects/86/818e2fe913e71d7b83fd016d87584dc0c0731c": "2ef2a5a746296e910b07560003048f80",
".git/objects/8a/73a4ba3fcf5c329b547e6c30a008f6bda2cdc5": "88d021df2b42811275501961646ce7e5",
".git/objects/8b/9389da4d353c5a43f131f4c784e8eedc1c1380": "2efbf8184db212887d99c1c6fb2f1e66",
".git/objects/8c/85792b221548e4c83aac5fe96416028f482738": "2983dfc5385431fef92137294f4a3d2c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/91d966416134dcd2b00a494361bdc8a5db6cee": "999b5ab705fc388edf7cb9068a3541c4",
".git/objects/95/9a400d93aa7ab431b6424746306dc3d2b84619": "8facf5ab78217d8f0bf115b658540314",
".git/objects/97/73d99b2b497aa6aa131cfac9578ffca05d241a": "69a5a8608c3c4e1d09a17927c695f20e",
".git/objects/9d/f8386a074b29c75af658896aa35fcfd5902cbc": "afd8b83e96ede29e4cc271287de995c5",
".git/objects/a1/130972e2b3fd3ee97a075d0a2553663928a961": "fb77dfcf35bb411d49fc4a76d49bd66b",
".git/objects/a1/7d0107b537e7847056a84045fadd5fc3e59251": "000b459758b3be9af5d77b32ecab4daf",
".git/objects/a5/2daf54793b1f061d12c378fd8651bb864a5b9c": "1ec17a84d6414cc1919650b5bb942113",
".git/objects/a5/a9ddaa8e4e377f6fe30706ed6bd205e1454d19": "ad89421c6fb84b55221f15184d19fc2c",
".git/objects/ac/18dc254e755a542a9040b9b7db12abdecd2706": "204a8dff90f8213c8e63d656bdfe4fcf",
".git/objects/ad/1803ff6ca6399aed93ada1ffcd2d58c89db08a": "06f40e35165d4007f15d0ff2e88b09eb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/688e2e1c4ca48dde257e0872c732356dc894e7": "ebdb4515942d48e4b52f5910a63e5c88",
".git/objects/b1/1762dea1160bebb4020305e1f565a158abdcf6": "eae4a55eff0fff59a92883d29cad555a",
".git/objects/b1/c3bdaf96ec58627ef6700a61d36febb7e3c869": "4e6c8851a3bc40ae20ce1b9854adf31b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/921cc1a2b711d975ee4d4e4417b3ffba70d830": "8f82ebad6b5b05cf141c7fee8bd97b7b",
".git/objects/b2/ea595fefedf726580983fb8ede0a10928e463a": "948c883d5e9396781fd711bc0b13c200",
".git/objects/b4/f05afb273b1b2ff92b055fb7e637cccd131d65": "62844334222326ee58c7f7953456bdab",
".git/objects/b8/76edbbde16e6b3761f7a65392e25606207e981": "f528c0c6854b37f10d2822fa4a727539",
".git/objects/b8/d25ee9b47db00b343364aba641080ac64c8a54": "79227a2eec6aea263fb790daeaee81f7",
".git/objects/bb/4ee5c938287e5b94233ecf1b905be96558a3d6": "091468f848b56abdf7f48fcd5814a713",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/72dd6fc1a419321b0a9986331f02e85bafe4a6": "a3849cb6ca27a3f8315842d8f9c4bfee",
".git/objects/c0/7eb59261af546eb6d3d635bc0137b43f9a5e65": "a3bb26f65c3ca58aaf6f00b45b73ffc3",
".git/objects/c3/b11417b9e7ff9c4d5860e90b824dc52f986b62": "f89974133fa44ae974934699fa6f486c",
".git/objects/c3/b71bb5eb92f7ee60a2edad6ba5bd905039135a": "606ef8f25be5310afb8cc1995a49b51f",
".git/objects/c6/1b35327b65102f6339735640473d91a2da0279": "e183dc75b6f750a8de3e0ef74048fb48",
".git/objects/c6/2b3065383ae114c4682b08341b300cd1adafe7": "73eaaf61667fb58151366b95794f70fa",
".git/objects/d2/5e0f1ee19682f4746f47eb916633b17f242915": "57271469544d970b7d4468a26c59e7d5",
".git/objects/d3/44b1bf887bb28ce5c2c2ec87e4c4614216e46e": "d852a1edf25d3f8672c57eefa94dced1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d7/588d74988162cc3ae4a249e5b0796617445118": "947ba6ef890b4ae9edc28d8da435f341",
".git/objects/de/09de929b68bd1d1fb7006ff2719dfe62dd0e4f": "16676a34431ff1a7b9560778a41ab56b",
".git/objects/e1/d050d3955407429bcc87d11294a9cf881fa8ed": "a325debf4c5e8a47a96f53b44eeb6bb9",
".git/objects/e2/676ef17b061954c246947c8bf23c4fa07394d0": "d92d8446693a86834d3f612dfabd78e6",
".git/objects/e3/c1ef51768b5de2af733e9d687fd67c53986daf": "3a1db40d89d08549f81f1c536c804285",
".git/objects/e6/21a8b10075bdbc6bbe995af17830a33a438fda": "e100b42b0f032ae7868e58c97e7ec622",
".git/objects/e8/228909586b01a2f60a70bb8fa3b482281c1a4b": "db0f8362badc8c4ed27824455dd4155a",
".git/objects/ed/38e9b9648ac74eb7dd3b71df84d861b80a7956": "f0ea66f8e04c1efa1720b19393a0c390",
".git/objects/f0/8fa73b6ce870035bfceacb390422f2464efdaa": "11d73a04662a88d588eed07c75927cfc",
".git/objects/f0/eb06b91cc15c01d3dbfd6a3e146b9819ea395f": "2f834ca023cc5783104e8dddced0d474",
".git/objects/f5/74eb07a39d876a620afa7837b8ea406d4da6cd": "a2b8ae942ae74378e4f50472e1533c5e",
".git/objects/f6/904a81a067d87997543988a8332540461df3a9": "7f72b507e8b348db3f6207d51e964466",
".git/objects/f6/d56d1bc97c8cb0131fea52c80d43b7f4ee03b8": "02c127cea669b4942ad559fca1087976",
".git/objects/f7/12efc862a8fa8787d91eea08e5479ce3e0eb97": "4835aeb01e3c93762ce052285f442fc7",
".git/objects/fd/2dad27cef7a6fe1b58730c892cd9592da40c92": "bc73ff6b2d6329d1145c214aeced4327",
".git/objects/pack/pack-4ba95d43a7385199468316590fb45f341f159533.idx": "99303221cd1a63a86c303990a87abe99",
".git/objects/pack/pack-4ba95d43a7385199468316590fb45f341f159533.pack": "aafa125527e7501d372b900176ac4123",
".git/ORIG_HEAD": "ba82acfcf28e829c0090cb5ebec99cd0",
".git/packed-refs": "590530a6e0a2eed442eefd85e008f750",
".git/refs/heads/main": "ba82acfcf28e829c0090cb5ebec99cd0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ba82acfcf28e829c0090cb5ebec99cd0",
"assets/AssetManifest.json": "b1957757c1b40c085779f0ac36be9999",
"assets/AssetManifest.smcbin": "9e7bd36db98301eba6aa0ab451e05e75",
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
"assets/fonts/MaterialIcons-Regular.otf": "f090c046dade373275a8442c6f4c8d07",
"assets/NOTICES": "dd9c1a56ed8d85846ccc5451f59a5258",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b9c29d0638db1107a1513fee3af60d3",
"/": "4b9c29d0638db1107a1513fee3af60d3",
"main.dart.js": "10dd09ef3c7d26e566c0b15bc342a422",
"manifest.json": "7e7bbdb3e0c4c273794258504e42ae12",
"version.json": "032bee21f5b7cb0a8dc55bc32258ad85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
