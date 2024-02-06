const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".nav-menu-mobile");
const navLinks = document.querySelectorAll(".nav-menu-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-isActive");
  mobileMenu.classList.toggle("nav-menu-mobile-active");
});
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    burger.classList.remove("burger-isActive");
    mobileMenu.classList.remove("nav-menu-mobile-active");
  });
});


