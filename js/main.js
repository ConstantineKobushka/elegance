const navBtn = document.querySelector(".nav__btn");
const navList = document.querySelector(".nav__list");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("nav__btn-active");
  navList.classList.toggle("nav__list-active");
});
