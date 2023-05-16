import { booksRequest } from './requests/apiRequests';
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

export const STORAGE_KEY = 'shoppingbookId';
let shoppingList = getShoppingListFromLocalStorage();

if (refs && refs.aboutBookModalCloseEl) {
  refs.aboutBookModalCloseEl.addEventListener('click', closeAboutBookModal);
}

function getShoppingListFromLocalStorage() {
  let shoppingListFromLocalStorage = localStorage.getItem(STORAGE_KEY);
  return shoppingListFromLocalStorage === null
    ? []
    : JSON.parse(shoppingListFromLocalStorage);
}

function closeAboutBookModal() {
  refs.aboutBookModalEl.classList.add('is-hidden');
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('no-scroll');
  refs.modalActionBtnEl.removeEventListener('click', onAddItemClick);
}

if (refs && refs.bestsellersSectionEl) {
  refs.bestsellersSectionEl.addEventListener('click', clickOnBook);
}

let onAddItemClick = null;

function clickOnBook(event) {
  event.preventDefault();
  const bookID = event.target.id;
  console.log(bookID);
  if (!bookID) {
    return;
  }
  booksRequest(bookID).then(data => {
    openAboutBookModal();
    renderModalCard(data);

    function onAddItemClick(event) {
      if (event.target.textContent === 'ADD TO SHOPPING LIST') {
        shoppingList.push(data);
        Notiflix.Notify.success(
          'Вітаємо! Ви додали книгу до списку покупок. Щоб видалити, натисніть кнопку "Видалити зі списку покупок".'
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
        refs.modalActionBtnEl.removeEventListener('click', onAddItemClick);

        event.target.textContent = 'REMOVE FROM SHOPPING LIST';
        return;
      }

      if (event.target.textContent === 'REMOVE FROM SHOPPING LIST') {
        const bookIndex = shoppingList.findIndex(item => item._id === data._id);
        if (bookIndex !== -1) {
          shoppingList.splice(bookIndex, 1);
          console.log(shoppingList);
          Notiflix.Notify.success('Книгу було видалено зі списку покупок.');
          localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
        }
        event.target.textContent = 'ADD TO SHOPPING LIST';
        refs.modalActionBtnEl.removeEventListener('click', onAddItemClick);
        return;
      }
    }

    refs.modalActionBtnEl.addEventListener('click', onAddItemClick);
  });
}

function openAboutBookModal() {
  refs.aboutBookModalEl.classList.remove('is-hidden');
  refs.backdropEl.classList.remove('is-hidden');
  refs.bodyEl.classList.add('no-scroll');
  // refs.modalActionBtnEl.textContent = 'ADD TO SHOPPING LIST';
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
