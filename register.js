import { register } from "./auth.js";
import { createUser } from "./database.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

document.getElementById("registerBtn").addEventListener("click", async () => {

    const fullName = name.value.trim();
    const userEmail = email.value.trim();
    const userPassword = password.value;
    const confirm = confirmPassword.value;

    if (!fullName || !userEmail || !userPassword || !confirm) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    if (userPassword !== confirm) {
        alert("كلمتا المرور غير متطابقتين");
        return;
    }

    try {

        const result = await register(
            userEmail,
            userPassword
        );

        result.user.displayName = fullName;

        await createUser(result.user);

        alert("تم إنشاء الحساب بنجاح");

        window.location.replace("index.html");

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});
