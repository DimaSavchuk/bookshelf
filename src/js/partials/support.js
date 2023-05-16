import { supportList } from '../services/support-list';

const gallery = document.querySelector('.support-wrapper');
const galleryBtn = document.querySelector('.support-btn');
const arrow = document.querySelector('.support-btn-icon');

let position = 0;
let step = 1;
let screenSize = 0;

gallery.insertAdjacentHTML('beforeend', markupList(supportList));

galleryBtn.addEventListener('click', scrollGallery);

function scrollGallery() {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) {
    screenSize = 4;
    scrollList(screenSize);
  } else {
    screenSize = 6;
    scrollList(screenSize);
  }

  position += step;
}

function scrollList(screenSize) {
  if (position === screenSize) {
    arrow.style.transform = 'rotate(180deg)';
  }
  if (position > screenSize) {
    gallery.style.transform = `translateY(0)`;
    position = 0;
  }
  if (position < screenSize) {
    arrow.style.transform = 'rotate(0deg)';
    gallery.style.transform = `translateY(-${position * 11.2}%)`;
  }
}

function markupList(arr) {
  return arr
    .map(
      ({ title, url, img }, idx) =>
        `<div class="support-item">
            <p class="support-number">${(idx + 1).toString().padStart(2, 0)}</p>
            <a class="support-link" href="${url}" target="_blank" rel="noreferrer noopener">
              <img src="${img}" alt="${title}" />
            </a>
        </div>`
    )
    .join('');
}
