// одключить слайдер из библиотеки.
// https://swiperjs.com/
// Слайдер должен автоматически воспроизводиться, один слайд проигрывается 5 секунд.

"use strict";

new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  autoplay: {
    dalay: 5000,
    disableOnInteraction: false,
  },
});