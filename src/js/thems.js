export default function thems() {
  const headerThems = document.querySelector(".header__thems");
  const moon = document.querySelector(".header__moon");
  if (!headerThems) return;

  headerThems.addEventListener("click", () => {
    moon.classList.toggle("header__thems-active");
  });
}
