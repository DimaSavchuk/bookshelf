import { supportList } from '../services/support-list';

const gallery = document.querySelector('.support-wrapper');
const galleryBtn = document.querySelector('.support-btn');

let position = 0;

gallery.insertAdjacentHTML('beforeend', markupList(supportList));

galleryBtn.addEventListener('click', scrollGallery);

function scrollGallery() {
  const galleryItems = document.querySelectorAll('.support-item');
  position += 4; // сдвиг
  if (position >= galleryItems.length) {
    position = 0; // если дошли до конца, начинаем сначала
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
