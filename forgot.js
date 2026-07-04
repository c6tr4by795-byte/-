import { resetPassword } from "./auth.js";

const email = document.getElementById("email");
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", async () => {

    if (email.value.trim() === "") {
        alert("يرجى إدخال البريد الإلكتروني");
        return;
    }

    try {

        await resetPassword(email.value.trim());

        alert("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");

        window.location.href = "login.html";

    } catch (error) {

        alert(error.message);

    }

});
