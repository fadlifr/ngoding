const hamburgerMenu = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  // event.preventDefault()
  hamburgerMenu.classList.remove('active')
  navMenu.classList.remove('active')
}))

// window.addEventListener('resize', () => {
//   if (window.innerWidth > 756) {
//     hamburgerMenu.classList.remove('active')
//     navMenu.classList.remove('active')
//   }
// })

// Navbar hidden when scroll-down, show when scroll-up
const header = document.querySelector('.header-container');
let lastScrollPosition = window.scrollY
let scrollingUp = false;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up, show the navbar
        if (!scrollingUp) {
            header.style.transform = 'translateY(0)';
            scrollingUp = true;
        }
    } else {
        // Scrolling down, hide the navbar
        header.style.transform = 'translateY(-100%)';
        scrollingUp = false;
    }

    lastScrollPosition = currentScrollPosition;
});

// to top icon
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})