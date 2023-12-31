'use strict';

{
  const swiper = new Swiper(".swiper", {
    loop: true,
    parallax: true,
    allowTouchMove: false,
    speed: 1500,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}