"use strict";

//мобильное меню
var navMain = document.querySelector(".nav-main");
var navToggle = document.querySelector(".nav-main__toggle");
var navLogo = document.querySelector(".nav-main__image");

navMain.classList.remove("nav-main--nojs");
navLogo.src = "img/ejpro-logo-white.svg";

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("nav-main--closed")) {
    navMain.classList.remove("nav-main--closed");
    navMain.classList.add("nav-main--opened");
    navLogo.src = "img/ejpro-logo-green.svg";
  } else {
    navMain.classList.add("nav-main--closed");
    navMain.classList.remove("nav-main--opened");
    navLogo.src = "img/ejpro-logo-white.svg";
  }
});
