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
// navigation  smoth

document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.header');

  if (header) {
    const headerHeight = header.offsetHeight + 30;
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // close menu after click
          if (mobileWrapper.classList.contains('open')) {
            mobileWrapper.classList.remove('open');
          }
        }
      });
    });
  }
});
