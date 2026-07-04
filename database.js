// ===============================
// IRAQ GREEN
// DATABASE
// ===============================

import { db } from "./firebase.js";

import {

doc,

setDoc,

getDoc,

updateDoc,

serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// إنشاء مستخدم

export async function createUser(user){

await setDoc(

doc(db,"users",user.uid),

{

uid:user.uid,

name:user.displayName || "",

email:user.email || "",

photo:user.photoURL || "",

phone:user.phoneNumber || "",

city:"النجف",

role:"user",

points:0,

trees:0,

createdAt:serverTimestamp()

},

{

merge:true

}

);

}

// جلب بيانات مستخدم

export async function getUser(uid){

const snap=await getDoc(

doc(db,"users",uid)

);

if(!snap.exists()) return null;

return snap.data();

}

// تحديث بيانات

export async function updateUser(uid,data){

return await updateDoc(

doc(db,"users",uid),

data

);

}
