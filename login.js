import { login, loginGoogle } from "./auth.js";

const loginForm = document.getElementById("loginForm");
const googleButton = document.getElementById("googleLogin");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    try {

        await login(email, password);

        alert("تم تسجيل الدخول بنجاح");

        window.location.href = "index.html";

    } catch (error) {

        alert(error.message);

    }

});

googleButton.addEventListener("click", async () => {

    try {

        await loginGoogle();

        alert("تم تسجيل الدخول بواسطة Google");

        window.location.href = "index.html";

    } catch (error) {

        alert(error.message);

    }

});
