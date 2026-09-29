export default function slider() {
  const arrowRight = document.querySelector(".slider__arrow-right");
  const arrowLeft = document.querySelector(".slider__arrow-left");
  const pagination = document.querySelectorAll(".slider__pagination");
  const slide = document.querySelectorAll(".slider__slide");
  let lastWidth = window.innerWidth;
  let counter = 0;
  let sizeSlide = slide[0].offsetWidth + 20; //20px gap
  let maxRight = sizeSlide * 2;
  let type = "pagination";
  pagination[0].classList.add("slider__pagination-action");

  window.addEventListener("resize", () => {
    if (window.innerWidth !== lastWidth) {
      removePaginagion();
      pagination[0].classList.add("slider__pagination-action");
      counter = 0;
      sizeSlide = slide[0].offsetWidth + 20;
      slide.forEach((elem) => {
        elem.style.right = `${counter}px`;
      });
    }
  });

  if (!arrowRight || !arrowLeft || !pagination) return;

  arrowRight.addEventListener("click", () => {
    type = "arrow";
    nextSlide(type);
    showIndexPagination();
  });

  arrowLeft.addEventListener("click", () => {
    prevSlide();
    showIndexPagination();
  });

  const removeAnimForSlide = () => {
    slide.forEach((elem) => {
      elem.classList.add("slider__slide-OfAnimation");
    });
  };

  const addAnimForSlide = () => {
    slide.forEach((elem) => {
      elem.classList.remove("slider__slide-OfAnimation");
    });
  };

  const nextSlide = (type) => {
    addAnimForSlide();
    if (type === "pagination") {
      slide.forEach((elem) => {
        elem.style.right = `${counter}px`;
      });
    } else {
      counter += sizeSlide;
      if (counter > maxRight) {
        removeAnimForSlide();
        counter = 0;
      }

      slide.forEach((elem) => {
        elem.style.right = `${counter}px`;
      });
    }
  };

  const prevSlide = () => {
    addAnimForSlide();
    counter -= sizeSlide;
    if (counter < 0) {
      removeAnimForSlide();
      counter = maxRight;
    }
    slide.forEach((elem) => {
      elem.style.right = `${counter}px`;
    });
  };

  const removePaginagion = () => {
    pagination.forEach((elem) => {
      elem.classList.remove("slider__pagination-action");
    });
  };

  const showIndexPagination = () => {
    let indexActiv = counter / sizeSlide;
    removePaginagion();
    pagination[indexActiv].classList.add("slider__pagination-action");
  };

  pagination.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      type = "pagination";
      counter = sizeSlide * index;

      removePaginagion();

      pagination[index].classList.add("slider__pagination-action");
      nextSlide(type);
    });
  });
}
