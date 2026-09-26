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
  const modalSizeProduct = document.querySelectorAll(".modal__size-ml");
  const modalAdditivesItem = document.querySelectorAll(
    ".modal__additives-item",
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

  let priceCurrent = "";
  let nameCurrent = "";
  const indexSizeProduct = ["s", "m", "l"];
  let Sizecurrent = 0;
  let additivesCurrent = 0;

  const getDataCard = (parent) => {
    removeSizeProduct(modalAdditivesItem);
    removeSizeProduct(modalSizeProduct);

    const imgIndex = parent.children[0].src.split("menu");
    const pathImg = `url(./menu${imgIndex[1]})`;
    modalImg.style.backgroundImage = pathImg;

    modalTitle.textContent = parent.children[1].textContent;
    modalText.textContent = parent.children[2].textContent;

    nameCurrent = parent.children[1].textContent;

    products.forEach((elem) => {
      if (elem.name === parent.children[1].textContent) {
        modalPrice.textContent = elem.price;
        priceCurrent = elem.price;
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

  const showTotalPrice = () => {
    const totall = Number(priceCurrent) + Sizecurrent + additivesCurrent;
    modalPrice.textContent = totall;
  };

  modalSizeProduct.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      removeSizeProduct(modalSizeProduct);
      modalSizeProduct[index].classList.add("modal__size-ml-active");
      products.forEach((elem) => {
        if (elem.name === nameCurrent) {
          Sizecurrent = Number(Object.values(elem.sizes)[index]["add-price"]);
          showTotalPrice();
        }
      });
    });
  });

  modalAdditivesItem.forEach((elem, index) => {
    let price = 0;

    const showProduct = () => {
      products.forEach((elem) => {
        if (elem.name === nameCurrent) {
          price = Number(Object.values(elem.additives)[index]["add-price"]);
        }
      });
    };

    elem.addEventListener("click", (e) => {
      if (elem.className.includes("modal__additives-active")) {
        modalAdditivesItem[index].classList.toggle("modal__additives-active");
        showProduct();
        additivesCurrent -= price;
        showTotalPrice();
      } else {
        modalAdditivesItem[index].classList.toggle("modal__additives-active");
        showProduct();
        additivesCurrent += price;
        showTotalPrice();
      }
    });
  });

  const removeSizeProduct = (typeProdyct) => {
    typeProdyct.forEach((elem) => {
      elem.classList.remove("modal__size-ml-active");
      elem.classList.remove("modal__additives-active");
    });
  };
}
