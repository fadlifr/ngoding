const hamburgerMenu = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', (event) => {
  event.preventDefault()
  hamburgerMenu.classList.remove('active')
  navMenu.classList.remove('active')
}))