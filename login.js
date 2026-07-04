import {
  login,
  loginGoogle,
  googleResult
} from "./auth.js";

// عند الرجوع من تسجيل Google
googleResult()
.then((result)=>{

    if(result && result.user){

        window.location.href="index.html";

    }

})
.catch((error)=>{

    alert(error.message);

});

// عناصر الصفحة

const email=document.getElementById("email");

const password=document.getElementById("password");

const loginBtn=document.getElementById("loginBtn");

const googleBtn=document.getElementById("googleBtn");

// تسجيل الدخول

loginBtn.addEventListener("click",async()=>{

    if(email.value===""||password.value===""){

        alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");

        return;

    }

    try{

        await login(

            email.value.trim(),

            password.value

        );

        window.location.href="index.html";

    }

    catch(error){

        alert(error.message);

    }

});

// Google

googleBtn.addEventListener("click",async()=>{

    try{

        await loginGoogle();

    }

    catch(error){

        alert(error.message);

    }

});
