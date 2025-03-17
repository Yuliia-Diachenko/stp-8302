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
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          let headerHeight = header.offsetHeight + 20;

          if (window.innerWidth >= 1200) {
            headerHeight += 10;
          }

          const offsetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          if (mobileWrapper.classList.contains('open')) {
            mobileWrapper.classList.remove('open');
          }
        }
      });
    });
  }
});
