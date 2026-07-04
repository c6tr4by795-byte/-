import { authListener, logout } from "./auth.js";
import { getUser } from "./database.js";

const welcome = document.getElementById("welcome");
const treesCount = document.getElementById("treesCount");
const pointsCount = document.getElementById("pointsCount");
const logoutBtn = document.getElementById("logoutBtn");

authListener(async (user) => {

    if (!user) {

        window.location.href = "index.html";
        return;

    }

    try {

        const data = await getUser(user.uid);

        if (welcome) {

            welcome.textContent = `مرحباً ${data?.name || user.displayName || "مستخدم"} 🌳`;

        }

        if (treesCount) {

            treesCount.textContent = data?.trees || 0;

        }

        if (pointsCount) {

            pointsCount.textContent = data?.points || 0;

        }

    } catch (error) {

        console.error(error);

    }

});

logoutBtn.addEventListener("click", async () => {

    try {

        await logout();

        window.location.href = "index.html";

    } catch (error) {

        alert(error.message);

    }

});
