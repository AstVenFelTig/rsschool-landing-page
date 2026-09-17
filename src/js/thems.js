export default function thems() {
  const headerThems = document.querySelector(".header__thems");
  if (!headerThems) return;

  headerThems.addEventListener("click", () => {
    headerThems.classList.toggle("header__thems-active");
  });
}
