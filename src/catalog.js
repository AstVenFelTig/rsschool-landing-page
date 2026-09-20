import "./style/main.scss";
import "inter-ui/inter.css";
import thems from "./js/thems-catalog.js";
import imgHeaderLogo from "./assets/logo.png";
import cards from "./js/cards.js";
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = imgHeaderLogo;
thems();
cards();
