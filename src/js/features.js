export const featureItems = document.querySelectorAll('.feature-item');

export const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }, 100);
    }
  });
});

featureItems.forEach(item => {
  observer.observe(item);
});
