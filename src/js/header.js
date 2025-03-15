// mobile menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileWrapper = document.querySelector('.mobile-wraper');

hamburgerMenu.addEventListener('click', () => {
  mobileWrapper.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav-mobile a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileWrapper.classList.remove('open');
  });
});
