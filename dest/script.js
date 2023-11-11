"use strict";
//For Phone View Menu Button
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
if (menu) {
    menu.addEventListener("click", () => {
        if (ul.style.display === "none" || ul.style.display === "" || menu.innerHTML === "⦾") {
            ul.style.display = "block";
            menu.innerHTML = "⦿";
        }
        else {
            ul.style.display = "none";
            menu.innerHTML = "⦾";
        }
    });
}
//header element become web page sticky
const header = document.querySelector('header');
const headerHeight = header.clientHeight;
document.body.style.paddingTop = headerHeight + 'px';
//bgm
const bgm = [
    ''
];
