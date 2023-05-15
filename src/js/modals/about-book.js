import { booksRequest } from '../requests/apiRequests';

const bodyEl = document.querySelector('body');
const modalAboutBook = document.querySelector('.about-book-modal');
const bestSellersGalery = document.querySelector('.bestsellers');
const modalIsOpen = document.querySelector('.backdrop');
const modalBookPictureWrapEl = document.querySelector(
  '.modal-about-book-content'
);
const modalBookInfoWrapEl = document.querySelector('.modal-about-book-info');
const modalShopLinks = document.querySelector('.modal-shop-link');
const addItemToLockal = document.querySelector('.add-to-sopping-list');
// ----------------Scroll block---------------
const bodyScroll = document.querySelector('body');
//================================================
import Notiflix from 'notiflix';
export const STORAGE_KEY = 'shoppingbookId';

let shoppingList = [];

//===============================================
bestSellersGalery.addEventListener('click', clickOnBook);

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
    addItemToLockal.addEventListener('click', onAddItemClick);

    function onAddItemClick() {
      console.log(data);
      
      //===============================================
      shoppingList.push(data);
      console.log(shoppingList);

      Notiflix.Notify.success(
        "Сongratulations! You have added the book to the shopping list. To delete, press the button Remove from the shopping list");
      
        localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
        //===============================================

    }
  });
}

function openModal() {
  modalAboutBook.classList.add('is-hidden');
  modalAboutBook.classList.remove('is-hidden');
  modalIsOpen.classList.add('is-open');
  modalIsOpen.classList.remove('is-hidden');
  bodyEl.classList.add('modal-open');
  // ----------------Scroll block---------------
  bodyScroll.classList.add('no-scroll');
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

  const modalImgMarkup = `<img src="${bookImg}" class="modal-book-img" />
<div calass="modal-about-book-info">
  <h3 class="modal-book-title">${title}</h3>
  <p class="modal-book-author">${author}</p>
  <p class="modal-book-description">${description}</p>
</div>`;

  console.log(modalImgMarkup);
  modalBookPictureWrapEl.innerHTML = modalImgMarkup;
}
