"use strict";
const res = { name: "ABC", address: "address" };
Object.entries(res).forEach(([key, value]) => {
    const el = document.getElementById("root");
    if (el) {
        el.innerHTML += key + ": " + value;
    }
    else
        return;
});
