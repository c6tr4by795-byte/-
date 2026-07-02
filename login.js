/* ===========================
   Login Page
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    // إذا المستخدم مسجل سابقاً
    if (localStorage.getItem("greenUser")) {
        window.location.href = "home.html";
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {

            showMessage("يرجى ملء جميع الحقول", "#ffb3b3");
            return;

        }

        const user = {
            name,
            email
        };

        localStorage.setItem("greenUser", JSON.stringify(user));

        showMessage("تم تسجيل الدخول بنجاح...", "#b8ffb8");

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1200);

    });

    function showMessage(text, color) {

        message.textContent = text;
        message.style.color = color;

    }

});
