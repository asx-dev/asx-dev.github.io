// Mobile Menu
const open = document.getElementById('menu__button')
const nav = document.getElementById('mobile__nav')
const close = document.getElementById('close__button')
// Open and close menu
open.addEventListener('click', toggleMobileMenu)
close.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
  nav.classList.toggle('hidden')
}
