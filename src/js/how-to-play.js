export let swiper;

export function initSwiper() {
  if (window.innerWidth < 1200 && !swiper) {
    swiper = new Swiper('.how-to-play-swiper', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.how-to-play-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1200 && swiper) {
    swiper.destroy();
    swiper = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);
