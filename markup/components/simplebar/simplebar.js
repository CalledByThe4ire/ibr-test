/* eslint-disable no-new */

import SimpleBar from 'simplebar';

document.addEventListener(`DOMContentLoaded`, () => {
  const breakpoint = window.matchMedia(`only screen and (max-width: 767px)`);

  const enableSimpleBar = () => {
    new SimpleBar(document.querySelector('.simplebar'), { autoHide: false });
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      enableSimpleBar();
    }
  };

  breakpointChecker();
  breakpoint.addListener(breakpointChecker);
});
