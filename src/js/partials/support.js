import { supportList } from '../services/support-list';

const gallery = document.querySelector('.support-wrapper');
const galleryBtn = document.querySelector('.support-btn');
const arrow = document.querySelector('.support-btn-icon');

let position = 0;
let step = null;

gallery.insertAdjacentHTML('beforeend', markupList(supportList));

galleryBtn.addEventListener('click', scrollGallery);

function scrollGallery() {
  const galleryItems = document.querySelectorAll('.support-item');
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) {
    step = 6;
  } else {
    step = 4;
  }

  position += step;

  if (galleryItems.length - position < step) {
    arrow.style.transform = 'rotate(180deg)';
  }

  if (position >= galleryItems.length) {
    arrow.style.transform = 'rotate(0deg)';
    position = 0;
  }

  gallery.style.transform = `translateY(-${position * 11.2}%)`; // прокрутка
}

function markupList(arr) {
  return arr
    .map(
      ({ title, url, img }, idx) =>
        `<div class="support-item">
            <p class="support-number">${(idx + 1).toString().padStart(2, 0)}</p>
            <a class="support-link" href="${url}">
              <img src="${img}" alt="${title}" />
            </a>
        </div>`
    )
    .join('');
}
