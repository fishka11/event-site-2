const eventsList = [
  {
    eventName: "koin",
    eventType: "kongres",
    eventFullName: {
      l1: "XVI Kongres",
      l2: "Ochrony Informacji Niejawnych,",
      l3: "Biznesowych i Danych Osobowych",
    },
    eventDate: {
      start: new Date(2020, 5, 23, 14, 0),
      end: new Date(2020, 5, 25, 14, 0),
    },
    eventLocation: {
      name: "Centrum Rekreacji i Biznesu Grand Stasinda",
      www: "www.grandstasinda.pl",
      address: {
        street: "ul. Karpęciny 5a",
        postCode: "34-530",
        city: "Bukowina Tatrzańska",
      },
      googleMapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83215.81730633657!2d20.107676!3d49.32386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea667193922ad434!2sCentrum%20Rekreacji%20I%20Biznesu%20GRAND%20Stasinda!5e0!3m2!1spl!2spl!4v1594747002600!5m2!1spl!2spl",
    },
    eventPrices: {
      singleRoomPrice: 2100,
      doubleRoomPrice: 1900,
    },
    eventDiscounts: [
      { id: 0, name: "członkowie KSOIN", discount: "5%" },
      { id: 1, name: "uczestnicy szkoleń", discount: "5%" },
      { id: 2, name: "uczestnictwo 2 osób z jednej firmy", discount: "10%" },
      {
        id: 3,
        name: "uczestnictwo 3 i więcej osób z jednej firmy",
        discount: "15%",
      },
    ],
    genitiveDeclinedEventType: "Kongresu",
    locativeDeclinedEventType: "Kongresie",
    sitePages: [
      {
        id: 0,
        inMenu: false,
        path: "",
        displyName: "",
        title:
          "Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Kongres o istotnym znaczeniu i niebagatelnym wpływie na stan bezpieczeństwa państwa, firm, instytucji i obywateli, odbywający się nieprzerwanie od 2005 roku. Możliwość spotkania z wieloma wybitnymi gośćmi i ekspertami, a także okazja do dyskusji, bezpośredniej wymiany doświadczeń, kuluarowych spotkań, przekazania uwag i wyjaśnienia wątpliwości dotyczących organizacji i funkcjonowania pionów ochrony, obowiązków i zadań kierowników jednostek organizacyjnych, pełnomocników ochrony, administratorów bezpieczeństwa informacji/inspektorów ochrony danych osobowych oraz współpracy i podziału kompetencji między nimi.",
      },
      {
        id: 1,
        inMenu: true,
        path: "tematyka",
        displyName: "Tematyka & Program",
        title:
          "Tematy wystąpień na Kongresie Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Teamtyka prelekcji obejmuje wiele aspektów ochrony informacji...",
      },
      {
        id: 2,
        inMenu: true,
        path: "prelegenci",
        displyName: "Prelegenci",
        title:
          "Prelegenci Kongresu Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Znakomite osobistości ze świata służb mundurowych, biznesu, administracji rządowej i smorządowej - specjaliści ochrony informacji niejawnych, biznesowych i danych osobowych",
      },
      {
        id: 3,
        inMenu: false,
        path: "atrakcje",
        displyName: "Atrakcje",
        title: "",
        description: "",
      },
      {
        id: 4,
        inMenu: true,
        path: "patronat",
        displyName: "Patronat",
        title:
          "Patroni i partnerzy Kongresu Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Nasi patroni i partnerzy, którzy wspierają idee Kongresu Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
      },
      {
        id: 5,
        inMenu: true,
        path: "info",
        displyName: "Inf. organizacyjne",
        title:
          "Informacje organizacyjne - Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Informacje organizacyjne dla uczestników i chętnych do wzięcia udziału w Kongresie Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
      },
      {
        id: 6,
        inMenu: true,
        path: "kontakt",
        displyName: "Kontakt",
        title:
          "Kontakt - Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Kontakt do organizatora, dane adresowe i lokalizacja Kongresu Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
      },
      {
        id: 7,
        inMenu: false,
        path: "rejestracja",
        displyName: "Zarejestruj się",
        title:
          "Zarejestruj się na Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Formularz rejestracji na a Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
      },
      {
        id: 8,
        inMenu: false,
        path: "admin",
        displyName: "",
        title: "",
        description: "",
      },
      {
        id: 9,
        inMenu: false,
        path: "404",
        displyName: "404",
        title:
          "404 - Kongres Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
        description:
          "Zapraszmy do uczestnictwa w Kongresie Ochrony Informacji Niejawnych, Biznesowych i Danych Osobowych",
      },
    ],
    organizersList: [
      {
        id: 0,
        mainOrganizer: true,
        name: "Krajowe Stowarzyszenie Ochrony Informacji Niejawnych",
        shortName: "KSOIN",
        logoFilename: "logo-ksoin.png",
        url: "www.ksoin.pl",
        address: "pl. Grunwaldzki 8-10",
        zip: "40-127",
        city: "Katowice",
        phones: [{ id: "1", tel: "+48 32 206 46 00" }],
        faxes: [{ id: "1", fax: "+48 32 206 46 00" }],
        emails: [{ id: "1", email: "biuro@ksoin.pl" }],
        bankName: "PEKAO SA I Oddział w Katowicach",
        bankAccount: "55 1240 1330 1111 0010 2402 9927",
        nip: "634-25-59-104",
        regon: "278336546",
      },
    ],
    picturesStrap: [
      { id: 0, picName: "pic-strap-01.jpg", picDesc: "Spotkanie biznesowe" },
      {
        id: 1,
        picName: "pic-strap-02.jpg",
        picDesc: "Biurko z arkuszami zestawień i wykresów",
      },
      { id: 2, picName: "pic-strap-03.jpg", picDesc: "Para pod parasolem" },
      { id: 3, picName: "pic-strap-04.jpg", picDesc: "Kostki domina" },
      {
        id: 4,
        picName: "pic-strap-05.jpg",
        picDesc: "Arkusze zestawień i wykresów",
      },
      {
        id: 5,
        picName: "pic-strap-06.jpg",
        picDesc: "Dyskusja nad zestawieniami biznesowymi",
      },
    ],
    agenda: [
      {
        id: 0,
        title:
          "21 lat Polski w NATO i nowych regulacji prawnych ochrony informacji niejawnych.",
      },
      {
        id: 1,
        title:
          "Służby wywiadu i kontrwywiadu w systemie bezpieczeństwa informacji.",
      },
      {
        id: 2,
        title:
          "Dlaczego jesteśmy podsłuchiwani/inwigilowani? Czy jesteśmy mniej czy bardziej bezpieczni?",
      },
      {
        id: 3,
        title:
          "Informacje prawnie chronione w biznesie (tajemnica przedsiębiorstwa, handlowa i giełdowa).",
      },
      {
        id: 4,
        title:
          "Piony ochrony informacji niejawnych w jednostkach organizacyjnych, ewoluowanie ich roli i zadań, stan faktyczny.",
      },
      {
        id: 5,
        title:
          "Kancelarie tajne i niejawne w tym i zagraniczne – ich rola w obiegu dokumentów niejawnych.",
      },
      {
        id: 6,
        title:
          "Debata na temat aktualnych i przyszłych zagrożeń ochrony informacji i danych osobowych.",
      },
      {
        id: 7,
        title:
          "Dyrektywa Parlamentu Europejskiego i Rady (UE) ws.  zwalczanie nieuczciwej konkurencji w gospodarce rynkowej.",
      },
      {
        id: 8,
        title:
          'Istota Zarządzania Ryzykiem wg. RODO. Kiedy "Ogólna Ocena Ryzyka" a kiedy "Ocena Skutków" dla ochrony przetwarzanych danych osobowych?',
      },
      {
        id: 9,
        title:
          "Sesja tematyczna: Jak wdrożyliśmy/wdrażamy RODO w urzędach, instytucjach, firmach i organizacjach – podpowiedzi, uwagi i pierwsze doświadczenia.",
      },
      {
        id: 10,
        title:
          "Bezpieczeństwo komunikacji w biznesie. Jak za pomocą szyfrowania chronić informacje i dane o organizacji.",
      },
      {
        id: 11,
        title:
          "Czas po „światowym krachu gospodarczym” w kontekście zapewnienia bezpieczeństwa biznesu.",
      },
      {
        id: 12,
        title:
          "Możliwości finansowania nowoczesnych technologii bezpieczeństwa biznesu.",
      },
      {
        id: 13,
        title:
          "Techniki i technologie zapewniające ochronę/zdobywanie informacji.",
      },
      {
        id: 14,
        title:
          "Innowacyjność i nowe technologie Industry 4.0 i oczekiwane 5G w ochronie gospodarki i bezpieczeństwa biznesu.",
      },
      {
        id: 15,
        title:
          "Krajowy System Cyberbezpieczeństwa - operatorzy usług kluczowych i dostawcy usług cyfrowych.",
      },
      {
        id: 16,
        title:
          "Wojna w cyberprzestrzeni - jej reperkusje dla bezpieczeństwa narodowego i  gospodarczego kraju. Budowanie świadomości bezpieczeństwa cybernetycznego.",
      },
      {
        id: 17,
        title:
          "Czy zagroził nam Blackout? Możliwy scenariusz chaosu społeczno- gospodarczego.",
      },
      {
        id: 18,
        title:
          "Zarządzaniu bezpieczeństwem obiektów. Doświadczenia, podpowiedzi i praktyczne uwagi.",
      },
      {
        id: 19,
        title:
          "Światowe i krajowe zagrożenia terrorystyczne. Ekozagrożenia bezpieczeństwa biznesu i terroryzm ekologiczny.",
      },
    ],
  },
  {
    eventName: "kbn",
    eventType: "Konferencja",
    eventFullName: {
      l1: "X Konferencja",
      l2: "Bezpieczeństwa Narodowego i Gospodarczego",
    },
    eventDate: {
      start: new Date(2020, 9, 19, 12, 0),
      end: new Date(2020, 9, 20, 14, 0),
    },
    eventLocation: {
      name: "AMW Rewita",
      www: "www.rewita.pl/rynia/",
      address: {
        street: "ul. Wczasowa 59",
        postCode: "05-127",
        city: "Rynia - Białobrzegi",
      },
      googleMapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d311185.0431255664!2d20.806476!3d52.458616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1a915377aeb4464!2sRewita%20Rynia!5e0!3m2!1spl!2spl!4v1594924846554!5m2!1spl!2spl",
    },
    cite: {
      text: "Ojczyzna to wielki zbiorowy obowiązek",
      author: "Cyprian Kamil Norwid",
    },
    eventPrices: {
      singleRoomPrice: 1700,
      doubleRoomPrice: 1500,
    },
    eventDiscounts: [
      { id: 0, name: "członkowie KSOIN", discount: "5%" },
      { id: 1, name: "uczestnicy szkoleń", discount: "5%" },
      { id: 2, name: "uczestnictwo 2 osób z jednej firmy", discount: "10%" },
      {
        id: 3,
        name: "uczestnictwo 3 i więcej osób z jednej firmy",
        discount: "15%",
      },
    ],
    genitiveDeclinedEventType: "Konferencji",
    locativeDeclinedEventType: "Konferencji",
    sitePages: [
      {
        id: 0,
        inMenu: false,
        path: "",
        displyName: "",
        title: "Konferencja Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Konferencja, na której poruszymy tematykę zagrożeń pandemią dla bezpieczeństwa państwa i obywateli, przeznaczona dla kadry kierowniczej i zarządzającej przedsiębiorstw o strategicznym znaczeniu gospodarczo-obronnym, operatorów usług kluczowych i dostawców usług cyfrowych, zobowiązanych do ochrony infrastruktury krytycznej oraz odpowiedzialnych za zarządzanie kryzysowe, bezpieczeństwo, porządek publiczny i obronę cywilną.",
      },
      {
        id: 1,
        inMenu: true,
        path: "tematyka",
        displyName: "Tematyka & Program",
        title:
          "Tematy wystąpień i prelekcji na Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
        description: "Teamtyka prelekcji obejmuje...",
      },
      {
        id: 2,
        inMenu: true,
        path: "prelegenci",
        displyName: "Prelegenci",
        title:
          "Prelegenci Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Znakomite osobistości ze świata służb mundurowych, biznesu, administracji rządowej i smorządowej - specjaliści w dziedzinie obronności, zarzadzania strategicznego i kryzysowgo.",
      },
      {
        id: 3,
        inMenu: false,
        path: "atrakcje",
        displyName: "Atrakcje",
        title: "",
        description: "",
      },
      {
        id: 4,
        inMenu: true,
        path: "patronat",
        displyName: "Patronat",
        title:
          "Patroni i partnerzy Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Nasi patroni i partnerzy, którzy wspierają idee Konferencji Bezpieczeństwa Narodowego i Gospodarczego.",
      },
      {
        id: 5,
        inMenu: true,
        path: "info",
        displyName: "Inf. organizacyjne",
        title:
          "Informacje organizacyjne - Konferencja Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Informacje organizacyjne dla uczestników i chętnych do wzięcia udziału w Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
      },
      {
        id: 6,
        inMenu: true,
        path: "kontakt",
        displyName: "Kontakt",
        title:
          "Kontakt do organizatora Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Kontakt do organizatora, dane adresowe i lokalizacja Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
      },
      {
        id: 7,
        inMenu: false,
        path: "rejestracja",
        displyName: "Zarejestruj się",
        title:
          "Zarejestruj się na Konferencję Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Formularz rejestracji na Konferencję Bezpieczeństwa Narodowego i Gospodarczego",
      },
      {
        id: 8,
        inMenu: false,
        path: "admin",
        displyName: "",
        title: "",
        description: "",
      },
      {
        id: 9,
        inMenu: false,
        path: "404",
        displyName: "404",
        title: "404 - Konferencja Bezpieczeństwa Narodowego i Gospodarczego",
        description:
          "Zapraszmy do uczestnictwa w Konferencji Bezpieczeństwa Narodowego i Gospodarczego",
      },
    ],
    organizersList: [
      {
        id: 0,
        mainOrganizer: false,
        helperOrganizer: true,
        name: "Stowarzyszenie Wspierania Bezpieczeństwa Narodowego",
        shortName: "SWBN",
        logoFilename: "logo-swbn.png",
        url: "www.swbn.pl",
        address: "pl. Grunwaldzki 8-10",
        zip: "40-127",
        city: "Katowice",
        phones: [{ id: "1", tel: "+48 32 206 46 00" }],
        faxes: [{ id: "1", fax: "+48 32 206 46 00" }],
        emails: [{ id: "1", email: "biuro@swbn.pl" }],
        bankName: "PEKAO SA I Oddział w Katowicach",
        bankAccount: "55 1240 1330 1111 0010 2402 9927",
        nip: "634-25-59-104",
        regon: "278336546",
      },
      {
        id: 1,
        mainOrganizer: true,
        helperOrganizer: false,
        name: "Krajowe Stowarzyszenie Ochrony Informacji Niejawnych",
        shortName: "KSOIN",
        logoFilename: "logo-ksoin.png",
        url: "www.ksoin.pl",
        address: "pl. Grunwaldzki 8-10",
        zip: "40-127",
        city: "Katowice",
        phones: [{ id: "1", tel: "+48 32 206 46 00" }],
        faxes: [{ id: "1", fax: "+48 32 206 46 00" }],
        emails: [{ id: "1", email: "biuro@ksoin.pl" }],
        bankName: "PEKAO SA I Oddział w Katowicach",
        bankAccount: "55 1240 1330 1111 0010 2402 9927",
        nip: "634-25-59-104",
        regon: "278336546",
      },
      {
        id: 2,
        mainOrganizer: false,
        helperOrganizer: false,
        name: "Stowarzyszenie Kombatantów Misji Pokojowych ONZ",
        logoFilename: "logo-skmponz.png",
      },
      {
        id: 4,
        mainOrganizer: false,
        helperOrganizer: false,
        name: "Komitet Bezpieczeństwa Biznesu Krajowej Izby Gospodarczej",
        logoFilename: "logo-kig-30-lat.png",
      },
    ],
    picturesStrap: [
      {
        id: 0,
        picName: "pic-strap-07.jpg",
        picDesc: "Żołnerze Wojska Polskiego",
      },
      {
        id: 1,
        picName: "pic-strap-08.jpg",
        picDesc: "Hasło Cyber Security na tle odłamków szkła",
      },
      {
        id: 2,
        picName: "pic-strap-09.jpg",
        picDesc: "Most wiszący - widok na jezdnię",
      },
      { id: 3, picName: "pic-strap-04.jpg", picDesc: "Kostki domina" },
      {
        id: 4,
        picName: "pic-strap-11.jpg",
        picDesc: "Flaga Polski",
      },
      {
        id: 5,
        picName: "pic-strap-10.jpg",
        picDesc: "Nadajniki GSM na masztach",
      },
    ],
    agenda: [
      {
        id: 0,
        title:
          "Aktualne wyzwania i uwarunkowania międzynarodowego i krajowego bezpieczeństwa.",
      },
      {
        id: 1,
        title:
          "Światowe trendy aktualnych zagrożeń bezpieczeństwa gospodarczego w czasach pandemii.",
      },
      {
        id: 2,
        title:
          "Świat i Polska w czasach pandemii – uczymy się żyć i funkcjonować w tym stanie.",
      },
      {
        id: 3,
        title:
          "Wiedza i informacja w zarządzaniu bezpieczeństwem narodowym i gospodarczym państwa.",
      },
      {
        id: 4,
        title:
          "Mikro, małe i średnie przedsiębiorstwa – bieżące problemy i zagrożenia.",
      },
      {
        id: 5,
        title:
          "Biały wywiad i wroga penetracja zagraniczna gospodarki narodowej.",
      },
      {
        id: 6,
        title:
          "Krajowy Plan Zarządzania Kryzysowego – dostosowanie do aktualnych zagrożeń.",
      },
      {
        id: 7,
        title:
          "Narodowy Program Ochrony Infrastruktury Krytycznej - doświadczenia, uwagi i zalecenia.",
      },
      {
        id: 8,
        title:
          "Obszary, obiekty, urządzenia podlegające obowiązkowej ochronie. Zarządzanie ich bezpieczeństwem.",
      },
      {
        id: 9,
        title: "Cyberzagrożenia wyzwaniem dla bezpieczeństwa narodowego.",
      },
      {
        id: 10,
        title:
          "Krajowy system cyberbezpieczeństwa – jego wdrożenie i funkcjonowanie.",
      },
      {
        id: 11,
        title: "Baśń o straszliwym smoku, czyli bezpieczeństwo 5G.",
      },
      {
        id: 12,
        title:
          "Operatorzy usług kluczowych i dostawcy usług cyfrowych – doświadczenia, uwagi i ocena.",
      },
      {
        id: 13,
        title:
          "Nowoczesne techniki i technologie wspierające bezpieczeństwo narodowe.",
      },
      {
        id: 14,
        title:
          "Analiza zagrożeń, szacowanie i zarządzania ryzykiem. Znaczenie ciągłości działania.",
      },
      {
        id: 15,
        title: "Ochrona danych osobowych i prywatności w cyfrowym świecie.",
      },
      {
        id: 16,
        title: "Wyzwania sztucznej inteligencji na dziś i na jutro.",
      },
      {
        id: 17,
        title:
          "Tajemnica przedsiębiorstwa w kontekście prawa konkurencji i prawa ochrony konsumentów.",
      },
      {
        id: 18,
        title:
          "Debata nt. „Bezpieczeństwo narodowe i gospodarcze to najważniejsze dobro wszystkich Polaków”.",
      },
    ],
  },
];
export default eventsList;
