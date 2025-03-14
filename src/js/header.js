document.addEventListener('DOMContentLoaded', event => {
  const links = document.querySelectorAll('.header-nav-link');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
  // mobile menu
  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('header-nav-link')) {
      links.forEach(link => link.classList.remove('active'));
    }
  });

  const burgerMenu = document.querySelector('.mobile-menu-open-btn');
  const mobileMenu = document.querySelector('.mobile-menu-wraper');
  const closeMenuBtn = document.querySelector('.mobile-menu-wraper-btn-close');

  // Open mobile menu
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  // Close mobile menu
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  //  // Close mobile menu Esc
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      mobileMenu.classList.remove('is-open');
    }
  });

  // Closing the mobile menu when clicking on the menu item
  const menuItems = document.querySelectorAll('.mobile-menu-item');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  });
});
// header fixed
document.querySelectorAll('.header-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth',
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll(
    '.header-nav-link, .mobile-menu-item'
  );

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = document.querySelector('.header').offsetHeight; // headers hight
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });

        // close menu on click
        const mobileMenu = document.querySelector('.mobile-menu-wraper');
        if (mobileMenu && mobileMenu.classList.contains('is-open')) {
          mobileMenu.classList.remove('is-open');
        }
      }
    });
  });
});
