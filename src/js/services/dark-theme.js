import { category } from '../partials/categories';

category();

const refs = {
  bodyEl: document.querySelector('body'),
  headerEl: document.querySelector('.header-section'),
  headerNavLinkEl: document.querySelector('.shopping'),
  logoLightEl: document.querySelector('.light_icon'),
  logoDarkEl: document.querySelector('.dark_icon'),
  titleEl: document.querySelector('.bestsellers-title'),
  jsCategoryListEl: document.querySelector('.js-category-list'),
  footerEl: document.querySelector('.footer-js'),
  logoFooterLightEl: document.querySelector('.light_icon_footer'),
  logoFooterDarkEl: document.querySelector('.dark_icon_footer'),
  bookNameEl: document.querySelector('.bestsellers'),
  aboutTeamEL: document.querySelector('.about-team-window'),
  aboutBookModalEl: document.querySelector('.about-book-modal'),
};

const arrayEl = [
  refs.bodyEl,
  refs.headerEl,
  refs.headerNavLinkEl,
  refs.logoLightEl,
  refs.logoDarkEl,
  refs.titleEl,
  refs.jsCategoryListEl,
  refs.footerEl,
  refs.logoFooterLightEl,
  refs.logoFooterDarkEl,
  refs.bookNameEl,
  refs.aboutTeamEL,
  refs.aboutBookModalEl,
];

const switcherEl = document.querySelector('.js-switch-theme');

const STORAGE_KEY = 'dark-theme';

switcherEl.addEventListener('click', onClick);

onLoadDarkTheme();

// Функція для зміни теми сторінки
function onClick() {
  arrayEl.map(element => element.classList.toggle('dark-theme'));

  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  localStorage.setItem(STORAGE_KEY, true);
}

// Функція для відображення даних зі сховища при перезавантаженні сторінки
function onLoadDarkTheme() {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value) {
    switcherEl.setAttribute('checked', true);
    arrayEl.map(element => element.classList.add('dark-theme'));
  }
}
