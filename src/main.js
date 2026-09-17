import "./style/main.scss";
import "inter-ui/inter.css";
import imgHeaderLogo from "./assets/logo.png";
import thems from "./js/thems.js";
import slider from "./js/slider.js";

const headerLogo = document.querySelector(".header__logo");
headerLogo.src = imgHeaderLogo;
thems();
slider();
