// Mobile Menu
const open = document.getElementById('menu__button')
const nav = document.getElementById('mobile__nav')
const close = document.getElementById('close__button')
const links = document.querySelectorAll('.mobile__link')
// Open and close menu
open.addEventListener('click', toggleMobileMenu)
close.addEventListener('click', toggleMobileMenu)
links.forEach((link) => link.addEventListener('click', toggleMobileMenu))
function toggleMobileMenu() {
  nav.classList.toggle('hidden')
}

// Resume
const resumeBtn = document.getElementById('resumeBtn')
const resumeMobile = document.getElementById('resumeMobile')

// Add Events
resumeBtn.addEventListener('click', downloadResume)
resumeMobile.addEventListener('click', downloadResume)

function downloadResume(event) {
  event.preventDefault()
  let link = document.createElement('a')
  link.href = '../public/resume.pdf'
  link.download = 'asx-resume.pdf'
  link.click()
}

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
})

sr.reveal('.home__content', { delay: 600, origin: 'left' })
sr.reveal('.home__img', { delay: 600, origin: 'bottom' })
sr.reveal('.skills__title', { delay: 700 })
sr.reveal('.skills__icons', { origin: 'bottom', interval: 400, delay: 700 })
sr.reveal('.projects__title')
sr.reveal('.project__content', { origin: 'left' })
sr.reveal('.project__img', { origin: 'right' })
