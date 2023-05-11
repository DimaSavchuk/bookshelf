

// import {topBooksRequest} from '../requests/apiRequests.js';
const bestSellersGalery = document.querySelector('.bestsellers');
const bestSellerBtn = document.querySelector('.bestsellers-btn');
console.log(bestSellersGalery)
// import axios from "axios";
// const bestSellersGalery = document.querySelector('.bestsellers');
// console.log(bestSellersGalery)

// // https://books-backend.p.goit.global/books/top-books
// export async function topBooksRequest() {
//     // const BASE_URL = 'https://books-backend.p.goit.global/';
//     // const API_KEY = 'books/top-books';
//     const response = await axios.get(`https://books-backend.p.goit.global/books/top-books`);
//         return response;
//   }
export async function topBooksRequest() {

    const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);
  if (!response.ok) {
    throw new Error(
console.log('Oops, there is no country with that name'));
  }
  return await response.json();
  }

  topBooksRequest()
.then(response => {    
bestSellersGalery.insertAdjacentHTML('beforeend', createTopBookCardList(response))

}).catch(err => console.log(err));


//   {list_name, books: {book_image, book_image_width, book_image_height, title, author}}
function createTopBookCardList(array) {
    return  array.map((el) => 
    `<div class="">
         <h2 class="bestsellers-title">${el.list_name}</h2>
            <ul class="bestsellers-list">

           
            <li class="bestsellers-card-item">${el.books.data}</li>
         <button class="bestsellers-btn" type="button">See more</button>
        
        </ul>
        </div>`
    ).join('')

}
// ----------------------кожна картка окремо
function createTopBookCardItem(array) {
    const markup = array.map(({ book_image, title, author, book_image_width, book_image_height }) => {
    return       ` <li class="bestsellers-card-item">
                    <a href="">
                     <img class="gallery__image" src="${book_image}" width="${book_image_width} height ="${book_image_height}">
                      <h3 class="book-name">${title}</h3>
                      <p class="author">${author}</p>
                       </a>
             </li>`
    }).join('')
    return markup;
}
// ----------------------кожна картка окремо



// bestSellerBtn.addEventListener('click', onClick);
// function onClick(){
// console.log('1')
//     categoryBooks(bestsellersTitle)
//     .then(response => {    
  
//       bestsellersList.insertAdjacentHTML('beforeend', createTopBookCardItem(response)) 
  
//       }).catch(err => console.log(err));
// }



// -------------------------------------

// ----------------------
// Add imports above this line



// ----------------------



// ----------------------

// https://books-backend.p.goit.global/books/top-books
// export async function topBooksRequest() {
//     // const BASE_URL = 'https://books-backend.p.goit.global/';
//     // const API_KEY = 'books/top-books';
//     const response = await axios.get(`https://books-backend.p.goit.global/books/category-list`);
//         return response;
//   }

//   export async function topBooksRequest() {

//     const response = await fetch(`https://books-backend.p.goit.global/books/category-list`);
//   if (!response.ok) {
//     throw new Error(
// console.log('Oops, there is no country with that name'));
//   }
//   return await response.json();
//   }
// function createTopBookCardList(array) {
//     return  array.map((el) => 
//     `<div class="">
//     <ul>
//          <h2 class="bestsellers-title">${el.list_name}</h2>
//          <h2 class="bestsellers-title">${el.list_name}</h2>

//          <h2 class="bestsellers-title">${el}</h2>
              
//          <button class=""></button>
        
//         </ul>
//         </div>`
//     ).join('')

// }
