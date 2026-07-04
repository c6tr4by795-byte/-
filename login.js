import { register, login, loginGoogle } from "./auth.js";
import { createUser } from "./database.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

// إنشاء حساب
registerBtn.onclick = async () => {

    try {

        const result = await register(
            email.value,
            password.value
        );

        await createUser({

            uid: result.user.uid,

            displayName: name.value,

            email: result.user.email,

            photoURL: "",

            phoneNumber: ""

        });

        alert("تم إنشاء الحساب");

        window.location.href = "index.html";

    } catch (e) {

        alert(e.message);

    }

};

// تسجيل الدخول
loginBtn.onclick = async () => {

    try {

        await login(
            email.value,
            password.value
        );

        alert("تم تسجيل الدخول");

        window.location.href = "index.html";

    } catch (e) {

        alert(e.message);

    }

};

// Google
googleBtn.onclick = async () => {

    try {

        const result = await loginGoogle();

        await createUser(result.user);

        window.location.href = "index.html";

    } catch (e) {

        alert(e.message);

    }

};
