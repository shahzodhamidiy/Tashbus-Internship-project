"use strict";

const hidden = document.querySelector(".hidden");
const hamburger = document.querySelector(".hamburger");
const hmenu = document.querySelector(".h-menu");
const bdy = document.querySelector("body");
const overFlow = document.querySelector(".overflow-hidden");
const navItems = document.querySelectorAll(".nav-link");

const remove = function () {
  hmenu.classList.toggle("hidden"), bdy.classList.toggle("overFlow");
};

hamburger.addEventListener("click", remove);

hamburger.addEventListener("click", function (e) {
  const clicked = e.target.closes(".h-menu");
  navItems.forEach((el) => console.log("wqdq"));
});
