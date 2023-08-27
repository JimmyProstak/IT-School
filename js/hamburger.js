const btn = document.querySelector(".hamburger-btn");
const hamburger = document.querySelector(".hamburger");
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  hamburger.classList.toggle("active");
  const btnLink = document.querySelectorAll(".hamburger__menu_link");
  btnLink.forEach((elementLink) => {
    elementLink.addEventListener("click", () => {
      hamburger.classList.remove("active");
      btn.classList.remove("active");
    });
  });
});
