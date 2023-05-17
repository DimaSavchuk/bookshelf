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
  checkAuth: document.querySelector('.user-wrap'),
};

export const STORAGE_KEY = 'shoppingbookId';
let shoppingList = getShoppingListFromLocalStorage();
let currentBook;

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
  refs.modalActionBtnEl.removeEventListener('click', addItemToShoppingList);
  refs.modalActionBtnEl.removeEventListener(
    'click',
    removeItemFromShoppingList
  );
}

if (refs && refs.bestsellersSectionEl) {
  refs.bestsellersSectionEl.addEventListener('click', clickOnBook);
}

function clickOnBook(event) {
  event.preventDefault();
  const bookID = event.target.id;
  if (!bookID) {
    return;
  }
  booksRequest(bookID).then(data => {
    if (data) {
      openAboutBookModal();
      renderModalCard(data);
      // console.log(refs.checkAuth);
      if (refs.checkAuth.classList.contains('authorized')) {
        currentBook = data;
        refs.modalActionBtnEl.setAttribute('id', bookID);

        let bookInShoppingList = shoppingList.find(x => x._id === bookID);
        if (bookInShoppingList) {
          setButtonToRemove();
        } else {
          setButtonToAdd();
        }
      } else {
        refs.modalActionBtnEl.style.display = 'none';
        Notiflix.Notify.info('Please register or login to your account');
      }
    } else {
      Notiflix.Notify.failure('Failed Loading Book');
    }
  });
}

function setButtonToAdd() {
  refs.modalActionBtnEl.removeEventListener(
    'click',
    removeItemFromShoppingList
  );
  refs.modalActionBtnEl.textContent = 'ADD TO SHOPPING LIST';
  refs.congratulationsTextEl.textContent = '';
  refs.modalActionBtnEl.addEventListener('click', addItemToShoppingList);
}

function setButtonToRemove() {
  refs.modalActionBtnEl.removeEventListener('click', addItemToShoppingList);
  refs.modalActionBtnEl.textContent = 'REMOVE FROM SHOPPING LIST';
  refs.congratulationsTextEl.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  refs.modalActionBtnEl.addEventListener('click', removeItemFromShoppingList);
}

function addItemToShoppingList(event) {
  shoppingList.push(currentBook);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
  Notiflix.Notify.success('You have added a book to your shopping list!');
  setButtonToRemove();
}

function removeItemFromShoppingList(event) {
  const bookId = event.srcElement.id;
  shoppingList = shoppingList.filter(book => book._id !== bookId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
  Notiflix.Notify.failure('You have removed a book from your shopping list!');
  setButtonToAdd();
}

function openAboutBookModal() {
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
    <img src="${bookImg}" alt="${title}" class="modal-book-img" />`;
  const modalDescriptionMarkup = `
    <div class="modal-about-book-info">
      <h3 class="modal-book-title">${title}</h3>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-description">${description}</p>
    </div>`;
  refs.aboutBookModalImgEl.innerHTML = modalImgMarkup;
  refs.aboutBookModalDescriptionEl.innerHTML = modalDescriptionMarkup;

  refs.aboutBookModalLinkEl[0].setAttribute('href', buyLinks[0].url);
  refs.aboutBookModalLinkEl[1].setAttribute('href', buyLinks[1].url);
  refs.aboutBookModalLinkEl[2].setAttribute('href', buyLinks[4].url);
}
