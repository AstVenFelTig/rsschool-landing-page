export default function burger() {
  const headerBurger = document.querySelector(".header__burger");
  const burgerList = document.querySelector(".header__burger-list");
  const body = document.querySelector(".body");
  const burgerLink = document.querySelectorAll(".header__burger-link");

  headerBurger.addEventListener("click", (e) => {
    if (
      e.target.className !== "header__span-menu" &&
      e.target.className !== "header__cup"
    ) {
      burgerList.classList.toggle("header__burger-list-active");
      body.classList.toggle("body-active");
    }
  });

  burgerLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      console.log("link");
      if (e.target.className === "header__burger-link") {
        burgerList.classList.toggle("header__burger-list-active");
        body.classList.toggle("body-active");
      }
    });
  });
}
