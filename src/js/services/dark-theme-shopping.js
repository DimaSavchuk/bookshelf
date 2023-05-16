const refs = {
  bodyShoppingEl: document.querySelector('.shopping-dark-js'),
};

// const arrayEl = [
//   refs.bodyEl,
//   refs.headerEl,
//   refs.headerNavLinkEl,
//   refs.logoLightEl,
//   refs.logoDarkEl,
//   refs.titleEl,
//   refs.jsCategoryListEl,
//   refs.footerEl,
//   refs.logoFooterLightEl,
//   refs.logoFooterDarkEl,
//   refs.bookNameEl,
//   refs.aboutTeamEL,
//   refs.aboutBookModalEl,
// ];

const switcherEl = document.querySelector('.js-switch-theme');

const STORAGE_KEY = 'dark-theme';

switcherEl.addEventListener('click', onClick);

onLoadDarkTheme();

// Функція для зміни теми сторінки
function onClick() {
  refs.bodyShoppingEl.classList.toggle('dark-theme');

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
    refs.bodyShoppingEl.classList.add('dark-theme');
  }
}
