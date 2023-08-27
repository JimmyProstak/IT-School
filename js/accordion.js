const accordion = document.querySelectorAll(".accordion");
accordion.forEach((elementAccordon, index) => {
  const content = document.querySelectorAll(".accordion__content");
  const arrow = document.querySelectorAll(".accordion__arrow")
  elementAccordon.addEventListener('click', () => {
    elementAccordon.classList.toggle("open")
    content[index].classList.toggle("open")
    arrow[index].classList.toggle("open")
  })
});
