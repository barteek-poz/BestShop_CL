const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".nav-menu-mobile");
const navLinks = document.querySelectorAll(".nav-menu-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-isActive");
  menu.classList.toggle("nav-menu");
  menu.classList.toggle("nav-menu-mobile");
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    burger.classList.remove("burger-isActive");
  });
});
