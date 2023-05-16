import { topBooksRequest } from '../requests/apiRequests';
import { authCheck } from '../authorization';
import { loadTopBooksOnClick } from '../bestsellers';

window.addEventListener('DOMContentLoaded', event => {
  const layoutElement = document.querySelector('.layout');
  layoutElement.classList.add('is-loading');

  Promise.all([authCheck(), topBooksRequest(), loadTopBooksOnClick()]).then(
    () => {
      const loadingElement = document.querySelector('.js-loading');
      const layoutElement = document.querySelector('.layout');

      loadingElement.classList.add('loading-overlay-hide');
      layoutElement.classList.remove('is-loading');
    }
  );
});
