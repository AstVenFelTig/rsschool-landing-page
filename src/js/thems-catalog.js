import imgHeaderLogo from "../assets/logo.png";
import imgLogoDark from "../assets/svg/logoDark.svg";
import coffeCup from "../assets/svg/coffee-cup.svg";
import coffeDark from "../assets/svg/coffeeDark.svg";

export default function thems() {
  const DarkThem = { DarkThem: "Off" };
  const headerThems = document.querySelector(".header__thems");
  const moon = document.querySelector(".header__moon");
  const container = document.querySelectorAll(".container");
  const headerNav = document.querySelector(".header__list");
  const headerLogo = document.querySelector(".header__logo");
  const headerSun = document.querySelector(".header__sun");
  const headerSpanMenu = document.querySelector(".header__span-menu");
  const headerCup = document.querySelector(".header__cup");
  const headerLink = document.querySelectorAll(".header__link");

  const darkOnShow = () => {
    moon.classList.toggle("header__thems-active");
    headerNav.classList.toggle("header__list-dark");
    headerSun.classList.toggle("header__sun-dark");
    headerSpanMenu.classList.toggle("header__span-menu-dark");

    container.forEach((elem) => {
      elem.classList.toggle("containner-dark");
    });

    headerLink.forEach((elem) => {
      elem.classList.toggle("header__link-Dark");
    });

    moon.className.includes("active")
      ? (headerLogo.src = imgLogoDark)
      : (headerLogo.src = imgHeaderLogo);

    moon.className.includes("active")
      ? (headerCup.src = coffeDark)
      : (headerCup.src = coffeCup);
  };

  if (localStorage.getItem("user") !== null) {
    const value = JSON.parse(localStorage.getItem("user"));
    if (value.DarkThem === "On") {
      darkOnShow();
    }
  }

  headerThems.addEventListener("click", () => {
    darkOnShow();
    if (moon.className.includes("active")) {
      DarkThem.DarkThem = "On";
      localStorage.setItem("user", JSON.stringify({ DarkThem: "On" }));
    } else {
      DarkThem.DarkThem = "Off";
      localStorage.setItem("user", JSON.stringify({ DarkThem: "Off" }));
    }
  });
}
