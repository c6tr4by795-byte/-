import {
  login,
  loginGoogle,
  googleResult
} from "./auth.js";

import {
  createUser
} from "./database.js";

// عند الرجوع من Google
window.addEventListener("load", async () => {

  try {

    const result = await googleResult();

    if (result && result.user) {

      await createUser(result.user);

      window.location.href = "index.html";

    }

  } catch (error) {

    console.error(error);

  }

});

// زر تسجيل الدخول
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

  loginBtn.onclick = async () => {

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    if (!email || !password) {

      alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");

      return;

    }

    try {

      await login(email, password);

      window.location.href = "index.html";

    } catch (error) {

      alert(error.message);

    }

  };

}

// زر Google
const googleBtn = document.getElementById("googleBtn");

if (googleBtn) {

  googleBtn.onclick = async () => {

    try {

      await loginGoogle();

    } catch (error) {

      alert(error.message);

    }

  };

}
