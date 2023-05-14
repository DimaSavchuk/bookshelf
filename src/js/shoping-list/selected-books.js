import axios from 'axios';
 //import { save, load } from './localStorageService.js';

const API_URL = 'https://books-backend.p.goit.global/books/top-books';
const SHOPPING_LIST_LOCAL_STORAGE_KEY = 'ShoppingList';
let booksFromLocalStorage;

const refs = {
    sellectedBooksList: document.querySelector('.sellected-books-list'),
    noBooksSection: document.querySelector('.books-not-available'),
};

document.addEventListener("DOMContentLoaded", () => {
    // Only for test
    InitializeShoppingListTest();

    InitializeShoppingList();
  });

  function InitializeShoppingList()
  {
    booksFromLocalStorage = load(SHOPPING_LIST_LOCAL_STORAGE_KEY);

    if(booksFromLocalStorage && booksFromLocalStorage.length > 0){
        renderBooks(booksFromLocalStorage);
        hideEmptyMessage();
    }
  }

  function hideEmptyMessage(){
    refs.noBooksSection.style.display = 'none';
  }

  function showEmptyMessage(){
    refs.noBooksSection.style.display = 'block';
  }

  function renderBooks(books) {
    let markupBooks = books.map(
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
        </li>`
    })
    .join('');
   refs.sellectedBooksList.insertAdjacentHTML('beforeend', markupBooks);
   bindDeleteButtonsEvents();
  }

  function bindDeleteButtonsEvents(){
    let deleteButtonRefs = document.querySelectorAll('.delete-book-button');
    deleteButtonRefs.forEach(book => book.addEventListener('click', deleteBook));
  }

  function deleteBook(e){
    const bookId = e.srcElement.id;
    deleteBookFromLocalStorage(bookId);
    deleteBookFromList(bookId);

    if(!booksFromLocalStorage || booksFromLocalStorage.length < 1) {
        showEmptyMessage();
    }
  }

  function deleteBookFromLocalStorage(bookId){
    booksFromLocalStorage = booksFromLocalStorage.filter(book => book._id !== bookId);
    save(SHOPPING_LIST_LOCAL_STORAGE_KEY, booksFromLocalStorage);
  }

  function deleteBookFromList(bookId){
    const bookElement = document.getElementById(bookId.toString());
    bookElement.style.display = 'none';
  }

  // Only for test
async function InitializeShoppingListTest() {
    
      try {
        let mappedBookList;
        const response = await axios.get(`${API_URL}`);
        if(response && response.data)
        {
            let bookslist = response.data[0].books;
            mappedBookList = bookslist.map(({
                _id,
                title,
                author,
                book_image,
                description,
                list_name,
                buy_links,
            }) =>  ({ _id, title, author, book_image, description, list_name, buy_links }));
        }
        console.log(mappedBookList);

        if(mappedBookList && mappedBookList.length > 0) {
            save(SHOPPING_LIST_LOCAL_STORAGE_KEY, mappedBookList);
        }

        return response.data;
      } catch (error) {
         console.error(error.toJSON());
      }
    }

//LocalStorageService
const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
// --------------------------

//  let text = 'это вопрос религии, или объективные причины есть? =) Для некого универсального плагина,...';
 
// let sliced = text.slice(0, 15);
// if (sliced.length < text.length) {
// sliced += '...';
// }
// console.log(sliced);




