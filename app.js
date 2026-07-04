// ===============================
// IRAQ GREEN
// APP SYSTEM
// ===============================

import { authListener } from "./auth.js";

import { createUser } from "./database.js";

authListener(async (user) => {

    if (!user) return;

    await createUser(user);

    console.log("Welcome:", user.email);

});
