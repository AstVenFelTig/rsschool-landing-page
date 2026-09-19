import "./style/main.scss";
import "inter-ui/inter.css";
import thems from "./js/thems-catalog.js";
import imgHeaderLogo from "./assets/logo.png";
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = imgHeaderLogo;
thems();
