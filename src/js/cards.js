import { products } from "../products.js";

export default function cards() {
  const containerCoffee = document.querySelector(".catalog__coffee");
  const ccontainerTea = document.querySelector(".catalog__tea");
  const containerDessert = document.querySelector(".catalog__dessert");

  for (let index = 0; index < 8; index++) {
    containerCoffee.insertAdjacentHTML(
      "beforeend",
      '<div class="catalog__card-box-coffee"></div>',
    );
  }
  for (let index = 0; index < 4; index++) {
    ccontainerTea.insertAdjacentHTML(
      "beforeend",
      '<div class="catalog__card-box-tea"></div>',
    );
  }
  for (let index = 0; index < 8; index++) {
    containerDessert.insertAdjacentHTML(
      "beforeend",
      '<div class="catalog__card-box-dessert"></div>',
    );
  }

  const cardBoxCoffee = document.querySelectorAll(".catalog__card-box-coffee");
  cardBoxCoffee.forEach((elem, index) => {
    elem.insertAdjacentHTML(
      "beforeend",
      `<img class="catalog__card-img" src="./menu/coffee-${index + 1}.png" alt="pic coffee">`,
    );
  });
  const cardBoxTea = document.querySelectorAll(".catalog__card-box-tea");
  cardBoxTea.forEach((elem, index) => {
    elem.insertAdjacentHTML(
      "beforeend",
      `<img class="catalog__card-img" src="./menu/tea-${index + 1}.png" alt="pic tea">`,
    );
  });
  const cardBoxDessert = document.querySelectorAll(
    ".catalog__card-box-dessert",
  );
  cardBoxDessert.forEach((elem, index) => {
    elem.insertAdjacentHTML(
      "beforeend",
      `<img class="catalog__card-img" src="./menu/dessert-${index + 1}.png" alt="pic dessrt">`,
    );
  });

  products.forEach((elem, index) => {
    if (elem.category === "coffee") {
      cardBoxCoffee[index].insertAdjacentHTML(
        "beforeend",
        `<h3 class="coffee__title">${elem.name}</h3>`,
      );
      cardBoxCoffee[index].insertAdjacentHTML(
        "beforeend",
        `<p class="coffee__text">${elem.description}</p>`,
      );
      cardBoxCoffee[index].insertAdjacentHTML(
        "beforeend",
        `<span class="coffee__price">$${elem.price}</span>`,
      );
    }
  });

  const teaProducts = products.filter((elem) => elem.category === "tea");
  teaProducts.forEach((tea, index) => {
    cardBoxTea[index].insertAdjacentHTML(
      "beforeend",
      `<h3 class="tea__title">${tea.name}</h3>`,
    );
    cardBoxTea[index].insertAdjacentHTML(
      "beforeend",
      `<p class="tea__text">${tea.description}</p>`,
    );
    cardBoxTea[index].insertAdjacentHTML(
      "beforeend",
      `<span class="tea__price">$${tea.price}</span>`,
    );
  });

  const dessertProducts = products.filter(
    (elem) => elem.category === "dessert",
  );
  dessertProducts.forEach((dessert, index) => {
    cardBoxDessert[index].insertAdjacentHTML(
      "beforeend",
      `<h3 class="dessert__title">${dessert.name}</h3>`,
    );
    cardBoxDessert[index].insertAdjacentHTML(
      "beforeend",
      `<p class="dessert__text">${dessert.description}</p>`,
    );
    cardBoxDessert[index].insertAdjacentHTML(
      "beforeend",
      `<span class="dessert__price">$${dessert.price}</span>`,
    );
  });
}
