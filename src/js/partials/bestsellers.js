// import { apiInstance } from "../services/api";
import {topBooksRequest, categoryRequest, booksRequest} from "../requests/apiRequests";

const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
// const clear = elems => [...elems.children].forEach(div => div.remove());
// const clear = elems => [...elems].forEach(li => li.remove());
// =========================== Рішення 1 - перша сторінка з 5 книжками ===========================
// export async function topBooksRequest() {

//     const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);
//   if (!response.ok) {
//     throw new Error(
//         console.log('Oops, there is no country with that name'));
//     }
//     return await response.json();
//   }
 
//   topBooksRequest()
//     .then(response => {   
//         bestSellersGalery.insertAdjacentHTML('beforeend', createTopBookCardList(response))
   
//     }).catch(err => console.log(err));


  
      
// function createTopBookCardList(arr) {
//     return arr.map(({ list_name, books }) => {
//     return `<div class="bestsellers-card">
//             <h2 class="bestsellers-title-book">${list_name}</h2>
//             <ul class="bestsellers-list">
//             ${
//                 books.map(({book_image, title, author, _id, book_image_width, book_image_height }) => {
//                 return       ` <li class="bestsellers-card-item" id="${_id}">
//                                 <a href="" class="bestsellers-link project-transit">
//                                 <!-- box-menu -->
//                                 <div class="box">
//                                     <p class = "overlay">Quick View</p>  
//                                     <img class="gallery__image" src="${book_image}" >
//                                     </div>
//                                  <!-- box-menu -->
//                                  <div class="text-box">
//                                   <h3 class="book-name">${title}</h3>
                                
//                                   <p class="author">${author}</p>
//                                   </div>
//                                    </a>
                                 
//                          </li>`
//                 }).join('')
              
//             }
//                 </ul>
//                 <button class="bestsellers-btn" id="${list_name}" type="button">See more</button>
//             </div>`      
//     }).join('');
// };

// ===========================  1 - перша сторінка з 5 книжками ===========================

      

// ===========================  2 - затримка щоб дістати кнопки ===========================

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(createBtn()), 6000)
//     });
  
//     let result = await promise; // будет ждать, пока промис не выполнится (*)
  
//     // console.log(result); // "готово!"
//   }
//   f();
// ----------------------------------------------

//   const nameCategory = [
//     "Advice How-To and Miscellaneous",
//          "Picture Books",
//          "Mass Market Monthly",
//       "Hardcover Fiction",
//        "Young Adult Paperback Monthly",
//        "Middle Grade Paperback Monthly",
//     "Business Books",
//    "Paperback Nonfiction",
//            "Combined Print and E-Book Fiction",
//        "Young Adult Hardcover",
//            "Trade Fiction Paperback",
//           "Audio Fiction",
//            "Combined Print and E-Book Nonfiction",
//          "Series Books", "Hardcover Nonfiction",
//            "Audio Nonfiction",
//         "Graphic Books and Manga",
//       "Childrens Middle Grade Hardcover"
//     ]

// ----------------------------------------------
// function createBtn () {
    
//     const divBestsellersCard = document.querySelector('.bestsellers-card');
//     const bestsellersTitleBook = document.querySelector('.bestsellers-title-book');
//     const boxes = document.querySelectorAll('.bestsellers-btn');// дастаємо кнопки
  
//     const ulList = document.querySelector('.list-bestsetters'); // дістаємо список куди додаємо інші картки

//     boxes.forEach(box => {
  
//         const boxId = box;
//         // console.log(boxId);
       
//           for(let i = 0; i < nameCategory.length; i++) {
//               if(box.id === nameCategory[i]){
             
//                     // console.log(nameCategory[i])
//                     // console.log(box.id)
//                     box.addEventListener('click', () => {

//                          const pageTitle = document.createElement('h1');
//                         divSecond.appendChild(pageTitle);
    
//                         pageTitle.textContent = `${box.id}`
//                     categoryRequest(box.id)
//                     .then(response => {   
//                         bestSellersGalery.innerHTML = '';
//                         // divSecond.insertAdjacentHTML('beforeend', createName(response))
//                         ulList.insertAdjacentHTML('beforeend', createAllCategoryList(response))
                     
                        
//                     }).catch(err => console.log(err));
//                 })
                  
//                  }
                 
//               }
           
//      });
    
//      } 
// ===========================  3 - створюємо додаткові картки ===========================


// export async function categoryRequest(category) {
//     const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${category}`);
//     const books = await response.json();
   
//     return books;
  
//   };

// import { apiInstance } from "../services/api";
// export async function categoryRequest(category) {

//     try {
//         const response = await apiInstance.get(`/books/category?category=${category}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

//   export async function categoryRequest(category) {

//     const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${category}`);
//   if (!response.ok) {
//     throw new Error(
//         console.log('Oops, there is no country with that name'));
//     }
//     return await response.json();
//   }

//   const categoryRequest = async () => {
//     const response = await fetch('https://books-backend.p.goit.global/books/category?category=Series%20Books');
//     const books = await response.json();
//     console.log(books)
//     return books;
   
  
//   };

//   categoryRequest()
//    .then(response => {   
//        bestSellersGalery.insertAdjacentHTML('beforeend', createAllCategoryList(response))
//    })


// const divSecond = document.querySelector('.bestsellers-second');



//  function createAllCategoryList(array) {
   
//     const markup = array.map(({book_image, title, author, book_image_width, book_image_height }) => {
        
//     return       ` <li class="bestsellers-card-item">
//                 <a href="" class="bestsellers-link project-transit">
//                 <!-- box-menu -->
//                 <div class="box">
//                     <p class = "overlay">Quick View</p>  
//                     <img class="gallery__image" src="${book_image}" >
//                     </div>
//                  <!-- box-menu -->
//                  <div class="text-box">
//                   <h3 class="book-name">${title}</h3>
//                   <p class="author">${author}</p>
//                   </div>
//                    </a>
//                  </li>
//                  `
//     }).join('')
//     return markup;
// }

// ===========================  3 - створюємо додаткові картки ===========================


// -----------------------------------

    
// ----------------------------------------------


// ===========================================================================

 
  
// -----------------------------------

//   const fetchUsers = async () => {
//     const response = await fetch('https://books-backend.p.goit.global/books/category-list');
//     const users = await response.json();
//     return users;
//   };

//   function findCategory (arr){
//     return arr.map(({list_name})=>{
//         return list_name;
//     })
//   }
 
// function createBtn (arr) {
//     const btn = document.querySelector('.bestsellers-btn');
//     // const btnwait = arr.map(({ list_name }) => {
//     //     const btn = document.querySelector(`${list_name}`);
//     //     console.log(btn);
//     // })
 
//     // console.log(btn);
//     btn.addEventListener('click', onClick);
//     function onClick(){
//         console.log('1');
//     }
//   }



// -----------------------------------

// export class FetchApiBooks {
//     constructor() {
//       this.baseUrl = 'https://books-backend.p.goit.global';
  
//       this.categoryList = '/books/category-list';
//       this.topBooks = '/books/top-books';
//       this.selectedCategory = '/books/category?category=';
//       this.bookInfo = '/books/';
//     }
//     fetchApi(param) {
//       return fetch(`${this.baseUrl}${param}`).then(response => response.json());
//     }
//     fetchCategoryList() {
//       return this.fetchApi(this.categoryList);
//     }
//     fetchTopBooks() {
//       return this.fetchApi(this.topBooks);
//     }
//     fetchSelectedCategory(category) {
//       return this.fetchApi(`${this.selectedCategory}${category}`);
//     }
//     fetchBookInfo(id) {
//       return this.fetchApi(`${this.bookInfo}${id}`);
//     }
//   }

// ===========================================================================

 const refs = {
    bestSellersGalery: document.querySelector('.bestsellers'),
   };


//   var debounce = require('lodash.debounce');
//   import { makeMarkupBook } from './renderMarkup';
//   import { FetchApiBooks } from './fetchApi';
//   import Notiflix from 'notiflix';
//   const fetchApiBooks = new FetchApiBooks();
  
// ===========================================================================
//   function findAndMarkCartBook(shoppingList) {
//     if (shoppingList.length === 0 || shoppingList===undefined) {
//     return
//     }
//     shoppingList.forEach(({ id }) => {
//       let findEl = document.querySelector(`._${id}`);
//       if (!findEl) {
//         return
//       }
//       findEl
//         .querySelector('.book-shoppingcart')
//         .classList.remove('is-hidden');
//     });
//   }
  // ===========================================================================
//   window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
//   refs.allCategoriesTitleEl.addEventListener('click', loadTopBooksOnClick);

//   async function loadTopBooksOnClick(event) {
//     try {
//       refs.spinnerEl.classList.remove('spinner-hidden');
//       const data = await fetchApiBooks.fetchTopBooks();
//       if (data.length === 0 || data === undefined) {
//         Notiflix.Notify.failure(
//           "Sorry, we didn't find anything according to your request."
//         );
//         return;
//       }
//       refs.spinnerEl.classList.add('spinner-hidden');
//       const markup = await makeMarkupTopBooksGallery(data);
//       const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
//       findAndMarkCartBook(shoppingList);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
  async function loadTopBooksOnClick(event) {
    try {
    //   const data = await fetchApiBooks.fetchTopBooks();
    //   const markup = await createTopBookCardList(data);
  topBooksRequest()
    .then(data => {  
        if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure(
              "Sorry, we didn't find anything according to your request."
            );
            return;
          } 
        
          refs.bestSellersGalery.insertAdjacentHTML('beforeend', createTopBookCardList(data))
       
    }).catch(err => console.log(err));

    } catch (error) {
      console.log(error.message);
    }
   
  }

  // ===========================================================================
//   refs.bestsellersSectionEl.addEventListener('click', onCattegoryButtonElClick);
    
//   async function onCattegoryButtonElClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//       return;
//     }
//   const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
//     refs.spinnerEl.classList.remove('spinner-hidden');
//     const cattegoryName = event.target.name;
//     try {
//       const data = await fetchApiBooks.fetchSelectedCategory(cattegoryName);
//       if (data.length === 0 || data === undefined) {
//         Notiflix.Notify.failure(
//           "Sorry, we didn't find anything according to your request."
//         );
//         return;
//       }
//       toUpperCaseCategoryName(cattegoryName);
//       document.querySelector('.bestsellers-title').innerHTML =
//         changeColorStyleInTitle(cattegoryName);
//       const markup= await makeMarkupCategoryShelf(data, cattegoryName);
//       const shoppingList =await JSON.parse(localStorage.getItem('shoppingList'));
//       findAndMarkCartBook(shoppingList);
      
//       refs.spinnerEl.classList.add('spinner-hidden');
//     } catch (error) {
//       console.log(error.message);
//     }
//   }


refs.bestSellersGalery.addEventListener('click', onCattegoryButtonElClick);

  async function onCattegoryButtonElClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    const cattegoryName = event.target.name;
    console.log(cattegoryName)
   
    try {
        categoryRequest(cattegoryName)
        .then(data => {  
            if (data.length === 0 || data === undefined) {
                Notiflix.Notify.failure(
                  "Sorry, we didn't find anything according to your request."
                );
                return;
              } 
             
              refs.bestSellersGalery.innerHTML = '';
            //   document.querySelector('.bestsellers-title').innerHTML =
            //   cattegoryName;

            createAllCategoryList(data, cattegoryName)
                 
        }).catch(err => console.log(err));

    } catch (error) {
      console.log(error.message);
    }

  }

    // ===========================================================================
    // function toUpperCaseCategoryName(cattegoryName) {
    //     const listEl = document.querySelector('.upper-case');
    //     if (listEl) {
    //       listEl.classList.remove('upper-case');
    //     }
    //     document
    //       .querySelector(`li[name="${cattegoryName}"]`)
    //       .classList.add('upper-case');
    //   }
      
 
    window.addEventListener('resize', hideBooks);
      function hideBooks() {
        const listCategoriesEl = Array.from(
          document.querySelectorAll('.bestsellers-list'));
        if (window.innerWidth < 768) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              if (i === 0) {
                item.children[i].hidden = false;
                continue;
              }
              item.children[i].hidden = true;
            }
          });
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1440) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              if (i <= 2) {
                item.children[i].hidden = false;
                continue;
              }
              item.children[i].hidden = true;
            }
          });
        }
        if (window.innerWidth >= 1440) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              item.children[i].hidden = false;
            }
          });
        }
      }
      // ===========================================================================
// ===========================================================================


//   async function makeMarkupTopBooksGallery(data) {
//     const markup = await data.reduce((acc, { list_name, books }) => {
//       acc += `
//           <div class="bestsellers-category-item">
//           <p class="bestsellers-category-name" name="${list_name}">${list_name}</p> 
//           <ul class="bestsellers-book-list">
//           ${makeMarkupBook(books)}
//           </ul>
//           <div class="bestsellers-button-container">
//           <button type="button" class="bestsellers-button" name="${list_name}">see more</button>
//           </div>
//           </div>`;
  
//       return acc;
//     }, `<h2 class="bestsellers-title">${changeColorStyleInTitle('Best Sellers Books')}</h2>`);
//     refs.bestsellersSectionEl.innerHTML = markup;
//     hideBooks();
//   }
// async function createTopBookCardList(data) {
//     const markup = await data.reduce((acc, { list_name, books }) => {
//     acc += `<div class="bestsellers-card">
//         <h2 class="bestsellers-title-book">${list_name}</h2>
//         <ul class="bestsellers-list">
//         ${makeMarkupBook(books)}
//             </ul>
//             <button class="bestsellers-btn" id="${list_name}" type="button">See more</button>
//         </div>`;
         
// }, 
// `<h2 class="bestsellers-title">${'Best Sellers Books'}</h2>`);
//     refs.bestSellersGalery.innerHTML = markup;

// };


function createTopBookCardList(arr) {
    return arr.map(({ list_name, books }) => {
    return `<div class="bestsellers-card">
            <h2 class="bestsellers-title-book">${list_name}</h2>
            <ul class="bestsellers-list">
            ${makeMarkupBook(books)}
                </ul>
                <button class="bestsellers-btn" name="${list_name}" type="button">See more</button>
            </div>`      
    }).join('');
};
function makeMarkupBook(books) {
    const markup = books.map(( { _id, book_image, title, author }) => {
        return ` <li class="bestsellers-card-item" id="${_id}">
        <a href="" class="bestsellers-link project-transit">  
        <!-- box-menu -->
        <div class="box">
            <p class = "overlay">Quick View</p>  
            <img class="gallery__image" src="${book_image}" >
            </div>
         <!-- box-menu -->
         <div class="text-box">
          <h3 class="book-name">${title}</h3>
          <p class="author">${author}</p>
          </div>
          </a>
         </li>`
         
}).join('');
    return markup;
}
{/* <a href="" class="bestsellers-link project-transit">  
</a> */}
  // ===========================================================================
//   function makeMarkupCategoryShelf(data, nameCategory) {
//     refs.bestsellersSectionEl.innerHTML = `<h2 class="bestsellers-title">${changeColorStyleInTitle(
//       nameCategory
//     )}</h2>
//           <div class="bestsellers-category-item" name="${nameCategory}">
//           <ul class="category-book-list">
//          ${makeMarkupBook(data)}
//           </ul>
//           </div>`;
//   }

 function createAllCategoryList(data, nameCategory) {
    refs.bestSellersGalery.innerHTML = 
    `<h2 class="bestsellers-title">${nameCategory}</h2>
                  <div class="bestsellers-category-item" name="${nameCategory}">
                  <ul class="category-book-list">
                 ${makeMarkupBook(data)}
                  </ul>
                  </div>`
}





  // ===========================================================================
//   export function makeMarkupBook(books) {
//     const markup=  books.reduce((acc, { _id, book_image, author, title}) => {
//         acc += <li class="book-item" id="${_id}">
//      <a class="bookshelf-bool-link" href="#">
//     <div class="book-img-container _${_id}">
//     <div class="book-shoppingcart is-hidden"></div>
//      <img class="book-img" loading="lazy" src="${book_image}" alt="${title}"  width="180px" height="256px"/>
//      <div class="books-overlay">
//      <p class="books-overlay-text">quick view 
//      </p>
//      </div>   
//      </div>
//      <p class="book-title">${title}</p>
//         <p class="author-name">${author}</p>
//         </a>
//         </li>
    
//         return acc
//     }, '')
//     return markup
// }
// export function makeMarkupBook(books) {
//     const markup = array.reduce((acc, { _id, book_image, title, author }) => {
//         acc +=  ` <li class="bestsellers-card-item" id="${_id}">
//         <a href="" class="bestsellers-link project-transit">
//         <!-- box-menu -->
//         <div class="box">
//             <p class = "overlay">Quick View</p>  
//             <img class="gallery__image" src="${book_image}" >
//             </div>
//          <!-- box-menu -->
//          <div class="text-box">
//           <h3 class="book-name">${title}</h3>
//           <p class="author">${author}</p>
//           </div>
//            </a>
//          </li>`
//          return acc;
// }, '')
// return markup;
// }
  // ===========================================================================
  // ===========================================================================
//   function changeColorStyleInTitle(category) {
//     const titleToArray = category.trim().split(' ');
//     const lastWord = titleToArray[titleToArray.length - 1];
//     const stringExceptLastWord = titleToArray
//       .slice(0, titleToArray.length - 1)
//       .join(' ');
//     const stringFinal =
//       stringExceptLastWord +
//       ` <span class="categories-title-last-word">${lastWord}</span>`;
//     return stringFinal;
//   }
  // ===========================================================================
//   refs.categoriesListEl.addEventListener('click', loadCategoryBooksOnClick);
//   async function loadCategoryBooksOnClick(event) {
//     if (
//       event.target.nodeName !== 'LI' ||
//       event.target.textContent.trim() === 'All categories'
//     ) {
//       return;
//     }
//     refs.spinnerEl.classList.remove('spinner-hidden');
//     const nameCategory = event.target.textContent;
//     try {
//       const data = await fetchApiBooks.fetchSelectedCategory(nameCategory);
//       if (data.length === 0 || data === undefined) {
//         Notiflix.Notify.failure(
//           "Sorry, we didn't find anything according to your request."
//         );
//         return;
//       }
//       document.querySelector('.bestsellers-title').innerHTML =
//         changeColorStyleInTitle(nameCategory);
//      makeMarkupCategoryShelf(data, nameCategory);
//       const shoppingList = await JSON.parse(localStorage.getItem('shoppingList'));
//       findAndMarkCartBook(shoppingList);
//       refs.spinnerEl.classList.add('spinner-hidden');
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
  // ================================Modal===========================================
// const btn = document.querySelector('.bestsellers-button');
// btn.addEventListener('click', onClick);
// function onClick() {
//     instance.show() 
// }
 
//   const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)
//   refs.bestSellersGalery.addEventListener('click', onBookElClick);

//   async function onBookElClick(evt) {
//     // if (event.target.nodeName !== 'LI') {
//     //   return;
//     // }
// console.log(evt.target.nodeName)


// window.addEventListener('click', onBookElClick);
// function onBookElClick() {
//   const bookId = Array.from(document.querySelectorAll('.bestsellers-card-item'));
//     if (bookId) {
//       return;
//     }
// console.log('1')

    // const bookId = event.target._id;
    // console.log(bookId)
    // try {
    //     categoryRequest(cattegoryName)
    //     .then(data => {  
    //         if (data.length === 0 || data === undefined) {
    //             Notiflix.Notify.failure(
    //               "Sorry, we didn't find anything according to your request."
    //             );
    //             return;
    //           } 
             
    //           refs.bestSellersGalery.innerHTML = '';
    //         //   document.querySelector('.bestsellers-title').innerHTML =
    //         //   cattegoryName;

    //         createAllCategoryList(data, cattegoryName)
                        
    //     }).catch(err => console.log(err));

    // } catch (error) {
    //   console.log(error.message);
    // }
//   }