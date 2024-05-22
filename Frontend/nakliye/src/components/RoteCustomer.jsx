import React, { useEffect, useState } from 'react';


const DATA = [
   {
    province: "Adana",
    "plaka": 1,
    districts: [
      "Aladağ",
      "Ceyhan",
      "Çukurova",
      "Feke",
      "İmamoğlu",
      "Karaisalı",
      "Karataş",
      "Kozan",
      "Pozantı",
      "Saimbeyli",
      "Sarıçam",
      "Seyhan",
      "Tufanbeyli",
      "Yumurtalık",
      "Yüreğir"
    ]
  },
  {
    province: "Adıyaman",
    "plaka": 2,
    districts: [
      "Besni",
      "Çelikhan",
      "Gerger",
      "Gölbaşı",
      "Kahta",
      "Merkez",
      "Samsat",
      "Sincik",
      "Tut"
    ]
  },
  {
    province: "Afyonkarahisar",
    "plaka": 3,
    districts: [
      "Başmakçı",
      "Bayat",
      "Bolvadin",
      "Çay",
      "Çobanlar",
      "Dazkırı",
      "Dinar",
      "Emirdağ",
      "Evciler",
      "Hocalar",
      "İhsaniye",
      "İscehisar",
      "Kızılören",
      "Merkez",
      "Sandıklı",
      "Sinanpaşa",
      "Sultandağı",
      "Şuhut"
    ]
  },
  {
    province: "Ağrı",
    "plaka": 4,
    districts: [
      "Diyadin",
      "Doğubayazıt",
      "Eleşkirt",
      "Hamur",
      "Merkez",
      "Patnos",
      "Taşlıçay",
      "Tutak"
    ]
  },
  {
    province: "Amasya",
    "plaka": 5,
    districts: [
      "Göynücek",
      "Gümüşhacıköy",
      "Hamamözü",
      "Merkez",
      "Merzifon",
      "Suluova",
      "Taşova"
    ]
  },
  {
    province: "Ankara",
    "plaka": 6,
    districts: [
      "Altındağ",
      "Ayaş",
      "Bala",
      "Beypazarı",
      "Çamlıdere",
      "Çankaya",
      "Çubuk",
      "Elmadağ",
      "Güdül",
      "Haymana",
      "Kalecik",
      "Kızılcahamam",
      "Nallıhan",
      "Polatlı",
      "Şereflikoçhisar",
      "Yenimahalle",
      "Gölbaşı",
      "Keçiören",
      "Mamak",
      "Sincan",
      "Kazan",
      "Akyurt",
      "Etimesgut",
      "Evren",
      "Pursaklar"
    ]
  },
  {
    province: "Antalya",
    "plaka": 7,
    districts: [
      "Akseki",
      "Alanya",
      "Elmalı",
      "Finike",
      "Gazipaşa",
      "Gündoğmuş",
      "Kaş",
      "Korkuteli",
      "Kumluca",
      "Manavgat",
      "Serik",
      "Demre",
      "İbradı",
      "Kemer",
      "Aksu",
      "Döşemealtı",
      "Kepez",
      "Konyaaltı",
      "Muratpaşa"
    ]
  },
  {
    province: "Artvin",
    "plaka": 8,
    districts: [
      "Ardanuç",
      "Arhavi",
      "Merkez",
      "Borçka",
      "Hopa",
      "Şavşat",
      "Yusufeli",
      "Murgul"
    ]
  },
  {
    province: "Aydın",
    "plaka": 9,
    districts: [
      "Merkez",
      "Bozdoğan",
      "Efeler",
      "Çine",
      "Germencik",
      "Karacasu",
      "Koçarlı",
      "Kuşadası",
      "Kuyucak",
      "Nazilli",
      "Söke",
      "Sultanhisar",
      "Yenipazar",
      "Buharkent",
      "İncirliova",
      "Karpuzlu",
      "Köşk",
      "Didim"
    ]
  },
  {
    province: "Balıkesir",
    "plaka": 10,
    districts: [
      "Altıeylül",
      "Ayvalık",
      "Merkez",
      "Balya",
      "Bandırma",
      "Bigadiç",
      "Burhaniye",
      "Dursunbey",
      "Edremit",
      "Erdek",
      "Gönen",
      "Havran",
      "İvrindi",
      "Karesi",
      "Kepsut",
      "Manyas",
      "Savaştepe",
      "Sındırgı",
      "Gömeç",
      "Susurluk",
      "Marmara"
    ]
  },
  {
    province: "Bilecik",
    "plaka": 11,
    districts: [
      "Merkez",
      "Bozüyük",
      "Gölpazarı",
      "Osmaneli",
      "Pazaryeri",
      "Söğüt",
      "Yenipazar",
      "İnhisar"
    ]
  },
  {
    province: "Bingöl",
    "plaka": 12,
    districts: [
      "Merkez",
      "Genç",
      "Karlıova",
      "Kiğı",
      "Solhan",
      "Adaklı",
      "Yayladere",
      "Yedisu"
    ]
  },
  {
    province: "Bitlis",
    "plaka": 13,
    districts: [
      "Adilcevaz",
      "Ahlat",
      "Merkez",
      "Hizan",
      "Mutki",
      "Tatvan",
      "Güroymak"
    ]
  },
  {
    province: "Bolu",
    "plaka": 14,
    districts: [
      "Merkez",
      "Gerede",
      "Göynük",
      "Kıbrıscık",
      "Mengen",
      "Mudurnu",
      "Seben",
      "Dörtdivan",
      "Yeniçağa"
    ]
  },
  {
    province: "Burdur",
    "plaka": 15,
    districts: [
      "Ağlasun",
      "Bucak",
      "Merkez",
      "Gölhisar",
      "Tefenni",
      "Yeşilova",
      "Karamanlı",
      "Kemer",
      "Altınyayla",
      "Çavdır",
      "Çeltikçi"
    ]
  },
  {
    province: "Bursa",
    "plaka": 16,
    districts: [
      "Gemlik",
      "İnegöl",
      "İznik",
      "Karacabey",
      "Keles",
      "Mudanya",
      "Mustafakemalpaşa",
      "Orhaneli",
      "Orhangazi",
      "Yenişehir",
      "Büyükorhan",
      "Harmancık",
      "Nilüfer",
      "Osmangazi",
      "Yıldırım",
      "Gürsu",
      "Kestel"
    ]
  },
  {
    province: "Çanakkale",
    "plaka": 17,
    districts: [
      "Ayvacık",
      "Bayramiç",
      "Biga",
      "Bozcaada",
      "Çan",
      "Merkez",
      "Eceabat",
      "Ezine",
      "Gelibolu",
      "Gökçeada",
      "Lapseki",
      "Yenice"
    ]
  },
  {
    province: "Çankırı",
    "plaka": 18,
    districts: [
      "Merkez",
      "Çerkeş",
      "Eldivan",
      "Ilgaz",
      "Kurşunlu",
      "Orta",
      "Şabanözü",
      "Yapraklı",
      "Atkaracalar",
      "Kızılırmak",
      "Bayramören",
      "Korgun"
    ]
  },
  {
    province: "Çorum",
    "plaka": 19,
    districts: [
      "Alaca",
      "Bayat",
      "Merkez",
      "İskilip",
      "Kargı",
      "Mecitözü",
      "Ortaköy",
      "Osmancık",
      "Sungurlu",
      "Boğazkale",
      "Uğurludağ",
      "Dodurga",
      "Laçin",
      "Oğuzlar"
    ]
  },
  {
    province: "Denizli",
    "plaka": 20,
    districts: [
      "Acıpayam",
      "Buldan",
      "Çal",
      "Çameli",
      "Çardak",
      "Çivril",
      "Merkez",
      "Merkezefendi",
      "Pamukkale",
      "Güney",
      "Kale",
      "Sarayköy",
      "Tavas",
      "Babadağ",
      "Bekilli",
      "Honaz",
      "Serinhisar",
      "Baklan",
      "Beyağaç",
      "Bozkurt"
    ]
  },
  {
    province: "Diyarbakır",
    "plaka": 21,
    districts: [
      "Kocaköy",
      "Çermik",
      "Çınar",
      "Çüngüş",
      "Dicle",
      "Ergani",
      "Hani",
      "Hazro",
      "Kulp",
      "Lice",
      "Silvan",
      "Eğil",
      "Bağlar",
      "Kayapınar",
      "Sur",
      "Yenişehir",
      "Bismil"
    ]
  },
  {
    province: "Edirne",
    "plaka": 22,
    districts: [
      "Merkez",
      "Enez",
      "Havsa",
      "İpsala",
      "Keşan",
      "Lalapaşa",
      "Meriç",
      "Uzunköprü",
      "Süloğlu"
    ]
  },
  {
    province: "Elazığ",
    "plaka": 23,
    districts: [
      "Ağın",
      "Baskil",
      "Merkez",
      "Karakoçan",
      "Keban",
      "Maden",
      "Palu",
      "Sivrice",
      "Arıcak",
      "Kovancılar",
      "Alacakaya"
    ]
  },
  {
    province: "Erzincan",
    "plaka": 24,
    districts: [
      "Çayırlı",
      "Merkez",
      "İliç",
      "Kemah",
      "Kemaliye",
      "Refahiye",
      "Tercan",
      "Üzümlü",
      "Otlukbeli"
    ]
  },
  {
    province: "Erzurum",
    "plaka": 25,
    districts: [
      "Aşkale",
      "Çat",
      "Hınıs",
      "Horasan",
      "İspir",
      "Karayazı",
      "Narman",
      "Oltu",
      "Olur",
      "Pasinler",
      "Şenkaya",
      "Tekman",
      "Tortum",
      "Karaçoban",
      "Uzundere",
      "Pazaryolu",
      "Köprüköy",
      "Palandöken",
      "Yakutiye",
      "Aziziye"
    ]
  },
  {
    province: "Eskişehir",
    "plaka": 26,
    districts: [
      "Çifteler",
      "Mahmudiye",
      "Mihalıççık",
      "Sarıcakaya",
      "Seyitgazi",
      "Sivrihisar",
      "Alpu",
      "Beylikova",
      "İnönü",
      "Günyüzü",
      "Han",
      "Mihalgazi",
      "Odunpazarı",
      "Tepebaşı"
    ]
  },
  {
    province: "Gaziantep",
    "plaka": 27,
    districts: [
      "Araban",
      "İslahiye",
      "Nizip",
      "Oğuzeli",
      "Yavuzeli",
      "Şahinbey",
      "Şehitkamil",
      "Karkamış",
      "Nurdağı"
    ]
  },
  {
    province: "Giresun",
    "plaka": 28,
    districts: [
      "Alucra",
      "Bulancak",
      "Dereli",
      "Espiye",
      "Eynesil",
      "Merkez",
      "Görele",
      "Keşap",
      "Şebinkarahisar",
      "Tirebolu",
      "Piraziz",
      "Yağlıdere",
      "Çamoluk",
      "Çanakçı",
      "Doğankent",
      "Güce"
    ]
  },
  {
    province: "Gümüşhane",
    "plaka": 29,
    districts: [
      "Merkez",
      "Kelkit",
      "Şiran",
      "Torul",
      "Köse",
      "Kürtün"
    ]
  },
  {
    province: "Hakkari",
    "plaka": 30,
    districts: [
      "Çukurca",
      "Merkez",
      "Şemdinli",
      "Yüksekova"
    ]
  },
  {
    province: "Hatay",
    "plaka": 31,
    districts: [
      "Altınözü",
      "Arsuz",
      "Defne",
      "Dörtyol",
      "Hassa",
      "Antakya",
      "İskenderun",
      "Kırıkhan",
      "Payas",
      "Reyhanlı",
      "Samandağ",
      "Yayladağı",
      "Erzin",
      "Belen",
      "Kumlu"
    ]
  },
  {
    province: "Isparta",
    "plaka": 32,
    districts: [
      "Atabey",
      "Eğirdir",
      "Gelendost",
      "Merkez",
      "Keçiborlu",
      "Senirkent",
      "Sütçüler",
      "Şarkikaraağaç",
      "Uluborlu",
      "Yalvaç",
      "Aksu",
      "Gönen",
      "Yenişarbademli"
    ]
  },
  {
    province: "Mersin",
    "plaka": 33,
    districts: [
      "Anamur",
      "Erdemli",
      "Gülnar",
      "Mut",
      "Silifke",
      "Tarsus",
      "Aydıncık",
      "Bozyazı",
      "Çamlıyayla",
      "Akdeniz",
      "Mezitli",
      "Toroslar",
      "Yenişehir"
    ]
  },
  {
    province: "İstanbul",
    "plaka": 34,
    districts: [
      "Adalar",
      "Bakırköy",
      "Beşiktaş",
      "Beykoz",
      "Beyoğlu",
      "Çatalca",
      "Eyüp",
      "Fatih",
      "Gaziosmanpaşa",
      "Kadıköy",
      "Kartal",
      "Sarıyer",
      "Silivri",
      "Şile",
      "Şişli",
      "Üsküdar",
      "Zeytinburnu",
      "Büyükçekmece",
      "Kağıthane",
      "Küçükçekmece",
      "Pendik",
      "Ümraniye",
      "Bayrampaşa",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Güngören",
      "Maltepe",
      "Sultanbeyli",
      "Tuzla",
      "Esenler",
      "Arnavutköy",
      "Ataşehir",
      "Başakşehir",
      "Beylikdüzü",
      "Çekmeköy",
      "Esenyurt",
      "Sancaktepe",
      "Sultangazi"
    ]
  },
  {
    province: "İzmir",
    "plaka": 35,
    districts: [
      "Aliağa",
      "Bayındır",
      "Bergama",
      "Bornova",
      "Çeşme",
      "Dikili",
      "Foça",
      "Karaburun",
      "Karşıyaka",
      "Kemalpaşa",
      "Kınık",
      "Kiraz",
      "Menemen",
      "Ödemiş",
      "Seferihisar",
      "Selçuk",
      "Tire",
      "Torbalı",
      "Urla",
      "Beydağ",
      "Buca",
      "Konak",
      "Menderes",
      "Balçova",
      "Çiğli",
      "Gaziemir",
      "Narlıdere",
      "Güzelbahçe",
      "Bayraklı",
      "Karabağlar"
    ]
  },
  {
    province: "Kars",
    "plaka": 36,
    districts: [
      "Arpaçay",
      "Digor",
      "Kağızman",
      "Merkez",
      "Sarıkamış",
      "Selim",
      "Susuz",
      "Akyaka"
    ]
  },
  {
    province: "Kastamonu",
    "plaka": 37,
    districts: [
      "Abana",
      "Araç",
      "Azdavay",
      "Bozkurt",
      "Cide",
      "Çatalzeytin",
      "Daday",
      "Devrekani",
      "İnebolu",
      "Merkez",
      "Küre",
      "Taşköprü",
      "Tosya",
      "İhsangazi",
      "Pınarbaşı",
      "Şenpazar",
      "Ağlı",
      "Doğanyurt",
      "Hanönü",
      "Seydiler"
    ]
  },
  {
    province: "Kayseri",
    "plaka": 38,
    districts: [
      "Bünyan",
      "Develi",
      "Felahiye",
      "İncesu",
      "Pınarbaşı",
      "Sarıoğlan",
      "Sarız",
      "Tomarza",
      "Yahyalı",
      "Yeşilhisar",
      "Akkışla",
      "Talas",
      "Kocasinan",
      "Melikgazi",
      "Hacılar",
      "Özvatan"
    ]
  },
  {
    province: "Kırklareli",
    "plaka": 39,
    districts: [
      "Babaeski",
      "Demirköy",
      "Merkez",
      "Kofçaz",
      "Lüleburgaz",
      "Pehlivanköy",
      "Pınarhisar",
      "Vize"
    ]
  },
  {
    province: "Kırşehir",
    "plaka": 40,
    districts: [
      "Çiçekdağı",
      "Kaman",
      "Merkez",
      "Mucur",
      "Akpınar",
      "Akçakent",
      "Boztepe"
    ]
  },
  {
    province: "Kocaeli",
    "plaka": 41,
    districts: [
      "Gebze",
      "Gölcük",
      "Kandıra",
      "Karamürsel",
      "Körfez",
      "Derince",
      "Başiskele",
      "Çayırova",
      "Darıca",
      "Dilovası",
      "İzmit",
      "Kartepe"
    ]
  },
  {
    province: "Konya",
    "plaka": 42,
    districts: [
      "Akşehir",
      "Beyşehir",
      "Bozkır",
      "Cihanbeyli",
      "Çumra",
      "Doğanhisar",
      "Ereğli",
      "Hadim",
      "Ilgın",
      "Kadınhanı",
      "Karapınar",
      "Kulu",
      "Sarayönü",
      "Seydişehir",
      "Yunak",
      "Akören",
      "Altınekin",
      "Derebucak",
      "Hüyük",
      "Karatay",
      "Meram",
      "Selçuklu",
      "Taşkent",
      "Ahırlı",
      "Çeltik",
      "Derbent",
      "Emirgazi",
      "Güneysınır",
      "Halkapınar",
      "Tuzlukçu",
      "Yalıhüyük"
    ]
  },
  {
    province: "Kütahya",
    "plaka": 43,
    districts: [
      "Altıntaş",
      "Domaniç",
      "Emet",
      "Gediz",
      "Merkez",
      "Simav",
      "Tavşanlı",
      "Aslanapa",
      "Dumlupınar",
      "Hisarcık",
      "Şaphane",
      "Çavdarhisar",
      "Pazarlar"
    ]
  },
  {
    province: "Malatya",
    "plaka": 44,
    districts: [
      "Akçadağ",
      "Arapgir",
      "Arguvan",
      "Darende",
      "Doğanşehir",
      "Hekimhan",
      "Merkez",
      "Pütürge",
      "Yeşilyurt",
      "Battalgazi",
      "Doğanyol",
      "Kale",
      "Kuluncak",
      "Yazıhan"
    ]
  },
  {
    province: "Manisa",
    "plaka": 45,
    districts: [
      "Akhisar",
      "Alaşehir",
      "Demirci",
      "Gördes",
      "Kırkağaç",
      "Kula",
      "Merkez",
      "Salihli",
      "Sarıgöl",
      "Saruhanlı",
      "Selendi",
      "Soma",
      "Şehzadeler",
      "Yunusemre",
      "Turgutlu",
      "Ahmetli",
      "Gölmarmara",
      "Köprübaşı"
    ]
  },
  {
    province: "Kahramanmaraş",
    "plaka": 46,
    districts: [
      "Afşin",
      "Andırın",
      "Dulkadiroğlu",
      "Onikişubat",
      "Elbistan",
      "Göksun",
      "Merkez",
      "Pazarcık",
      "Türkoğlu",
      "Çağlayancerit",
      "Ekinözü",
      "Nurhak"
    ]
  },
  {
    province: "Mardin",
    "plaka": 47,
    districts: [
      "Derik",
      "Kızıltepe",
      "Artuklu",
      "Merkez",
      "Mazıdağı",
      "Midyat",
      "Nusaybin",
      "Ömerli",
      "Savur",
      "Dargeçit",
      "Yeşilli"
    ]
  },
  {
    province: "Muğla",
    "plaka": 48,
    districts: [
      "Bodrum",
      "Datça",
      "Fethiye",
      "Köyceğiz",
      "Marmaris",
      "Menteşe",
      "Milas",
      "Ula",
      "Yatağan",
      "Dalaman",
      "Seydikemer",
      "Ortaca",
      "Kavaklıdere"
    ]
  },
  {
    province: "Muş",
    "plaka": 49,
    districts: [
      "Bulanık",
      "Malazgirt",
      "Merkez",
      "Varto",
      "Hasköy",
      "Korkut"
    ]
  },
  {
    province: "Nevşehir",
    "plaka": 50,
    districts: [
      "Avanos",
      "Derinkuyu",
      "Gülşehir",
      "Hacıbektaş",
      "Kozaklı",
      "Merkez",
      "Ürgüp",
      "Acıgöl"
    ]
  },
  {
    province: "Niğde",
    "plaka": 51,
    districts: [
      "Bor",
      "Çamardı",
      "Merkez",
      "Ulukışla",
      "Altunhisar",
      "Çiftlik"
    ]
  },
  {
    province: "Ordu",
    "plaka": 52,
    districts: [
      "Akkuş",
      "Altınordu",
      "Aybastı",
      "Fatsa",
      "Gölköy",
      "Korgan",
      "Kumru",
      "Mesudiye",
      "Perşembe",
      "Ulubey",
      "Ünye",
      "Gülyalı",
      "Gürgentepe",
      "Çamaş",
      "Çatalpınar",
      "Çaybaşı",
      "İkizce",
      "Kabadüz",
      "Kabataş"
    ]
  },
  {
    province: "Rize",
    "plaka": 53,
    districts: [
      "Ardeşen",
      "Çamlıhemşin",
      "Çayeli",
      "Fındıklı",
      "İkizdere",
      "Kalkandere",
      "Pazar",
      "Merkez",
      "Güneysu",
      "Derepazarı",
      "Hemşin",
      "İyidere"
    ]
  },
  {
    province: "Sakarya",
    "plaka": 54,
    districts: [
      "Akyazı",
      "Geyve",
      "Hendek",
      "Karasu",
      "Kaynarca",
      "Sapanca",
      "Kocaali",
      "Pamukova",
      "Taraklı",
      "Ferizli",
      "Karapürçek",
      "Söğütlü",
      "Adapazarı",
      "Arifiye",
      "Erenler",
      "Serdivan"
    ]
  },
  {
    province: "Samsun",
    "plaka": 55,
    districts: [
      "Alaçam",
      "Bafra",
      "Çarşamba",
      "Havza",
      "Kavak",
      "Ladik",
      "Terme",
      "Vezirköprü",
      "Asarcık",
      "Ondokuzmayıs",
      "Salıpazarı",
      "Tekkeköy",
      "Ayvacık",
      "Yakakent",
      "Atakum",
      "Canik",
      "İlkadım"
    ]
  },
  {
    province: "Siirt",
    "plaka": 56,
    districts: [
      "Baykan",
      "Eruh",
      "Kurtalan",
      "Pervari",
      "Merkez",
      "Şirvan",
      "Tillo"
    ]
  },
  {
    province: "Sinop",
    "plaka": 57,
    districts: [
      "Ayancık",
      "Boyabat",
      "Durağan",
      "Erfelek",
      "Gerze",
      "Merkez",
      "Türkeli",
      "Dikmen",
      "Saraydüzü"
    ]
  },
  {
    province: "Sivas",
    "plaka": 58,
    districts: [
      "Divriği",
      "Gemerek",
      "Gürün",
      "Hafik",
      "İmranlı",
      "Kangal",
      "Koyulhisar",
      "Merkez",
      "Suşehri",
      "Şarkışla",
      "Yıldızeli",
      "Zara",
      "Akıncılar",
      "Altınyayla",
      "Doğanşar",
      "Gölova",
      "Ulaş"
    ]
  },
  {
    province: "Tekirdağ",
    "plaka": 59,
    districts: [
      "Çerkezköy",
      "Çorlu",
      "Ergene",
      "Hayrabolu",
      "Malkara",
      "Muratlı",
      "Saray",
      "Süleymanpaşa",
      "Kapaklı",
      "Şarköy",
      "Marmaraereğlisi"
    ]
  },
  {
    province: "Tokat",
    "plaka": 60,
    districts: [
      "Almus",
      "Artova",
      "Erbaa",
      "Niksar",
      "Reşadiye",
      "Merkez",
      "Turhal",
      "Zile",
      "Pazar",
      "Yeşilyurt",
      "Başçiftlik",
      "Sulusaray"
    ]
  },
  {
    province: "Trabzon",
    "plaka": 61,
    districts: [
      "Akçaabat",
      "Araklı",
      "Arsin",
      "Çaykara",
      "Maçka",
      "Of",
      "Ortahisar",
      "Sürmene",
      "Tonya",
      "Vakfıkebir",
      "Yomra",
      "Beşikdüzü",
      "Şalpazarı",
      "Çarşıbaşı",
      "Dernekpazarı",
      "Düzköy",
      "Hayrat",
      "Köprübaşı"
    ]
  },
  {
    province: "Tunceli",
    "plaka": 62,
    districts: [
      "Çemişgezek",
      "Hozat",
      "Mazgirt",
      "Nazımiye",
      "Ovacık",
      "Pertek",
      "Pülümür",
      "Merkez"
    ]
  },
  {
    province: "Şanlıurfa",
    "plaka": 63,
    districts: [
      "Akçakale",
      "Birecik",
      "Bozova",
      "Ceylanpınar",
      "Eyyübiye",
      "Halfeti",
      "Haliliye",
      "Hilvan",
      "Karaköprü",
      "Siverek",
      "Suruç",
      "Viranşehir",
      "Harran"
    ]
  },
  {
    province: "Uşak",
    "plaka": 64,
    districts: [
      "Banaz",
      "Eşme",
      "Karahallı",
      "Sivaslı",
      "Ulubey",
      "Merkez"
    ]
  },
  {
    province: "Van",
    "plaka": 65,
    districts: [
      "Başkale",
      "Çatak",
      "Erciş",
      "Gevaş",
      "Gürpınar",
      "İpekyolu",
      "Muradiye",
      "Özalp",
      "Tuşba",
      "Bahçesaray",
      "Çaldıran",
      "Edremit",
      "Saray"
    ]
  },
  {
    province: "Yozgat",
    "plaka": 66,
    districts: [
      "Akdağmadeni",
      "Boğazlıyan",
      "Çayıralan",
      "Çekerek",
      "Sarıkaya",
      "Sorgun",
      "Şefaatli",
      "Yerköy",
      "Merkez",
      "Aydıncık",
      "Çandır",
      "Kadışehri",
      "Saraykent",
      "Yenifakılı"
    ]
  },
  {
    province: "Zonguldak",
    "plaka": 67,
    districts: [
      "Çaycuma",
      "Devrek",
      "Ereğli",
      "Merkez",
      "Alaplı",
      "Gökçebey"
    ]
  },
  {
    province: "Aksaray",
    "plaka": 68,
    districts: [
      "Ağaçören",
      "Eskil",
      "Gülağaç",
      "Güzelyurt",
      "Merkez",
      "Ortaköy",
      "Sarıyahşi"
    ]
  },
  {
    province: "Bayburt",
    "plaka": 69,
    districts: [
      "Merkez",
      "Aydıntepe",
      "Demirözü"
    ]
  },
  {
    province: "Karaman",
    "plaka": 70,
    districts: [
      "Ermenek",
      "Merkez",
      "Ayrancı",
      "Kazımkarabekir",
      "Başyayla",
      "Sarıveliler"
    ]
  },
  {
    province: "Kırıkkale",
    "plaka": 71,
    districts: [
      "Delice",
      "Keskin",
      "Merkez",
      "Sulakyurt",
      "Bahşili",
      "Balışeyh",
      "Çelebi",
      "Karakeçili",
      "Yahşihan"
    ]
  },
  {
    province: "Batman",
    "plaka": 72,
    districts: [
      "Merkez",
      "Beşiri",
      "Gercüş",
      "Kozluk",
      "Sason",
      "Hasankeyf"
    ]
  },
  {
    province: "Şırnak",
    "plaka": 73,
    districts: [
      "Beytüşşebap",
      "Cizre",
      "İdil",
      "Silopi",
      "Merkez",
      "Uludere",
      "Güçlükonak"
    ]
  },
  {
    province: "Bartın",
    "plaka": 74,
    districts: [
      "Merkez",
      "Kurucaşile",
      "Ulus",
      "Amasra"
    ]
  },
  {
    province: "Ardahan",
    "plaka": 75,
    districts: [
      "Merkez",
      "Çıldır",
      "Göle",
      "Hanak",
      "Posof",
      "Damal"
    ]
  },
  {
    province: "Iğdır",
    "plaka": 76,
    districts: [
      "Aralık",
      "Merkez",
      "Tuzluca",
      "Karakoyunlu"
    ]
  },
  {
    province: "Yalova",
    "plaka": 77,
    districts: [
      "Merkez",
      "Altınova",
      "Armutlu",
      "Çınarcık",
      "Çiftlikköy",
      "Termal"
    ]
  },
  {
    province: "Karabük",
    "plaka": 78,
    districts: [
      "Eflani",
      "Eskipazar",
      "Merkez",
      "Ovacık",
      "Safranbolu",
      "Yenice"
    ]
  },
  {
    province: "Kilis",
    "plaka": 79,
    districts: [
      "Merkez",
      "Elbeyli",
      "Musabeyli",
      "Polateli"
    ]
  },
  {
    province: "Osmaniye",
    "plaka": 80,
    districts: [
      "Bahçe",
      "Kadirli",
      "Merkez",
      "Düziçi",
      "Hasanbeyli",
      "Sumbas",
      "Toprakkale"
    ]
  },
  {
    province: "Düzce",
    "plaka": 81,
    districts: [
      "Akçakoca",
      "Merkez",
      "Yığılca",
      "Cumayeri",
      "Gölyaka",
      "Çilimli",
      "Gümüşova",
      "Kaynaşlı"
    ]
  }

];

  
 
export default function Address() {
  const [provinceOne, setProvinceOne] = useState();
  const [districtOne, setDistrictOne] = useState();
  const [provinceTwo, setProvinceTwo] = useState();
  const [districtTwo, setDistrictTwo] = useState();
   // State Hook - `useState`
   const [newItem, setNewItem] = useState([{}]);
   const [items, setItems] = useState([]);
 
   const [showEdit, setShowEdit] = useState(-1);
  

 
   /* Adds a new item to the list array*/
   function addItem() {
     // ! Check for empty item
     const item = [{
       id: Math.floor(Math.random() * 1000),
       value: provinceOne.province + " " + districtOne,

     },{
      id: Math.floor(Math.random() * 1000),
      value: provinceTwo.province + " " + districtTwo,

    }
    ];
 console.log(item)
     // Add new item to items array
     setItems(item);
 
     // Reset newItem back to original state
   }
 function submitItem(){

 }
   /* Deletes an item based on the `item.id` key */
   function deleteItem(id) {
     const newArray = items.filter((item) => item.id !== id);
     setItems(newArray);
   }
 
 
   


   const selectProvinceOne= (e) => {
    const selectedProvince = DATA.find(
      (entry) => entry.province === e.target.value
    );
    setDistrictOne(undefined);
    setProvinceOne(selectedProvince);
  };

  const selectDistrictOne = (e) => {
    setDistrictOne(e.target.value);
  };

  const selectProvinceTwo = (e) => {
    const selectedProvince = DATA.find(
      (entry) => entry.province === e.target.value
    );
    setDistrictTwo(undefined);
    setProvinceTwo(selectedProvince);
  };

  const selectDistrictTwo = (e) => {
    setDistrictTwo(e.target.value);
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col col-md-2">
        <label className="form-label">Nakliyenin başangıç İli :</label>
      <select onChange={selectProvinceOne}>
        {DATA.map((entry, index) => {
          return (
            <option  key={index} value={entry.province}>
              {entry.province}
            </option>
          );
        })}
      </select>
      </div>
      {!!provinceOne && (
         <div className="col col-md-2">
        <label className="form-label">Nakliyenin başangıç  İlçesi :</label>
        <select onChange={selectDistrictOne}>
          {provinceOne.districts.map((district, index) => {
            return (
              <option value={district} key={index}>
                {district}
              </option>
            );
          })}
        </select></div>
      )}

      {!!provinceOne && (
        <>
        Nakliyenin başangıç İli :{provinceOne.province}
        </>
      )}
      {!!districtOne && (
        <>
        <br></br>
        Nakliyenin başangıç İlçesi : {districtOne}
          
    </>   
      )}
    </div>
    {!!provinceOne && !!districtOne && (
    <div id='2' className="row">
            <div className="col col-md-2">
        <label className="form-label">Nakliyenin bitiş İli</label>
      <select onChange={selectProvinceTwo}>
        {DATA.map((entry, index) => {
          return (
            <option key={index} value={entry.province}>
              {entry.province}
            </option>
          );
        })}
      </select>
      </div>
      {!!provinceTwo && (
         <div className="col col-md-2">
        <label className="form-label">Nakliyenin bitiş İlçesi</label>
        <select onChange={selectDistrictTwo}>
          {provinceTwo.districts.map((district, index) => {
            return (
              <option value={district} key={index}>
                {district}
              </option>
            );
          })}
        </select></div>
      )}

      {!!provinceTwo && (
        <>
          Nakliyenin bitiş İli :{provinceTwo.province}
        </>
      )}
      {!!districtTwo && (
        <>
        <br></br>
        Nakliyenin bitiş İlçesi : {districtTwo}
          
 <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 "  onClick={()=>{addItem()}}>Rota Ekle</button></div>    </>   
      )}
    </div>)}
    <ul>
         {items.map((item) => {
           return (
             <div>
               <li key={item.id} onClick={() => setShowEdit(item.id)}>
                 {item.value}
                 <button
                   className="delete-button"
                   onClick={() => deleteItem(item.id)}
                 >
                   Sil
                 </button>
               </li>
 
             </div>
           );
         })}
       </ul>
       {!!items.length && (
        <>
               <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 "  onClick={()=>{submitItem()}}>İlan ver</button></div>   

        </>
      )}
       </div>
  );
}
