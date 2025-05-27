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
