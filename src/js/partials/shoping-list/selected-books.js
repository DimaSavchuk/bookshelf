import axios from 'axios';
//import { save, load } from './localStorageService.js';
import { STORAGE_KEY } from '../../modals/about-book';

// const API_URL = 'https://books-backend.p.goit.global/books/top-books';
// const SHOPPING_LIST_LOCAL_STORAGE_KEY = 'ShoppingList';
let booksFromLocalStorage;

const refs = {
  sellectedBooksList: document.querySelector('.sellected-books-list'),
  noBooksSection: document.querySelector('.books-not-available'),
};

document.addEventListener('DOMContentLoaded', () => {
  // Only for test
  // InitializeShoppingListTest();

  InitializeShoppingList();
});

function InitializeShoppingList() {
  booksFromLocalStorage = load(STORAGE_KEY);

  if (booksFromLocalStorage && booksFromLocalStorage.length > 0) {
    renderBooks(booksFromLocalStorage);
    hideEmptyMessage();
    setPagination();
  } else {
    paginationContainer.style.display = 'none';
  }
}

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
            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
            <div class="book-styles">
            <h3 class="book-author">${author}</h3>
            <div class="trading-platforms-list list">
            <a href=""></a>
            <a href="${amazonLink}" class="amazon"></a>
            <a href="${appleLink}" class="apple"></a>
            <a href="${bookshopLink}" class="shop"></a>
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

  if (!booksFromLocalStorage || booksFromLocalStorage.length < 1) {
    showEmptyMessage();
    paginationContainer.style.display = 'none';
  } else {
    clearPage();
    renderBooks();
    setPagination(currentPage);
  }
}

function deleteBookFromLocalStorage(bookId) {
  booksFromLocalStorage = booksFromLocalStorage.filter(
    book => book._id !== bookId
  );
  save(SHOPPING_LIST_LOCAL_STORAGE_KEY, booksFromLocalStorage);
}

function deleteBookFromList(bookId) {
  const bookElement = document.getElementById(bookId.toString());
  bookElement.remove();
}

function clearPage() {
  refs.sellectedBooksList.innerHTML = '';
  paginationNumbers.innerHTML = '';
}

// Only for test
// async function InitializeShoppingListTest() {
//   try {
//     let mappedBookList;
//     const response = await axios.get(`${API_URL}`);
//     if (response && response.data) {
//       let bookslist = response.data[0].books;
//       bookslist = bookslist.concat(response.data[1].books);
//       bookslist = bookslist.concat(response.data[2].books);

//       mappedBookList = bookslist.map(
//         ({
//           _id,
//           title,
//           author,
//           book_image,
//           description,
//           list_name,
//           buy_links,
//         }) => ({
//           _id,
//           title,
//           author,
//           book_image,
//           description,
//           list_name,
//           buy_links,
//         })
//       );
//     }
//     if (mappedBookList && mappedBookList.length > 0) {
//       save(SHOPPING_LIST_LOCAL_STORAGE_KEY, mappedBookList);
//     }

//     return response.data;
//   } catch (error) {
//     console.error(error.toJSON());
//   }
// }

//LocalStorageService
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
// --------------------------

//    Pagination
const paginationNumbers = document.getElementById('pagination-numbers');
const paginatedList = document.getElementById('paginated-list');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const paginationContainer = document.getElementById('pagination-container');
let listItems;
const paginationLimit = window.screen.width >= 768 ? 3 : 4;
let pageCount;
let currentPage;

function setPagination(page) {
  listItems = paginatedList.querySelectorAll('li');
  pageCount = Math.ceil(listItems.length / paginationLimit);

  if (pageCount < 2) {
    paginationContainer.style.display = 'none';
    return;
  }

  if (page > pageCount) {
    page = pageCount;
  }

  getPaginationNumbers();
  setCurrentPage(page);
  setNextAndPreviousButtons();

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);
  paginationNumbers.appendChild(pageNumber);
};

const setCurrentPage = pageNum => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.style.display = 'none';
    if (index >= prevRange && index < currRange) {
      item.style.display = 'flex';
    }
  });
};

function setNextAndPreviousButtons() {
  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
}

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
};

const disableButton = button => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};

const enableButton = button => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};
