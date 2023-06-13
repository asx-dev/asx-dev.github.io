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

// Scroll Reveal Animation
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
})

sr.reveal('.home__content', { delay: 600, origin: 'bottom' })
sr.reveal('.home__img', { delay: 600, origin: 'top' })
sr.reveal('.skills__icons', { origin: 'top', interval: 300 })
sr.reveal('.project__content', { origin: 'left' })
sr.reveal('.project__img', { origin: 'right' })
