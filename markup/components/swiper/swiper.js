/* eslint-disable no-lonely-if */

import Swiper from 'swiper';

document.addEventListener(`DOMContentLoaded`, () => {
  const breakpoint = window.matchMedia(`only screen and (max-width: 767px)`);

  let slider = null;

  const enableSlider = () => {
    slider = new Swiper(`.swiper-container`, {
      loop: true,
      speed: 500,
      spaceBetween: 50,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: `.swiper-pagination`,
        type: `bullets`,
        clickable: true
      }
    });
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      enableSlider();
    } else {
      if (slider) {
        slider.destroy();
      }
    }
  };

  breakpointChecker();
  breakpoint.addListener(breakpointChecker);
});
