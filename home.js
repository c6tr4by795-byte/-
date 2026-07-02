/* ===========================
   Home Page
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    // قراءة بيانات المستخدم
    const user = JSON.parse(localStorage.getItem("greenUser"));

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // عرض اسم المستخدم
    const userName = document.getElementById("userName");

    if (userName) {
        userName.textContent = `أهلاً ${user.name}`;
    }

    // عدادات الإحصائيات
    animateCounter("treeCount", 12);
    animateCounter("points", 245);
    animateCounter("badges", 6);

    // تأثير الضغط على البطاقات
    document.querySelectorAll(".service").forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(.95)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);

        });

    });

});

// دالة العدادات
function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let value = 0;

    const speed = Math.max(10, Math.floor(1000 / target));

    const timer = setInterval(() => {

        value++;

        element.textContent = value;

        if (value >= target) {

            clearInterval(timer);

        }

    }, speed);

}
