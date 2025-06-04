import "./js/services";

import "./style.css";

import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/*
let swiperInstance = null;

function initSwiper() {
  const screenWidth = window.innerWidth;
  console.log("Init swiper at", screenWidth);

  if (screenWidth < 1024 && !swiperInstance) {
    console.log("Creating swiper...");
    swiperInstance = new Swiper(".swiper-certification-init", {
      modules: [Pagination, Navigation, Scrollbar, Keyboard, Mousewheel],
      breakpoints: {
        375: { slidesPerView: 1, spaceBetween: 35 },
        834: { slidesPerView: 2, spaceBetween: 24 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      keyboard: { enabled: true },
      mousewheel: true,
    });
  } else if (screenWidth >= 1024 && swiperInstance) {
    console.log("Destroying swiper...");
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  window.addEventListener("resize", initSwiper);
});
*/
function initResponsiveSwiper(selector, breakpointsConfig) {
  return new Swiper(selector, {
    modules: [Pagination, Navigation],
    breakpoints: breakpointsConfig,
    pagination: {
      el: `${selector} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },
  });
}
initResponsiveSwiper(".swiper-one", {
  375: { slidesPerView: 1, spaceBetween: 16 },
  834: { slidesPerView: 2, spaceBetween: 24 },
  1440: { slidesPerView: 3, spaceBetween: 32 },
});

// swiper 2 — по 1, 1, 2 слайди
initResponsiveSwiper(".swiper-two", {
  375: { slidesPerView: 1, spaceBetween: 20 },
  834: { slidesPerView: 2, spaceBetween: 24 },
  1440: { slidesPerView: 3, spaceBetween: 60 },
});

// swiper 3 — по 1, 2, 4 слайди
initResponsiveSwiper(".swiper-three", {
  375: { slidesPerView: 1, spaceBetween: 16 },
  834: { slidesPerView: 4, spaceBetween: 20 },
  1440: { slidesPerView: 4, spaceBetween: 24 },
});

initResponsiveSwiper(".swiper-four", {
  375: { slidesPerView: 2, spaceBetween: 16 },
  834: { slidesPerView: 3, spaceBetween: 20 },
  1440: { slidesPerView: 7, spaceBetween: 24 },
});

initResponsiveSwiper(".swiper-five", {
  375: { slidesPerView: 1, spaceBetween: 16 },
  834: { slidesPerView: 2, spaceBetween: 20 },
  1440: { slidesPerView: 3, spaceBetween: 100 },
});
initResponsiveSwiper(".swiper-six", {
  375: { slidesPerView: 1, spaceBetween: 16 },
  834: { slidesPerView: 1, spaceBetween: 20 },
  1440: { slidesPerView: 1, spaceBetween: 24 },
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});
