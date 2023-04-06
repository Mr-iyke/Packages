import Splide from "@splidejs/splide";

import "./style.css";

import "@splidejs/splide/css";

document.addEventListener("DOMContentLoaded", function () {
  let slide = new Splide(".splide", {
    type: "loop",
    rewind: "true",
    speed: 1000,
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    width: "100%",
    height: "100vh",
  });
  slide.mount();
});
