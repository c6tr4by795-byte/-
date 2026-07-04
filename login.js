import {
  login,
  loginGoogle,
  googleResult
} from "./auth.js";

import {
  createUser
} from "./database.js";

// عند الرجوع من تسجيل Google
window.addEventListener("load", async () => {

  try {

    const result = await googleResult();

    if (result && result.user) {

      await createUser(result.user);

      window.location.href = "home.html";

    }

  } catch (error) {

    console.error(error);

  }

});

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

// تسجيل الدخول
loginBtn.addEventListener("click", async () => {

  const userEmail = email.value.trim();
  const userPassword = password.value;

  if (!userEmail || !userPassword) {

    alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");

    return;

  }

  try {

    const result = await login(
      userEmail,
      userPassword
    );

    await createUser(result.user);

    window.location.href = "home.html";

  } catch (error) {

    switch (error.code) {

      case "auth/user-not-found":
        alert("الحساب غير موجود");
        break;

      case "auth/wrong-password":
        alert("كلمة المرور غير صحيحة");
        break;

      case "auth/invalid-credential":
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
        break;

      case "auth/network-request-failed":
        alert("تحقق من اتصال الإنترنت ثم أعد المحاولة");
        break;

      default:
        alert(error.message);

    }

  }

});

// Google
googleBtn.addEventListener("click", async () => {

  try {

    await loginGoogle();

  } catch (error) {

    alert(error.message);

  }

});
