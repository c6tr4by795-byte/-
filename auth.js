// ===============================
// IRAQ GREEN
// AUTH SYSTEM
// ===============================

import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// إنشاء حساب
export async function register(email, password) {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}

// تسجيل الدخول
export async function login(email, password) {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

// تسجيل بواسطة Google
export async function loginGoogle() {

  const provider = new GoogleAuthProvider();

  return await signInWithPopup(
    auth,
    provider
  );

}

// تسجيل الخروج
export async function logout() {

  return await signOut(auth);

}

// مراقبة حالة المستخدم
export function authListener(callback) {

  onAuthStateChanged(
    auth,
    callback
  );

}
