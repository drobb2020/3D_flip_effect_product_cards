var swiper = new Swiper(".swiper-container", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
