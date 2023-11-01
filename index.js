"use strict";
const body = document.body;
const header = document.querySelector("header");
const menuButton = document.querySelector(".header-button-menu");
const menuLines = document.querySelectorAll(".header-button-menu hr");
window.addEventListener("scroll", () => {
    const scrollStatus = window.scrollY;
    if (scrollStatus >= 20)
        header.style.background = "var(--nav-color)";
    else
        header.style.background = "#00000000";
});
let canToggle = true;
const enableToggle = (delay) => {
    return setTimeout(() => {
        canToggle = true;
    }, delay);
};
const onMenuOpen = () => {
    canToggle = false;
    body.style.overflow = "hidden";
    menuButton.style.gap = "0";
    menuLines.forEach(line => {
        line.style.position = "absolute";
    });
    menuLines[0].style.transform = "rotate(45deg)";
    menuLines[1].style.width = "0";
    menuLines[2].style.transform = "rotate(-45deg)";
    enableToggle(200);
};
const onMenuClose = () => {
    canToggle = false;
    body.style.overflow = "visible";
    menuLines[0].style.transform = "rotate(0)";
    menuLines[1].style.width = "25px";
    menuLines[2].style.transform = "rotate(0)";
    setTimeout(() => {
        menuLines.forEach(line => {
            line.style.removeProperty("position");
        });
        menuButton.style.gap = "6px";
        enableToggle(200);
    }, 100);
};
const toggleMenu = (element) => {
    if (!canToggle)
        return;
    const has = element.classList.toggle("opened");
    if (has)
        onMenuOpen();
    else
        onMenuClose();
};
const gotoTop = () => {
    body.scrollIntoView();
};