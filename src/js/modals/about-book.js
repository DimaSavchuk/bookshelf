import { booksRequest } from '../requests/apiRequests';
import Notiflix from 'notiflix';

const refs = {
  bodyEl: document.querySelector('body'),
  bestsellersSectionEl: document.querySelector('.bestsellers'),
  backdropEl: document.querySelector('.backdrop'),
  aboutBookModalEl: document.querySelector('.about-book-modal'),
  aboutBookModalCloseEl: document.querySelector('.about-book-modal-close'),
  aboutBookModalImgEl: document.querySelector('.about-book-modal-img'),
  aboutBookModalDescriptionEl: document.querySelector(
    '.about-book-modal-description'
  ),
  aboutBookModalLinkEl: document.querySelectorAll('.about-book-modal-link'),
  modalActionBtnEl: document.querySelector('.add-to-sopping-list'),
  congratulationsTextEl: document.querySelector('.congratulations-text'),
};

const STORAGE_KEY = 'shoppingbookId';
let shoppingList = [];

refs.aboutBookModalCloseEl.addEventListener('click', closeModal);

function closeModal() {
  refs.aboutBookModalEl.classList.add('is-hidden');
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('no-scroll');
}

refs.bestsellersSectionEl.addEventListener('click', clickOnBook);

function clickOnBook(event) {
  event.preventDefault();
  const bookID = event.target.id;

  console.log(bookID);

  if (!bookID) {
    return;
  }

  booksRequest(bookID).then(data => {
    renderModalCard(data);
    openModal();
    refs.modalActionBtnEl.addEventListener('click', onAddItemClick);

    function onAddItemClick() {
      console.log(data);

      shoppingList.push(data);
      console.log(shoppingList);

      Notiflix.Notify.success(
        'Вітаємо! Ви додали книгу до списку покупок. Щоб видалити, натисніть кнопку "Видалити зі списку покупок".'
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
    }
  });
}

function openModal() {
  refs.aboutBookModalEl.classList.remove('is-hidden');
  refs.backdropEl.classList.remove('is-hidden');
  refs.bodyEl.classList.add('no-scroll');
}

function renderModalCard(data) {
  const {
    book_image: bookImg,
    author,
    list_name: listName,
    description,
    buy_links: buyLinks,
    title,
    _id: id,
  } = data;

  const modalImgMarkup = `
    <img src="${bookImg}" class="modal-book-img" />`;

  const modalDescriptionMarkup = `
    <div class="modal-about-book-info">
      <h3 class="modal-book-title">${title}</h3>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-description">${description}</p>
    </div>`;

  refs.aboutBookModalImgEl.innerHTML = modalImgMarkup;
  refs.aboutBookModalDescriptionEl.innerHTML = modalDescriptionMarkup;
}
