import imgHeaderLogo from "../assets/logo.png";
import imgLogoDark from "../assets/svg/logoDark.svg";
import coffeCup from "../assets/svg/coffee-cup.svg";
import coffeDark from "../assets/svg/coffeeDark.svg";

export default function thems() {
  const headerThems = document.querySelector(".header__thems");
  const moon = document.querySelector(".header__moon");
  const container = document.querySelectorAll(".container");
  const headerNav = document.querySelector(".header__list");
  const headerLogo = document.querySelector(".header__logo");
  const headerSun = document.querySelector(".header__sun");
  const headerSpanMenu = document.querySelector(".header__span-menu");
  const headerCup = document.querySelector(".header__cup");
  const headerLink = document.querySelectorAll(".header__link");
  const heroLink = document.querySelector(".hero__link");
  const sliderTitle = document.querySelector(".slider__title");
  const sliderTrack = document.querySelector(".slider__track");
  const sliderArrows = document.querySelector(".slider__arrows");
  const sliderArrowLeft = document.querySelector(".slider__arrow-left");
  const sliderArrowRight = document.querySelector(".slider__arrow-right");
  const sliderPagination = document.querySelectorAll(".slider__pagination");
  const aboutText = document.querySelector(".about__text");
  const downloadTitle = document.querySelector(".download__title");
  const downloadText = document.querySelector(".download__text");
  const downloadColRight = document.querySelector(".download__col-right");
  const downloadSpan = document.querySelectorAll(".download__span");
  const downloadIcon = document.querySelectorAll(".download__icon");
  const footerBox = document.querySelector(".footer__box");

  if (!headerThems) return;

  headerThems.addEventListener("click", () => {
    moon.classList.toggle("header__thems-active");
    headerNav.classList.toggle("header__list-dark");
    headerSun.classList.toggle("header__sun-dark");
    headerSpanMenu.classList.toggle("header__span-menu-dark");
    heroLink.classList.toggle("hero__link-Dark");
    sliderTitle.classList.toggle("slider__title-dark");
    sliderTrack.classList.toggle("slider__track-dark");
    sliderArrows.classList.toggle("slider__arrows-dark");
    sliderArrowLeft.classList.toggle("slider__arrows-dark");
    sliderArrowRight.classList.toggle("slider__arrows-dark");
    aboutText.classList.toggle("about__text-dark");
    downloadTitle.classList.toggle("download__title-dark");
    downloadText.classList.toggle("download__text-dark");
    downloadColRight.classList.toggle("download__col-right-Dark");
    downloadIcon[0].classList.toggle("download__icon-dark");
    downloadIcon[1].classList.toggle("download__icon-dark");
    footerBox.classList.toggle("footer__box-dark");

    container.forEach((elem) => {
      elem.classList.toggle("containner-dark");
    });

    headerLink.forEach((elem) => {
      elem.classList.toggle("header__link-Dark");
    });

    sliderPagination.forEach((elem) => {
      elem.classList.toggle("slider__pagination-dark");
    });
    sliderPagination[0].classList.toggle("slider__pagination-dark-active");

    downloadSpan.forEach((elem) => {
      elem.classList.toggle("download__span-dark");
    });

    moon.className.includes("active")
      ? (headerLogo.src = imgLogoDark)
      : (headerLogo.src = imgHeaderLogo);

    moon.className.includes("active")
      ? (headerCup.src = coffeDark)
      : (headerCup.src = coffeCup);
  });
}
