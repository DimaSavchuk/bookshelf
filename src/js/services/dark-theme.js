const bodyEl = document.querySelector('body');

const switcherEl = document.querySelector('.js-switch-theme');

const STORAGE_KEY = 'dark-theme';

switcherEl.addEventListener('click', onClick);

onLoadDarkTheme();

// Функція для зміни теми сторінки
function onClick() {
  bodyEl.classList.toggle('dark-theme');

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
    bodyEl.classList.add('dark-theme');
    switcherEl.setAttribute('checked', true);
  }
}
