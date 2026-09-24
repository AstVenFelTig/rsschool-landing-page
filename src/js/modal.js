import { products } from "../products.js";

export default function modal() {
  const wrapper = document.querySelector(".wrapper");
  const body = document.querySelector(".body");
  const modal = document.querySelector(".modal");
  const catalogCoffee = document.querySelector(".catalog__coffee");
  const catalogTea = document.querySelector(".catalog__tea");
  const catalogDessert = document.querySelector(".catalog__dessert");
  const modalTitle = document.querySelector(".modal__title");
  const modalText = document.querySelector(".modal__text");
  const modalImg = document.querySelector(".modal__box-img");
  const modalBtn = document.querySelector(".modal__btn");
  const modalPrice = document.querySelector(".modal__price");
  const modalAdditivesProduct = document.querySelectorAll(
    ".modal__additives-product",
  );
  const modalSizeNum = document.querySelectorAll(".modal__size-num");
  let counterOpen = 0;

  body.addEventListener("click", (e) => {
    const parentBody = e.target.closest(".modal");
    if (body.className.includes("body-active") && !parentBody) {
      counterOpen += 1; //костылище - игнорируем первое открытие
    }
    if (!parentBody && counterOpen > 1) {
      removeBlockContainer();
    }
  });

  catalogCoffee.addEventListener("click", (e) => {
    addBlockContainer();
    const parent = e.target.closest(".catalog__card-box-coffee");
    getDataCard(parent);
    changeAdditives(
      ["Sugar", "Cinnamon", "Syrup"],
      ["200 ml", "300 ml", "400 ml"],
    );
  });
  catalogTea.addEventListener("click", (e) => {
    addBlockContainer();
    const parent = e.target.closest(".catalog__card-box-tea");
    getDataCard(parent);
    changeAdditives(
      ["Sugar", "Lemon", "Syrup"],
      ["200 ml", "300 ml", "400 ml"],
    );
  });

  catalogDessert.addEventListener("click", (e) => {
    addBlockContainer();
    const parent = e.target.closest(".catalog__card-box-dessert");
    getDataCard(parent);
    changeAdditives(["Berries", "Nuts", "Jam"], ["50 g", "100 g", "200g"]);
  });

  const changeAdditives = (arrProduct, arrNum) => {
    modalAdditivesProduct.forEach((elem, index) => {
      elem.textContent = arrProduct[index];
    });
    modalSizeNum.forEach((elem, index) => {
      elem.textContent = arrNum[index];
    });
  };

  modalBtn.addEventListener("click", () => {
    removeBlockContainer();
  });

  const getDataCard = (parent) => {
    const imgIndex = parent.children[0].src.split("menu");
    const pathImg = `url(/menu${imgIndex[1]})`;
    modalImg.style.backgroundImage = pathImg;

    modalTitle.textContent = parent.children[1].textContent;
    modalText.textContent = parent.children[2].textContent;

    products.forEach((elem) => {
      if (elem.name === parent.children[1].textContent) {
        modalPrice.textContent = elem.price;
      }
    });
  };

  const addBlockContainer = () => {
    wrapper.classList.add("wrapper-active");
    body.classList.add("body-active");
    modal.classList.add("modal-active");
  };

  const removeBlockContainer = () => {
    wrapper.classList.remove("wrapper-active");
    body.classList.remove("body-active");
    modal.classList.remove("modal-active");
    counterOpen = 0;
  };
}
