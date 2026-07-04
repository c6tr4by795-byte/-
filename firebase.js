// ===============================
// FIREBASE CONFIG
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// بيانات مشروع IRAQ GREEN
const firebaseConfig = {
  apiKey: "AIzaSyCPP4Qv_oftFJ0xoj6_-pdpT0eXCgcD2aI",
  authDomain: "hmjat187.firebaseapp.com",
  projectId: "hmjat187",
  storageBucket: "hmjat187.firebasestorage.app",
  messagingSenderId: "527864029743",
  appId: "1:527864029743:web:bf6285928ec2f77412dcda",
  measurementId: "G-3VSYZ2J5VQ"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// الخدمات
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
