import { save, load } from './services/localstorage-service';
import { STORAGE_KEY } from './about-book';
import PaginationService from './services/pagination-service';

let booksFromLocalStorage;
const paginationService = new PaginationService();

const refs = {
  sellectedBooksList: document.querySelector('.sellected-books-list'),
  noBooksSection: document.querySelector('.books-not-available'),
  shopPage:document.querySelector(".js-shop"),
  homePage:document.querySelector(".js-home"),
};

document.addEventListener('DOMContentLoaded', () => {
  InitializeShoppingList();
});

window.onresize = rerenderBooksOnResize;

function InitializeShoppingList() {
refs.homePage.classList.remove("current");
refs.shopPage.classList.add("current");
  booksFromLocalStorage = load(STORAGE_KEY);

  if (isBooksAvailable()) {
    renderBooks();
    hideEmptyMessage();
    paginationService.setPagination(1);
  } else {
    paginationService.hidePaginationContainer();
  }
}

const isBooksAvailable = () => {
  return booksFromLocalStorage && booksFromLocalStorage.length > 0;
};

function hideEmptyMessage() {
  refs.noBooksSection.style.display = 'none';
}

function showEmptyMessage() {
  refs.noBooksSection.style.display = 'block';
}

function renderBooks() {
  let markupBooks = booksFromLocalStorage
    .map(
      ({
        _id,
        title,
        author,
        book_image,
        description,
        list_name,
        buy_links,
      }) => {
        let amazonLink = buy_links.find(book => book.name == 'Amazon').url;
        let appleLink = buy_links.find(book => book.name == 'Apple Books').url;
        let bookshopLink = buy_links.find(book => book.name == 'Bookshop').url;
        return `<li id="${_id}" class="book-item">
            <img src="${book_image}" alt="${title}" class="book-image" />
            <div class="book-info">
            <div class="book-style">
            <h2 class="book-title">${title}</h2>
            
            <div>
            <button id="${_id}" class="delete-book-button"></button>
            </div>
            </div>
            
            <p class="book-category">${list_name}</p>
            <p class="book-description">${description}</p>
            <div class="book-styles">
            <h3 class="book-author">${author}</h3>
            <div class="trading-platforms-list list">
            <a href=""></a>
            <a href="${amazonLink}" class="amazon" target="_blank" rel="noreferrer noopener"></a>
            <a href="${appleLink}" class="apple" target="_blank" rel="noreferrer noopener"></a>
            <a href="${bookshopLink}" class="shop" target="_blank" rel="noreferrer noopener"></a>
            </div>
            </div>
            </div>
        </li>`;
      }
    )
    .join('');
  refs.sellectedBooksList.insertAdjacentHTML('beforeend', markupBooks);
  bindDeleteButtonsEvents();
}

function bindDeleteButtonsEvents() {
  let deleteButtonRefs = document.querySelectorAll('.delete-book-button');
  deleteButtonRefs.forEach(book => book.addEventListener('click', deleteBook));
}

function deleteBook(e) {
  const bookId = e.srcElement.id;
  deleteBookFromLocalStorage(bookId);
  deleteBookFromList(bookId);

  if (isBooksAvailable()) {
    rerenderBooks();
  } else {
    showEmptyMessage();
    paginationService.hidePaginationContainer();
  }
}

function rerenderBooks() {
  clearPage();
  renderBooks();
  paginationService.setPagination(paginationService.currentPage);
}

function deleteBookFromLocalStorage(bookId) {
  booksFromLocalStorage = booksFromLocalStorage.filter(
    book => book._id !== bookId
  );
  save(STORAGE_KEY, booksFromLocalStorage);
}

function deleteBookFromList(bookId) {
  const bookElement = document.getElementById(bookId.toString());
  bookElement.remove();
}

function clearPage() {
  refs.sellectedBooksList.innerHTML = '';
  paginationService.clearPaginationButtons();
}

function rerenderBooksOnResize() {
  let newPaginationLimit = window.screen.width >= 768 ? 3 : 4;

  if (
    isBooksAvailable() &&
    newPaginationLimit != paginationService.paginationLimit
  ) {
    paginationService.paginationLimit = newPaginationLimit;
    rerenderBooks();
  }
}
