/* ===========================
   العراق الأخضر V3
   app.js
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Iraq Green V3 Started");

    // دعم Telegram Mini App
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    // الانتقال بعد شاشة البداية
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);

});
