export default function slider() {
  const arrowRight = document.querySelector(".slider__arrow-right");
  const arrowLeft = document.querySelector(".slider__arrow-left");
  const pagination = document.querySelectorAll(".slider__pagination");
  if (!arrowRight || !arrowLeft || !pagination) return;
  arrowRight.addEventListener("click", () => {
    console.log("yes");
  });
  pagination[0].classList.add("slider__pagination-action");
  pagination[0].addEventListener("click", () => {});
}
