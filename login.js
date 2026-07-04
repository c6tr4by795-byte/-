import {
    login,
    loginGoogle,
    googleResult
} from "./auth.js";

import {
    createUser
} from "./database.js";

// إكمال تسجيل Google بعد الرجوع
(async () => {

    try {

        const result = await googleResult();

        if (result && result.user) {

            await createUser(result.user);

            window.location.replace("index.html");

        }

    } catch (error) {

        console.error(error);

    }

})();

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("loginBtn").addEventListener("click", async () => {

    if (!email.value || !password.value) {

        alert("أدخل البريد الإلكتروني وكلمة المرور");

        return;

    }

    try {

        await login(
            email.value.trim(),
            password.value
        );

        window.location.replace("index.html");

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});

document.getElementById("googleBtn").addEventListener("click", async () => {

    try {

        await loginGoogle();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});
