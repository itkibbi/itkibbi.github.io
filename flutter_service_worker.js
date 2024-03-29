'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "c56389126fef81de973c4f9872640f33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ac9dbfb6376be9a2233131bb08725e00",
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
".git/index": "097b3d35d17ddf6df51069409bb6363a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1166dc95e0dc534a8a95cc61cc6c2805",
".git/logs/refs/heads/main": "1166dc95e0dc534a8a95cc61cc6c2805",
".git/logs/refs/remotes/origin/HEAD": "5bc0b7172f43d9426c7b467aa098ff21",
".git/logs/refs/remotes/origin/main": "1cce485569ec7f7b03a9a8d453d336ad",
".git/objects/00/7281ff133b0e93efb7cc01c744b79e95aa80fa": "61dead0d1def54549b0a9e3e7795349c",
".git/objects/00/fe3278a5845ca66579f3034be8b62a8099d567": "97a9a49a599e59bbd29cd9e31e1c4b8a",
".git/objects/01/688edc541fcb69748efbc26797aebb9baa202b": "6adcdcc4e8a90ba50e41ea235c795ade",
".git/objects/01/7e99be68b18547937e078a385d0beb6dd224f6": "ba13e82185344e37c04ed630612bcc84",
".git/objects/01/ddc5c0430ece5dcdc8dc287844b3ea370ffd2f": "9cf327dcdc5b62b058d818ae80d9acf2",
".git/objects/01/f1b4acd67c7c708bc18d847ae92312afa294f3": "9a27737cf4a94b720eb959770677d872",
".git/objects/02/c6003da73c16011311787b7ad652dea772595e": "e0160f5a8ebcabcb518c00ec220fa29e",
".git/objects/03/2c96300af258caab0b3e9a1b7eccdb5d89197c": "82a1c2d04553648ff8531704e38c3a9a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/fab69cccdccc97a6aef8563da026ad9eae9fee": "9b2a73bb99ef51e5fa3796df51e4d36b",
".git/objects/06/7448ad1e52ebbbecd38afc552e3969ef1d25b9": "679c0c82f5035a67ecd88c3ad6f957b7",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/59935e4e7a267a05b05e04da30cb34fdc3bdfc": "4d52c84b5e587f972e32910d9c1cca04",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/babe4c2459969a326692aaf8cbfacee242bfaa": "f367c88d3e4db088bf3fbf6bc32146df",
".git/objects/0e/dc1eb8931166e446c95619b93cec8f9590d391": "8aa0f49e1a93f2f2b3e6dac004cbf7c6",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/34b6313ae79b732397422202fc4ddc17b2a128": "3806e314bf3a8b567a7d904364278652",
".git/objects/10/872d928f415894bca9271e9f09d62d24f2f7c7": "bba407718f541b193b8affab177bb989",
".git/objects/10/c7a64412f7f79466a5cc8ae0352f656f7f728c": "42e0786ea37bd436fc257d633a85671d",
".git/objects/10/f34c1103a651a834e342b9ad1a3ac43d40cb00": "3c296eb7179e71fa11c08b6e0f102244",
".git/objects/12/44cc85818cf80691eaa61c6ce9a2e800c3e5c1": "562bdf31541dde99b8d58046e5041c9b",
".git/objects/13/cf36687b9d89dad365abb1bc5f971866a6ab9a": "5e6a16437c3ca6045e697cb3f47e2bf1",
".git/objects/14/4e80042a75fc1440c0bde6b628f36a6077911b": "5cdfbafebb9d115331bd84f7d41192dd",
".git/objects/14/fac1d6163452a66f5f065a02f75dab6e3c5f2a": "9e02d8fb9ce6b0cc98d9cffeba3f0bcf",
".git/objects/16/a3ea2493759289570e02003caf12fb1d3eb21f": "d73feac646c7014dc80b4821d67444fd",
".git/objects/1b/672b92c8c167d37d6c1c8f1197fdefa60ed720": "233862a881ddf8f97b4a32a8e6dde424",
".git/objects/1b/bcef3037d9d4169699ae17c544bc64235e63b3": "a5e1f3402c11d203eab548c90d8bf928",
".git/objects/1c/568b65ed650f27bd6d57e55f8ee685280f6377": "ce2f654513a0da2d36f5eb686249e6c5",
".git/objects/1c/c4899d4c55a09fec80e4a0f0533a5e5911d713": "60e6a16057ab9ae1c611088cb0d71ebd",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/9b424d6360cbb226a1a960714f0e298491e40c": "caaa046cf5dbc05229be1f2472e8d6c2",
".git/objects/1d/d9cfb4779c22946362d00d98ab3da6289add68": "be4ace5abbfcd32453069e0d49ec56c9",
".git/objects/1e/1e91307a91f843ce17b2ff267b672a61662d4b": "e9b0dd1b2488c46991f2e266809bc9ad",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/183b81b7a5b3e94596d658e820db029ca2c88f": "6c8a3941a02da9c2f5d7bf29b60f6499",
".git/objects/1f/191866aa82cbcacda7a0063e21afc782a87ddd": "d8d9ef030cfda4b88b623ef758f50f94",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/1b919862b16f17912e5c436e265382dd0b3f1b": "96989a6e439485675149f054f5a3d16e",
".git/objects/21/08898f6b2af14c02342cfc65b5c11f4a5f4cf9": "1ff87f9ed7270ba07218d2a4f2959a43",
".git/objects/22/598bf3d0b57fe06ed4eb3d9bc3ec4de32e03b5": "acc85a27c6cb0d0ce4a009b0ffe19353",
".git/objects/22/aeeede9695dd6bb550aa74283a96c0cbc46d0e": "4e7a2d4b296248885111f63e1227b970",
".git/objects/22/db4bc0037ffb3d56e944aa951ad35217253178": "bce1e99ff6f6e2912fc18e915abae391",
".git/objects/23/1b7472d164c5be133774adf551aa529b6e63f8": "462954e44b838edcce82f1aac78ccd8e",
".git/objects/23/c152ea1741190992449017666ead59ddd63952": "b5ae768f7e4cd825e39a8bc3f769c40d",
".git/objects/24/5c122d2ad2b138866c905a6305df15cffa4a20": "3a5e98cc607ead2db2e1be48bed87887",
".git/objects/24/90ad669412b66f27185a4221c149ccff34541a": "bf272ded8cb17549098d8dc509a2e092",
".git/objects/24/fb64ca9d2d6cf10e2370c9751ecabcc184f7bb": "1cd47105594162a1072139854de47106",
".git/objects/25/00184be6d8d9f586f7cca9a88044ff88907b35": "fa3c51162a55eb24db37c58ab1c9ba7e",
".git/objects/25/1756437bd7ef7356e70e4aa541b77b6d06432c": "e124dbc4cc062876071f54479d0ade42",
".git/objects/25/3a8a5ecb33a3baf4d27f41532a3f3b3f64445d": "c5e81d0920db91075d14fbeaf117ccfb",
".git/objects/25/d162fa05630ad9d7438ca4de295cc3c7b0f753": "91c944e8fc107b120b3e05451a82a63a",
".git/objects/25/fdde254c000e9da17af52f2c1731c29aa65239": "2f31bd6057a72e06e31a61a701981988",
".git/objects/26/55fd14ea4b40e58319e194f276d79c3a98c86d": "616ec8591bf377c58973e6e922ce31b3",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/28/af99b0eae312f54abcd514e86059c8566ef059": "09e24e49fa491f7dd2c9a6b2d96a7d7c",
".git/objects/29/4d5cfb350576da800ec9c5412bddbbbe7a83e7": "dce79f6e6b939ff29b8c6b8fcf487932",
".git/objects/29/a9cdb2df4c7edd1532cefff219efc754cb1450": "629554f3abc46c6cbbbc99647fe17ef9",
".git/objects/2a/be6d5bcca7b64eb6c34a7b0bf6028457e7b32d": "dfd2fb6bdd820d4868b764157c9caa5e",
".git/objects/2b/664f660d5af8931aa2ac1f23c7308474af05e4": "b826a08ebb5108ddc2628c5ae11a6662",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/1c5ed677a0a86f4571f4d4796d819462e92ee9": "be81fe2847b26e254f51827d419034fd",
".git/objects/2d/aae3d7377274d43426bd1625f785cdac142b75": "e0d6f0b15f1b24c327c44d40f9f37650",
".git/objects/2e/14fb685be8d399072ec217c49b7011fa41d9d1": "be1be29195760d05b7a313270694ffca",
".git/objects/2e/6c417b887c6129777eb1eff0a8d1bb15d37906": "ae9726177bcc4d5e614af32d4a571b4c",
".git/objects/2e/e9bef141bbbe1bf558467726d719585f92e1bb": "b8431f02d30ff4ca0f5cdd8a9890679c",
".git/objects/30/0430899b189f8ae18a96856d956829a508b6b2": "fa09b34e3e3e5dd5135d9687826d8e29",
".git/objects/30/7632e8a5b608b12db75d82267ad289d210a475": "135eb6987ab8323709f7613f0887556a",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/30/c9d1b9c26df6715552733b4ea0e26799fd8153": "f12beecd53d825f91d990e725965cc1a",
".git/objects/32/66c92fd2a3540d92e71572d6dce6f0089793ce": "9d92f026307fd5f53d371d5b4cd24e4d",
".git/objects/33/1df2968186d20bd0fac8986af03ee0f40ec1b2": "6994c9756608557cdc564946fd8baf14",
".git/objects/33/6b46dde7c19723df20fb24332cf7fa4028b230": "9e391cac74edd78a2f2b2bc2357294e8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/cf06a995113b76eeacbe1f61429d3ae0cfc103": "46682df35fc5f26629e855afc108dfa9",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/39/0bde25f2ea61a10253b183117464ded32ebde6": "2dbb3f724f6958ce48a71566abfd4e2e",
".git/objects/3a/8d19c82cc0fa43a869cd6214dd3f5f1dda564b": "63d6effba174f061175a313f0523038f",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/dba164ef9b77a99d17730aa439194e86d5b21a": "629283f37ec0118a0c96cf7752825639",
".git/objects/3b/ea4e59b6eea2e9e8b6949dec20575f1f751fb8": "b305f12a848b087a33772d20abaed1e1",
".git/objects/3b/f9c14f540fcae7e0d320c137eb01c1daa47a70": "bf0680621613e368d2a46e766c5066fb",
".git/objects/3c/bbfd3a713f77d5b9e900ed73c43552d8cb19ec": "eb536cc3b2735e41758369bd7a748154",
".git/objects/3d/8bd422414377778d1509000b96403d8061a01d": "87f4ad842298f32ea0db13f35a77b309",
".git/objects/3e/b98c54c5bb7864b0f5cc02844fd6ea75a39fa8": "c30b5e47fd9868caf3495a9e40b9a4e0",
".git/objects/3f/7c1f2301acfda6c4d835be861813bd226fbaf8": "afd2c59a3fbddd9ef004a0299c9e48b2",
".git/objects/41/71b493acd94552d224c69ddd5ce41570a13911": "8a825a47be3dbd0bec08d18c8f9a2ed8",
".git/objects/41/cda5f1e6457f26a9af0a7ad562d9749944e1fe": "45127848c855cb3d4fca8542f8e180ca",
".git/objects/42/78110f00506da5d66e0b70e9bd9fce61d0d7ec": "187456b0730fc524825f45e5f8a44882",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/f6d07b613d04efdbd68faf8ec34fbb25a1b45f": "62ec31647ff08076ab0c47b3156948d1",
".git/objects/44/739f943b7eb4340c5fa72c9b474109a60caeab": "cda3c5c9450793732e413ab6172cf5ec",
".git/objects/44/f912e665474c66507014aeb558cd03a7292487": "fb6ba37c60fbcdcbb04a00bd501cefd2",
".git/objects/45/e85d458470326ab201a97616fb8c49ce324829": "9b6ed17a0a5c2add128fe2b2c25514cc",
".git/objects/46/3301202619766843186b2c484445dc21f674c8": "86d715d2da69dd7c64d68267a6935408",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/20ac9c84411654c2b297f307f57938e8af4d44": "cb3bd51757d945e9c7fef6a58b55bab7",
".git/objects/48/23cd62e967d717144be183229c72fe06031609": "b2dda31a286f1859b451ec2ac130f23b",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/90a21b20cd85b59b1055af278f9123534cbf1d": "c26719b437917e647d1cdaec5c98e9e5",
".git/objects/49/e1a254a1e26b50a9ea86639ef85b3798bf0f87": "5851572ef24d91034dc8a845a4fe6d6c",
".git/objects/4a/1e33ecc4d721847b5778a17276be9d6f1a54e1": "c6de3f31eca1e564db1d1832da20f7b8",
".git/objects/4c/71f0a99d2423bdda91f64e0569a452c81db70a": "78c226fa1087cf908bfac686c0ccf362",
".git/objects/4c/dee6a5c16421b9354eae46a7164dd8c9643cdb": "d3928383c4d7a3aa3caa53753fc9ca75",
".git/objects/4e/02cbf78f4467eee9f025f653d650ddadcd0c0e": "8b7ca81372c2c8fc4c309b2323ac1192",
".git/objects/4f/3111cce71b3cbdc27db85cbaf8b4baa8f01376": "97a167f94e0a8388c512668b89cd60e3",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/b6180d2134b4b39c611d12c281d3b4a6141604": "dc5ef2b4d0088b5463a07ef964bf7604",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/da36abc0c54e7f326ac4dde6b26c564a44c1a5": "aec9ee01ad4176d03af939575f11f2d7",
".git/objects/50/56d2ab036f3ea9c0b6d654ff3de0cd87bf020d": "f91c15a81da12115c6158a5c2faa16f9",
".git/objects/50/e5ac5529300cdcd5ed84e30ecf271a5da6bfb5": "cc000cac8440009baccc6b33e3d2f072",
".git/objects/50/fa4da9030aca12ddfe403ca2c1835cf7da7f86": "3db80d5e307e85b114d4d16ad4fb284d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/ccd132121428522c60eee445907499472d8106": "44f33b0b070df750e4ae58a87fb23917",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/dd7a1d4948eb6e25922b3317243a376e3b6f6d": "4215c1a345ed6791cb55744857eb3bc7",
".git/objects/54/410e3b467be550802e13e5a11d985540b06c81": "73da5c23c9f15d76f1f45a4fc1d89172",
".git/objects/54/be6db0d0fdc752bb18ac39932a8a282658d635": "9b861434c362bf58fa6b30de402fc9b7",
".git/objects/55/4e1762597f4ba8bf0173bd6d90c0282494a526": "5ce3c3483afcebd4e51b22f40853e86c",
".git/objects/55/c1dffc695ac743215ddfcab1fbde462efc8be3": "542a566d0aeaa7fdf2df4622b18d3bad",
".git/objects/56/3979d0b8be2841213a27f795c2a5598d5b844e": "5b87b8b26653593a0e577d34049a851a",
".git/objects/57/6a381b8275d35c197ba825b2103be2c35e6827": "303f7c2b4ddb2b1d48066923a4d59f57",
".git/objects/57/6e3620037fbb56496a3b92b12de24286823ad1": "1b7f156342e5cc5bd434fdaad1bd3052",
".git/objects/58/0fc1b686962e4271a7eb95972dd343340cc93c": "ab5cbcfecedce1b68bc473802d0171c8",
".git/objects/58/168022eae2a4a918e8cdd3d54cf13a7aed11ff": "3b30fb7b8c928528843f52183237b555",
".git/objects/59/66f0f787021e4ea55991166cbdc347e4f39599": "3c6da5e0e6da1e37d1996b0f73810f5e",
".git/objects/5c/f8d38679456af186068668cf54397fde6ad058": "be1c41a322663b367fdd6ea3015028c8",
".git/objects/5d/c91bd2455bc86e1a3520371914f8c6e13a9519": "531ff8e063320425a9aeeaf0121e0342",
".git/objects/5d/f16eb33b23a5a6df9396d53bd2cff3a906bdd7": "5e17065e7c8a5a8f473dcc74257d8474",
".git/objects/5e/a448d354a9fa57d0086df6b80c2e39b59467f9": "be40830e1e393bcd26d4d6b429e50347",
".git/objects/62/401e3d2b6242357a87389e0fccfaf30dad5cba": "40f4f717b7c7b97087a9f4af27cfe844",
".git/objects/62/4d88727de483ce4c97665abf2e4e2a1ff2b226": "78e54eb3b2e3c8f3af273aa1692667b8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/e0ada4944f0720a8ba6aaa2b75895790d88859": "eeac91b1e5f260353eabacc781eb58a3",
".git/objects/63/032f518aeb4f3073f0efad8e4048d924ccbb1a": "746a62aade6b297595c5c836938c305f",
".git/objects/63/1afe5f82adcaa27d1abbfa4984f68fe15282bc": "bff40b08fddbd618d58ec2f1e758c9d6",
".git/objects/63/a94a98332510dcb0c67fbebbffd8aaa14e7f9d": "ed2ebe2cefed9ba9f63b21e062553986",
".git/objects/64/cc9306011ef6e2fc920ae93489367f033069d0": "33944ee0d8a66fe2ebb779cf0300f86c",
".git/objects/65/23f7b0e0038d4c7260c2f951e1e153f3fba74d": "706a56fb2647e75dcd183c101e2e29e5",
".git/objects/66/79ba3210e168ff7b59cda2944f009272085eb0": "f49e8164bcc0adb11e4955ed2a073c43",
".git/objects/67/b57066e0e71f8f2099722e63e05b75ec56a6ee": "2e2313a826fc46b7b6e0d45f6d11b2a5",
".git/objects/68/87db828b455dd8b06c7414ffa7098f403de295": "386cb865336fa8ba5ec3dcf5d934092a",
".git/objects/6a/8b4ec3d40aba48f9ac0acd19f07116ab2089eb": "ab3a22b85ecc140bfaa317f6d6630740",
".git/objects/6a/e04a4974498662648d411f3c9fee438962cff0": "5f8d57366a498320c03f908904d77010",
".git/objects/6b/b80e0756ae072e7a4cecae1c9c51a2bf480038": "d4fadb100d73830fcd170a80bc67c724",
".git/objects/6c/8ab011b646eb8d484a111924bca15363034dae": "48814263d293d68e68f05a0650715d36",
".git/objects/6d/4b9f2e5f9a3a6ddfea82b450c9f049e73448e6": "f11f42747e8cd090459f9a29f8c9b1fb",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/52255e8ca770e743bceb6b9211791f7dd832b9": "a75592d84fb70799b4d482cfcf79b13d",
".git/objects/71/0cbdd3f9772904502a02def0dfce15925b51a1": "e378528e3a6c6e2640bec3bd4651c359",
".git/objects/71/cdd1976dcf810139a3e17d28e3305104e08630": "d636b8cc1e3aa4f7e0ce175befde0b7e",
".git/objects/72/495fa6da257e4c369fc4512e3cb59ed2708f8d": "d50dab845951d13fe929c73008d9fbca",
".git/objects/72/a4b8aa52cd33b83b2cebad55221ad3d29f4d83": "7102465754ed839239175dcc5a3f4708",
".git/objects/73/8e80a9c4fefed6bd29181e4222d13dc673400c": "bd1d30432fcd19827a319774f9c0fe2e",
".git/objects/74/baec7bd63cbe633341c2664e23b212b634eb94": "70db1608e2abe8b75bc007c097ea9505",
".git/objects/74/f6260aed9e7f5bbda770a3b0547313353dc958": "70fc13230ef6e1f4f297f575602844f8",
".git/objects/75/75dc58901b2469c103dd4f8e53783c4ec8d9ad": "8f420411191fada4f5d980b1574cbdde",
".git/objects/77/09651695eff616f4288c1c59402fc43c2f7c04": "84fcc234f6d8d41595a4ba80f6855214",
".git/objects/77/19d15713929353f38daed6131821d90e69af2f": "7c2640037fc9ce5f641298210cec4632",
".git/objects/79/55b379549d685687bbad74da5a36abf1238f54": "f0b5e3b9ce0feeccf83663d8a693c872",
".git/objects/79/b4e7f1fd431d67e2751116cbf9e425f18bba4f": "ab3ea01e1c85b40f85d20232eb9b439b",
".git/objects/79/cf3a5fa8cb5251518f61d667bf4964146386cc": "bf61838a1226a3e6405105fc8d863507",
".git/objects/79/fb04917c672cd914d43486127edc90a79cc96d": "7d9af0e8f736a00febad20a4b2c51c03",
".git/objects/7a/514b22c1e3068aa82fe188d284cb28b833be14": "4b5973d8b8591f5b4d2d2898097c38ef",
".git/objects/7b/21c4b30ff996427953dce14df4b40afbe7dbb6": "e5b7defd4addd4f3829f4194941f197f",
".git/objects/7b/add830b0fe8c86298d695c0e0dc58e77593110": "a19f14e334a04016c7953a88b7b43375",
".git/objects/7c/a3ce3d1f90792477376f81fc64850f3d762e33": "53ccf79ac4c4c28fafbaa0f23a85778f",
".git/objects/7d/8bd3d366e2ffc6eeef99dea7a6635eb29ef882": "283dd6690a1c8bf7deea9370ffe35233",
".git/objects/7d/a999e75558230d42a67db8b4f858a44bd6c10e": "3be92dedf61bdd267338a314341ec39f",
".git/objects/7e/18cf216ebff7574a541cd3f6bdd143582a7f4a": "75fc380ab24a20a8d1e01dc913dde95f",
".git/objects/80/5160d3478c6faf4ce5adb0142eecc6ae81a471": "6585d53f9e8c5f1597b22ef8bb85dc5a",
".git/objects/80/c1f83fde643352277e6e02e98129016836f047": "782d5e2f9b7da2f760dbc3c460943424",
".git/objects/81/0321823f9151a5bd07d68226314fa0fa382faf": "a1e2952783b672e8ac7a14a1cdbd26f4",
".git/objects/81/7ed9c914dde7d7a28c5d91110ba6be95716386": "929a652695f2d1ae3aaff16a8d7f6690",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/33669788a9702021d792af7821683e53a5135f": "36eeaf24d8e69e6874e1de284b0fc872",
".git/objects/83/ab17e34233f78882a6c7d14f19a92d94f17c3d": "4ddf6b2d05fa492a0ffa642fb4280729",
".git/objects/85/2d858e2787382f23d1a66f558403361215417c": "a48cf52182f2b9a92074b5e9401fc30a",
".git/objects/85/516e185b08461a5d12a98e14b286c7a4a74f5c": "b3360c68fee9c5fa0bb07f19abcc5754",
".git/objects/85/e3568c4dd82082c764f420084ad6acffdde354": "6106034b6f12b82e66137c41d0fa6aa4",
".git/objects/86/818e2fe913e71d7b83fd016d87584dc0c0731c": "2ef2a5a746296e910b07560003048f80",
".git/objects/87/1ada35968e2ab35417fb06f5ef16ec9cc8b270": "581d08c6da4ff1f284abf4e99330fbda",
".git/objects/87/1b0eeebe26f55148dfc07171f2a2a34c9993f0": "3b23af0f8d3d2f87f32654a62419eb5e",
".git/objects/87/6b69bc93d7bc2f47724669e0fc051dbf6f0fc1": "9404813ae2136667e167a09e9310f299",
".git/objects/88/80a8422334985505e9fd70410bd19c17627de3": "904d889911797e7491343ef054da0c2c",
".git/objects/88/f13e44ffae2e824a37331821659934d3d3fe42": "6193733ec84c54a4193b17be31bedb67",
".git/objects/89/46b59280fd7e28c59bc39685b89dbcf74e5f3c": "f8829986f24c4789d0d17f64b6849ed6",
".git/objects/8a/73a4ba3fcf5c329b547e6c30a008f6bda2cdc5": "88d021df2b42811275501961646ce7e5",
".git/objects/8b/9389da4d353c5a43f131f4c784e8eedc1c1380": "2efbf8184db212887d99c1c6fb2f1e66",
".git/objects/8b/d7f18aaacd1b67585c1a1768460aa12670e2c4": "188e51a43a294594c31b16d097b515ef",
".git/objects/8b/dc8260edf97c153ad95940a2c27f6c0c0040d8": "27139201edc1bf5947366fd66f36be56",
".git/objects/8c/085039111015e84b08e32ebdfe46bc0ee5cd6c": "513815d82de752be95f605326d42a674",
".git/objects/8c/85792b221548e4c83aac5fe96416028f482738": "2983dfc5385431fef92137294f4a3d2c",
".git/objects/8d/8201b4906a33134f5bf665cc1c4eab8b1c0147": "eeccd3e7e6cef8414481cc6ee2d66722",
".git/objects/8d/d7e52a0a2ba42e96d5bc7797e89cd2c3a7d83c": "ebfe14536573dd2f996f5e1e727a62dd",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/d8c767877c244c1882678823e8c8d182647c03": "56ea96672a81c609378b8186cc0c4087",
".git/objects/8f/7ea452bbdcbd98710b89ad819ed02f44fd886c": "74d50c50140412b0df8ffe9202876f00",
".git/objects/90/70ef86d43bd8f6718a47977fecdb2cfa7b754a": "9a225b085e354d0cf22d1f0cb8a42df6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/5bec095dbe872f2b0e8f62db5c1b71e951a462": "f1ace6ec8cf5e4b96d6280530e8f015d",
".git/objects/95/91d966416134dcd2b00a494361bdc8a5db6cee": "999b5ab705fc388edf7cb9068a3541c4",
".git/objects/95/9a400d93aa7ab431b6424746306dc3d2b84619": "8facf5ab78217d8f0bf115b658540314",
".git/objects/97/73d99b2b497aa6aa131cfac9578ffca05d241a": "69a5a8608c3c4e1d09a17927c695f20e",
".git/objects/98/19c6049b962657a2c6e87a1d60dbe695ff79bd": "3ffd6e2fddbcf30fd9aaba97446ed4c9",
".git/objects/98/abfaececb6e9e0d2d17f4eb5d82f2e31c0185c": "791425aa99f15d4b44ae93a5cee214c4",
".git/objects/99/fe3a4f773e5a1fa797e2fd4e19799aefec084b": "de585c00c95aea302b98efb82a5069a1",
".git/objects/9a/4ccf8e98b62b184bcbc0eedf99031f9a3cc2d3": "93f0868b98b1a66636248c1fa9f30bfe",
".git/objects/9b/1aafe1d6667c253d2edda5368dc53eb89ba859": "3e0de0c5b63938aa427ec3b7dc87f5b9",
".git/objects/9b/ffc3016080921934c2c40fac02a1782795c69d": "3131bd2d62deb97d96dc8418bd14eba3",
".git/objects/9c/810a192664fbbb406734bf506a2eac1e9300ad": "a8367bd916db9fa60649c962c710851f",
".git/objects/9c/dbf564c1bea8cb4aca6f49a0cd6bf548a03cf0": "6327dfc099407126f02b4ff8a1b082a7",
".git/objects/9d/f8386a074b29c75af658896aa35fcfd5902cbc": "afd8b83e96ede29e4cc271287de995c5",
".git/objects/9e/754a21436c01ae21666d9e77660f9f1d13dc1f": "b7214f1a1c5892442e2494024b4248e8",
".git/objects/a0/0433a20727c22c43a1c62366cc5a74d7ca2359": "c3ae2f224436199da45666f13d3a8b1f",
".git/objects/a0/5ae7ab9fec084cc4f743df38a05ece66e7fc8b": "4b2de4e0436da27a959fd167edb3e54b",
".git/objects/a1/130972e2b3fd3ee97a075d0a2553663928a961": "fb77dfcf35bb411d49fc4a76d49bd66b",
".git/objects/a1/7d0107b537e7847056a84045fadd5fc3e59251": "000b459758b3be9af5d77b32ecab4daf",
".git/objects/a2/6e329ab14ebe78fc3e9717532631a255b4d74b": "2a06655af84f5549e97e41e8d1097bc7",
".git/objects/a5/140ead8038814f1390585ef43990ddf04163d0": "35f7a9b0cac2ea6f5a94ab810fc7bda7",
".git/objects/a5/2daf54793b1f061d12c378fd8651bb864a5b9c": "1ec17a84d6414cc1919650b5bb942113",
".git/objects/a5/a9ddaa8e4e377f6fe30706ed6bd205e1454d19": "ad89421c6fb84b55221f15184d19fc2c",
".git/objects/a6/5c51ee556474e2eb6f311c8d5b09579c01e3c9": "c2365e5fae74a03464ddf6d61d6df022",
".git/objects/a6/70a343fd7bf8db3de25544a7d45d3bd064a8b8": "1351edc381bf33029a4c5ffc9ad439ec",
".git/objects/a7/2ecf5bc5f6b6e9381ab704a6d96de1d2242989": "85ed54fbaafde79d0eefa5795440626a",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/9578c95eb1e7e0dd654b103fc22b64f6895d08": "805d273e9ee6a0606403496d41270e30",
".git/objects/ab/a5dec74482d9791e09b4a600c3f26fa2478dab": "5341b0c8051e316c8b3756c265a31154",
".git/objects/ac/18dc254e755a542a9040b9b7db12abdecd2706": "204a8dff90f8213c8e63d656bdfe4fcf",
".git/objects/ad/1803ff6ca6399aed93ada1ffcd2d58c89db08a": "06f40e35165d4007f15d0ff2e88b09eb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/1e16385cc9f9dda1cfcd18369d124f5a0e6b8b": "0b16688d0c49de05ae108f0812ce1808",
".git/objects/b0/688e2e1c4ca48dde257e0872c732356dc894e7": "ebdb4515942d48e4b52f5910a63e5c88",
".git/objects/b1/1762dea1160bebb4020305e1f565a158abdcf6": "eae4a55eff0fff59a92883d29cad555a",
".git/objects/b1/c3bdaf96ec58627ef6700a61d36febb7e3c869": "4e6c8851a3bc40ae20ce1b9854adf31b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/921cc1a2b711d975ee4d4e4417b3ffba70d830": "8f82ebad6b5b05cf141c7fee8bd97b7b",
".git/objects/b2/ea595fefedf726580983fb8ede0a10928e463a": "948c883d5e9396781fd711bc0b13c200",
".git/objects/b3/23278716d07949c6be26d5a1765334c6d20c4b": "5756e078a3ff1cb14c0e60d1732187c0",
".git/objects/b3/749942572f3fb1a2692982aaf724641face262": "0d0644842e373fcefe3399867972a6bc",
".git/objects/b3/eaac45c2f2eeb8b35f0b5e216060d9d060f8ad": "115d08037b520edb2f71e6f855eb340f",
".git/objects/b4/852c930d1d555199059708e9849f07acb2dcd4": "0dc8377705d193d68410bd8d13dc6538",
".git/objects/b4/f05afb273b1b2ff92b055fb7e637cccd131d65": "62844334222326ee58c7f7953456bdab",
".git/objects/b5/5d689c1b2d3b22cee62be54fa6f91435756f72": "8701854beeb04521bc8c026b8615bbb5",
".git/objects/b6/a946d00f612b3633a5ee95d8c6e495f6568bf8": "35623f5eb5dd48e5a3146e433059acf9",
".git/objects/b8/412362dd70a6aa092be5664ce4b748c008f634": "dcb61ce9b085f416cfbe446109684751",
".git/objects/b8/76edbbde16e6b3761f7a65392e25606207e981": "f528c0c6854b37f10d2822fa4a727539",
".git/objects/b8/d25ee9b47db00b343364aba641080ac64c8a54": "79227a2eec6aea263fb790daeaee81f7",
".git/objects/b9/2fd335e893cf6f600325265cba6f759bd014d0": "147f76ed76894d1f445fddfe7de751f4",
".git/objects/ba/50fd6b880c186a9fb9033fbf14ef35ae944551": "13ce6d229d9563fd90681604ac31583d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/d48a4c38ee6f028fc7d1afc9959162877691a4": "cbd2b77e8c9250d974f873523f486c9e",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/4ee5c938287e5b94233ecf1b905be96558a3d6": "091468f848b56abdf7f48fcd5814a713",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/1a098c23c2e9548fcef747750d74c0487a8308": "9db5e354070be0359794a9a78e1df4d0",
".git/objects/bd/d5913ee158e2f255fcb5fe9ad7f8e25e963bf4": "9f75e6300187ab3c634ecebf5ecb27da",
".git/objects/be/75eb6974463ab2eaf7f94e29985e165b1d3501": "8050550ac2e9b69eb470f20a1babe1f7",
".git/objects/be/d55a1c094694dd76404b6fea95fd753774143b": "961106f51ae0721e4d13d2b0457ba028",
".git/objects/c0/72dd6fc1a419321b0a9986331f02e85bafe4a6": "a3849cb6ca27a3f8315842d8f9c4bfee",
".git/objects/c0/7eb59261af546eb6d3d635bc0137b43f9a5e65": "a3bb26f65c3ca58aaf6f00b45b73ffc3",
".git/objects/c1/04795aedd6ba8019834fdac4b49821af21dd64": "64f25a2757377e41eca2283e08e9f500",
".git/objects/c3/842c4e2950a535f3ec583851e663bf5a7bf0c0": "2aac1df55ce1133e99dba15668760df9",
".git/objects/c3/b11417b9e7ff9c4d5860e90b824dc52f986b62": "f89974133fa44ae974934699fa6f486c",
".git/objects/c3/b71bb5eb92f7ee60a2edad6ba5bd905039135a": "606ef8f25be5310afb8cc1995a49b51f",
".git/objects/c3/c55a67d323743493c48c87f9aead9e56460104": "6dd6dd1830e8068dcfb326c00203c75d",
".git/objects/c4/00eee4c906186ac9d0f1c89517b16e3b145b82": "2ea5dfb1fdc5951ac5d65d2dc6e96aa4",
".git/objects/c5/11193ad6b067d3b2c54f9444f95b200847519c": "92686881a325e2dab11a43c21f51f82a",
".git/objects/c6/1b35327b65102f6339735640473d91a2da0279": "e183dc75b6f750a8de3e0ef74048fb48",
".git/objects/c6/2b3065383ae114c4682b08341b300cd1adafe7": "73eaaf61667fb58151366b95794f70fa",
".git/objects/c9/c6b5b815def608852e949bdb146709722284cf": "0016b45b67b70b302c98eb01b13e5ea3",
".git/objects/c9/fc12748a3d892b26c5da1f5d2d77ae4ac398ad": "f85e6310d90d2baf3dbcfab5fe58d5b0",
".git/objects/ca/7031ce346eb7e873ba3f94e4304c026995c866": "71a38faaecf0aa6a6aaea1f5fb9ccda6",
".git/objects/cb/3bb25cf84e0032d1a330a62833b838b6254860": "8e5661fb5876d64a41a68005726d9515",
".git/objects/cb/f497734c8012ead9e1b7a7c03483ca600cdb0d": "199d6749c79de594866dba07441db0f4",
".git/objects/cc/0629f4929c9b11b2f2bf7b4ae995796c496ac5": "c507b76da1687fe967d8e353ae436a2f",
".git/objects/cc/18e8287ef38d3465e7d69d2bdac9afa7429588": "9c2e4549e3702b7a938a5db05906fd0a",
".git/objects/cc/40ed2ca3fe781920ae990fc86b96caec7a9ef2": "5ae64c6d900e50908add276cbdca8af9",
".git/objects/cc/b7104b0b15cf01e621124338e82a1f52318f91": "f3e13c8ebfaea6350003de61261ff9a1",
".git/objects/cd/f30f7ea03975bd4a74aa193b9532bb803a4816": "7f2f8da32d3d5abe03b8b362bfaf99d8",
".git/objects/cf/81b61e333669838e77fb8232cc591ead888b83": "e938f2e7b5def165d2b4805757cb75e9",
".git/objects/cf/b851bb958979fc1881fb4007703395d610dca3": "8aece56b8a9b3c98f5764a6e0f324600",
".git/objects/d1/0a43b1d419138acf5b52b5f97f0aad328aa4f6": "e575ed9737a45334907a288dd4bb4abf",
".git/objects/d2/5e0f1ee19682f4746f47eb916633b17f242915": "57271469544d970b7d4468a26c59e7d5",
".git/objects/d2/af1365e97b1ad927f38fbde1739266f064f746": "df0282e4fbea3d398b4cbcb208782286",
".git/objects/d3/44b1bf887bb28ce5c2c2ec87e4c4614216e46e": "d852a1edf25d3f8672c57eefa94dced1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/cd1a93ee2b6aa6646463c3609920f4996e03e3": "09dd19217e64ef8f984d3331248eaced",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/588d74988162cc3ae4a249e5b0796617445118": "947ba6ef890b4ae9edc28d8da435f341",
".git/objects/d7/84d051c68c255b55dd0c13739d5bf375a86c3b": "4a5b9fa4ac205504a5ff1255e99a622f",
".git/objects/d9/23c83d128da1eccd1e1b6f8fe6c986804cbee9": "2a2fd3aeace2a712338baae53fc59b22",
".git/objects/db/0cf0ed48adf0b1d9581a1320c9f59b3d9dd83b": "e1f3f8522ef032fd273cffd0ab32b70e",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dd/7551cf909312a333c3c94ab0f53a5c0b41bd1a": "332c973cb205fc841420e5cae1001a64",
".git/objects/dd/a0f46b76794a3417a412ed4ec6a29d795e11f3": "ea7a69daa5423c114d242b90c44a03f3",
".git/objects/de/09de929b68bd1d1fb7006ff2719dfe62dd0e4f": "16676a34431ff1a7b9560778a41ab56b",
".git/objects/de/23e98886506bcfc34339009ee2332f70be5619": "190be848fc48487fd7730c80cd16c811",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/79c4f24da7284ba0ae81e248bc2676f5c576a2": "c2fecaa9e367b457b3c972a25a7af141",
".git/objects/e0/951689b997e828f7df9c95fc31bd587c9096ea": "bd4c0da6b81cc34437510fb79708499c",
".git/objects/e1/6c023cd28fc4b2bb6549813c5f91c42168a159": "38e50ab34636342bddbb32417da38cf3",
".git/objects/e1/d050d3955407429bcc87d11294a9cf881fa8ed": "a325debf4c5e8a47a96f53b44eeb6bb9",
".git/objects/e1/f8b996cf4b22c19d793baf237e813d1d24294b": "c580cde9b494c9099569c7da53191db5",
".git/objects/e2/676ef17b061954c246947c8bf23c4fa07394d0": "d92d8446693a86834d3f612dfabd78e6",
".git/objects/e3/c1ef51768b5de2af733e9d687fd67c53986daf": "3a1db40d89d08549f81f1c536c804285",
".git/objects/e4/a2883e5938817af01133f6b91a8f36797ff229": "e2f2db56f76cc9291ce4a99e4569e00e",
".git/objects/e6/0b4276a4f73123a61ae2828b1ee825b144dd56": "e5f5285f2b91fd8fc879a6ff7a6d750b",
".git/objects/e6/21a8b10075bdbc6bbe995af17830a33a438fda": "e100b42b0f032ae7868e58c97e7ec622",
".git/objects/e6/4b3bf4d92a77ee1a58e0bb75a5ce49b8e5d39a": "9c31fa0ac654372565af6360e2a78bf5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6ea2be73da46ee59892af8a65b47d8b04fdf79": "d59645c35a8f6da7bad5c1e5c876a99f",
".git/objects/e8/1deca49abb9ffdac6c8626927dbb9923bf5622": "9afb133f7606e73bcac496f782f79559",
".git/objects/e8/228909586b01a2f60a70bb8fa3b482281c1a4b": "db0f8362badc8c4ed27824455dd4155a",
".git/objects/e8/3677b59627acffc1472cc0d79d458ef0da483c": "3ea2ab4060ed0221d972b62917e318ea",
".git/objects/e8/8843280afe95b94ac08580d6b71cce9c358cef": "7981b320b1f5343747713ed085560461",
".git/objects/e8/9b03d7f4a94edb079f6131aaf6e8112f29cda5": "5200cf46c517d818ba9141bb06dc5576",
".git/objects/ed/1931e3eabb80d438116d8a1b44064ed325f6fe": "e6abf233f9f8d18783da2be17e9b4e46",
".git/objects/ed/38e9b9648ac74eb7dd3b71df84d861b80a7956": "f0ea66f8e04c1efa1720b19393a0c390",
".git/objects/ed/b2d7ba890030451bedd599c874f77aa660095b": "1a87ed88d9734f58ae665820baadf8b3",
".git/objects/ee/d3d781a13ba135d1c9ec8572eee903448423d8": "67b20c86d277d896e05797922eed7d6f",
".git/objects/f0/867ed33434f1e971a227c4dee53bccb9dae8d1": "44bffbf4de0d321f968d602988b79319",
".git/objects/f0/8fa73b6ce870035bfceacb390422f2464efdaa": "11d73a04662a88d588eed07c75927cfc",
".git/objects/f0/eb06b91cc15c01d3dbfd6a3e146b9819ea395f": "2f834ca023cc5783104e8dddced0d474",
".git/objects/f2/2e042408c263cce559c83275eb41230bf72b8d": "2c4f3eeceaed2eb3b78c7d48a79b27be",
".git/objects/f3/86699940f6f241ece930bd4669b6a229bbfcc0": "aa049899897a210784afe218442fc5e9",
".git/objects/f3/af9f426c147616036ccc3fc38dec0612769d0c": "c142b4af4c14ab294cd23cf5f8245471",
".git/objects/f4/49fd0c7a2374d7bb8a52d46bccbd09ad7b54fa": "3f924ab11cf313b7b536f613b5daf83f",
".git/objects/f5/259b51145ae75beaac05009ee3ce0cda9c7629": "95cf402db113ca6308203a844dcb6e86",
".git/objects/f5/74eb07a39d876a620afa7837b8ea406d4da6cd": "a2b8ae942ae74378e4f50472e1533c5e",
".git/objects/f6/904a81a067d87997543988a8332540461df3a9": "7f72b507e8b348db3f6207d51e964466",
".git/objects/f6/d56d1bc97c8cb0131fea52c80d43b7f4ee03b8": "02c127cea669b4942ad559fca1087976",
".git/objects/f7/12efc862a8fa8787d91eea08e5479ce3e0eb97": "4835aeb01e3c93762ce052285f442fc7",
".git/objects/f7/425f116538495a760aeb4dabb447258c7c61c6": "c327e8a9f634a466f99b760e487a2033",
".git/objects/f8/1cea9e6f34bc678a04a6acd3c98816488cbf1d": "5a7302394d10ab8576a824c6bc8f5aeb",
".git/objects/f8/c4ef2ebf062e3a12839b3e78d28291004949af": "0a2f0b7ca34227af2c10bc9cbdb4281f",
".git/objects/fb/3872ab8bf234ad37d7bd04d7c0023be714546c": "6896ea55f7869187268bccb2be099284",
".git/objects/fc/16b79cc78a2e6a38cd882179b13e9b53277424": "8ab980eafd1a07276994767ee1979cea",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/2dad27cef7a6fe1b58730c892cd9592da40c92": "bc73ff6b2d6329d1145c214aeced4327",
".git/objects/fe/31e8ead846b618df1a8f0d25c264e1457b24bb": "3145aff752ccfc3731fb3e7cff9adac8",
".git/objects/ff/1b2ceff5b5b51952151604373f85d44ff310ad": "8bd820ded7507041cadae74bf5a31ed4",
".git/objects/ff/7a3fabeea0efb97baf8707bb57b5322549e7da": "59fc314b74b6f31068b438cb6668859b",
".git/objects/pack/pack-4ba95d43a7385199468316590fb45f341f159533.idx": "99303221cd1a63a86c303990a87abe99",
".git/objects/pack/pack-4ba95d43a7385199468316590fb45f341f159533.pack": "aafa125527e7501d372b900176ac4123",
".git/ORIG_HEAD": "433b4f0a62b8996a0773d18919bb61bb",
".git/packed-refs": "590530a6e0a2eed442eefd85e008f750",
".git/refs/heads/main": "4272dcd06b92144cc272e3b90bb31bc3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4272dcd06b92144cc272e3b90bb31bc3",
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
"assets/fonts/MaterialIcons-Regular.otf": "41b8a6970dce56190ae91ab2aa5a190f",
"assets/NOTICES": "9d4473792d872445b46ec14c058dac33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "cf3387b768092edb91ab5c8114bd607d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "eaf9df335957e3d80bcc3347b372a480",
"icons/Icon-512.png": "c1dcf932c997b5d724ded04b451db27f",
"icons/Icon-maskable-192.png": "eaf9df335957e3d80bcc3347b372a480",
"icons/Icon-maskable-512.png": "c1dcf932c997b5d724ded04b451db27f",
"index.html": "908674cc4c11ccab70da35134027cd2e",
"/": "908674cc4c11ccab70da35134027cd2e",
"ios_icon.png": "00498da332085718f65b28e481227930",
"main.dart.js": "90fdd22c93e033ef17b37201be7d1ed5",
"manifest.json": "72ce207725932c75708bfdd7a8432c7b",
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
