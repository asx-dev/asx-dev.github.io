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

// Resume
const resumeBtn = document.getElementById('resumeBtn')
const resumeMobile = document.getElementById('resumeMobile')

// Add Events
resumeBtn.addEventListener('click', downloadResume)
resumeMobile.addEventListener('click', downloadResume)

function downloadResume() {
  let link = document.createElement('a')
  link.href = '../public/resume.pdf'
  link.download = 'asx-resume.pdf'
  link.click()
}
