"use strict";
const body = document.body;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    const scrollStatus = window.scrollY;
    if (scrollStatus >= 20)
        header.style.background = "var(--nav-color)";
    else
        header.style.background = "#00000000";
});
