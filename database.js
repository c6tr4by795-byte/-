// ===============================
// IRAQ GREEN
// DATABASE SYSTEM
// ===============================

import { db } from "./firebase.js";

import {

  doc,

  setDoc,

  getDoc,

  updateDoc,

  serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// إنشاء بيانات مستخدم

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

      cards:[],

      createdAt:serverTimestamp()

    },

    {

      merge:true

    }

  );

}

// جلب بيانات مستخدم

export async function getUser(uid){

  const snap = await getDoc(

    doc(db,"users",uid)

  );

  return snap.data();

}

// تحديث بيانات مستخدم

export async function updateUser(uid,data){

  await updateDoc(

    doc(db,"users",uid),

    data

  );

}
