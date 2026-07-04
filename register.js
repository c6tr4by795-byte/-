import { register } from "./auth.js";
import { createUser } from "./database.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    const fullName = name.value.trim();
    const userEmail = email.value.trim();
    const userPassword = password.value;
    const confirm = confirmPassword.value;

    if (
        fullName === "" ||
        userEmail === "" ||
        userPassword === "" ||
        confirm === ""
    ) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    if (userPassword !== confirm) {
        alert("كلمتا المرور غير متطابقتين");
        return;
    }

    try {

        const result = await register(
            fullName,
            userEmail,
            userPassword
        );

        await createUser(result.user);

        alert("✅ تم إنشاء الحساب بنجاح");

        window.location.href = "home.html";

    } catch (error) {

        switch (error.code) {

            case "auth/email-already-in-use":
                alert("هذا البريد الإلكتروني مستخدم مسبقًا");
                break;

            case "auth/invalid-email":
                alert("البريد الإلكتروني غير صحيح");
                break;

            case "auth/weak-password":
                alert("كلمة المرور يجب أن تكون 6 أحرف أو أكثر");
                break;

            case "auth/network-request-failed":
                alert("تحقق من اتصال الإنترنت");
                break;

            default:
                alert(error.message);

        }

    }

});
