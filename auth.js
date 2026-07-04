// ===============================
// IRAQ GREEN
// AUTH SYSTEM
// ===============================

import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

GoogleAuthProvider,

signInWithRedirect,

getRedirectResult,

sendPasswordResetEmail,

signOut,

onAuthStateChanged,

updateProfile

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// إنشاء حساب
export async function register(name,email,password){

const result=await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(

result.user,

{

displayName:name

}

);

return result;

}

// تسجيل الدخول
export async function login(email,password){

return await signInWithEmailAndPassword(

auth,

email,

password

);

}

// Google

export async function loginGoogle(){

const provider=new GoogleAuthProvider();

provider.setCustomParameters({

prompt:"select_account"

});

await signInWithRedirect(

auth,

provider

);

}

// نتيجة Google

export async function googleResult(){

return await getRedirectResult(auth);

}

// نسيت كلمة المرور

export async function resetPassword(email){

return await sendPasswordResetEmail(

auth,

email

);

}

// تسجيل خروج

export async function logout(){

return await signOut(auth);

}

// مراقبة المستخدم

export function authListener(callback){

onAuthStateChanged(

auth,

callback

);

}
