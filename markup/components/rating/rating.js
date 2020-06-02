document.addEventListener(`DOMContentLoaded`, () => {
  const ratingList = document.querySelector('.rating__list');

  const ratingItems = ratingList.querySelectorAll('.rating__item');

  ratingList.addEventListener('click', ({ target }) => {
    ratingItems.forEach((item) => item.classList.remove('rating__item--active'));
    target.classList.add('rating__item--active');
  });
});
