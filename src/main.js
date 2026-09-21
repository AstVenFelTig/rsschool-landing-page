import "./style/main.scss";
import "inter-ui/inter.css";
import imgHeaderLogo from "./assets/logo.png";
import thems from "./js/thems.js";
import slider from "./js/slider.js";
import linkApp from "./js/download.js";
import link from "./js/link.js";
const headerLogo = document.querySelector(".header__logo");

headerLogo.src = imgHeaderLogo;
slider();
linkApp();
thems();
link();
