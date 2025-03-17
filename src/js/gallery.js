export let gallerySwiper;

export function initGallerySwiper() {
  const isMobile = window.innerWidth < 1200;

  if (isMobile && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-slider', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.gallery-pagination',
        clickable: true,
      },
    });
  } else if (!isMobile && gallerySwiper) {
    gallerySwiper.destroy();
    gallerySwiper = null;
  }
}

window.addEventListener('load', initGallerySwiper);
window.addEventListener('resize', initGallerySwiper);
