document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".modal-top-nav-list-link");
  const menuButtonOpen = document.getElementById("hamburger-menu-open");
  const menuButtonClose = document.getElementById("hamburger-menu-close");
  const navList = document.querySelector(".top-nav-list");

  const modalNav = document.getElementById("modal-nav");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      modalNav.classList.toggle("hidden");
    });
  });

  menuButtonOpen.addEventListener("click", function () {
    modalNav.classList.toggle("hidden");
  });

  menuButtonClose.addEventListener("click", function () {
    modalNav.classList.toggle("hidden");
  });
});
