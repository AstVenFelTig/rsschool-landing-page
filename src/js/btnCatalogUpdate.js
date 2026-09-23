export default function btnCatalog() {
  const btnUpdate = document.querySelector(".catalog__update");
  const catalogCoffee = document.querySelector(".catalog__coffee");
  const catalogTea = document.querySelector(".catalog__tea");
  const catalogDessert = document.querySelector(".catalog__dessert");
  const catalogTabs = document.querySelectorAll(".catalog__tabs");

  btnUpdate.addEventListener("click", () => {
    catalogCoffee.classList.add("catalog__btn-active");
    btnUpdate.classList.add("catalog__update-inactive");
  });

  const showCard = (catalog) => {
    catalog.classList.add("catalog__btn-active");
    btnUpdate.classList.add("catalog__update-inactive");
  };

  catalogTabs.forEach((elem) => {
    elem.addEventListener("change", (e) => {
      switch (e.target.id) {
        case "coffee":
          btnUpdate.classList.remove("catalog__update-inactive");
          btnUpdate.addEventListener("click", () => showCard(catalogCoffee));
          break;
        case "tea":
          btnUpdate.classList.add("catalog__update-inactive");
          break;
        case "dessert":
          btnUpdate.classList.remove("catalog__update-inactive");
          btnUpdate.addEventListener("click", () => showCard(catalogDessert));
      }
      [catalogCoffee, catalogDessert].forEach((elem) => {
        elem.classList.remove("catalog__btn-active");
      });
    });
  });
}
