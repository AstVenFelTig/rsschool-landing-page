export default function burger() {
  const headerBurger = document.querySelector(".header__burger");
  const burgerList = document.querySelector(".header__burger-list");
  const body = document.querySelector(".body");
  const burgerLink = document.querySelectorAll(".header__burger-link");

  headerBurger.addEventListener("click", () => {
    burgerList.classList.toggle("header__burger-list-active");
    body.classList.toggle("body-active");
  });

  burgerLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (e.target.className === "header__burger-link") {
        burgerList.classList.toggle("header__burger-list-active");
        body.classList.toggle("body-active");
      }
    });
  });
}
