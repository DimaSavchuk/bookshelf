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

export const STORAGE_KEY = 'shoppingbookId';
let shoppingList = [];

refs.aboutBookModalCloseEl.addEventListener('click', closeModal);

function closeModal() {
  refs.aboutBookModalEl.classList.add('is-hidden');
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('no-scroll');
  refs.modalActionBtnEl.removeEventListener('click', onAddItemClick);
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
    //
    console.log(refs.modalActionBtnEl);
    const checkAuth = document.querySelector('.user-wrap');
    console.log(checkAuth.classList.contains('authorized'));
    if (checkAuth.classList.contains('authorized')) {
      refs.modalActionBtnEl.addEventListener('click', onAddItemClick);
      function onAddItemClick() {
        console.log(data);

        const bookIndex = shoppingList.findIndex(book => book.id === data._id);
        if (bookIndex > -1) {
          shoppingList.splice(bookIndex, 1);
          refs.modalActionBtnEl.textContent = 'ADD TO SHOPPING LIST';
          Notiflix.Notify.success(
            'The book has been removed from the shopping list.'
          );
        } else {
          shoppingList.push(data);
          refs.modalActionBtnEl.textContent = 'REMOVE FROM SHOPPING LIST';
          Notiflix.Notify.success(
            'Congratulations! You have added the book to the shopping list. To remove, press the button "REMOVE FROM SHOPPING LIST".'
          );
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
      }
      const storedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (storedBooks && storedBooks.some(book => book.id === data._id)) {
        refs.modalActionBtnEl.textContent = 'REMOVE FROM SHOPPING LIST';
      } else {
        refs.modalActionBtnEl.textContent = 'ADD TO SHOPPING LIST';
      }
    } else {
      refs.modalActionBtnEl.style.display = 'none';
    }
    //
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
    <img src="${bookImg}" class="about-book-modal-img" />`;

  const modalDescriptionMarkup = `
    <div class="about-about-modal-book-info">
      <h3 class="about-book-modal-title">${title}</h3>
      <p class="about-book-modal-author">${author}</p>
      <p class="about-book-modal-description">${description}</p>
    </div>`;

  refs.aboutBookModalImgEl.innerHTML = modalImgMarkup;
  refs.aboutBookModalDescriptionEl.innerHTML = modalDescriptionMarkup;

  refs.aboutBookModalLinkEl[0].setAttribute('href', buyLinks[0].url);
  refs.aboutBookModalLinkEl[1].setAttribute('href', buyLinks[1].url);
  refs.aboutBookModalLinkEl[2].setAttribute('href', buyLinks[4].url);
}
