import { resetPassword } from "./auth.js";

const email = document.getElementById("email");
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", async () => {

    const userEmail = email.value.trim();

    if (userEmail === "") {

        alert("يرجى إدخال البريد الإلكتروني");

        return;

    }

    try {

        await resetPassword(userEmail);

        alert("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");

        window.location.href = "index.html";

    } catch (error) {

        switch (error.code) {

            case "auth/user-not-found":
                alert("لا يوجد حساب بهذا البريد الإلكتروني");
                break;

            case "auth/invalid-email":
                alert("البريد الإلكتروني غير صحيح");
                break;

            case "auth/network-request-failed":
                alert("تحقق من اتصال الإنترنت");
                break;

            default:
                alert(error.message);

        }

    }

});
