export let swiper;

export function initSwiper() {
  const isMobile = window.innerWidth < 1200;

  if (isMobile && !swiper) {
    swiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
    });
  } else if (!isMobile && swiper) {
    swiper.destroy();
    swiper = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
