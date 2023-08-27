const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-header")
const btnClose = document.querySelector(".modal__btn-close");
btnOpen.addEventListener('click', () => {
    modal.classList.add('show')
})
btnClose.addEventListener('click', () => {
    modal.classList.remove('show')
})