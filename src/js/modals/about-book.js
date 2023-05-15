import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { booksRequest } from '../requests/apiRequests';

import Notiflix from 'notiflix';
const modal = document.querySelector('.modal');
const bestSellersGalery = document.querySelector('.bestsellers');

bestSellersGalery.addEventListener('click', clickOnbook);

function clickOnbook(event) {
  event.preventDefault();
  const bookID = event.target.id;

  console.log(bookID);
  try {
    booksRequest(bookID)
      .then(data => {
        if (data.length === 0 || data === undefined) {
          Notiflix.Notify.failure(
            "Sorry, we didn't find anything according to your request."
          );
          return;
        }

        console.log(data);

        // modal.insertAdjacentHTML('beforeend', markupCardBookInfo(data));
        console.log(modal);
        const instanceBook = basicLightbox.create(
          markupCardBookInfo(data),
          {
            className: 'custom-lightbox modal',
          }
          //         `
          //   <h1>Not closable</h1>
          //   <p>It's not possible to close this lightbox with a click.</p>
          // `
        );

        instanceBook.show(() => {
          markupCardBookInfo(data);
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

function markupCardBookInfo(data, flag) {
  const classDescription = flag ? '' : 'visually-hidden';
  const buttonText = flag
    ? 'REMOVE FROM SHOPPING LIST'
    : 'ADD TO SHOPPING LIST';
  const buttonClass = flag ? 'book_removefrom_list' : 'book_addto_list';
  const { book_image, list_name, author, description, title, buy_links } = data;
  return `<div class="book_info_card">
          <button class="modal-info-close" type="button" data-modal-close>
              <svg class="close-modal-info" width="24" height="24">
                  <use href="/src/images/x-close.svg"></use>
              </svg>
          </button>
          <div class=".modal-book-card-wrapper">
          <div class=".modal-book-picture-wrapper">
          <img src="${book_image}" alt="${title}" class="book_info_img">
          </div>
          <h2 class="book_info_name">${list_name}</h2>
          <p class="book_info_author">${author}</p>
          <p class="book_info_description">${description} N/A</p>
          <ul class="info-logo-container">
            <li>
              <a href="${buy_links[0].url}" class="book-store-link first" target="_blank">
          
              </a>
            </li>
            <li>
              <a href="${buy_links[1].url}" class="book-store-link second" target="_blank">
                  
              </a>
            </li>
            <li>
              <a href="${buy_links[4].url}" class="book-store-link thirt" target="_blank">
                  
              </a>
            </li>
          </ul>
          </div>
          <button class="btn-book-info ${buttonClass}" type="button" id="addRemoveBookButton">${buttonText}</button>
          <p class="book-infoBtn-explanation is-hidden ${classDescription}">
          Сongratulations! You have added the book to the shopping list. 
          To delete, press the button “Remove from the shopping list”.
          </p>
      </div>`;
}
