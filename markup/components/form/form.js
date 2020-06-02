document.addEventListener(`DOMContentLoaded`, () => {
  const form = document.querySelector('.form');

  const select = form.querySelector('.form__inner');

  select.querySelector('.icon').setAttribute('tabindex', '-1');

  const optionsContainer = select.querySelector('.list-options');

  const options = optionsContainer.querySelectorAll('.list-options__item');

  const show = () => {
    if (!select.classList.contains('form__inner--open')) {
      select.classList.add('form__inner--open');
    }

    if (optionsContainer.classList.contains('list-options--hidden')) {
      optionsContainer.classList.remove('list-options--hidden');
    }
  };

  const hide = () => {
    if (select.classList.contains('form__inner--open')) {
      select.classList.remove('form__inner--open');
    }

    if (!optionsContainer.classList.contains('list-options--hidden')) {
      optionsContainer.classList.add('list-options--hidden');
    }
  };

  select.addEventListener('click', ({ currentTarget }) => {
    currentTarget.classList.toggle('form__inner--open');
    optionsContainer.classList.toggle('list-options--hidden');
  });

  Array.from(options).forEach((option, index, array) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();

      array.forEach((item) => {
        if (item.classList.contains('list-options__item--active')) {
          item.classList.remove('list-options__item--active');
        }
      });

      const { currentTarget } = event;

      if (index === array.indexOf(currentTarget)) {
        currentTarget.classList.add('list-options__item--active');
        select.querySelector('.form__input').value = currentTarget.textContent;
      }
    });
  });

  document.addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'Escape':
        hide();
        break;

      case 'Enter':
        show();
        break;

      default:
        break;
    }
  });

  form.addEventListener('submit', (event) => event.preventDefault());
});
