/* ==========================================================
   IRAQ GREEN
   Config v1.0
========================================================== */

const APP_CONFIG = {

    /* ===========================
       Application
    =========================== */

    appName: "IRAQ GREEN",

    version: "1.0.0",

    environment: "production",

    language: "ar",

    direction: "rtl",

    theme: "light",

    /* ===========================
       Country
    =========================== */

    country: {

        code: "IQ",

        name: "العراق"

    },

    /* ===========================
       Launch Area
    =========================== */

    city: {

        id: "najaf",

        name: "النجف الأشرف"

    },

    /* ===========================
       Map
    =========================== */

    map: {

        defaultZoom: 13,

        minZoom: 10,

        maxZoom: 20,

        allowUserLocation: true

    },

    /* ===========================
       Trees
    =========================== */

    trees: {

        minimumDistance: 2,

        allowDuplicateLocation: false,

        imageRequired: true,

        qrRequired: true

    },

    /* ===========================
       User
    =========================== */

    user: {

        loginWithGoogle: true,

        loginWithApple: true,

        loginWithEmail: true,

        loginWithPhone: true

    },

    /* ===========================
       Notifications
    =========================== */

    notifications: {

        enabled: true,

        sound: true,

        vibration: true

    },

    /* ===========================
       Cards
    =========================== */

    membership: {

        enabled: true,

        qrCard: true,

        digitalCard: true

    },

    /* ===========================
       Firebase
    =========================== */

    firebase: {

        apiKey: "",

        authDomain: "",

        projectId: "",

        storageBucket: "",

        messagingSenderId: "",

        appId: ""

    }

};

Object.freeze(APP_CONFIG);
