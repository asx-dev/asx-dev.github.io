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
  reset: true,
})

sr.reveal('.home__content', { delay: 600, origin: 'left' })
sr.reveal('.skills__title', { delay: 700 })
sr.reveal('.skills__icons', { origin: 'bottom', interval: 700 })
sr.reveal('.project__content', { delay: 800, origin: 'left' })
sr.reveal('.project__img', { delay: 800, origin: 'right' })
