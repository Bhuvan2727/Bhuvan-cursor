document.addEventListener('DOMContentLoaded', () => {
  console.log('Black Lotus Kitchen site ready');

  // Reveal-on-scroll using Intersection Observer
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all elements if IntersectionObserver not supported
    revealEls.forEach(el => el.classList.add('is-visible'));
  }
});

