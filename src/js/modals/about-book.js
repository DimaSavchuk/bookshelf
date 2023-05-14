// import { makeMarkupBook } from '../partials/bestsellers';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { booksRequest } from '../requests/apiRequests';

import Notiflix from 'notiflix';
const modal = document.querySelector('.modal');
const bestSellersGalerymodalBook = document.querySelector('.overlay');
const bestSellersGalery = document.querySelector('.bestsellers');

// export async function booksRequest(id) {
//     try {
//       const response = await apiInstance.get(`/books/${id}`);
//       console.log(response)
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

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
          markupCardBookInfo(data)
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

//    function openModal() {
//         modal.classList.remove('hidden');
//         bestSellersGalerymodalBook.classList.remove('hidden');
//     };

//  function makeBook(data) {
//     const markup =
//       `<div class="book_info_card">
//           <button class="modal-info-close" type="button" data-modal-close>
//               <svg class="close-modal-info" width="24" height="24">
//                   <use href="./images/symbol-defs.svg#close"></use>
//               </svg>
//           </button>
//           <img src="${data.book_image}" alt="${data.title}" class="book_info_img">
//           <h2 class="book_info_name">${data.list_name}</h2>
//           <p class="book_info_author">${data.author}</p>
//           <p class="book_info_description">${data.description}</p>
//           <div class="info-logo-container">
//               <a href="${data.buy_links[0].url}" class="book-store-link" target="_blank">
//                   <img src="" alt="Amazon" class="store-info-book" width="62" height="19">
//               </a>
//               <a href="${data.buy_links[1].url}" class="book-store-link" target="_blank">
//                   <img src="" alt="Apple Books" class="store-info-book" width="32" height="32">
//               </a>
//               <a href="${data.buy_links[4].url}" class="book-store-link" target="_blank">
//                   <img src="" alt="Bookshop" class="store-info-book" width="38" height="36">
//               </a>
//           </div>
//           <button class="btn-book-info ${data.buttonClass}" type="button" id="addRemoveBookButton">${data.buttonText}</button>
//           <p class="book-infoBtn-explanation ${data.classDescription}">
//           Сongratulations! You have added the book to the shopping list.
//           To delete, press the button “Remove from the shopping list”.
//           </p>
//       </div>`;
//       return markup;
//   }

//   function makeBook(data) {
//     const markup =
//       <div class="flex">
//         <button class="btn-close">⨉</button>
//         <li class="bestsellers-card-item">
//           <a href="" class="bestsellers-link project-transit" id="${data._id}">
//             <!-- box-menu -->
//             <div class="box">
//               <p class="overlay" id="${data._id}">Quick View</p>
//               <img class="gallery__image" src="${data.book_image}" id="${data._id}">
//             </div>
//             <!-- box-menu -->
//             <div class="text-box">
//               <h3 class="book-name" id="${data._id}">${data.title}</h3>
//               <p class="author" id="${data._id}">${data.author}</p>
//             </div>
//           </a>
//         </li>
//         <button class="btn">ADD TO SHOP LIST</button>
//       </div>
//     ;

//     return markup;
//   }

// =============================================

// const contentWrapper = document.querySelector('.bestsellers');

// contentWrapper.addEventListener('click', onBookInfoClick);

// async function onBookInfoClick(evt) {
//   try {
//     evt.preventDefault();
//     const cardLink = evt.target.closest('.bestsellers-link');
//     if (!cardLink) {
//       return;
//     }

//     const bookId = cardLink.dataset.id;
//     const data = await booksRequest('bookId', bookId);
// const infoMarkup = markupCardBookInfo(data, searchBook(data));

//     const actionBtn = document.querySelector('.btn-book-info');

//     actionBtn.addEventListener('click', onClickBtn);

//     function onEscButtonClick(evt) {
//       if (evt.code === 'Escape') {
//         instanceBook.close();
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// =======================================

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
                  <use href="./images/symbol-defs.svg#close"></use>
              </svg>
          </button>
          <img src="${book_image}" alt="${title}" class="book_info_img">
          <h2 class="book_info_name">${list_name}</h2>
          <p class="book_info_author">${author}</p>
          <p class="book_info_description">${description}</p>
          <div class="info-logo-container">
              <a href="${buy_links[0].url}" class="book-store-link" target="_blank">
                  <img src="" alt="Amazon" class="store-info-book" width="62" height="19">
              </a>
              <a href="${buy_links[1].url}" class="book-store-link" target="_blank">
                  <img src="" alt="Apple Books" class="store-info-book" width="32" height="32">
              </a>
              <a href="${buy_links[4].url}" class="book-store-link" target="_blank">
                  <img src="" alt="Bookshop" class="store-info-book" width="38" height="36">
              </a>
          </div>
          <button class="btn-book-info ${buttonClass}" type="button" id="addRemoveBookButton">${buttonText}</button>
          <p class="book-infoBtn-explanation ${classDescription}">
          Сongratulations! You have added the book to the shopping list. 
          To delete, press the button “Remove from the shopping list”.
          </p>
      </div>`;
}
