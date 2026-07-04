// ===============================
// FIREBASE CONFIG
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// بيانات مشروعك
const firebaseConfig = {
  apiKey: "ضع ApiKey هنا",
  authDomain: "ضع AuthDomain هنا",
  projectId: "ضع ProjectId هنا",
  storageBucket: "ضع StorageBucket هنا",
  messagingSenderId: "ضع MessagingSenderId هنا",
  appId: "ضع AppId هنا"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// الخدمات
export const auth = getAuth(app);
export const db = getFirestore(app);
