const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 600,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  on: {
    slideChange: function () {
      let currentSlide = this.realIndex + 1;
      let totalSlides = this.slides.length;
      document.querySelector(".current-slide").textContent = currentSlide;
      document.querySelector(".total-slides").textContent = totalSlides;
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
