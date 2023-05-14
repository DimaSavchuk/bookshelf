import { authCheck } from '../modals/authorization';


window.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');
  const layoutElement = document.querySelector('.layout');
  layoutElement.classList.add('is-loading');

  Promise.all([authCheck()]).then(
    () => {
      const loadingElement = document.querySelector('.js-loading');
      const layoutElement = document.querySelector('.layout');

      loadingElement.classList.add('loading-overlay-hide');
      layoutElement.classList.remove('is-loading');
    }
  );
});
