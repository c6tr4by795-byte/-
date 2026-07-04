import { register } from "./auth.js";
import { createUser } from "./database.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("كلمتا المرور غير متطابقتين");
        return;
    }

    try {

        const result = await register(
            email.value.trim(),
            password.value
        );

        await createUser({
            uid: result.user.uid,
            displayName: name.value.trim(),
            email: result.user.email,
            photoURL: "",
            phoneNumber: ""
        });

        alert("تم إنشاء الحساب بنجاح");

        window.location.href = "index.html";

    } catch (error) {

        alert(error.message);

    }

});
