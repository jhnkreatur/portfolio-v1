document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav__menu");
  const navList = document.querySelector(".nav__list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("close");
    menu.classList.toggle("show");
  });

  navList.addEventListener("click", () => {
    menu.classList.remove("show");
    hamburger.classList.remove("close");
  });
});
